import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api/axios";

const GuestRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/check"); // Cek apakah token valid
        setIsAuthenticated(true); // User sudah login
      } catch (error) {
        setIsAuthenticated(false); // User belum login
      }
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) return null;
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default GuestRoute;