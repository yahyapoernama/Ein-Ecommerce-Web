import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/DashboardPages/Home";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import { ScrollToTop } from "../components/common/ScrollToTop";
import AppLayout from "../layouts/AppLayout";
import GuestRoute from "./GuestRoute";
import NotFound from "../pages/OtherPages/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Dashboard Layout */}
                <Route index path="/" element={<h1>Home</h1>} />

                {/* Grouping Guest Routes */}
                <Route element={<GuestRoute />}>
                    {/* Auth Layout */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                {/* ✅ Grouping Protected Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<AppLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>

                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
