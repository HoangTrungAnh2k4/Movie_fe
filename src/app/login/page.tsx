'use client';

import { loginApi } from '@/api/authApi';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { toast } from 'react-toastify';

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            const res = await loginApi(email, password);
            if (res.status === 200) {
                setCookie('access_token', res.data.access_token, {
                    path: '/',
                    maxAge: 60 * 60, // 1 giờ
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production',
                });

                router.push('/');
            }
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                toast.error('Tên tài khoản hoặc mật khẩu không đúng!');
            } else {
                toast.error('Lỗi trong quá trình đăng nhập.');
            }
            console.error('Login error:', error);
        }
    };

    const handleGoogleSignIn = () => {
        console.log('Google sign in clicked');
    };

    useEffect(() => {
        const justRegistered = localStorage.getItem('justRegistered');
        if (justRegistered === 'true') {
            toast.success('Registration successful! Please log in.');
            localStorage.removeItem('justRegistered');
        }
    }, []);

    return (
        <div className="flex justify-center items-center bg-gray-50 px-4 min-h-screen">
            <div className="bg-white shadow-sm p-8 rounded-lg w-full max-w-md">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="mb-2 font-semibold text-gray-900 text-2xl">WELCOME BACK</h1>
                    <p className="text-gray-600 text-sm">Welcome back! Please enter your details.</p>
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-900 text-sm hover:underline cursor-pointer t"
                        >
                            Forgot password
                        </button>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 px-4 py-3 rounded-lg w-full font-medium text-white transition duration-200 cursor-pointer"
                    >
                        Sign in
                    </button>

                    {/* Google Sign In Button */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex justify-center items-center space-x-2 bg-white hover:bg-gray-50 px-4 py-3 border border-gray-300 rounded-lg w-full font-medium text-gray-700 transition duration-200 cursor-pointer"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        <span>Sign in with Google</span>
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="mt-6 text-gray-600 text-sm text-center">
                    Don't have an account?{' '}
                    <Link
                        href="/register"
                        className="font-medium text-red-500 hover:text-red-600 hover:underline cursor-pointer"
                    >
                        Sign up for free!
                    </Link>
                </p>
            </div>
        </div>
    );
}
