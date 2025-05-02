'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaHeart, FaUser } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

const arrayMockup = [
    {
        title: 'Người Hùng Yếu Đuối',
        original_title: 'Weak Hero Class',
        poster_path: 'https://static.nutscdn.com/vimg/300-0/3ac6b7f3647ae31e17d8f0675a162aa9.png',
    },
    {
        title: 'Chuyện Đời Bác Sĩ Nội Trú',
        original_title: 'Resident Playbook',
        poster_path: 'https://static.nutscdn.com/vimg/300-0/055875f8424f76d54b2a36feaa6edc07.jpg',
    },
    {
        title: 'Những Bác Sĩ Tài Hoa',
        original_title: 'Hospital Playlist',
        poster_path: 'https://static.nutscdn.com/vimg/300-0/7b26ede67ba7c5b7972ef48262d241e1.jpg',
    },
    {
        title: 'Đội Thiếu Niên Siêu Đẳng',
        original_title: 'Moving',
        poster_path: 'https://static.nutscdn.com/vimg/300-0/a89e2320f513f7f6f2386936a9a88067.jpg',
    },
    {
        title: 'Khó Dỗ Dành',
        original_title: 'The First Frost',
        poster_path: 'https://static.nutscdn.com/vimg/300-0/09d00ac5a6e7f45516547538b4f0dd78.jpg',
    },
    {
        title: 'Khi Cuộc Đời Cho Bạn Quả Quýt',
        original_title: 'When Life Gives You Tangerines',
        poster_path: 'https://static.nutscdn.com/vimg/300-0/f9197908357fe5ff6b4887a2752bf6ef.jpg',
    },
    {
        title: 'Lãng Khách',
        original_title: 'Vagabond',
        poster_path: 'https://static.nutscdn.com/vimg/300-0/325393bf9a2208a88571852b3a70887d.jpg',
    },
    {
        title: 'Hoa Của Quỷh',
        original_title: 'Flower of Evil',
        poster_path: 'https://static.nutscdn.com/vimg/300-0/4e0858f4df7659e373543a2170be4e2d.jpg',
    },
    {
        title: 'Đêm Kinh Hoàng ở Sở Thú',
        original_title: 'Night of the Zoopocalypse',
        poster_path: 'https://static.nutscdn.com/vimg/300-0/4f9cb16b41fe6cece6cb8a958f5e661c.jpg',
    },
];

export default function ManageAccount() {
    const [activeTab, setActiveTab] = useState<string>('account');

    const fetcher = async (url: string) => {
        const accessToken = localStorage.getItem('access_token');
        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return await res.json();
    };
    const { data, error } = useSWR(`${AUTH_URL}/get_user`, fetcher);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    console.log(data, 'data');
    console.log(error, 'error');

    if (error || data?.message === 'Access_token is expired or invalid') {
        window.location.href = '/login';
    }

    return (
        <div className="flex gap-6 pt-28 pl-5 text-white">
            <div className="bg-[#25272f] p-10 rounded-2xl w-[300px] h-screen">
                <h5 className="font-semibold text-xl">Quản lý tài khoản</h5>
                <ul className="flex flex-col mt-6">
                    <Link
                        href={'/manage_account'}
                        className={`flex items-center  pb-4 border-b-[2px] border-[#2e313a] text-sm ${
                            activeTab === 'favorite' ? 'text-primary' : ''
                        }`}
                        onClick={() => handleTabClick('favorite')}
                    >
                        <FaHeart className="mr-3 text-xl" />
                        Yêu thích
                    </Link>
                    <Link
                        href={'/manage_account'}
                        className={`flex items-center py-4  mb-2 text-sm ${
                            activeTab === 'account' ? 'text-primary' : ''
                        }`}
                        onClick={() => handleTabClick('account')}
                    >
                        <FaUser className="mr-3 text-xl" />
                        Tài khoản
                    </Link>
                </ul>

                <div className="flex flex-col mt-60">
                    <Image
                        src="https://www.rophim.me/images/avatars/pack1/14.jpg"
                        alt="Movie App Logo"
                        width={40}
                        height={40}
                        className="border-2 border-white rounded-full"
                    />
                    <p className="mt-4 font-semibold text-sm">{data?.name}</p>
                    <p className="mt-1 text-[#aaaaaa] text-sm">{data?.email}</p>
                </div>
            </div>

            <div className="flex-grow px-12">
                <h5 className="font-semibold text-xl">{activeTab === 'favorite' ? 'Yêu thích' : 'Tài khoản'}</h5>

                {activeTab === 'favorite' && (
                    <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] mt-6">
                        {arrayMockup.map((item, index) => (
                            <div key={index} className="group relative mb-2 rounded-2xl">
                                <div className="hover:bg-primary hover:p-1 rounded-2xl overflow-hidden duration-300 cursor-pointer itemTop10">
                                    <Image
                                        src={item.poster_path}
                                        alt="Movie Poster"
                                        width={250}
                                        height={200}
                                        className="rounded-xl w-full h-auto aspect-[300/450]"
                                    />

                                    {/* lớp phủ */}
                                    <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl h-auto aspect-[300/450] transition duration-300" />

                                    <button
                                        onClick={() => {
                                            toast.warning('Chức năng đang được phát triển!');
                                        }}
                                        className="top-2 right-2 absolute bg-background2 hover:bg-[#aaaaaa] p-1 rounded-full"
                                    >
                                        <IoIosClose className="text-2xl cursor-pointer" />
                                    </button>
                                </div>

                                <div className="flex flex-col items-center gap-1 mt-3">
                                    <h3 className="hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer">
                                        {item.title}
                                    </h3>
                                    <h4 className="text-[#aaaaaa] text-xs">{item.original_title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'account' && (
                    <div className="container">
                        <div className="flex items-center gap-36">
                            <div className="flex flex-col">
                                <label className="mt-6 mb-2 text-[#aaaaaa] text-sm">Email</label>
                                <input
                                    type="text"
                                    readOnly
                                    placeholder={data?.email}
                                    className="px-4 py-2 border-[#ffffff14] border-[1px] rounded-lg outline-none h-fit placeholder:text-white text-sm placeholder:text-sm"
                                />

                                <label className="mt-6 mb-2 text-[#aaaaaa] text-sm">Họ tên</label>
                                <input
                                    type="text"
                                    readOnly
                                    placeholder={data?.name}
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
