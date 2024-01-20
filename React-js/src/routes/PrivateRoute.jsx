import React from "react";
import { useRoutes } from "react-router-dom";
import GrandChild from "../contextApi/GrandChild";
import About from "../routingComps/About";
import PageNotFound from "../routingComps/PageNotFound";

const PrivateRoute = () => {
  const Routes = useRoutes([
    { path: "/", element: <GrandChild /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return Routes;
};

export default PrivateRoute;
