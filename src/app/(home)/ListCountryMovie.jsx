'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import useSWR from 'swr';

export default function ListCountryMovie({ moveToDetail }) {
    const [listMovies1, setListMovies1] = useState([]);
    const [listMovies2, setListMovies2] = useState([]);
    const [listMovies3, setListMovies3] = useState([]);

    const fetcher = (urls) => Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));

    const movieUrls = [
        'https://phimapi.com/phim/nguoi-hung-yeu-duoi',
        'https://phimapi.com/phim/khi-cuoc-doi-cho-ban-qua-quyt',
        'https://phimapi.com/phim/nu-tu-bong-toi',
        'https://phimapi.com/phim/chuyen-doi-bac-si-noi-tru',
        'https://phimapi.com/phim/kho-do-danh',
        'https://phimapi.com/phim/tan-cung-cua-vo-tan',
        'https://phimapi.com/phim/huyen-kinh',
        'https://phimapi.com/phim/pha-chien',
        'https://phimapi.com/phim/cuoc-song-tuoi-dep',
        'https://phimapi.com/phim/nhung-nguoi-con-sot-lai-phan-2',
        'https://phimapi.com/phim/nhung-manh-ghep-cam-xuc-2',
        'https://phimapi.com/phim/chien-tranh-giua-cac-vi-sao-andor-phan-1',
        'https://phimapi.com/phim/ban-be-hang-xom',
    ];

    const { data, error, isLoading } = useSWR(movieUrls, fetcher);

    useEffect(() => {
        if (data) {
            setListMovies1(data.slice(0, 4));
            setListMovies2(data.slice(4, 8));
            setListMovies3(data.slice(8, 12));
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
        <div className="bg-gradient-to-b from-background2 to-background p-6 lg:p-8 rounded-xl">
            <div className="flex lg:flex-row flex-col mb-8">
                <div className="flex flex-row lg:flex-col flex-shink-0 justify-between lg:justify-start gap-2 lg:w-[15%] text-wrap">
                    <h3
                        className="w-[200px] font-semibold text-gradient lg:text-[1.8em] text-xl"
                        style={{
                            background: 'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(103, 65, 150) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim Hàn Quốc Mới
                    </h3>
                    <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                        <Link href={'/list_movie'} className="text-xs">
                            Xem toàn bộ
                        </Link>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex lg:flex-none gap-3 lg:gap-6 lg:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-4 lg:mt-0 lg:w-[85%] overflow-x-auto">
                    {listMovies1.map((item, index) => (
                        <Link
                            href={`/detail_movie/${item?.movie?.slug}`}
                            key={index}
                            className="group relative rounded-xl w-[160px] sm:w-[250px] lg:w-auto"
                        >
                            <div className="group bg-primary rounded-xl w-[160px] sm:w-[250px] lg:w-auto overflow-hidden cursor-pointer">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src={item?.movie?.thumb_url}
                                        alt="Movie Poster"
                                        width={400}
                                        height={200}
                                        className="rounded-xl w-[160px] sm:w-[250px] lg:w-auto aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 lg:pl-4">
                                <h3
                                    onClick={() => moveToDetail(item?.movie?.slug)}
                                    className="font-semibold text-white hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer"
                                >
                                    {item?.movie.name}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs line-clamp-1">{item?.movie?.origin_name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex lg:flex-row flex-col mb-8">
                <div className="flex flex-row lg:flex-col flex-shink-0 justify-between lg:justify-start gap-2 lg:w-[15%] text-wrap">
                    <h3
                        className="w-[200px] font-semibold text-gradient lg:text-[1.8em] text-xl"
                        style={{
                            background: 'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(247, 161, 11) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim Trung Quốc Mới
                    </h3>
                    <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                        <Link href={'/list_movie'} className="text-xs">
                            Xem toàn bộ
                        </Link>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex lg:flex-none gap-3 lg:gap-6 lg:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-4 lg:mt-0 lg:w-[85%] overflow-x-auto">
                    {listMovies1.map((item, index) => (
                        <Link
                            href={`/detail_movie/${item?.movie?.slug}`}
                            key={index}
                            className="group relative rounded-xl w-[160px] sm:w-[250px] lg:w-auto"
                        >
                            <div className="group bg-primary rounded-xl w-[160px] sm:w-[250px] lg:w-auto overflow-hidden cursor-pointer">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src={item?.movie?.thumb_url}
                                        alt="Movie Poster"
                                        width={400}
                                        height={200}
                                        className="rounded-xl w-[160px] sm:w-[250px] lg:w-auto aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 lg:pl-4">
                                <h3
                                    onClick={() => moveToDetail(item?.movie?.slug)}
                                    className="font-semibold text-white hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer"
                                >
                                    {item?.movie.name}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs line-clamp-1">{item?.movie?.origin_name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex lg:flex-row flex-col mb-8">
                <div className="flex flex-row lg:flex-col flex-shink-0 justify-between lg:justify-start gap-2 lg:w-[15%] text-wrap">
                    <h3
                        className="w-[200px] font-semibold text-gradient lg:text-[1.8em] text-xl"
                        style={{
                            background: 'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(255, 0, 153) 130%)',
                            WebkitTextFillColor: 'transparent',
                            WebkitBackgroundClip: 'text',
                        }}
                    >
                        Phim US-UK Mới
                    </h3>
                    <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                        <Link href={'/list_movie'} className="text-xs">
                            Xem toàn bộ
                        </Link>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex lg:flex-none gap-3 lg:gap-6 lg:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-4 lg:mt-0 lg:w-[85%] overflow-x-auto">
                    {listMovies1.map((item, index) => (
                        <Link
                            href={`/detail_movie/${item?.movie?.slug}`}
                            key={index}
                            className="group relative rounded-xl w-[160px] sm:w-[250px] lg:w-auto"
                        >
                            <div className="group bg-primary rounded-xl w-[160px] sm:w-[250px] lg:w-auto overflow-hidden cursor-pointer">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src={item?.movie?.thumb_url}
                                        alt="Movie Poster"
                                        width={400}
                                        height={200}
                                        className="rounded-xl w-[160px] sm:w-[250px] lg:w-auto aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 lg:pl-4">
                                <h3
                                    onClick={() => moveToDetail(item?.movie?.slug)}
                                    className="font-semibold text-white hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer"
                                >
                                    {item?.movie.name}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs line-clamp-1">{item?.movie?.origin_name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
