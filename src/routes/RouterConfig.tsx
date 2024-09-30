import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../pages/app-layout/AppLayout";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/login/Login";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import Pricing from "../pages/pricing/Pricing";
import Product from "../pages/product/Product";
import CityList from "../components/city-list/CityList";

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
    element: <AppLayout />,
    children: [
      { index: true, element: <CityList /> },
      {
        path: "cities",
        element: <CityList />,
      },
      {
        path: "countries",
        element: <p>COUNTRIES</p>,
      },
      {
        path: "form",
        element: <p>FORM</p>,
      },
    ],
  },
]);

export default router;
