'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import avatarImg from '../../images/profile.png'; // รูปโปรไฟล์

// Mock data สำหรับตัวอย่าง
const mockFoods = [
    { id: '1', foodName: 'Chicken Salad', mealType: 'Lunch', date: '2025-09-01', image: '' },
    { id: '2', foodName: 'Green Smoothie', mealType: 'Breakfast', date: '2025-09-01', image: '' },
    { id: '3', foodName: 'Grilled Steak', mealType: 'Dinner', date: '2025-09-02', image: '' },
];

export default function Page({params}:{params:{id:string}}) {
    const { id } = useParams();
    const router = useRouter();

    const [foodName, setFoodName] = useState('');
    const [mealType, setMealType] = useState('Breakfast');
    const [date, setDate] = useState('');
    const [foodImage, setFoodImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const user = {
        name: 'John Doe',
    };

    useEffect(() => {
        // ดึงข้อมูลอาหารตาม id (ใช้ mock data)
        const food = mockFoods.find(f => f.id === id);
        if (food) {
            setFoodName(food.foodName);
            setMealType(food.mealType);
            setDate(food.date);
            if (food.image) setPreviewImage(food.image);
        }
    }, [id]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFoodImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ id, foodName, mealType, date, foodImage });
        alert('Food updated!');
        router.push('/dashboard');
    };

    return (
        <>
            <Head>
                <title>Edit Food - Food Tracker</title>
            </Head>

            <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col items-center">

                {/* Header */}
                <div className="flex items-center justify-between w-full max-w-5xl mb-10">
                    {/* Back Link */}
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-white font-bold hover:underline"
                    >
                        &larr; Back to Dashboard
                    </Link>

                    {/* Title กลาง */}
                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg text-center flex-1">
                        Edit Food
                    </h1>

                    {/* Profile ขวาสุด */}
                    <Link
                        href="/profile"
                        className="flex items-center gap-3 bg-white/20 rounded-full px-3 py-1 hover:bg-white/30 transition-colors"
                    >
                        <Image
                            src={avatarImg}
                            alt={user.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                        />
                        <span className="text-white font-semibold text-lg md:text-xl">{user.name}</span>
                    </Link>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-3xl w-full flex flex-col gap-6 text-black"
                >
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-white">Food Name</label>
                        <input
                            type="text"
                            value={foodName}
                            onChange={(e) => setFoodName(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-white">Meal Type</label>
                        <select
                            value={mealType}
                            onChange={(e) => setMealType(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Snack</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-white">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-white">Food Image</label>
                        <label className="cursor-pointer px-4 py-2 bg-white text-indigo-600 rounded-lg text-center hover:bg-gray-100 transition-colors w-48">
                            Choose Image
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                        {previewImage && (
                            <div className="mt-4">
                                <p className="mb-2 font-semibold text-white">Preview:</p>
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className="w-48 h-48 object-cover rounded-lg border border-white/50"
                                />
                            </div>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
                        <Link
                            href="/dashboard"
                            className="flex-1 px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 text-center"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
