//hay que instalar react router dom
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/tips",
            element: <Tips />,
          },
          {
            path: "/alerts",
            element: <Alerts />,
          },
        ],
      }
  ]);
  
  export default router;