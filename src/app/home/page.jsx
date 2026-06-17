'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

    return (
        <div className='relative'>
            <div className='bg-background mx-auto w-full max-w-[1600px] px-4 pb-20 text-white transition-opacity lg:px-8'>
                <div className='-mx-4 min-h-[400px] lg:-mx-8 lg:min-h-[650px]'>
                    <Banner setList_movie={setList_movie} />
                </div>

                {/* Lớp phủ để che ranh giới của banner với phần còn lại */}
                <div className='-mx-4 -mt-26 h-36 bg-[linear-gradient(to_top,_#191b24_30%,_transparent_100%)] lg:-mx-8'></div>

                <div className='relative z-30 -mt-20 lg:min-h-[200px]'>
                    <h4 className='mb-6 text-xl font-semibold lg:text-2xl'>
                        Bạn đang quan tâm gì?
                    </h4>
                    <TypeList />
                </div>

                <div className='mt-12 lg:mt-20 lg:min-h-[350px]'>
                    <Poster30_4 />
                </div>

                <div className='mt-20'>
                    <TopTrending list_movie={list_movie.slice(0, 10)} />
                </div>

                <div className='mt-12 lg:mt-16'>
                    <h4 className='mb-6 text-xl font-semibold lg:text-2xl'>
                        Top 5 phim bộ hôm nay
                    </h4>

                    <Top10Today list_movie={list_movie.slice(0, 5)} />
                </div>

                <div className='mt-12 lg:mt-20'>
                    <div className='mb-6 flex items-center gap-6'>
                        <h4 className='text-xl font-semibold lg:text-2xl'>
                            Phim điện ảnh mới coóng
                        </h4>
                        <Link
                            href={`list_movie`}
                            className='group hover:text-primary mt-0.5 flex w-8 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-[#fff6] p-1 transition-all duration-300 hover:w-28'
                        >
                            <p className='scale-0 text-xs whitespace-nowrap opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
                                Xem thêm
                            </p>
                            <IoIosArrowForward className='-ml-16 flex-shrink-0 pl-[2px] text-lg font-semibold transition-all duration-300 group-hover:-ml-0' />
                        </Link>
                    </div>

                    <ListTypeRetangle list_movie={list_movie.slice(6, 12)} />
                </div>

                <div className='mt-12 hidden lg:mt-20 lg:block'>
                    <div className='mb-6 flex items-center gap-6'>
                        <h4 className='text-lg font-semibold lg:text-2xl'>
                            Mãn nhãn với phim chiếu rạp
                        </h4>
                        <Link
                            href={`list_movie`}
                            className='group hover:text-primary mt-0.5 flex w-8 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-[#fff6] p-1 transition-all duration-300 hover:w-28'
                        >
                            <p className='scale-0 text-xs whitespace-nowrap opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
                                Xem thêm
                            </p>
                            <IoIosArrowForward className='-ml-16 flex-shrink-0 pl-[2px] text-lg font-semibold transition-all duration-300 group-hover:-ml-0' />
                        </Link>
                    </div>

                    <TopCinema list_movie={list_movie.slice(16, 20)} />
                </div>

                <div className='mt-12 lg:-mx-0 lg:mt-20'>
                    <ListCountryMovie
                        moveToDetail={moveToDetail}
                        list_movie={list_movie.slice(11, 24)}
                    />
                </div>
            </div>
        </div>
    );
}
