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

const USER_URL = process.env.NEXT_PUBLIC_USER_URL;

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
            className="z-[100] fixed flex justify-start items-center px-4 py-6 pr-6 w-full h-[70px] text-white transition-all header"
            style={{
                backgroundColor: scrolled ? '#0F111A' : 'transparent',
                willChange: 'background-color',
            }}
        >
            <div className="flex items-center justify-center mr-4 text-4xl sm:hidden">
                <IoMenuOutline />
            </div>

            <Link href={'/'} className="flex items-center justify-center gap-2 logo">
                <Image src="/ro-icon.svg" alt="Movie App Logo" width={40} height={40} />
                <p className="text-xl font-bold">Movie App</p>
            </Link>

            <div className="flex justify-start items-center gap-3 lg:bg-[#ffffff14] ml-auto lg:ml-6 px-2 lg:px-4 py-2 rounded-lg lg:w-[25%] h-fit">
                <IoSearch
                    onClick={() => {
                        toast.warning('Chức năng đang được phát triển');
                    }}
                    className="text-2xl font-semibold sm:text-xl"
                />
                <input
                    type="text"
                    placeholder="Search for movies..."
                    onChange={() => {
                        toast.warning('Chức năng đang được phát triển');
                    }}
                    className="hidden lg:block bg-transparent py-1 outline-none focus:outline-none w-full text-white placeholder:text-[#aaaaaa] text-sm placeholder:text-sm"
                />
            </div>

            <ul className="items-center justify-center hidden gap-3 ml-16 text-sm sm:flex">
                <li className="px-3 py-1 hover:text-primary">
                    <Link href="/list_movie">Chủ Đề</Link>
                </li>
                <li className="px-3 py-1 hover:text-primary">
                    <Link href="/list_movie">Phim Lẻ</Link>
                </li>
                <li className="px-3 py-1 hover:text-primary">
                    <Link href="/list_movie">Phim Bộ</Link>
                </li>
            </ul>

            <div className="items-center justify-center hidden gap-4 ml-auto sm:flex">
                <div
                    onClick={() => {
                        toast.success('Bạn không có thông báo nào!');
                    }}
                    className="flex justify-center items-center border rounded-full size-[40px]"
                >
                    <FaBell className="text-white" />
                </div>

                {!user && (
                    <Link
                        href={'/login'}
                        className="flex justify-center items-start gap-2 bg-white px-3.5 py-2 rounded-full text-black cursor-pointer cursor-pointer"
                    >
                        <FaUser />
                        <p className="text-sm font-semibold">Thành viên</p>
                    </Link>
                )}

                {user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Image
                                src="https://www.rophim.me/images/avatars/pack1/14.jpg"
                                alt="Movie App Logo"
                                width={40}
                                height={40}
                                className="border-2 border-white rounded-full cursor-pointer "
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="z-[101] mt-2 mr-6 text-white border-none w-46 bg-background2"
                            align="start"
                        >
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>

                            <DropdownMenuSeparator className="bg-neutral-500" />
                            <DropdownMenuItem
                                className="cursor-pointer hover:bg-background/50"
                                onClick={() => {
                                    router.push('/manage_account');
                                }}
                            >
                                <FaUser /> Tài khoản
                            </DropdownMenuItem>

                            <DropdownMenuSeparator className="bg-neutral-500" />
                            <DropdownMenuItem onSelect={handleLogout} className="cursor-pointer hover:bg-background/50">
                                <FaSignOutAlt className="" />
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
