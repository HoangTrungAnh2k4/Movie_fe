'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function ListTypeRetangle() {
    const [listMovies, setListMovies] = useState<any[]>([]);

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
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
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="">
            <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {listMovies.map((item, index) => (
                    <div key={index} className="group relative rounded-2xl">
                        <div className="hover:bg-primary hover:p-1 rounded-2xl overflow-hidden duration-300 cursor-pointer itemTop10">
                            <Image
                                src={item?.poster_url}
                                alt="Movie Poster"
                                width={400}
                                height={600}
                                className="rounded-xl w-full h-auto aspect-[300/450]"
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl w-full h-auto aspect-[300/450] transition duration-300" />
                        </div>

                        <div className="flex flex-col items-center gap-1 mt-3">
                            <h3 className="hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer">
                                {item?.name}
                            </h3>
                            <h4 className="text-[#aaaaaa] text-xs">{item?.origin_name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
