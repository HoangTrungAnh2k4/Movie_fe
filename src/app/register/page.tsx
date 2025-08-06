'use client';

import { registerApi } from '@/api/authApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { toast } from 'react-toastify';

export default function RegisterPage() {
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;

        if (!email || !password || !confirmPassword) {
            toast.error('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const res = await registerApi(email, password);

            if (res.status === 201) {
                localStorage.setItem('justRegistered', 'true');
                router.push('/login');
            }
        } catch (error: any) {
            if (error.response && error.response.status === 409) {
                toast.error('Email này đã được sử dụng.');
            } else {
                toast.error('Lỗi trong quá trình đăng ký.');
                console.error('Register error:', error);
            }
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-50 px-4 min-h-screen">
            <div className="bg-white shadow-sm p-8 rounded-lg w-full max-w-md">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="mb-2 font-semibold text-gray-900 text-2xl">ĐĂNG KÝ TÀI KHOẢN</h1>
                    <p className="text-gray-600 text-sm">Vui lòng nhập thông tin của bạn.</p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="px-3 py-2 border border-gray-300 rounded-lg outline-none focus:outline-none w-full text-sm"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block mb-2 font-medium text-gray-700 text-sm">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="••••••••••"
                                className="px-3 py-2 pr-10 border border-gray-300 rounded-lg outline-none w-full"
                                required
                            />
                            <button
                                type="button"
                                tabIndex={-1}
                                onClick={() => setShowPassword(!showPassword)}
                                className="right-0 absolute inset-y-0 flex items-center pr-3 cursor-pointer"
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash className="opacity-40 hover:opacity-100 text-lg" />
                                ) : (
                                    <FaRegEye className="opacity-40 hover:opacity-100 text-lg" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Password confirm Field */}
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 font-medium text-gray-700 text-sm">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="confirm-password"
                                placeholder="••••••••••"
                                className="px-3 py-2 pr-10 border border-gray-300 rounded-lg outline-none w-full"
                                required
                            />
                            <button
                                type="button"
                                tabIndex={-1}
                                onClick={() => setShowPassword(!showPassword)}
                                className="right-0 absolute inset-y-0 flex items-center pr-3 cursor-pointer"
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash className="opacity-40 hover:opacity-100 text-lg" />
                                ) : (
                                    <FaRegEye className="opacity-40 hover:opacity-100 text-lg" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="border-gray-300 rounded focus:ring-red-500 w-4 h-4 text-red-500"
                            />
                            <label htmlFor="remember" className="block ml-2 text-gray-700 text-sm">
                                Remember me
                            </label>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 px-4 py-3 rounded-lg w-full font-medium text-white transition duration-200 cursor-pointer"
                    >
                        Sign up
                    </button>
                </form>

                <p className="mt-6 text-gray-600 text-sm text-center">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="font-medium text-red-500 hover:text-red-600 hover:underline cursor-pointer"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
