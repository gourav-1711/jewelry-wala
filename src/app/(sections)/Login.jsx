"use client";
import InputPassword from "@/components/ui/input-password";
import { login, setProfile } from "@/redux/features/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formState, setFormState] = useState({
    errors: {},
    isSubmitting: false,
  });

  const [apiError, setApiError] = useState(""); // 👈 new: server error message

  const dispatch = useDispatch();
  const router = useRouter();
  const returnTo = useSearchParams().get("returnTo");

  const validate = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormState((prev) => ({
      ...prev,
      errors: { ...prev.errors, [e.target.name]: "" },
    }));
    setApiError(""); // clear any previous API error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormState({ ...formState, errors });
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true }));
    setApiError(""); // reset error

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/website/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (!response.ok || !data._status) {
        return setApiError(data._message || "Failed to login. Please try again.");
      }

      if (!data._status) {
        return setApiError(data._message || "Invalid credentials");
      }

      dispatch(login(data._token));
      dispatch(setProfile(data._data));

      router.push(returnTo || "/");
    } catch (error) {
      console.error(error);
      return setApiError(error.message || "Failed to login. Please try again.");
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  return (
    <main className="min-h-[550px] flex justify-center bg-gradient-to-br from-amber-100 to-white p-4">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-amber-200/50">
        {/* Left Side */}
        <div className="md:w-1/2 bg-gradient-to-br from-amber-500 to-amber-700 flex flex-col justify-center items-center p-10 text-white">
          <h1 className="text-5xl font-bold font-[cursive] mb-4 tracking-wide drop-shadow-md">
            Jewellery Wala
          </h1>
          <p className="text-lg text-center max-w-sm opacity-90">
            Welcome back! Log in to access your exclusive account and explore
            timeless elegance.
          </p>
          <div className="mt-8 text-sm text-amber-100/80">
            ✨ Premium Quality • Secure Shopping • Exclusive Offers
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Login to Continue
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className={`w-full p-3 border rounded-md focus:ring-2 transition-all duration-200 ${
                    formState.errors.email
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-amber-400"
                  }`}
                />
                {formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formState.errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <InputPassword
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className={`w-full p-3  rounded-md focus:ring-2 transition-all duration-200 ${
                    formState.errors.password
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-amber-400"
                  }`}
                />
                {formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formState.errors.password}
                  </p>
                )}
              </div>

              {/* API Error Message */}
              {apiError && (
                <div className="bg-red-100 text-red-700 p-3 rounded-md text-sm text-center">
                  {apiError}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={formState.isSubmitting}
                className={`w-full py-3 text-white font-semibold rounded-md transition-all duration-300 ${
                  formState.isSubmitting
                    ? "bg-amber-300 cursor-not-allowed"
                    : "bg-amber-500 hover:bg-amber-600 hover:shadow-lg"
                }`}
              >
                {formState.isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-5 text-center text-gray-600 text-sm">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-amber-500 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
