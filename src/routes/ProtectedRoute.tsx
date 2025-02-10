import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux"; // Gunakan Redux hooks

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAppSelector((state) => state.auth);

    // return user ? <Outlet /> : <Navigate to="/" />;
    return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
