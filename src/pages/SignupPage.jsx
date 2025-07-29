import React from 'react';
import signupImg from '../assets/signup.jpg'; // ensure correct path

const SignupPage = () => (
  <div className="min-h-screen flex">
    {/* Left: Image */}
    <div
      className="hidden lg:block lg:w-1/2 bg-cover bg-center"
      style={{ backgroundImage: `url(${signupImg})` }}
    />
    {/* Right: Form */}
    <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 lg:p-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Create Your Account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              required
              className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              required
              className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="font-semibold">Password</label>
            <input
              type="password"
              required
              className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  </div>
);
export default SignupPage;
