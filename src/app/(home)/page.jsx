'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { IoIosArrowForward } from 'react-icons/io';

import Banner from './Banner';
import TypeList from './TypeList';
const Poster30_4 = dynamic(() => import('./Poster30_4'), {
    ssr: false,
});
const TopTrending = dynamic(() => import('./TopTrending'), {
    ssr: false,
});
const Top10Today = dynamic(() => import('./Top10Today'), {
    ssr: false,
});
const TopCinema = dynamic(() => import('./TopCinema'), {
    ssr: false,
});
const ListTypeRetangle = dynamic(() => import('./ListTypeRetangle'), {
    ssr: false,
});
const ListCountryMovie = dynamic(() => import('./ListCountryMovie'), {
    ssr: false,
});

export default function Home() {
    const [list_movie, setList_movie] = useState([]);

    const router = useRouter();

    const moveToDetail = (name) => {
        router.push(`/detail_movie/${name}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative">
            <div className="bg-background mx-auto px-4 lg:px-8 pb-20 w-full max-w-[1600px] text-white transition-opacity">
                <div className="-mx-4 lg:-mx-8 min-h-[400px] lg:min-h-[650px]">
                    <Banner setList_movie={setList_movie} />
                </div>

                {/* Lớp phủ để che ranh giới của banner với phần còn lại */}
                <div className="bg-[linear-gradient(to_top,_#191b24_30%,_transparent_100%)] -mx-4 lg:-mx-8 -mt-26 h-36"></div>

                <div className="z-30 relative -mt-20  lg:min-h-[200px]">
                    <h4 className="mb-6 text-xl font-semibold lg:text-2xl">Bạn đang quan tâm gì?</h4>

                    <TypeList />
                </div>

                <div className="mt-12 lg:mt-20   lg:min-h-[350px]">
                    <Poster30_4 />
                </div>

                <div className="mt-20">
                    <TopTrending list_movie={list_movie.slice(0, 10)} />
                </div>

                <div className="mt-12 lg:mt-16">
                    <h4 className="mb-6 text-xl font-semibold lg:text-2xl">Top 5 phim bộ hôm nay</h4>

                    <Top10Today list_movie={list_movie.slice(0, 5)} />
                </div>

                <div className="mt-12 lg:mt-20">
                    <div className="flex items-center gap-6 mb-6">
                        <h4 className="text-xl font-semibold lg:text-2xl">Phim điện ảnh mới coóng</h4>
                        <Link
                            href={`list_movie`}
                            className="group flex justify-center items-center gap-2 mt-0.5 p-1 border border-[#fff6] rounded-full w-8 hover:w-28 overflow-hidden hover:text-primary transition-all duration-300 cursor-pointer"
                        >
                            <p className="text-xs transition-all duration-300 scale-0 opacity-0 group-hover:opacity-100 whitespace-nowrap group-hover:scale-100">
                                Xem thêm
                            </p>
                            <IoIosArrowForward className="flex-shrink-0 -ml-16 group-hover:-ml-0 pl-[2px] font-semibold text-lg transition-all duration-300" />
                        </Link>
                    </div>

                    <ListTypeRetangle list_movie={list_movie.slice(6, 12)} />
                </div>

                <div className="mt-12 lg:mt-20">
                    <div className="flex items-center gap-6 mb-6">
                        <h4 className="text-xl font-semibold lg:text-2xl">Phim truyền hình</h4>
                        <Link
                            href={`list_movie`}
                            className="group flex justify-center items-center gap-2 mt-0.5 p-1 border border-[#fff6] rounded-full w-8 hover:w-28 overflow-hidden hover:text-primary transition-all duration-300 cursor-pointer"
                        >
                            <p className="text-xs transition-all duration-300 scale-0 opacity-0 group-hover:opacity-100 whitespace-nowrap group-hover:scale-100">
                                Xem thêm
                            </p>
                            <IoIosArrowForward className="flex-shrink-0 -ml-16 group-hover:-ml-0 pl-[2px] font-semibold text-lg transition-all duration-300" />
                        </Link>
                    </div>

                    <ListTypeRetangle list_movie={list_movie.slice(13, 18)} />
                </div>

                <div className="hidden mt-12 lg:block lg:mt-20">
                    <div className="flex items-center gap-6 mb-6">
                        <h4 className="text-lg font-semibold lg:text-2xl">Mãn nhãn với phim chiếu rạp</h4>
                        <Link
                            href={`list_movie`}
                            className="group flex justify-center items-center gap-2 mt-0.5 p-1 border border-[#fff6] rounded-full w-8 hover:w-28 overflow-hidden hover:text-primary transition-all duration-300 cursor-pointer"
                        >
                            <p className="text-xs transition-all duration-300 scale-0 opacity-0 group-hover:opacity-100 whitespace-nowrap group-hover:scale-100">
                                Xem thêm
                            </p>
                            <IoIosArrowForward className="flex-shrink-0 -ml-16 group-hover:-ml-0 pl-[2px] font-semibold text-lg transition-all duration-300" />
                        </Link>
                    </div>

                    <TopCinema list_movie={list_movie.slice(16, 20)} />
                </div>

                <div className="mt-12 lg:-mx-0 lg:mt-20">
                    <ListCountryMovie moveToDetail={moveToDetail} list_movie={list_movie.slice(11, 24)} />
                </div>
            </div>
        </div>
    );
}
