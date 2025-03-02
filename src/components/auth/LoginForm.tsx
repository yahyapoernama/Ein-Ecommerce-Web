import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import api from "../../api/axios";
import Alert from "../ui/alert/Alert";
import { useAppDispatch } from "../../hooks/useRedux";
import { checkAuth } from "../../store/slices/authSlice";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState<Array<string>>([]);
  const [success, setSuccess] = useState<Array<string>>([]);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post(
        "/auth/login",
        formData,
        { withCredentials: true } // Wajib agar cookies dikirim
      );
      dispatch(checkAuth()); // Perbarui state auth
      setSuccess(() => ['Login berhasil!']);
      setError([]);
      navigate("/dashboard");
    } catch (error: Error | any) {
      if (error.response?.status === 400) {
        setError(
          error.response?.data?.errors?.map((error: { msg: string }) => error.msg) ||
          [error.response?.data?.message]
        );
      } else if (error.response?.status === 404) {
        setError(() => [error.response.data.message]);
      } else if (error.response?.status === 500) {
        setError(() => ['Terjadi kesalahan di server, coba lagi nanti!']);
      } else {
        setError(() => ['Terjadi kesalahan, coba lagi nanti!']);
      }
      setSuccess([]);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Login
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your username and password to login!
            </p>
          </div>
          <div>
            {(error.length > 0 || success.length > 0) ? (
              <Alert
                variant={error.length > 0 ? 'error' : 'success'}
                title={error.length > 0 ? 'Login gagal!' : 'Login berhasil!'}
                messages={error.length > 0 ? error : success}
                margin="mb-5"
              />
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label>
                    Username <span className="text-error-500">*</span>{" "}
                  </Label>

                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    onChange={handleChange}
                    value={formData.username}
                    required={true}
                  />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onChange={handleChange}
                      value={formData.password}
                      required={true}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  {/* To Be Implemented */}
                  {/* <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div> */}
                  <Link
                    to="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Button className="w-full" size="sm">
                    Login
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Don&apos;t have an account? {""}
                <Link
                  to="/register"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
