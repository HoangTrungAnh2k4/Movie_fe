'use client';

import { FaPlay, FaHeart, FaExclamationCircle } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

type CategoryItem = { name: string };
type ThumbItem = {
    thumb_url: string;
    name: string;
    year: string;
    time: string;
    quality: string;
    category: CategoryItem[];
    type: string;
};

function Banner() {
    const router = useRouter();
    const [activeMovie, setActiveMovie] = useState<number>(0);

    const [listMovies, setListMovies] = useState<ThumbItem[]>([]);

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR('https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1', fetcher);

    const moveToDetail = () => {
        router.push(`/detail_movie/${listMovies[activeMovie]?.slug}`);
    };

    useEffect(() => {
        if (data?.items) {
            // Lấy 5 thumb_url đầu tiên
            const thumbs = data.items.slice(0, 5);
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
        <div
            className="inset-0 bg-cover bg-no-repeat bg-center shadow-[inset_150px_0_200px_200px_rgba(0,0,0,0.8)] w-full h-[650px] text-white"
            style={{
                backgroundImage: `url(${listMovies[activeMovie]?.thumb_url})`,
            }}
        >
            <div className="flex h-full">
                <div className="flex flex-col flex-1 justify-center px-8 h-full">
                    <h1 onClick={moveToDetail} className="font-semibold hover:text-primary text-3xl cursor-pointer">
                        {listMovies[activeMovie]?.name}
                    </h1>

                    <h3 onClick={moveToDetail} className="mt-2 text-[#aaaaaa] text-sm">
                        {listMovies[activeMovie]?.origin_name}
                    </h3>

                    <ul className="flex justify-start items-center gap-4 mt-8 text-xs">
                        <li className="bg-gradient-to-bl from-primary to-white px-2 py-[2px] pt-[3px] rounded-md font-semibold text-black">
                            {listMovies[activeMovie]?.quality}
                        </li>
                        <li className="bg-white px-2 py-[2px] pt-[3px] rounded-md text-black">
                            {listMovies[activeMovie]?.type}
                        </li>
                        <li className="px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">
                            {listMovies[activeMovie]?.year}
                        </li>
                        <li className="px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">
                            {listMovies[activeMovie]?.time}
                        </li>
                    </ul>

                    <ul className="flex justify-start items-center gap-4 mt-4 text-xs">
                        {listMovies[activeMovie]?.category?.map((item: CategoryItem, index: number) => (
                            <li key={index} className="bg-[#f3f3f310] px-2 py-[2px] pt-[3px] rounded-md text-xs">
                                {item.name}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-8 w-[35%] text-sm line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde aut similique veritatis
                        reiciendis quis dignissimos aliquam sit blanditiis explicabo. Consectetur dolore iusto quasi
                        nostrum doloremque minus, inventore ipsa dolorem.
                    </p>

                    <div className="flex justify-between items-center gap-4 mt-16 text-xs">
                        <div className="flex items-center gap-8">
                            <button
                                onClick={moveToDetail}
                                className="flex justify-center items-center bg-gradient-to-tr from-yellow-400 to-yellow-50 hover:shadow-[0_5px_10px_10px_rgba(255,218,125,0.15)] rounded-full size-[70px] text-black cursor-pointer"
                            >
                                <FaPlay className="ml-1 text-2xl" />
                            </button>

                            <div className="flex items-center border-[#ffffff10] border-2 hover:border-white rounded-full w-fit h-[50px]">
                                <button className="flex justify-center items-center px-5 py-2 border-[#ffffff10] border-r-2 h-full text-white hover:text-primary cursor-pointer">
                                    <FaHeart className="ml-1 text-xl" />
                                </button>
                                <button className="flex justify-center items-center px-5 py-2 h-full text-white hover:text-primary cursor-pointer">
                                    <FaExclamationCircle className="ml-1 text-2xl rotate-180" />
                                </button>
                            </div>
                        </div>

                        {/* slider */}
                        <ul className="flex justify-center items-center gap-4">
                            {listMovies.map((item: ThumbItem, index: number) => {
                                return (
                                    <li
                                        key={index}
                                        className={`${
                                            activeMovie === index ? 'border-[3px] border-white' : 'border-0'
                                        } w-[80px]`}
                                        onClick={() => setActiveMovie(index)}
                                    >
                                        <Image
                                            className="object-center object-cover aspect-[25/14] cursor-pointer"
                                            src={item.thumb_url}
                                            width={80}
                                            height={80}
                                            alt=""
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
