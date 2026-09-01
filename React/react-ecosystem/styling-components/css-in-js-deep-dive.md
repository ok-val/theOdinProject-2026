# CSS vs CSS-in-JS

> [!definition] CSS-in-JS is a paradigm for styling front-end projects.
> The paradigm solves styling performance issues using an external layer
> of functionality that allows writing CSS properties for components
> selectively through JS.

## The Problem: Render-blocking in traditional CSS

There's a problem when rendering with CSS.

Traditionally, the browser loads HTML first, then CSS. After loading,
the browser creates CSSOM using the provide CSS info. After CSSOM, the
browser can now provide style to the rendered HTML accordingly.

This chain of processes block CSS to block the page from render, causing
delay in every loading step.

**Remedy:** Using HTTP/2 for our app, multiple HTML, CSS, and JS files
can load in parallel, which was previously limited by HTTP/1.1.

However, performant styling is not only limited to render-blocking, but
also the issue of unused CSS classes centralized in a single master CSS
file. Unused codes aggrevate styling performance.

## Addressing render-block with CSS module with React component

Hence is the reason why we want to compartmentalize styling into
multiple CSS modules.

Because each CSS file is attached to its respective component, only
needed files are to be loaded per component rendered.

## Mini-history lesson

It started in 2015 with a JS library JSS that allows writing CSS
properties to selectors using JS syntax and loading properties
selectively.
