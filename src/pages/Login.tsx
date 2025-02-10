import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux"; // Redux Hook
import { login } from "../store/slices/authSlice"; // Redux Action
import api from "../api/axios";

const Login = () => {
    const dispatch = useAppDispatch();
    useAppSelector((state) => state);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (username: string, password: string) => {
        try {
            const response = await api.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, { username, password }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            dispatch(login(response.data));
        } catch (error: any) {
            setError(error.response);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(username, password); }} className="p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

