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
      { path: "displayProd", element: <CartDisplay /> },
      { path: "shoppingPage", element: <ShoppingPage /> },
      {
        path: "SaleProducts",
        element: <SaleProducts />,
      },
      {
        path: "AllProducts",
        element: <AllProducts />,
      },
      {
        path: "About",
        element: <AboutSection />,
      },
    ],
  },
]);

export default router;
