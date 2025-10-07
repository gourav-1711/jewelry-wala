'use client'
import { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in...', formData);
  };

  return (
    <main className="min-h-[550px] flex justify-center  bg-gray-100 p-4">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row shadow-xl rounded-xl overflow-hidden">
        
        {/* Left Side */}
        <div className="md:w-1/2 bg-amber-500 flex flex-col justify-center items-center p-8 text-white">
          <h1 className="text-4xl font-[cursive] font-bold mb-4">Jewellery Wala</h1>
          <p className="text-lg text-center max-w-xs">
            Welcome back! Login to access your account and explore our premium jewellery collection.
          </p>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
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

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 transition"
              >
                Login
              </button>
            </form>

            <p className="mt-4 text-center text-gray-500 text-sm">
              Don't have an account?{' '}
              <a href="/signup" className="text-amber-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default LoginPage;
