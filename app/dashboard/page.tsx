'use client';

import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { FaEdit, FaTrash, FaSearch, FaArrowLeft } from 'react-icons/fa';
import avatarImg from '../images/profile.png'; // รูปโปรไฟล์จาก app/images

// Mock data
const mockFoods = [
    { id: 1, date: '2025-09-01', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Chicken Salad', mealType: 'Lunch' },
    { id: 2, date: '2025-09-01', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Green Smoothie', mealType: 'Breakfast' },
    { id: 3, date: '2025-09-02', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Grilled Steak', mealType: 'Dinner' },
    { id: 4, date: '2025-09-02', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Margherita Pizza', mealType: 'Dinner' },
    { id: 5, date: '2025-09-03', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Tomato Soup', mealType: 'Lunch' },
    { id: 6, date: '2025-09-03', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Oatmeal with Berries', mealType: 'Breakfast' },
    { id: 7, date: '2025-09-04', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Fish Tacos', mealType: 'Lunch' },
    { id: 8, date: '2025-09-04', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Sushi Platter', mealType: 'Dinner' },
    { id: 9, date: '2025-09-05', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Pancakes with Syrup', mealType: 'Breakfast' },
    { id: 10, date: '2025-09-05', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Cheeseburger', mealType: 'Lunch' },
    { id: 11, date: '2025-09-06', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Spaghetti Bolognese', mealType: 'Dinner' },
    { id: 12, date: '2025-09-06', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Thai Green Curry', mealType: 'Dinner' },
    { id: 13, date: '2025-09-07', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Club Sandwich', mealType: 'Lunch' },
    { id: 14, date: '2025-09-07', image: 'https://i.pinimg.com/736x/94/d2/f1/94d2f1dcd0051aaaabee7a10a9ae8b4e.jpg', foodName: 'Berry Smoothie', mealType: 'Breakfast' },
];

const ITEMS_PER_PAGE = 7;

export default function DashboardPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const user = { name: 'John Doe' };

    const handleLogout = () => {
        alert('Logged out!');
    };

    const filteredFoods = mockFoods.filter(food =>
        food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredFoods.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredFoods.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <>
            <Head>
                <title>Dashboard - Food Tracker</title>
                <meta name="description" content="Manage your food tracking on the dashboard." />
            </Head>

            <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center gap-2 text-white font-bold hover:underline">
                        <FaArrowLeft />
                        <span>Back to Home</span>
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                        Dashboard
                    </h1>

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

                {/* Action bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                    <Link href="/addfood" className="w-full md:w-auto px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1 text-center">
                        Add Food
                    </Link>
                    <div className="w-full md:w-auto flex items-center bg-white/30 rounded-full p-2 focus-within:ring-2 focus-within:ring-indigo-500">
                        <input
                            type="text"
                            placeholder="Search food..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full bg-transparent text-white placeholder-white focus:outline-none px-2"
                        />
                        <button className="p-2 text-white rounded-full hover:bg-white/20 transition-colors">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* Food Table */}
                <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
                    <table className="min-w-full divide-y divide-white/30">
                        <thead className="bg-white/30">
                            <tr>
                                <th className="px-6 py-3 text-left font-semibold uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left font-semibold uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left font-semibold uppercase tracking-wider">Food Name</th>
                                <th className="px-6 py-3 text-left font-semibold uppercase tracking-wider">Meal Type</th>
                                <th className="px-6 py-3 text-center font-semibold uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/20">
                            {currentItems.map(food => (
                                <tr key={food.id} className="hover:bg-white/10">
                                    <td className="px-6 py-4 whitespace-nowrap">{food.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={food.image} alt={food.foodName} className="w-40 h-40 rounded-lg object-cover" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{food.foodName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{food.mealType}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <button className="text-white hover:text-indigo-200 p-2 rounded-full transition-colors duration-200 text-lg md:text-xl">
                                            <FaEdit />
                                        </button>
                                        <button className="text-white hover:text-red-300 p-2 rounded-full transition-colors duration-200 ml-2 text-lg md:text-xl">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-center space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-full font-bold transition-colors duration-200 ${currentPage === 1 ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-white/30 text-white hover:bg-white/50'}`}
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-4 py-2 rounded-full font-bold transition-colors duration-200 ${currentPage === i + 1 ? 'bg-white text-indigo-600' : 'bg-white/30 text-white hover:bg-white/50'}`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-full font-bold transition-colors duration-200 ${currentPage === totalPages ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-white/30 text-white hover:bg-white/50'}`}
                        >
                            Next
                        </button>
                    </div>
                )}

            </div>
        </>
    );
}
