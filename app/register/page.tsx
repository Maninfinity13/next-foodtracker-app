// src/app/register/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Register - Food Tracker',
  description: 'Register for a new account on Food Tracker.',
};

export default function Register() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files?.[0];

    if (file) {
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImagePreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-xl p-8 bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
          Register
        </h1>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex items-center space-x-4 justify-center text-white">
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="gender" value="male" className="form-radio text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="gender" value="female" className="form-radio text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2">Female</span>
            </label>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <label htmlFor="profile-picture" className="cursor-pointer">
              <span className="inline-block px-6 py-3 bg-white/70 rounded-full text-indigo-600 font-semibold shadow-md hover:bg-white transition-colors duration-300">
                Choose Profile Picture
              </span>
              <input
                id="profile-picture"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {imagePreviewUrl && (
              <div className="mt-4">
                <img src={imagePreviewUrl} alt="Image Preview" className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-full shadow-xl hover:bg-indigo-700 transition-colors duration-300 transform hover:-translate-y-1"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-white text-sm md:text-base">
          Already have an account?{' '}
          <Link href="/login" className="font-bold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
