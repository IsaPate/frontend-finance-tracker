import type { User } from "./user";

export type Category = {
  id: number;
  title: string;
  userId: number;
};

// GET /admin/categories (pageData items)
export type AdminCategory = Category & {
  user: Pick<User, "id" | "name" | "email">;
};
