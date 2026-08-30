// import './index.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import these functions from react-router package
import { createBrowserRouter, RouterProvider } from 'react-router';

// import all of your pages upfront
import App from './App.jsx';
import Profile from './profile-home.jsx';

// import components to be nested for the nested routes
import { Spinach, Popeye } from './nested-routes.jsx';
import DefaultProfile from './profile-default.jsx';

// import error components to be included alongside home path
import ErrorPage from './notFound-error-page.jsx';

// Instead of doing all the routing here, they can be refactored
// import routes from './routes.jsx';
// const router = createBrowserRouter(routes);

// Config the router to use the corresponding pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    // Method 1: Nested routes
    path: 'profile',
    element: <Profile />,
    // the child paths are routed towards an Outlet object managed by the head profile component itself
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: 'spinach', element: <Spinach /> },
      { path: 'popeye', element: <Popeye /> }
    ]

    // // Method 2: Dynamic segment
    // path: 'profile/:name',
    // // The dynamic segment here would be called 'name'
    // // It is routed to the useParams function to be destructured
    // element: <Profile />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
