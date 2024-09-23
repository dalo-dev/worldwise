import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import Pricingpage from "../pages/Pricingpage";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "product",
    element: <ProductPage />,
  },
  {
    path: "pricing",
    element: <Pricingpage />,
  },
]);

export default router;
