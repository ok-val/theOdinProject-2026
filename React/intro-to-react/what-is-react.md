# React

React is a JS library that provides powerful primitives (built-in
functions and modules) that make building UI more convenient.

## Library vs Framework

There are commonalities of libraries and frameworks.
The common point is that they both solve common problems.

Both are simply collections of functions and modules that abstract
some features, so that you don't have to do them all by yourself again
everytime.

```js
function getWords(str) {
  return str.split(' ');
}
```

They differ in the scope of abstraction:
Source: https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

- **A library abstracts operational components for building apps:**
  It provides tools for building the app; the dev controls the structure
  and flow of the app;
- **A framework abstracts the actual architecture of apps:**
  It is in charge of flow, providing pre-made flows and structures
  for plug-and-play.

## What is being opinionated vs un-opinionated?

The subjective degree of a library or framework is opinionated accords
with degree of freedom it gives the user. If a library or framework is
more deterministic, it's considered more opinionated.

## Mini history lesson

ReactJS is in fact a front end library created by _Jordan Walke_ of FB.
Who owns and maintains it? Facebook.

It emerged out of the need for better code to manage FB ads more
effectively as these adds kept getting more features implemented in
them and became very hard to manage.

## Benefits of React

Source: https://www.geeksforgeeks.org/reactjs/what-are-the-advantages-of-react-js/

- Reusable/modular components

- **Virtual DOM: Enabled by the Reconciliation Algo**
  A concept that diffs between main DOM and a virtual DOM
  and only returns the changes. The turnout faster updates while
  reducing the number of DOM manipulations.

- Well-maintained (by FB)

- Less opinionated, meaning that it won't force any specific design
  patterns, project organizational structure, or logic

- Relatively smaller learning curve

- **SEO-friendly: Good for Search Engine Optimization**
  Includes features such as Server-Side Rendering (SSR) and Static
  Static Site Generation (SSG) that lets search engines crawl and index
  more easily.

- Cross-platform mobidle development with React Native
  Allows devs to use React to build native mobile apps for iOS and
  Android with a single codebase.

# React DevTools

React DevTools is a browser extension for Chromium browsers.
Generally, it provides the following features for React devs:

1. Verify/visualize component's props and states
2. Address performance issues / identify root causes
3. Inspecting context values
