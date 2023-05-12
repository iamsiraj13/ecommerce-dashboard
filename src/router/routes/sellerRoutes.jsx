import React, { lazy } from "react";

const Home = lazy(() => import("../../views/pages/Home"));

const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];

export default sellerRoutes;
