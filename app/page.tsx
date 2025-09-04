// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import foodbanner from './images/foodbanner.jpg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 text-center">

      {/* Content Card */}
      <div className="flex w-full max-w-3xl flex-col items-center justify-center rounded-3xl bg-white/20 p-8 text-center shadow-2xl backdrop-blur-lg transition-transform duration-500 hover:scale-105">

        <h1 className="mb-4 text-4xl font-extrabold text-white drop-shadow-lg md:text-6xl">
          Welcome to Food Tracker
        </h1>

        <p className="mb-6 text-lg font-medium text-white drop-shadow-md md:text-xl">
          Track your meal!!!
        </p>

        {/* Food Banner Image */}
        <div className="mb-8 w-full">
          <Image
            src={foodbanner}
            alt="Food Tracker"
            width={900}
            height={500}
            className="h-64 w-full rounded-xl object-cover shadow-lg md:h-80 lg:h-96"
            placeholder="blur"
          />
        </div>

        {/* Buttons */}
        <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="w-full transform rounded-full bg-white px-8 py-3 font-bold text-indigo-600 shadow-xl transition-colors duration-300 hover:-translate-y-1 hover:bg-gray-100 sm:w-auto"
          >
            Register
          </Link>

          <Link
            href="/login"
            className="w-full transform rounded-full bg-indigo-600 px-8 py-3 font-bold text-white shadow-xl transition-colors duration-300 hover:-translate-y-1 hover:bg-indigo-700 sm:w-auto"
          >
            Login
          </Link>
        </div>

        {/* Footer inside the card */}
        <footer className="text-sm text-white opacity-80">
          Create by <span className="font-semibold">Phatcharapol-DTI</span>
        </footer>
      </div>
    </div>
  );
}
