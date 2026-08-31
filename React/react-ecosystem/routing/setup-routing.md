# Setting up Routing

1. **Install the React Router package** (on the client-side)

> npm install react-router

2. Import the following functions from the React Router package to
   `main.jsx` along with all the pages upfront:

```jsx
import { createBrowserRouterm, RouterProvider } from 'react-router';
```

The RouterProvider must be created once outside of the React tree.

3. Config `createBrowserRouter()` to use the correpsonding paths:

```jsx
// createBrowserRouter takes a list of objects
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'profile',
    element: <Profile />
  }

  // iterate for each pages ...
]);
```

4. Place the router inside of the root component using React StrictMode

```jsx
createRoot(
  document.getElementById('root').render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
);
```

5. Replace all links to be routed to with the Link element

```jsx
// Instead of:
<a href={profile}>Profile</a>

// Use the link element
<Link to={profile}>Profile</Link>
```

There you have it!
