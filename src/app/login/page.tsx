'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Login() {
    const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.replace('/home');

        return;

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

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('access_token', data.access_token);
                window.location.href = '/';
            } else {
                toast.error('Tên tài khoản hoặc mật khẩu không đúng!');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='flex h-screen items-center justify-center text-white'>
            <div className='flex h-[400px] w-[50%] rounded-xl bg-[#1e2545]'>
                <div className='relative w-1/2'>
                    <Image
                        src='/bgLogin.png'
                        alt='image'
                        width={200}
                        height={200}
                        className='h-full w-full rounded-l-xl object-cover object-center'
                    />
                    <div className='bg-bgLogin/80 absolute top-0 left-0 h-full w-full' />
                </div>

                <div className='i flex w-1/2 flex-col justify-center px-10'>
                    <h4 className='text-lg font-semibold'>Đăng nhập</h4>
                    <p className='mt-4 text-sm text-[#aaaaaa]'>
                        Nếu bạn chưa có tài khoản,{' '}
                        <Link
                            href='/#'
                            className='text-primary hover:underline'
                        >
                            đăng ký ngay
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            name='email'
                            type='email'
                            placeholder='Email'
                            // required
                            className='mt-6 mb-3 block w-full rounded-lg border-[1px] border-[#ffffff10] px-4 py-2 placeholder:text-xs placeholder:text-[#aaaaaa]'
                        />
                        <input
                            name='password'
                            type='password'
                            placeholder='Mật khẩu'
                            // required
                            className='mb-2 block w-full rounded-lg border-[1px] border-[#ffffff10] px-4 py-2 placeholder:text-xs placeholder:text-[#aaaaaa]'
                        />
                        <button
                            type='submit'
                            className='bg-primary text-background2 mt-6 w-full cursor-pointer rounded-lg px-4 py-2 font-medium hover:opacity-90'
                        >
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
