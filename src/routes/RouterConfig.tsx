import { createBrowserRouter } from "react-router-dom";
import AppNav from "../components/app-nav/AppNav";
import AppLayout from "../pages/app-layout/AppLayout";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/login/Login";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import Pricing from "../pages/pricing/Pricing";
import Product from "../pages/product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "pricing",
    element: <Pricing />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "app",
    element: <AppNav />,
    children: [
      {
        index: true,
        element: <AppLayout />,
      },
    ],
  },
]);

export default router;
