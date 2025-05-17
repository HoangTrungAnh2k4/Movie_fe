'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Register() {
    const [loading, setLoading] = useState(false);

    const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email')?.toString().trim();
        const password = formData.get('password')?.toString();
        const name = formData.get('name')?.toString().trim();

        if (!email || !password || !name) {
            {
                toast.error('Vui lòng nhập đầy đủ thông tin!');
                return;
            }
        }

        try {
            setLoading(true);

            const response = await fetch(`${AUTH_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('access_token', data.access_token);
                toast.success('Đăng ký thành công!');
                setTimeout(() => {
                    router.push('/');
                }, 1000);
            } else if (response.status === 409) {
                toast.error('Email đã tồn tại!');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen text-white">
            <div className="flex bg-[#1e2545] rounded-xl lg:w-[50%] w-[80%] h-[400px]">
                <div className="w-1/2">
                    <Image
                        src="https://www.rophim.me/images/rophim-login.jpg"
                        alt="image"
                        width={200}
                        height={200}
                        className="rounded-l-xl w-full h-full object-cover object-top"
                    />
                </div>

                <div className="flex flex-col justify-center px-10 w-1/2 i">
                    <h4 className="font-semibold text-lg">Đăng ký</h4>
                    <p className="mt-4 text-[#aaaaaa] text-sm">
                        Nếu bạn đã có tài khoản,{' '}
                        <Link href="/login" className="text-primary hover:underline">
                            đăng nhập ngay
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                            className="block mt-6 mb-3 px-4 py-2 border-[#ffffff10] border-[1px] rounded-lg w-full placeholder:text-[#aaaaaa] placeholder:text-xs"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="block mt-6 mb-3 px-4 py-2 border-[#ffffff10] border-[1px] rounded-lg w-full placeholder:text-[#aaaaaa] placeholder:text-xs"
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Mật khẩu"
                            required
                            className="block mb-4 px-4 py-2 border-[#ffffff10] border-[1px] rounded-lg w-full placeholder:text-[#aaaaaa] placeholder:text-xs"
                        />

                        {loading && (
                            <div className="border-4 mx-auto border-primary border-t-transparent rounded-full w-10 h-10 animate-spin" />
                        )}

                        <button
                            type="submit"
                            className="bg-primary hover:opacity-90 mt-6 px-4 py-2 rounded-lg w-full  font-semibold text-background2 cursor-pointer"
                        >
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
