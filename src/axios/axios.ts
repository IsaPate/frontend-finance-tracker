import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

export class AxiosService {
  private axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: `${import.meta.env.VITE_BACKEND_HOST}/api`,
      withCredentials: true,
    });
  }
  public async get(url: string, config?: AxiosRequestConfig) {
    return await this.axios.get(url, config);
  }
  public async post(url: string, data: unknown, config?: AxiosRequestConfig) {
    return await this.axios.post(url, data, config);
  }
  public async put(url: string, data: unknown, config?: AxiosRequestConfig) {
    return await this.axios.put(url, data, config);
  }
  public async delete(url: string, config?: AxiosRequestConfig) {
    return await this.axios.delete(url, config);
  }
  public requestInterceptor() {
    this.axios.interceptors.request.use((config) => config);
  }

  public responseInterceptor() {
    this.axios.interceptors.response.use(
      (response) => response,
      (error) => error
    );
  }
}
