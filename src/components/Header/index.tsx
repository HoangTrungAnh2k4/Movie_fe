'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useUserStore } from '@/store/userStore';

import { IoSearch, IoMenuOutline } from 'react-icons/io5';
import { FaBell, FaHeart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const USER_URL = process.env.NEXT_PUBLIC_USER_URL;

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    const { user } = useUserStore((state) => state);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        window.location.href = '/login';
    };

    const items = [
        {
            label: (
                <div className="mb-4 cursor-text">
                    <p className="mb-1 text-xs">Xin chào</p>
                </div>
            ),
            key: '0',
        },
        {
            label: (
                <Link href={'/manage_account'} className="flex items-center mb-2">
                    <FaHeart className="mr-3 text-sm" />
                    Yêu thích
                </Link>
            ),
            key: '1',
        },
        {
            label: (
                <Link href={'/manage_account'} className="flex items-center mb-2">
                    <FaUser className="mr-3 text-sm" />
                    Tài khoản
                </Link>
            ),
            key: '2',
        },
        {
            type: 'divider' as const,
        },
        {
            label: (
                <div onClick={handleLogout} className="flex items-center">
                    <FaSignOutAlt className="mr-3 text-sm" />
                    Thoát
                </div>
            ),
            key: '3',
        },
    ];

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

                {/* {data?.email && (
                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight" className="">
                        <div className="flex items-center cursor-pointer">
                            <Space>
                                <Image
                                    src="https://www.rophim.me/images/avatars/pack1/14.jpg"
                                    alt="Movie App Logo"
                                    width={40}
                                    height={40}
                                    className="border-2 border-white rounded-full"
                                />
                            </Space>
                        </div>
                    </Dropdown>
                )} */}

                {user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    Profile
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Billing
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Settings
                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Keyboard shortcuts
                                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>Email</DropdownMenuItem>
                                            <DropdownMenuItem>Message</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>More...</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuItem>
                                    New Team
                                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuItem disabled>API</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Log out
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </header>
    );
};

export default Header;
