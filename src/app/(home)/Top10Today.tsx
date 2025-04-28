'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function Top10Today() {
    const [listMovies, setListMovies] = useState<any[]>([]);

    const fetcher = (urls: string[]) => Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));

    const movieUrls = [
        'https://phimapi.com/phim/nguoi-hung-yeu-duoi',
        'https://phimapi.com/phim/khi-cuoc-doi-cho-ban-qua-quyt',
        'https://phimapi.com/phim/doi-thieu-nien-sieu-dang',
        'https://phimapi.com/phim/chuyen-doi-bac-si-noi-tru',
        'https://phimapi.com/phim/kho-do-danh',
    ];

    const { data, error, isLoading } = useSWR(movieUrls, fetcher);

    useEffect(() => {
        if (data) {
            setListMovies(data);
        }
    }, [data]);

    console.log(listMovies);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="">
            <div className="gap-6 grid grid-cols-5">
                {listMovies?.map((item, index) => (
                    <div key={index} className="group relative rounded-2xl">
                        <div
                            className={`hover:bg-primary overflow-hidden hover:p-1 cursor-pointer duration-300  rounded-2xl  itemTop10 ${
                                index % 2 != 0 ? 'itemTop10Left' : 'itemTop10Right'
                            } `}
                        >
                            <Image
                                src={item?.movie?.poster_url}
                                alt="Movie Poster"
                                width={400}
                                height={600}
                                className={`rounded-xl object-center object-cover aspect-[2/3] ${
                                    index % 2 != 0 ? 'itemTop10Left' : 'itemTop10Right'
                                }`}
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl w-full h-full transition duration-300" />
                        </div>

                        <div className="flex items-center gap-2 mt-3">
                            <div
                                className=""
                                style={{
                                    background: 'linear-gradient(39deg, rgba(254, 207, 89, 1), rgba(255, 241, 204, 1))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontStyle: 'italic',
                                    fontWeight: '800',
                                    fontSize: '4.2em',
                                    lineHeight: '1',
                                    width: '50px',
                                }}
                            >
                                {index + 1}
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-semibold text-white hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer">
                                    {item.movie?.name}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs">{item?.movie?.origin_name}</h3>
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
        </div>
    );
}
