import React, { lazy } from "react";
import Orders from "../../views/admin/Orders";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));

const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
];

export default adminRoutes;
