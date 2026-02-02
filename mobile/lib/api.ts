import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";

const API_URL = "https://e-commerce-backend-iota-beryl.vercel.app/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useApi = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const interceptor = api.interceptors.request.use(async (config) => {
      const token = await getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
    return () => api.interceptors.request.eject(interceptor);
  }, [getToken]);

  return api;
};
