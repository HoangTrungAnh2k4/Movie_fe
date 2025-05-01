'use client';

import Image from 'next/image';
import { FaFilter } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';

export default function ListMovie() {
    const [listMovies, setListMovies] = useState<any[]>([]);

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR('https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=2', fetcher);

    useEffect(() => {
        if (data?.items) {
            console.log(data.items);

            // Lấy 5 thumb_url đầu tiên
            const thumbs = data.items;
            setListMovies(thumbs);
        }
    }, [data]);

    if (error) return <div>Failed to load</div>;
    if (isLoading)
        return (
            <div className="flex justify-center items-center bg-background h-52">
                <div className="border-4 border-primary border-t-transparent rounded-full w-16 h-16 animate-spin" />
            </div>
        );

    return (
        <div className="px-8 pt-28 pb-12 text-white">
            <div
                onClick={() => {
                    toast.warning('Chức năng đang được phát triển!');
                }}
                className="flex items-center gap-3 hover:bg-[#ffffff10] my-6 px-4 py-2 rounded-lg w-fit font-medium text-white cursor-pointer"
            >
                <FaFilter />
                <p>Bộ lọc</p>
            </div>

            <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
                {listMovies?.map((item, index) => (
                    <div key={index} className="group relative mb-2 rounded-2xl">
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            className="block hover:bg-primary hover:p-1 rounded-2xl overflow-hidden duration-300 cursor-pointer"
                        >
                            <Image
                                src={item?.poster_url}
                                alt="Movie Poster"
                                width={250}
                                height={200}
                                className="rounded-xl object-center object-cover aspect-[2/3]"
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl h-auto aspect-[300/450] transition duration-300" />
                        </Link>

                        <div className="flex flex-col items-center gap-1 mt-3">
                            <Link
                                href={`/detail_movie/${item?.slug}`}
                                className="hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer"
                            >
                                {item?.name}
                            </Link>
                            <h4 className="text-[#aaaaaa] text-xs line-clamp-1">{item?.origin_name}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className="flex justify-center items-center gap-4 mt-12">
                <button
                    onClick={() => {
                        toast.warning('Chức năng đang được phát triển!');
                    }}
                    className="flex justify-center items-center bg-[#2f3346] hover:opacity-90 p-4 rounded-full size-[50px] cursor-pointer"
                >
                    <FaArrowLeft className="" />
                </button>
                <div className="flex items-center gap-4 bg-[#2f3346] px-8 rounded-full h-[50px]">
                    <span>Trang </span>
                    <span className="font-medium text-primary">1</span>
                    <span>/</span>
                    <span>25</span>
                </div>
                <button
                    onClick={() => {
                        toast.warning('Chức năng đang được phát triển!');
                    }}
                    className="flex justify-center items-center bg-[#2f3346] hover:opacity-90 p-4 rounded-full size-[50px] cursor-pointer"
                >
                    <FaArrowRight className="" />
                </button>
            </div>
        </div>
    );
}
