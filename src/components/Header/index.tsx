'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Dropdown, Space } from 'antd';

import { IoSearch } from 'react-icons/io5';
import { FaBell, FaHeart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    const fetcher = async (url: string) => {
        const accessToken = localStorage.getItem('access_token');
        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return await res.json();
    };
    const { data, error, isLoading } = useSWR(`${AUTH_URL}/get_user`, fetcher);

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
            className="z-50 fixed flex items-center px-4 py-6 pr-6 w-full h-[70px] text-white transition-all header"
            style={{
                backgroundColor: scrolled ? '#0F111A' : 'transparent',
                willChange: 'background-color',
            }}
        >
            <Link href={'/'} className="flex justify-center items-center gap-2 logo">
                <Image src="/ro-icon.svg" alt="Movie App Logo" width={40} height={40} />
                <p className="font-bold text-xl">Movie App</p>
            </Link>

            <div className="flex justify-start items-center gap-3 bg-[#ffffff14] ml-6 px-4 py-2 rounded-lg w-[25%] h-fit">
                <IoSearch className="font-semibold text-xl" />
                <input
                    type="text"
                    placeholder="Search for movies..."
                    onClick={() => {
                        toast.warning('Chức năng đang được phát triển');
                    }}
                    className="bg-transparent py-1 outline-none focus:outline-none w-full text-white placeholder:text-[#aaaaaa] text-sm placeholder:text-sm"
                />
            </div>

            <ul className="flex justify-center items-center gap-3 ml-16 text-sm">
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

            <div className="flex justify-center items-center gap-4 ml-auto">
                <div className="flex justify-center items-center border rounded-full size-[40px]">
                    <FaBell className="text-white" />
                </div>

                {!data?.email && (
                    <Link
                        href={'/login'}
                        className="flex justify-center items-start gap-2 bg-white px-3.5 py-2 rounded-full text-black cursor-pointer cursor-pointer"
                    >
                        <FaUser />
                        <p className="font-semibold text-sm">Thành viên</p>
                    </Link>
                )}

                {data?.email && (
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
                )}
            </div>
        </header>
    );
};

export default Header;
