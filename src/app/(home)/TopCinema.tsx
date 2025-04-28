'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export function TopCinema() {
    const [listMovies, setListMovies] = useState<any[]>([]);

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        'https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1&limit=4',
        fetcher,
    );

    useEffect(() => {
        if (data?.items) {
            // Lấy 5 thumb_url đầu tiên
            const thumbs = data.items.slice(0, 4);
            setListMovies(thumbs);
        }
    }, [data]);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {listMovies.map((item, index) => (
                <div key={index} className="group relative rounded-xl">
                    <div className="group bg-primary rounded-xl overflow-hidden cursor-pointer">
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src={item?.thumb_url}
                                alt="Movie Poster"
                                width={400}
                                height={200}
                                className="rounded-xl aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                            />
                        </div>

                        {/* lớp phủ */}
                        <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                    </div>

                    <div className="z-20 relative flex items-end gap-4 shadow-2xl -mt-[45px] px-6">
                        <Image
                            src={item?.poster_url}
                            alt="Movie Poster"
                            width={400}
                            height={200}
                            className="border border-[#aaaaaa] rounded-xl w-[80px] h-auto aspect-[100/157]"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-white hover:text-primary text-sm duration-300 cursor-pointer">
                                {item?.name}
                            </h3>
                            <h3 className="text-[#aaaaaa] text-xs">{item?.origin_name} </h3>
                            <ul className="flex justify-start gap-4 mt-[2px] text-[#aaa]">
                                <li className="text-xs line-clamp-1">{item?.movie?.type}</li>
                                <li className="text-xs line-clamp-1">{item?.movie?.year}</li>
                                <li className="text-xs line-clamp-1">{item?.movie?.episode_current}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
