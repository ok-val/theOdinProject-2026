# How to choose a CSS-in-JS lib or CSS module?

Source: https://css-tricks.com/a-thorough-analysis-of-css-in-js/

1. **Is the code base React-specific or framework agnostic?** There are
   libraries built specifically for React such as Styled JSX, styled-
   components, and Stitches. There are also libraries that are
   framework-agnostic such as Emotion, Treat, TypeStyle, Fela, JSS, or
   Goober.

2. **Do we need dynamic setting for styles/component co-location?** This
   is a helpful feature for maintenance and developement, allowing the
   extraction of co-located styles into a separate stylesheet when it
   feels like the visual clutter is too much.

3. **Tagged Template or Object Styles syntax?** For which CSS extraction
   would require rewriting CSS altogether for the Object Styles case.

```jsx
const heading = css`
  font-size: 2em;
  color: ${myTheme.color};
`;

const heading = css({
  fontSize: '2em',
  color: myTheme.color
});
```

4. **How would you like to apply the styles?**
   1. **Return a `<Styled />` component:** Some CSS-in-JS libraries like
      `styled-components` allow exporting an entire `<Styled />`
      component, eliminating the need for composition and mapping styles
      to components.
   2. **Use a class attribute / className prop:** The compositional
      approach associated with CSS modules.
   3. **Use the `css` prop:** A newer method by Emotion

5. **Style output optimization**
   1. **Dynamically injected styles** gets rendering faster by
      implementing FCP (First Contentful Paint) where rendering is not
      blocked by fetching a separate `.css` file from the server. This
      approach is more suited for CSR + SPA.

      However, it comes with a few drawbacks: A new runtime library is
      needed, overlapping CSS codes cannot be cached out-of-the-box.

   2. **Static CSS extraction** ships a smaller codebase with no
      additional runtime libraries, comes with caching out-of-the-box.
      This approach is suited for SSR + Static Generated Pages.

      However, this doesn't fully address the issue of render-blocking.
