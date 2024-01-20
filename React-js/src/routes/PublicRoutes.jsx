import React from "react";
import { useRoutes } from "react-router-dom";
import GrandChild from "../contextApi/GrandChild";
import Sides from "../routingComps/Sides";

const PublicRoutes = () => {
  const Routes = useRoutes([
    { path: "/", element: <GrandChild /> },
    { path: "/sides", element: <Sides /> },
  ]);
  return Routes;
};

export default PublicRoutes;
