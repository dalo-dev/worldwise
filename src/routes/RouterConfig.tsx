import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import Pricingpage from "../pages/Pricingpage";
import PageNotFound from "../pages/PageNotFound";
import PageNav from "../components/PageNav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageNav />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "pricing",
        element: <Pricingpage />,
      },
    ],
  },
]);

export default router;
