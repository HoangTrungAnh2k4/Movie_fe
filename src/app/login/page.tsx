'use client';

import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function Login() {
    const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

    const router = useRouter();
    const { setUser } = useUserStore();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email')?.toString().trim();
        const password = formData.get('password')?.toString();

        if (!email || !password) {
            alert('Vui lòng nhập email và mật khẩu.');
            return;
        }

        try {
            const response = await fetch(`${AUTH_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            console.log('login', response);

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('access_token', data.access_token);
                setUser(data.user);
                router.push('/');
            } else {
                toast.error('Tên tài khoản hoặc mật khẩu không đúng!');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen text-white">
            <div className="flex bg-[#1e2545] rounded-xl sm:w-[80%] xl:w-[50%] h-[400px]">
                <div className="hidden sm:block w-1/2">
                    <Image
                        src="https://www.rophim.me/images/rophim-login.jpg"
                        alt="image"
                        width={200}
                        height={200}
                        className="rounded-l-xl w-full h-full object-cover object-top"
                    />
                </div>

                <div className="flex flex-col justify-center px-10 sm:w-1/2">
                    <h4 className="font-semibold text-lg">Đăng nhập</h4>
                    <p className="flex-shrink-0 mt-4 text-[#aaaaaa] text-sm">
                        Nếu bạn chưa có tài khoản,{' '}
                        <Link href="/register" className="text-primary hover:underline">
                            đăng ký ngay
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit}>
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
                            className="block mb-2 px-4 py-2 border-[#ffffff10] border-[1px] rounded-lg w-full placeholder:text-[#aaaaaa] placeholder:text-xs"
                        />

                        <button
                            type="submit"
                            className="bg-primary hover:opacity-90 mt-6 px-4 py-2 rounded-lg w-full font-medium font-semibold text-background2 cursor-pointer"
                        >
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
