import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http";
import Login, { action as loginAuthAction } from "./pages/Login/Login";
import Signup, { action as singupAuthAction } from "./pages/Signup/Signup";
import Products from "./pages/Products/Products";
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import { actiion as logoutAction } from "./pages/Logout";
import { checkAuthLoader, tokenLoader } from "./utils/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      id: "root",
      errorElement: <ErrorPage />,
      loader: tokenLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          children: [
            {
              index: true,
              element: <Products />,
            },
            {
              path: ":id",
              element: <Product />,
            },
          ],
        },
        {
          path: "/categories",
          children: [
            {
              path: ":name",
              element: <CategoryProducts />,
            },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
          loader: checkAuthLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
          action: loginAuthAction,
        },
        {
          path: "/Signup",
          element: <Signup />,
          action: singupAuthAction,
        },
        {
          path: "/logout",
          action: logoutAction,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
