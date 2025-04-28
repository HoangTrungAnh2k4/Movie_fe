'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiSolidMovie } from 'react-icons/bi';
import { FaArrowTrendUp, FaArrowTrendDown, FaHeartCircleCheck } from 'react-icons/fa6';
import useSWR from 'swr';

export default function TopTrending() {
    const [listMovies1, setListMovies1] = useState<any[]>([]);
    const [listMovies2, setListMovies2] = useState<any[]>([]);

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR('https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1', fetcher);

    useEffect(() => {
        if (data) {
            setListMovies1(data.items.slice(0, 5)); // Lấy 5 thumb_url đầu tiên
            setListMovies2(data.items.slice(5, 10)); // Lấy 5 thumb_url tiếp theo
        }
    }, [data]);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="flex bg-transparent border border-[#fff2] rounded-xl">
            {/* left col */}
            <div className="flex-1 py-6 pl-16 border-[#fff2] border-r h-full">
                <div className="flex items-center gap-4">
                    <BiSolidMovie className="text-primary text-2xl" />
                    <h4 className="font-semibold"> SÔI NỔI NHẤT</h4>
                </div>

                <ul className="flex flex-col gap-5 mt-6">
                    {listMovies1?.map((item, index) => (
                        <li key={index} className="flex items-center gap-5">
                            <p className="opacity-40 font-semibold text-[#aaaaaa]">{index + 1}. </p>
                            {index % 2 === 0 ? (
                                <FaArrowTrendUp className="font-semibold text-[#bedc33] text-lg" />
                            ) : (
                                <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                            )}
                            <Image
                                src={item?.poster_url}
                                alt="Event Poster"
                                width={200}
                                height={400}
                                className="w-[40px] aspect-[3/4]"
                            />
                            <h5 className="hover:text-primary cursor-pointer">{item?.name}</h5>
                        </li>
                    ))}
                </ul>
            </div>

            {/* right col */}
            <div className="flex-1 py-6 pl-16 h-full">
                <div className="flex items-center gap-4">
                    <FaHeartCircleCheck className="text-primary text-2xl" />
                    <h4 className="font-semibold"> YÊU THÍCH NHẤT</h4>
                </div>

                <ul className="flex flex-col gap-5 mt-6">
                    {listMovies2?.map((item, index) => (
                        <li key={index} className="flex items-center gap-5">
                            <p className="opacity-40 font-semibold text-[#aaaaaa]">{index + 1}. </p>
                            {index % 2 === 0 ? (
                                <FaArrowTrendUp className="font-semibold text-[#bedc33] text-lg" />
                            ) : (
                                <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                            )}
                            <Image
                                src={item?.poster_url}
                                alt="Event Poster"
                                width={200}
                                height={400}
                                className="w-[40px] aspect-[3/4]"
                            />
                            <h5 className="hover:text-primary cursor-pointer">{item?.name}</h5>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
