import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PosSoftware from "./components/PosSoftware/PosSoftware";
import CustomSoftware from "./components/CustomSoftware/CustomSoftware";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import Signin from "./components/Signin/Signin";
import Footer from "./components/Footer/Footer";

// https://github.com/michalsnik/aos
// flip and animation
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContextProvider } from "./components/Context/AuthContext";
AOS.init();

const Layout = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthContextProvider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/rle-web-app",
    element: <Layout />,
    children: [
      {
        path: "/rle-web-app",
        element: <Home />,
      },
      {
        path: "/rle-web-app/customsoftware",
        element: <CustomSoftware />,
      },
      {
        path: "/rle-web-app/possoftware",
        element: <PosSoftware />,
      },
      {
        path: "/rle-web-app/webdevelopment",
        element: <WebDevelopment />,
      },
      {
        path: "/rle-web-app/signin",
        element: <Signin />,
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
  //   path: "/rle-web-app/signin",
  //   element: <Signin />,
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
