import { Outlet } from "react-router";

export function AdminLayout() {
  return (
    <>
      <h1>Admin</h1>
      <Outlet />
    </>
  );
}
