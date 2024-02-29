import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Catalog from "./pages/catalog/catalog.jsx";
import About from "./pages/about/about.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import Cart from "./pages/cart/cart.jsx";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/catalog",
      element: <Catalog />,
    },
    {
      path:"/about",
      element: <About/>,
    },
    {
      path:"/contacts",
      element: <Contacts/>,
    },
    {
      path:"/cart",
      element: <Cart />,
    }

  ]);
  