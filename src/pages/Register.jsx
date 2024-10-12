// src/pages/Register.jsx
import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-gray-800 p-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Register</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 text-black"
          />
          <button
            type="submit"
            className="w-full bg-green-500 py-3 text-white rounded-lg hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
