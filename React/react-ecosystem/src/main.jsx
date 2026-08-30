// import './index.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import these functions from react-router package
import { createBrowserRouter, RouterProvider } from 'react-router';

// import all of your pages upfront
import App from './App.jsx';
import Profile from './profile-home.jsx';

// import components to be nested
import { Spinach, Popeye } from './nested-routes.jsx';
import DefaultProfile from './profile-default.jsx';

// Config the router to use the corresponding pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'profile',
    element: <Profile />,
    // the child paths are routed towards an Outlet object managed by the head profile component itself
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: 'spinach', element: <Spinach /> },
      { path: 'popeye', element: <Popeye /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
