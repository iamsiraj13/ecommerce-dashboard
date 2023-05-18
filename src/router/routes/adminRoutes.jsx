import React, { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Category = lazy(() => import("../../views/admin/Category"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const DeactiveSeller = lazy(() => import("../../views/admin/DeactiveSeller"));
const SellersRequest = lazy(() => import("../../views/admin/SellersRequest"));
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"));

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
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactive-seller",
    element: <DeactiveSeller />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers-request",
    element: <SellersRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-seller",
    element: <ChatSeller />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller-details",
    element: <SellerDetails />,
    role: "admin",
  },
  {
    path: "admin/dashboard/order/details",
    element: <OrderDetails />,
    role: "admin",
  },
];

export default adminRoutes;
