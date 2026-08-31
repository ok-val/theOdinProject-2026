# Client-side routing

Client-side routing is the type of routing where JS handles the routes
in an application.

> Client-side routing is routing mechanism behind single-page
> applications (SPAs) which load a single HTML doc and dynamically
> update its contents via JS as the user navigates, instead of loading
> new pages from the server.

For example, when a user clicks a nav element, the URL changes and the
view of the page is modified accordingly, within the client and no page
refreshes are required.

## How it works

- **Initial load:** The browser requests a single HTML file along with
  core JS and CSS bundles
- **Client-side rendering (CSR):** JS handles routing and manipulates
  the page structure (DOM) locally in the browser.
- **Data updates:** The app fetches only raw data (as JSON via APIs)
  when users interact with the page or change views.

## Pros

As opposed to the multi-page application (MPA) where the browser would
reload every time you navigate, a SPA allows you to never leave the page
you are on.

> [!note] Accessibility caveat of no reload
>
> When a browser reloads, it notifies screen-readers of the new content
> to read, but in the case of CSR/SPA, the app would need to notify
> screen-readers of route updates manually.

## The solution: React Router

React Router is standard routing library for React applications that
handles most of these issues for you under-the-hood.
