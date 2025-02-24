import axios from "axios";
import { csrfToken } from "../utils/csrfToken";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "X-CSRF-Token": csrfToken,
    "Content-Type": "application/json",
  },
});

export default api;
