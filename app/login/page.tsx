'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
      <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
          Login
        </h1>

        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-pink-600 text-white font-bold rounded-full shadow-xl hover:bg-pink-700 transition-colors duration-300 transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>

        {/* Back to Home Button */}
        <div className="mt-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white/80 text-pink-700 font-semibold rounded-full shadow-md hover:bg-white transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Register Link */}
        <p className="mt-6 text-white text-sm md:text-base">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-bold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
