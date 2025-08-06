'use client';

import { useUserStore } from '@/store/userStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaHeart, FaUser } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const USER_URL = process.env.NEXT_PUBLIC_USER_URL;

export default function ManageAccount() {
    const [activeTab, setActiveTab] = useState<string>('account');

    const { user } = useUserStore();

    const shouldFetch = (user?.favorite ?? []).length > 0;
    const movieUrls = shouldFetch ? user?.favorite.map((item) => `https://phimapi.com/phim/${item}`) : null;

    const fetcher = (urls: string[]) => Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));

    const { data, error, isLoading } = useSWR(shouldFetch ? movieUrls : null, fetcher);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const deleteFavorite = async (nameSlug: string) => {
        const res = await fetch(`${USER_URL}/delete_favorite`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: JSON.stringify({
                favorite: nameSlug,
            }),
        });

        const data = await res.json();

        if (res.ok) {
            toast.success('Xóa phim khỏi danh sách yêu thích thành công!');
        } else {
            if (data?.message === 'Không thể thêm vào danh sách yêu thích.') {
                toast.error('Phim đã có trong danh sách yêu thích!');
            }
        }
    };

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            window.location.href = '/login';
        }
    }, [user]);

    if (isLoading) {
        return (
            <div className="z-50 fixed inset-0 flex justify-center items-center bg-background">
                <div className="border-4 border-primary border-t-transparent rounded-full w-16 h-16 animate-spin" />
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen font-semibold text-red-700 text-2xl">
                Error loading data
            </div>
        );
    }

    return (
        <div className="flex sm:flex-row flex-col lg:gap-6 gap-3 pt-28 px-5 text-white">
            <div className="bg-[#25272f]  lg:p-10 p-6 rounded-2xl sm:w-[300px]  h-auto sm:h-screen">
                <h5 className="font-semibold text-center sm:text-left text-xl">Quản lý tài khoản</h5>
                <ul className="flex sm:flex-col flex-row gap-6 sm:gap-0 items-center justify-center sm:items-start mt-6">
                    <Link
                        href={'/manage_account'}
                        className={`flex sm:flex-row flex-col gap-2 justify-center sm:justify-start items-center hover:text-primary py-4  sm:mb-2 text-sm ${
                            activeTab === 'favorite' ? 'text-primary' : ''
                        }`}
                        onClick={() => handleTabClick('favorite')}
                    >
                        <FaHeart className="text-xl" />
                        Yêu thích
                    </Link>
                    <Link
                        href={'/manage_account'}
                        className={`flex sm:flex-row flex-col gap-2 justify-center sm:justify-start items-center hover:text-primary py-4  sm:mb-2 text-sm ${
                            activeTab === 'account' ? 'text-primary' : ''
                        }`}
                        onClick={() => handleTabClick('account')}
                    >
                        <FaUser className=" text-xl" />
                        Tài khoản
                    </Link>
                </ul>

                <div className="sm:flex hidden flex-col sm:mt-60">
                    <Image
                        src="https://www.rophim.me/images/avatars/pack1/14.jpg"
                        alt="Movie App Logo"
                        width={40}
                        height={40}
                        className="border-2 border-white rounded-full"
                    />
                    <p className="mt-1 text-[#aaaaaa] text-sm">{user?.email}</p>
                </div>
            </div>

            <div className="flex-grow sm:px-12 px-4 ">
                <h5 className="font-semibold hidden sm:block text-xl">
                    {activeTab === 'favorite' ? 'Yêu thích' : 'Tài khoản'}
                </h5>

                {activeTab === 'favorite' && (
                    <div className="flex flex-wrap gap-6 mt-6">
                        {data?.map((item, index) => (
                            <div key={index} className="group w-[150px] relative mb-2 rounded-2xl">
                                <Link
                                    href={`/detail_movie/${item?.movie?.slug}`}
                                    className="hover:bg-primary hover:p-1 rounded-2xl overflow-hidden duration-300 cursor-pointer itemTop10"
                                >
                                    <Image
                                        src={item?.movie?.poster_url}
                                        alt="Movie Poster"
                                        width={150}
                                        height={225}
                                        className="rounded-xl w-[150px] h-auto aspect-[300/450]"
                                    />

                                    {/* lớp phủ */}
                                    <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl h-auto aspect-[300/450] transition duration-300" />

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // ngăn sự kiện lan ra <Link>
                                            e.preventDefault();
                                            deleteFavorite(item?.movie?.slug);
                                        }}
                                        className="top-2 right-2 absolute bg-background2 hover:bg-[#aaaaaa] p-1 rounded-full"
                                    >
                                        <IoIosClose className="text-2xl cursor-pointer" />
                                    </button>
                                </Link>

                                <div className="flex flex-col items-center gap-1 mt-3">
                                    <h3 className="hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer">
                                        {item?.movie?.name}
                                    </h3>
                                    <h4 className="text-[#aaaaaa] text-xs">{item?.movie?.origin_name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'account' && (
                    <div className="container">
                        <div className="flex sm:flex-row flex-col sm:items-center sm:gap-36 gap-4">
                            <div className="flex flex-col">
                                <label className="mt-6 mb-2 text-[#aaaaaa] text-sm">Email</label>
                                <input
                                    type="text"
                                    readOnly
                                    placeholder={user?.email}
                                    className="px-4 py-2 border-[#ffffff14] border-[1px] rounded-lg outline-none h-fit placeholder:text-white text-sm placeholder:text-sm"
                                />
                            </div>
                            <div className="mt-8">
                                <Image
                                    src="https://www.rophim.me/images/avatars/pack1/14.jpg"
                                    alt="Movie App Logo"
                                    width={40}
                                    height={40}
                                    className="border-2 border-gray-300 rounded-full size-[115px]"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
