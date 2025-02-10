import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { auth } = useAppSelector((state) => state);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome, {auth?.user?.email}</h1>
            <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
