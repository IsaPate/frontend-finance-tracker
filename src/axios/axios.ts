import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

export class AxiosService {
  private axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: `${import.meta.env.VITE_BACKEND_HOST}/api/`,
      withCredentials: true,
    });
    this.axios.interceptors.request.use((config) => {
      const token = useAuthStore.getState().token;
      if (!token) {
        return config;
      }
      config.headers.Authorization = `Bearer ${token}`;
    });

    this.axios.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
  }
  public async get<T>(url: string, config?: AxiosRequestConfig) {
    return await this.axios.get<T>(url, config);
  }
  public async post<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ) {
    return await this.axios.post<T>(url, data, config);
  }
  public async put(url: string, data: unknown, config?: AxiosRequestConfig) {
    return await this.axios.put(url, data, config);
  }
  public async delete(url: string, config?: AxiosRequestConfig) {
    return await this.axios.delete(url, config);
  }
}
