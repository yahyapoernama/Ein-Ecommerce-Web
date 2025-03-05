import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/DashboardPages/Index";
import Products from "../pages/ProductPages/Index";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import { ScrollToTop } from "../components/common/ScrollToTop";
import AppLayout from "../layouts/AppLayout";
import GuestRoute from "./GuestRoute";
import NotFound from "../pages/OtherPages/NotFound";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Grouping Guest Routes */}
                <Route element={<AppLayout withSidebar={false} />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<GuestRoute />}>
                    {/* Auth Layout */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                {/* ✅ Grouping Protected Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path="store" element={<AppLayout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="products" element={<Products />} />
                    </Route>
                </Route>

                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
