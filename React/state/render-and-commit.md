# Render and Commit: How React rendering works?

Source: https://react.dev/learn/render-and-commit

This article contains comical illustrations that make the subject more
digestible!

Before the components are displayed on the screen, they are prerendered
by React (virtual DOM).

To simplify matters, there are three steps:

1. Trigger a render
2. Render the component
3. Commit to the (actual) DOM

## Step 1: Trigger a render

There are two things that triggers a render:

1. It's the component's initial render
2. The component's (or any one of its ancestors') states were updated

When the app starts, I need to trigger the initial render. This is done
by the `createRoot(<root>)` in `main.jsx`, then calling
`.render(<component>)`.

Once the initial component is rendered, further rendering is triggered
by updating its state with the set function that is declared as part of
the `useState()` function.

## Step 2: Render the component

After a render is triggered, React calls the component (the factory
function that returns a single parent markup).

> > > Rendering is React calling the components to go to work. < < <

On initial render, the root component is called. For subsequent renders,
the function component whose state updates is called.

The process is _recursive_: if the updated component returns some other
components, those function components will be called and their children
components will be called and so on until there is no more nested
components.

After the initial render, React now has the first snapshot. During a
rerender, React returns a new virtual DOM that capture the new states of
components, thus **returning a new snapshot**! The result of this
rerender is not yet committed to the actual DOM.

> [!note] React on pure functions
>
> React function component uses **PURE FUNCTIONS** to ensure consistency
> between diffs, otherwise confusing bugs caused by impure functions
> just defeat the purpose of diffing!

## Step 3: Commit changes to the DOM

For initial renders, React just `appendChild()` to the DOM. After
re-renders return, React:

1. Gets the new snapshot
2. Compare it to the old snapshot
3. Collect what actually changed, ignoring the unchanged
4. Commit the changed to the actual DOM

In short, **React only updates the DOM nodes if there's a difference**
**between renders**.

The browser would then receive this new DOM and 'paint' it.
