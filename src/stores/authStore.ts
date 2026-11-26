import { axiosService } from "@/axios/AxiosService";
import type { AxiosResponse } from "@/types/api";
import type { AuthUser, LoginData, User } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";
// Ο τύπος ΟΛΟΥ του store: τι state κρατάει + ποιες functions (actions) έχει.
// Σκέψου το σαν interface μιας Java κλάσης: πεδία + μέθοδοι.

type AuthState = {
  // --- state ---
  token: string | null; // null = δεν είναι συνδεδεμένος
  user: Omit<User, "id"> | null;

  // --- actions ---
  login: (email: string, password: string) => Promise<AuthUser>;
  logout: () => void;
  register: (name: string, password: string, email: string) => Promise<void>;
};
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      login: async (email: string, password: string) => {
        const response = await axiosService.post<AxiosResponse<LoginData>>(
          "/auth/login",
          {
            email,
            password,
          }
        );
        const { token, user } = response.data.data;
        set({ token, user });
        return user;
      },
      logout: () => {
        set({ token: null, user: null });
      },
      register: async (
        userName: string,
        userEmail: string,
        userPassword: string
      ) => {
        const response = await axiosService.post<AxiosResponse<AuthUser>>(
          "/auth/register",
          {
            name: userName,
            email: userEmail,
            password: userPassword,
          }
        );
        const { name, email, role } = response.data.data;
        set({ token: null, user: { name, email, role } });
      },
    }),
    { name: "auth" }
  )
);
