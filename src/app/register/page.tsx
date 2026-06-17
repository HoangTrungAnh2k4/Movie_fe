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

        const email = (document.getElementById('email') as HTMLInputElement)
            .value;
        const password = (
            document.getElementById('password') as HTMLInputElement
        ).value;
        const confirmPassword = (
            document.getElementById('confirm-password') as HTMLInputElement
        ).value;

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
        } catch (error: unknown) {
            const apiError = error as {
                response?: {
                    status?: number;
                };
            };

            if (apiError.response && apiError.response.status === 409) {
                toast.error('Email này đã được sử dụng.');
            } else {
                toast.error('Lỗi trong quá trình đăng ký.');
                console.error('Register error:', error);
            }
        }
    };

    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-50 px-4'>
            <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-sm'>
                {/* Header */}
                <div className='mb-8 text-center'>
                    <h1 className='mb-2 text-2xl font-semibold text-gray-900'>
                        ĐĂNG KÝ TÀI KHOẢN
                    </h1>
                    <p className='text-sm text-gray-600'>
                        Vui lòng nhập thông tin của bạn.
                    </p>
                </div>

                {/* Form */}
                <form className='space-y-6' onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor='email'
                            className='mb-2 block text-sm font-medium text-gray-700'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter your email'
                            className='w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:outline-none'
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor='password'
                            className='mb-2 block text-sm font-medium text-gray-700'
                        >
                            Password
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                placeholder='••••••••••'
                                className='w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 outline-none'
                                required
                            />
                            <button
                                type='button'
                                tabIndex={-1}
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3'
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash className='text-lg opacity-40 hover:opacity-100' />
                                ) : (
                                    <FaRegEye className='text-lg opacity-40 hover:opacity-100' />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Password confirm Field */}
                    <div>
                        <label
                            htmlFor='confirm-password'
                            className='mb-2 block text-sm font-medium text-gray-700'
                        >
                            Confirm Password
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='confirm-password'
                                placeholder='••••••••••'
                                className='w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 outline-none'
                                required
                            />
                            <button
                                type='button'
                                tabIndex={-1}
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3'
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash className='text-lg opacity-40 hover:opacity-100' />
                                ) : (
                                    <FaRegEye className='text-lg opacity-40 hover:opacity-100' />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                id='remember'
                                checked={rememberMe}
                                onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                }
                                className='h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500'
                            />
                            <label
                                htmlFor='remember'
                                className='ml-2 block text-sm text-gray-700'
                            >
                                Remember me
                            </label>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type='submit'
                        className='w-full cursor-pointer rounded-lg bg-red-500 px-4 py-3 font-medium text-white transition duration-200 hover:bg-red-600'
                    >
                        Sign up
                    </button>
                </form>

                <p className='mt-6 text-center text-sm text-gray-600'>
                    Already have an account?{' '}
                    <Link
                        href='/login'
                        className='cursor-pointer font-medium text-red-500 hover:text-red-600 hover:underline'
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
