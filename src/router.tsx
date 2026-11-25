import { createBrowserRouter, Navigate } from "react-router";
import { AdminLayout } from "./layouts/AdminLayout";
import { UsersPage } from "./pages/UsersPage";
import { TransactionsPage } from "./pages/TransactionsPage";
import { CategoriesPage } from "./pages/CategoriesPage";

export const router = createBrowserRouter([
  { path: "/login", element: <Navigate to="/login" replace /> },
  { path: "/register", element: <Navigate to="/register" replace /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        element: "",
        children: [
          { path: "users", element: <UsersPage /> },
          { path: "transactions", element: <TransactionsPage /> },
          { path: "categories", element: <CategoriesPage /> },
        ],
      },
    ],
  },
]);
