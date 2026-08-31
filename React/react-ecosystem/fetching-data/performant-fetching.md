# Performant Fetching with React

Source:

- https://blog.logrocket.com/modern-api-data-fetching-methods-react/
- https://www.developerway.com/posts/how-to-fetch-data-in-react

## Types of data fetching

In the world of "data fetching", there are generally two categories:
`initial fetch` and `on-demand fetch`.

**On-demand fetch** fetches data on or as a result of user interactions
(e.g., autocompletes, dynamic forms, search experiences).

**Initial fetch** fetches the data that appears right away as components
mount.

## What is a performant React app?

The performance of app depends on some combination of rendering metrics
such as speed, error handling, caching, which components to render
first, and a bunch of other considerations.

Those who consider this a craft would consider performance an act of
storytelling that conveys your values and principles about the
application. Is it the user experience, speed of delivery for certain
components that should be prioritized over others, or to delivery all
the wows at the exact same time at the cost of loading time?

The answer depends on your principles as a SWE.

Starting from their, you can now pick your tradeoff. Each layer of
abstraction makes something easier at the cost making other things more
difficult. Start by asking these questions:

- When is it okay to start fetching data?
- When can we do while the data fetching is in progress?
- What should we do when the fetch returns?
- What are the fetching constraints on client/server-side?

## On the technical side

A fetch could happen inside a child component or outside in the parent
component. Here's a model with built-in constraints:

- For initial fetches, fetch in the parent component (limited at 6),
  according to Chrome DevTools docs.
- For on-demand fetches, fetch in the child component.

## Implementations

One way to resolve the waterfall effect is to use a `Promise.all()`.

Here's the implementation of `Promise.all()` that delivers all
components at the same time:

```jsx
const useAllData = () => {
  const [sidebar, setSidebar] = useState();
  const [comments, setComments] = useState();
  const [issue, setIssue] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      // waiting for allthethings in parallel
      const result = (
        await Promise.all([
          fetch(sidebarUrl),
          fetch(issueUrl),
          fetch(commentsUrl)
        ])
      ).map((r) => r.json());

      // and waiting a bit more - fetch API is cumbersome
      const [sidebarResult, issueResult, commentsResult] =
        await Promise.all(result);

      // when the data is ready, save it to state
      setSidebar(sidebarResult);
      setIssue(issueResult);
      setComments(commentsResult);
    };

    dataFetch();
  }, []);

  return { sidebar, comments, issue };
};

const App = () => {
  // all the fetches were triggered in parallel
  const { sidebar, comments, issue } = useAllData();

  // show loading state while waiting for all the data
  if (!sidebar || !comments || !issue) return 'loading';

  // render the actual app here and pass data from state to children
  return (
    <>
      <Sidebar data={sidebar} />
      <Issue comments={comments} issue={issue} />
    </>
  );
};
```

Another way is to allow them to race using fetches synchronously:

```jsx
fetch('/get-sidebar')
  .then((data) => data.json())
  .then((data) => setSidebar(data));
fetch('/get-issue')
  .then((data) => data.json())
  .then((data) => setIssue(data));
fetch('/get-comments')
  .then((data) => data.json())
  .then((data) => setComments(data));
```
