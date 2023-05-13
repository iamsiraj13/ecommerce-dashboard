import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { BiCategoryAlt, BiChat } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { CiDollar } from "react-icons/ci";
import AdminDashboard from "../views/admin/AdminDashboard";
export const allNavs = [
  {
    id: 1,
    title: "dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    icon: <AiOutlineHome />,
    role: "admin",
  },
  {
    id: 2,
    title: "orders",
    path: "/admin/dashboard/orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
  },
  {
    id: 3,
    title: "category",
    path: "/admin/dashboard/category",
    icon: <BiCategoryAlt />,
    role: "admin",
  },
  {
    id: 4,
    title: "sellers",
    path: "/admin/dashboard/sellers",
    icon: <FiUsers />,
    role: "admin",
  },
  {
    id: 5,
    title: "payment request",
    path: "/admin/dashboard/payment-request",
    icon: <CiDollar />,
    role: "admin",
  },
  {
    id: 6,
    title: "deactive seller",
    path: "/admin/dashboard/payment-request",
    icon: <AiOutlineExclamationCircle />,
    role: "admin",
  },
  {
    id: 7,
    title: "sellers request",
    path: "/admin/dashboard/sellers-request",
    icon: <AiOutlineShopping />,
    role: "admin",
  },
  {
    id: 8,
    title: "chat seller",
    path: "/admin/dashboard/chat-seller",
    icon: <BiChat />,
    role: "admin",
  },
];
