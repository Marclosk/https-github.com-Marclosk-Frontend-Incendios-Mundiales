import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/home/Home"
import Alerts from "../pages/alerts/Alerts"
import Tips from "../pages/tips/Tips"


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
          }
        ]
      }
  ]);
  
  export default router;