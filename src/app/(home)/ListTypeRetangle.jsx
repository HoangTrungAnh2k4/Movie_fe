'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function ListTypeRetangle() {
    const [listMovies, setListMovies] = useState([]);

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        'https://phimapi.com/danh-sach/phim-moi-cap-nhat-v2?page=1&limit=6',
        fetcher,
    );

    useEffect(() => {
        if (data?.items) {
            // Lấy 7 thumb_url đầu tiên
            const thumbs = data.items;
            setListMovies(thumbs);
        }
    }, [data]);

    if (error) return <div>Failed to load</div>;
    if (isLoading)
        return (
            <div role="status" className="max-w-sm animate-pulse">
                <div className="bg-gray-100 dark:bg-gray-700 mb-4 rounded-full w-48 h-2.5"></div>
                <div className="bg-gray-100 dark:bg-gray-700 mb-2.5 rounded-full max-w-[360px] h-2"></div>
                <div className="bg-gray-100 dark:bg-gray-700 mb-2.5 rounded-full h-2"></div>
                <div className="bg-gray-100 dark:bg-gray-700 mb-2.5 rounded-full max-w-[330px] h-2"></div>
                <div className="bg-gray-100 dark:bg-gray-700 mb-2.5 rounded-full max-w-[300px] h-2"></div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full max-w-[360px] h-2"></div>
                <span className="sr-only">Loading...</span>
            </div>
        );

    return (
        <div className="">
            <div className="flex lg:flex-none gap-4 lg:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-4 pt-4 overflow-x-auto">
                {listMovies.map((item, index) => (
                    <div key={index} className="group relative rounded-2xl w-[160px] sm:w-[250px] lg:w-auto">
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            className="block hover:bg-primary hover:p-1 rounded-2xl w-[160px] sm:w-[250px] lg:w-auto overflow-hidden duration-300 cursor-pointer"
                        >
                            <Image
                                src={item?.poster_url}
                                alt="Movie Poster"
                                width={400}
                                height={600}
                                className="rounded-xl w-[160px] sm:w-[250px] lg:w-auto aspect-[300/450]"
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl w-full h-auto aspect-[300/450] transition duration-300" />
                        </Link>

                        <div className="flex flex-col items-center gap-1 mt-3">
                            <Link
                                href={`/detail_movie/${item?.slug}`}
                                className="font-semibold hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer"
                            >
                                {item?.name}
                            </Link>
                            <h4 className="text-[#aaaaaa] text-xs line-clamp-1">{item?.origin_name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
