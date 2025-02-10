import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { logout } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>Ein E-Commerce</h1>
      <div>
        {user ? (
          <>
            <span>{user.name}</span>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 px-2 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-green-500 px-2 py-1 rounded"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

