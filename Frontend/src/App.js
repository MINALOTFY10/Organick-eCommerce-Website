import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "./store/CartHttpActions";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ShopPage, { loader as productsLoader } from "./pages/Shop";
import ShopSinglePage, { loader as productDetailLoader } from "./pages/ShopSingle";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceSingle from "./pages/ServiceSingle";
import Contact from "./pages/Contact";
import { action as logoutAction } from "./pages/Logout";
import AuthenticationPage, { action as authAction } from "./pages/Authentication";
import { tokenLoader } from "./util/auth";


let isInitial = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: productsLoader,
      },
      {
        path: "Shop",
        children: [
          {
            index: true,
            element: <ShopPage />,
            loader: productsLoader,
          },
          {
            path: ":productId",
            id: "product-detail",
            loader: productDetailLoader,
            children: [
              {
                index: true,
                element: <ShopSinglePage />,
              },
            ],
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        children: [
          {
            index: true,
            element: <Service />,
          },
          {
            path: "single",
            element: <ServiceSingle />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.store);
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (email != null) {
      dispatch(fetchCartData(email));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed && email != null) {
      dispatch(sendCartData(cart, email));
    }
  }, [cart, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
