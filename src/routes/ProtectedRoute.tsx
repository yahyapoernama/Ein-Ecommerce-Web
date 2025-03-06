import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import NetworkError from "../pages/OtherPages/NetworkError";

const ProtectedRoute = () => {
  const { isAuthenticated, loading, networkError } = useAppSelector((state) => state.auth);

  if (loading) return null; // Tidak menampilkan apapun saat loading

  if (networkError) return <NetworkError />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;