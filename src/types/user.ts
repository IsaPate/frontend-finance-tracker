export type Role = "USER" | "ADMIN";

// GET /admin/users
export type User = {
  id: number;
  name: string;
  email: string;
  role: Role;
};

export type AuthUser = {
  name: string;
  email: string;
  role: Role;
};

export type LoginData = {
  token: string;
  user: {
    name: string;
    email: string;
    role: Role;
  };
};
