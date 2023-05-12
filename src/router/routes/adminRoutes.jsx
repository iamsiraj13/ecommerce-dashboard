import React, { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));

const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
];

export default adminRoutes;
