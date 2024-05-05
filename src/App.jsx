import { useState } from "react";
import "./App.css";
import Switcher from "./components/Switcher";
import React from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";


function App() {
  const { t, i18n } = useTranslation();
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/blog",
          element: <Blog/>,
        },
        {
          path: "/pricing",
          element: <Pricing/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
