import Homepage from "./components/pages/Homepage";
import ProductDetails from "./components/pages/ProductDetails";
import "./assets/productDetailStyles.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/product-details/:id",
      element: <ProductDetails />,
    },
  ]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
