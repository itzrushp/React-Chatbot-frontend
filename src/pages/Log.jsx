import React, { useState } from "react";

function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">
      {/* Left side (Gradient background with some login steps or info) */}
      <div className="md:w-1/2 bg-gradient-to-br from-purple-700 via-purple-800 to-black  flex flex-col items-center justify-center p-8 rounded-2xl mt-4">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-4">CampusCompass</h1>
          <h2 className="text-white text-4xl font-bold mb-6">Welcome Back!</h2>
          <p className="text-white text-lg mb-8">
            Log in to your account and continue your journey with us.
          </p>
        </div>
      </div>

      {/* Right side (Form) */}
      <div className="md:w-1/2 bg-black flex flex-col items-center justify-center p-8">
        <div className="bg-black rounded-lg p-8 shadow-md w-full max-w-md">
          <h2 className="text-white text-3xl font-semibold mb-6">
            Login to Your Account
          </h2>
          <p className="text-gray-400 mb-4">
            Please enter your credentials to log in.
          </p>


          {/* Form */}
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white py-3 px-4 rounded-md w-full"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-gray-800 text-white py-3 px-4 rounded-md w-full"
              />
              <div className="flex justify-between mt-2">
                <p className="text-gray-400 text-sm">
                  Must be at least 8 characters.
                </p>
                <a href="#" className="text-white underline text-sm">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="bg-white text-black py-3 px-4 rounded-md w-full"
            >
              Log In
            </button>
          </form>

          {/* Register Link */}
          <p className="text-gray-400 text-center mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-white underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
