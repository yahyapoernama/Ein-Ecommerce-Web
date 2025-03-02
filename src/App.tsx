import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { checkAuth } from "./store/slices/authSlice";
import { useAppDispatch } from "./hooks/useRedux";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth()); // Cek session saat aplikasi dimuat
  }, [dispatch]);
  
  return <AppRoutes />;
}