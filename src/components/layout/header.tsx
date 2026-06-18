'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useUserStore } from '@/store/userStore';

import { IoSearch, IoMenuOutline } from 'react-icons/io5';
import { FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next/client';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const router = useRouter();

    const { user } = useUserStore((state) => state);

    const handleLogout = () => {
        deleteCookie('access_token');
        window.location.href = '/login';
    };

    useEffect((): (() => void) => {
        const handleScroll = (): void => {
            const isScrolled = window.scrollY > 50;
            setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
        };

        // kiểm tra ngay khi mount
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        // cleanup
        return (): void => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className='header fixed z-[100] flex h-[70px] w-full items-center justify-start px-4 py-8 pr-6 text-white transition-all'
            style={{
                backgroundColor: scrolled ? '#0F111A' : 'transparent',
                willChange: 'background-color',
            }}
        >
            <div className='mr-4 flex items-center justify-center text-4xl sm:hidden'>
                <IoMenuOutline />
            </div>

            <Link
                href={'/home'}
                className='logo flex items-center justify-center gap-2'
            >
                <Image
                    src='/ro-icon.svg'
                    alt='Movie App Logo'
                    width={160}
                    height={40}
                />
            </Link>

            <div className='ml-auto flex h-fit items-center justify-start gap-3 rounded-lg px-2 py-1.5 lg:ml-6 lg:w-[25%] lg:bg-[#ffffff14] lg:px-4'>
                <IoSearch
                    onClick={() => {
                        toast.warning('Chức năng đang được phát triển');
                    }}
                    className='text-2xl font-semibold sm:text-xl'
                />
                <input
                    type='text'
                    placeholder='Search for movies...'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            toast.warning('Chức năng đang được phát triển');
                        }
                    }}
                    className='hidden w-full bg-transparent py-1 text-sm text-white outline-none placeholder:text-sm placeholder:text-[#aaaaaa] focus:outline-none lg:block'
                />
            </div>

            <ul className='ml-16 hidden items-center justify-center gap-3 text-sm sm:flex'>
                <li className='hover:text-primary px-3 py-1'>
                    <Link href='/topic'>Chủ Đề</Link>
                </li>
                <li className='hover:text-primary px-3 py-1'>
                    <Link href='/list_movie'>Phim Lẻ</Link>
                </li>
                <li className='hover:text-primary px-3 py-1'>
                    <Link href='/list_movie'>Phim Bộ</Link>
                </li>
            </ul>

            <div className='ml-auto hidden items-center justify-center gap-4 sm:flex'>
                <div
                    onClick={() => {
                        toast.success('Bạn không có thông báo nào!');
                    }}
                    className='flex size-[40px] cursor-pointer items-center justify-center rounded-full border'
                >
                    <FaBell className='text-white' />
                </div>

                {!user && (
                    <Link
                        href={'/login'}
                        className='flex cursor-pointer items-start justify-center gap-2 rounded-full bg-white px-3.5 py-2 text-black'
                    >
                        <FaUser />
                        <p className='text-sm font-semibold'>Thành viên</p>
                    </Link>
                )}

                {user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Image
                                src='https://www.rophim.me/images/avatars/pack1/14.jpg'
                                alt='Movie App Logo'
                                width={40}
                                height={40}
                                className='cursor-pointer rounded-full border-2 border-white'
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className='bg-background2 z-[101] mt-2 mr-6 w-46 border-none text-white'
                            align='start'
                        >
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>

                            <DropdownMenuSeparator className='bg-neutral-500' />
                            <DropdownMenuItem
                                className='hover:bg-background/50 cursor-pointer'
                                onClick={() => {
                                    router.push('/manage_account');
                                }}
                            >
                                <FaUser /> Tài khoản
                            </DropdownMenuItem>

                            <DropdownMenuSeparator className='bg-neutral-500' />
                            <DropdownMenuItem
                                onSelect={handleLogout}
                                className='hover:bg-background/50 cursor-pointer'
                            >
                                <FaSignOutAlt className='' />
                                Đăng xuất
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </header>
    );
};

export default Header;
