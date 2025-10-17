"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { register, setProfile } from "@/redux/features/auth";
import Link from "next/link";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // 👈 error state
  const [loading, setLoading] = useState(false); // 👈 loading state

  const router = useRouter();
  const dispatch = useDispatch();
  const returnTo = useSearchParams().get("returnTo");

  const handleChange = (e) => {
    setError(""); // clear error when typing again
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset error before submission
    setLoading(true); // show loading state

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/website/user/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok || !data._status) {
        return setError(data._message || "Failed to sign up. Please try again.");
      }

      dispatch(register(data._token));
      dispatch(setProfile(data._data));
      router.push(returnTo || "/profile");
    } catch (err) {
      console.error(err);
      return setError(err.message || "Failed to sign up. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[550px] flex justify-center bg-gray-100 p-4">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row shadow-xl rounded-xl overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 bg-amber-500 flex flex-col justify-center items-center p-8 text-white">
          <h1 className="text-4xl font-[cursive] font-bold mb-4">
            Jewellery Wala
          </h1>
          <p className="text-lg text-center max-w-xs">
            Welcome to Jewellery Wala! Join us and explore premium jewellery
            collections.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400 transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400 transition"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400 transition"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-md text-sm text-center">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 text-white font-semibold rounded-md transition ${
                  loading
                    ? "bg-amber-400 cursor-not-allowed"
                    : "bg-amber-500 hover:bg-amber-600"
                }`}
              >
                {loading ? "Creating account..." : "Sign Up"}
              </button>
            </form>

            <p className="mt-4 text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-amber-500 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
