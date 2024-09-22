import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Google Sign-In Button */}
        <div className="flex items-center justify-center mt-4">
          <button className="flex items-center justify-center w-full py-2 text-black border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300">
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        </div>
        <div className="flex gap-4">
          <p>Not Have an account?</p>
          <button
            onClick={() => navigate("/auth/register")}
            className="text-blue-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
