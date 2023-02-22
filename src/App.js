import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PosSoftware from "./components/PosSoftware/PosSoftware";
import CustomSoftware from "./components/CustomSoftware/CustomSoftware";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import Footer from "./components/Footer/Footer";

// https://github.com/michalsnik/aos
// flip and animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    // path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "customsoftware",
        element: <CustomSoftware />,
      },
      {
        path: "possoftware",
        element: <PosSoftware />,
      },
      {
        path: "webdevelopment",
        element: <WebDevelopment />,
      },
      // {
      //   path: "/post/:id",
      //   element: <Single />,
      // },
      // {
      //   path: "/write",
      //   element: <Write />,
      // },
    ],
  },

  //Non child forms

  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
