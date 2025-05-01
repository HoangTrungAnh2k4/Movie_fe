'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { IoIosArrowForward } from 'react-icons/io';

import Banner from './Banner';
import TypeList from './TypeList';
import Poster30_4 from './Poster30_4';
import TopTrending from './TopTrending';
import Top10Today from './Top10Today';
import TopCinema from './TopCinema';
import ListTypeRetangle from './ListTypeRetangle';
import ListCountryMovie from './ListCountryMovie';

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const moveToDetail = (name) => {
        router.push(`/detail_movie/${name}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative">
            {isLoading && (
                <div className="z-50 fixed inset-0 flex justify-center items-center bg-background">
                    <div className="border-4 border-primary border-t-transparent rounded-full w-16 h-16 animate-spin" />
                </div>
            )}
            <div
                className={`${
                    isLoading ? 'opacity-30 pointer-events-none' : 'opacity-100'
                } bg-background mx-auto px-8 pb-20 w-full max-w-[1600px] text-white transition-opacity`}
            >
                <div className="-mx-8">
                    <Banner moveToDetail={moveToDetail} />
                </div>

                {/* Lớp phủ để che ranh giới của banner với phần còn lại */}
                <div className="bg-[linear-gradient(to_top,_#191b24_30%,_transparent_100%)] -mx-8 -mt-26 h-36"></div>

                <div className="z-40 relative -mt-20">
                    <h4 className="mb-6 font-semibold text-2xl">Bạn đang quan tâm gì?</h4>

                    <TypeList />
                </div>

                <div className="mt-20">
                    <Poster30_4 />
                </div>

                <div className="mt-20">
                    <TopTrending moveToDetail={moveToDetail} />
                </div>

                <div className="mt-16">
                    <h4 className="mb-6 font-semibold text-2xl">Top 5 phim bộ hôm nay</h4>

                    <Top10Today moveToDetail={moveToDetail} />
                </div>

                <div className="mt-20">
                    <div className="flex items-center gap-6 mb-6">
                        <h4 className="font-semibold text-2xl">Mãn nhãn với phim chiếu rạp</h4>
                        <div className="group flex justify-center items-center gap-2 mt-0.5 p-1 border border-[#fff6] rounded-full w-8 hover:w-28 overflow-hidden hover:text-primary transition-all duration-300 cursor-pointer">
                            <p className="opacity-0 group-hover:opacity-100 text-xs whitespace-nowrap scale-0 group-hover:scale-100 transition-all duration-300">
                                Xem thêm
                            </p>
                            <IoIosArrowForward className="flex-shrink-0 -ml-16 group-hover:-ml-0 pl-[2px] font-semibold text-lg transition-all duration-300" />
                        </div>
                    </div>

                    <TopCinema moveToDetail={moveToDetail} />
                </div>

                <div className="mt-20">
                    <div className="flex items-center gap-6 mb-6">
                        <h4 className="font-semibold text-2xl">Phim điện ảnh mới coóng</h4>
                        <div className="group flex justify-center items-center gap-2 mt-0.5 p-1 border border-[#fff6] rounded-full w-8 hover:w-28 overflow-hidden hover:text-primary transition-all duration-300 cursor-pointer">
                            <p className="opacity-0 group-hover:opacity-100 text-xs whitespace-nowrap scale-0 group-hover:scale-100 transition-all duration-300">
                                Xem thêm
                            </p>
                            <IoIosArrowForward className="flex-shrink-0 -ml-16 group-hover:-ml-0 pl-[2px] font-semibold text-lg transition-all duration-300" />
                        </div>
                    </div>

                    <ListTypeRetangle moveToDetail={moveToDetail} />
                </div>

                <div className="mt-20">
                    <ListCountryMovie moveToDetail={moveToDetail} />
                </div>
            </div>
        </div>
    );
}
