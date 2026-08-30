## Benefits of Single-Page Application

I have learned in [[nested-routes-outlets-dynamic-segments.md]] that
there are two methods for implementing SPA, each achieving a unique
experience with specific implementation:

1. Nested routes + Outlet + OutletContext
2. Dynamic segment

But I haven't quite understood the depths of SPA benefits:

1. **HTML is super cheap to load and render**

2. **Shared resources don't need to reload**: You're not fetching the
   whole page and all of its resources again. Whatever was applied
   previously persist, saving resources and rendering time.

3. **Next page only appear when ready** The persistent components are
   already loaded. All the client would be waiting is the data fetch for
   the new page to load.

And the potential downsides:

1. Server-side rendering is just simpler, no need to maintain all those
   click listeners.

2. CSR risks accessibility worries: When new data arrives, screenreaders
   might not register it if you're not using a pre-optimized framework
   or router library. Otherwise, you have to add those listeners as
   well!
