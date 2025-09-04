'use client';

import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import avatarImg from '../images/profile.png'; // รูปโปรไฟล์จาก app/images

export default function AddFoodPage() {
  const [foodName, setFoodName] = useState('');
  const [mealType, setMealType] = useState('Breakfast');
  const [date, setDate] = useState('');
  const [foodImage, setFoodImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const user = {
    name: 'John Doe',
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFoodImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ foodName, mealType, date, foodImage });
    alert('Food saved!');
    setFoodName('');
    setMealType('Breakfast');
    setDate('');
    setFoodImage(null);
    setPreviewImage(null);
  };

  const handleLogout = () => {
    // Logic logout เช่น ลบ token หรือ localStorage
    alert('Logged out!');
    // router.push('/login'); // ถ้ามีหน้า login
  };

  return (
    <>
      <Head>
        <title>Add Food - Food Tracker</title>
        <meta name="description" content="Add new food to your tracker" />
      </Head>

      <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-white font-bold hover:underline">
            &larr; Back to Dashboard
          </Link>

          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Add Food
          </h1>

          {/* Profile + Logout */}
          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 hover:bg-white/30 transition-colors"
            >
              <Image
                src={avatarImg}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="text-white font-semibold text-base md:text-lg">{user.name}</span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-full font-bold transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-3xl mx-auto flex flex-col gap-6"
        >
          {/* Food Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Food Name</label>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-white/30 text-black focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white/70"
              placeholder="Enter food name"
              required
            />
          </div>

          {/* Meal Type */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Meal Type</label>
            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-white/30 text-black focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white/70"
            >
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-white/30 text-black focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white/70"
              required
            />
          </div>

          {/* Food Image */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-white">Food Image</label>
            <label className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300">
              Choose Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {previewImage && (
              <div className="mt-4 flex flex-col items-center">
                <p className="mb-2 font-semibold text-white">Preview:</p>
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-48 h-48 object-cover rounded-lg border-2 border-white/50 shadow-md"
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-4">
            <Link
              href="/dashboard"
              className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
