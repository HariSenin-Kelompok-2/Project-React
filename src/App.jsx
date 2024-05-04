import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";
import './assets/index.css'
import "./assets/cart.css";
import "./assets/login.css";
import "./assets/homepage.css";
import "./assets/style.css";
import "./assets/register.css";
import "./assets/swiper.css";
import "./assets/productDetailStyles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/product/:id",
        element: <ProductDetails />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
