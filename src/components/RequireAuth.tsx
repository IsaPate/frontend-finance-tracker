import { Outlet } from "react-router";

// Placeholder: lets every child route through for now.
// Later: try POST /auth/refresh on load, then render <Outlet /> for an ADMIN
// token or <Navigate to="/login" state={{ from: location }} replace /> otherwise.
export function RequireAuth() {
  return <Outlet />;
}
