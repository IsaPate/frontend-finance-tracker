import type { User } from "./user";

export type TransactionType = "INCOME" | "EXPENSE";

export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: TransactionType;
  createdAt: string; // ISO date string
  notes: string | null;
  userId: number;
  categoryId: number | null;
  recurringChargeId: number | null;
};

// GET /admin/transactions (pageData items)
export type AdminTransaction = Transaction & {
  user: Pick<User, "id" | "name">;
};
