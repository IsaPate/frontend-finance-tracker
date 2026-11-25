export type Role = "USER" | "ADMIN";

// GET /admin/users
export type User = {
  id: number;
  name: string;
  email: string;
  role: Role;
};
