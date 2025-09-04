'use client';

import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import avatarImg from '../images/profile.png';

export default function Page() {
    const [foodName, setFoodName] = useState('Chicken Salad');
    const [mealType, setMealType] = useState('Lunch');
    const [date, setDate] = useState('2025-09-01');
    const [foodImage, setFoodImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

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
        alert('Food updated!');
    };

    const user = { name: 'John Doe' };

    return (
        <>
            <Head>
                <title>Edit Food - Food Tracker</title>
            </Head>

            <div className="min-h-screen p-6 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 text-white">

                <div className="flex items-center justify-between mb-8">
                    <Link href="/dashboard" className="flex items-center gap-2 text-white font-bold hover:underline">
                        &larr; Back to Dashboard
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">Edit Food</h1>
                    <Link
                        href="/profile"
                        className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 hover:bg-white/30 transition-colors"
                    >
                        <Image src={avatarImg} alt={user.name} width={40} height={40} className="rounded-full object-cover" />
                        <span className="text-white font-semibold">{user.name}</span>
                    </Link>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-6 max-w-3xl mx-auto flex flex-col gap-6 text-black"
                >
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold">Food Name</label>
                        <input
                            type="text"
                            value={foodName}
                            onChange={(e) => setFoodName(e.target.value)}
                            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold">Meal Type</label>
                        <select
                            value={mealType}
                            onChange={(e) => setMealType(e.target.value)}
                            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Snack</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

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

                    <div className="flex justify-between mt-4">
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
