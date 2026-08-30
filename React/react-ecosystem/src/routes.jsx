const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    // Method 1: Static segment
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
];

export default routes;
