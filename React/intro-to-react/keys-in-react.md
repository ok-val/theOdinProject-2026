# Keys in React

## What are keys and how does React use them?

Recall from [[what-is-react.md]] that React uses a virtual DOM under the
hood to diff updated component for efficient rendering.

> [!important] How does virtual DOM diffing work?
>
> When a re-render occurs, it recreates this virtual DOM, diffs the new
> and the previous virtual DOMs, and make updates only to the things
> that actually change.

In short, React needs to be able to tell the difference between each of
these components, as they'll each have their own props and states. And
so, **every component will be given an key privately** that helps React
identify the correct components to update every diff.

If the keys helps React update component correspondingly with new props
and states, the consistency of the keys has directly responsibility for
correct diffing.

Thus, making sure that keys are **consistent, unique, stored in data**
is 'key' to effective React handling.

## Creating keys: Consistent, Unique, Stored in data

```jsx
<Component key={keyValue} />
<div key={keyValue}></div>
```

A `Key` in JSX markup is a private prop. It is not exposed to the
function handling its creation via the `prop` param object.

### For CHANGING list

It's a good practice, when creating my own data, to assign each item
with a unique key using the function `crypto.randomUUID()`.

### For UNCHANGING list (no add/remove/sort/filter)

While it's understandable to use index as keys for listing items that
would remain unchanged throughout the application, it might still lead
to confusing bugs.

So it's good practice not to use index as key.
This is particularly because when prepending items to an existing list,
the new item at index 0 will replace the new item at index 0 because
they use the same key (identified as the corresponding object).

See this video: https://www.youtube.com/watch?v=xlPxnc5uUPQ

### ❌ Anti-pattern

**KEYS SHOULD NEVER BE GENERATED ON THE FLY.**
Such as `key={crypto.randomUUID()}` which will create a new key for
every new render.
