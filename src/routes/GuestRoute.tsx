import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";

const GuestRoute = () => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  if (loading) return null; // Tidak menampilkan apapun saat loading

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default GuestRoute;