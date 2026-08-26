# You might not need an effect

Source: https://react.dev/learn/you-might-not-need-an-effect

> > > Effects should be treated as escape hatch from React paradigm.

- Components deal with rerendering
- Events deal with interaction
- Effects deal with synchronization.

Correspondingly:

- Transforming data for rendering? That's a component task.
- Handling user events? That's an event task.
- Syncing with external data? Now you need effects!

## Why are these use cases considered inefficient?

After the initial render, every update to the state (caused by user
events) would trigger a rerender that returns a new vDOM for diffing and
recommitting.

> After recommitting AND painting the screen, only then React will run
> the Effects. Thus, restarting the entire rerender from scratch!

Here's the exact order of exec involving Effects:

1. A state update occurs (often triggered by a user event).
2. React calls your component functions to calculate what should be on
   the screen.
3. React commits these changes to the DOM to update the screen.
4. React runs your Effects.

In first render, Effect will use a stale value to render, only running
again if it detects a dependency change.

By the time an Effect runs, the specific context of what the use did
(such as which button they clicked) is lost.

> > > Reserve Effects strictly for synchronizing with external systems
> > > ONCE THE RENDER IS COMPLETE.

## TRICK: Reset a component using a changing key

Instead of trying to reset a value of a component using Effect, I could
use the **dynamic key trick** to prompt React to render a fresh
component based some user input (using some changing value as `key`).

> This would require the resetting component to have a parent that would
> pass in a dynamic key.

```jsx
export default function ProfilePage({ userId }) {
  return <Profile userId={userId} key={userId} />;
}

function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');
  // ...
}
```

## TRICK: Adjust a state using data from previous renders

This is a cool one! Instead of using effects to trigger setting a state
to a certain value, try storing the current params to be evaluated
against new params.

> My impression: This would result in a cleaner code (without having to
> break the component up into parent-child pair just to detect some
> previous data).
>
> But the reset with key trick is also pretty cool since it doesn't
> tamper with the existing component.

So instead of:

```jsx
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  useEffect(() => {
    setSelection(null);
  }, [items]);
  // ...
}
```

In this first example, `setSelection` is run after the render, causing
another render of this component.

```jsx
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  // ...
}
```

In the second example, `setSelection` is called directly during a render
using all updated states.

## Sharing logic between event handlers

Using Effects as event handlers is risky because the internal states of
the Effect is likely stale in the first render.

Because Effects run AFTER the render/rerender is completed, use them
only for code that should run as a side effect of some components
finishing rendering.

## Chaining effects? No!

BAD! Because effects are not batched together for single render, they
actually spread and cause O(n) renders.

Compute all of the variables needed to achieve O(1) render.

## Initiating the application ('Mounting an effect')

It is commonly believed that it's okay to use an effect providing an
empty dependency array to let it run once during the initial render.

Most of the time this would be okay. But they are certain situations
where this is not okay because React UseStrict forces a remount of
components in development if the effect runs a function that was not
designed to be called twice.

The components should be designed to minimize being remounted (added
again to the render).

## Race conditions during dynamic fetching

**Always clean up after fetching**

Consider this piece:

```jsx
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 🔴 Avoid: Fetching without cleanup logic
    fetchResults(query, page).then((json) => {
      setResults(json);
    });
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
```

Every time the query change as a result of user typing live,
`fetchResults` would actually be queued multipled times in the stack for
every letter that the user types.

This creates a **race condition**: Multiple requests race against one
another and return in different order than expected.

Instead, implement a clean up function that negates the `.then()`
response that get triggered everytime a new request is made.

```jsx
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then((json) => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}
```

Here is the step-by-step breakdown of how it handles the shift from 'h'
to 'he':

1. **First Render (query = 'h'):**
   - The component renders and the Effect runs.
   - A local variable `ignore = false` is created specifically for this
     run.
   - `fetchResults('h', 1)` starts a network request.

2. **Query Changes (query = 'he'):**
   - The user types 'e', triggering a state/prop update.
   - Before running the new Effect for 'he', React executes the cleanup
     function from the previous 'h' render.
   - This cleanup function changes the ignore variable from the first
     run to true.

3. **Second Render (query = 'he'):**
   - The new Effect runs for 'he'.
   - A completely new, separate ignore = false variable is created for
     this second run.
   - `fetchResults('he', 1)` starts a second network request.

4. **Handling the Responses (The Race Condition):**
   - If the slower response for 'h' finally completes (even if it
     arrives after 'he'), its .then() callback executes.
   - However, because the cleanup function already flipped that specific
     run's ignore flag to true, the `if (!ignore)` condition fails. The
     stale data is discarded, and `setResults` is never called.
   - When the response for 'he' arrives, its local ignore flag is still
     false, so it successfully updates the state via `setResults`.
