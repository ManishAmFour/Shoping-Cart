import { createBrowserRouter } from "react-router-dom";
import ShoppingPage from "./components/shoppingPage";
import CartDisplay from "./components/displayProd";
import HomePage from "./components/Home";
import SaleProducts from "./components/differentLinks/SaleProducts";
import AllProducts from "./components/differentLinks/AllProducts";
import AboutSection from "./components/differentLinks/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "components/displayProd.jsx", element: <CartDisplay /> },
      { path: "components/shoppingPage.jsx", element: <ShoppingPage /> },
      {
        path: "components/differentLinks/SaleProducts",
        element: <SaleProducts />,
      },
      {
        path: "components/differentLinks/AllProducts",
        element: <AllProducts />,
      },
      {
        path: "components/differentLinks/About",
        element: <AboutSection />,
      },
    ],
  },
]);

export default router;
