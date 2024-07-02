import "./assets/index.css";
import "./assets/cart.css";
import "./assets/homepage.css";
import "./assets/style.css";
import "./assets/productDetailStyles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import CartPage from "./components/pages/CartPage";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
