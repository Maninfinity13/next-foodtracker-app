'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import avatarImg from '../images/profile.png';

export default function ProfilePage() {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, password });
        alert('Profile saved!');
    };

    return (
        <>
            <Head>
                <title>Edit Profile - Food Tracker</title>
            </Head>

            <div className="min-h-screen p-6 bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-400 text-white flex flex-col items-center">

                {/* Header */}
                <div className="flex items-center justify-between w-full max-w-5xl mb-10">
                    {/* Back Link ซ้ายสุด */}
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-white font-bold hover:underline"
                    >
                        &larr; Back to Dashboard
                    </Link>

                    {/* Title กลาง */}
                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg text-center flex-1">
                        Edit Profile
                    </h1>

                    {/* Profile ขวาสุด */}
                    <Link
                        href="/profile"
                        className="flex items-center gap-3 bg-white/20 rounded-full px-3 py-1 hover:bg-white/30 transition-colors"
                    >
                        <Image
                            src={avatarImg}
                            alt="Profile"
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                        />
                        <span className="text-white font-semibold text-lg md:text-xl">John Doe</span>
                    </Link>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-3xl w-full flex flex-col gap-6 text-black"
                >
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Your Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-white">First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-white">Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label className="mb-2 font-semibold text-white">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col md:col-span-2">
                            <label className="mb-2 font-semibold text-white">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
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
