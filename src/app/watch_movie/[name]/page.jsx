'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';
import Comment from '../../detail_movie/Comment';
import { FaCaretDown, FaPlay } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useParams } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import useSWR from 'swr';

import dynamic from 'next/dynamic';

const WatchMovieComponent = dynamic(() => import('../WatchMovie'), {
    ssr: false,
    loading: () => (
        <div className='pt-6'>
            <div className='aspect-video animate-pulse rounded-2xl bg-[#222]' />
        </div>
    ),
});

export default function WatchMovie() {
    const { name } = useParams();

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        `https://phimapi.com/phim/${name}`,
        fetcher,
    );

    const infor = data?.movie;

    if (data?.status === false) {
        return (
            <div className='bg-background flex h-screen flex-col items-center justify-center gap-4 px-4 text-center'>
                <h2 className='text-2xl font-semibold text-red-500'>
                    Bộ phim này đang bị lỗi
                </h2>
                <p className='text-lg text-red-300'>Vui lòng xem phim khác</p>
            </div>
        );
    }

    if (error) return <div>Failed to load</div>;
    if (isLoading)
        return (
            <div className='bg-background flex h-screen items-center justify-center'>
                <div className='border-primary h-16 w-16 animate-spin rounded-full border-4 border-t-transparent' />
            </div>
        );

    return (
        <div className='px-8 pt-26 pb-12 text-white'>
            <div className='flex items-center justify-start gap-3'>
                <div className='flex size-[30px] cursor-pointer items-center justify-center rounded-full border-[1px] border-[#ffffff80]'>
                    <IoIosArrowBack size={18} className='mr-[1px]' />
                </div>
                <p className='text-xl font-semibold'>{infor?.name}</p>
            </div>

            <WatchMovieComponent
                url={
                    infor?.trailer_url ||
                    'https://www.youtube.com/embed/8Qn_spdM5Zg'
                }
            />

            <div className='mt-12 flex flex-col lg:flex-row'>
                {/* col left */}
                <div className='border-[#ffffff10] lg:w-[70%] lg:border-r-2 lg:pr-6'>
                    <div className='flex items-start gap-8'>
                        <Image
                            className='aspect-[2/3] h-fit w-[70px] rounded-lg object-cover lg:w-[100px]'
                            src={
                                infor?.poster_url ||
                                'https://static.nutscdn.com/vimg/300-0/055875f8424f76d54b2a36feaa6edc07.jpg'
                            }
                            width={100}
                            height={150}
                            alt=''
                        />

                        <div className='flex-shrink-0'>
                            <h3 className='font-semibold lg:text-xl'>
                                {infor?.name}
                            </h3>
                            <h3 className='text-primary mt-3 text-sm'>
                                {infor?.origin_name}
                            </h3>
                            <ul className='mt-4 flex items-center justify-start gap-4 text-xs'>
                                <li className='from-primary rounded-md bg-gradient-to-bl to-white px-2 py-[2px] pt-[3px] font-semibold text-black'>
                                    {infor?.quality}
                                </li>
                                <li className='rounded-md bg-white px-2 py-[2px] pt-[3px] text-black'>
                                    T16
                                </li>
                                <li className='rounded-md border border-white bg-[#ffffff10] px-2 py-[2px] pt-[3px] text-white'>
                                    {infor?.year}
                                </li>
                                <li className='rounded-md border border-white bg-[#ffffff10] px-2 py-[2px] pt-[3px] text-white'>
                                    {infor?.time}
                                </li>
                            </ul>

                            <ul className='mt-4 hidden gap-2 lg:flex'>
                                <li className='rounded-md bg-[#f3f3f310] px-2 py-1.5 text-xs'>
                                    Hành Động
                                </li>
                                <li className='rounded-md bg-[#f3f3f310] px-2 py-1.5 text-xs'>
                                    Hình Sự
                                </li>
                                <li className='rounded-md bg-[#f3f3f310] px-2 py-1.5 text-xs'>
                                    Tâm Lý
                                </li>
                            </ul>
                        </div>

                        <p className='hidden text-sm text-[#aaaaaa] lg:block'>
                            {infor?.content}
                        </p>
                    </div>

                    <div className='mt-8'>
                        <ul className='flex items-center gap-12 border-b-2 border-[#ffffff10] text-sm'>
                            <li className='border-primary text-primary cursor-pointer border-b-2 px-2 pt-2 pb-2'>
                                Tập phim
                            </li>
                        </ul>

                        {/* content */}
                        <div className='mt-6'>
                            <div className='group relative w-fit'>
                                <div
                                    data-popovertarget='cac_phan'
                                    className='flex w-fit cursor-pointer items-center gap-6 rounded-lg px-4 py-2 text-xl hover:bg-[#ffffff10]'
                                >
                                    <FaBarsStaggered className='text-primary text-2xl' />
                                    <p className='font-semibold'>Phần 1</p>
                                    <FaCaretDown />
                                </div>

                                <div
                                    data-popover='manual'
                                    id='cac_phan'
                                    className='absolute right-0 bottom-15 z-50 hidden w-fit overflow-hidden rounded-lg bg-white py-2 text-sm group-hover:block'
                                >
                                    <h5 className='text-background2 mb-2 px-4 py-1'>
                                        Danh sách các phần{' '}
                                    </h5>
                                    <div className='bg-primary text-background2 px-4 py-2 font-semibold'>
                                        Phần 1
                                    </div>
                                </div>
                            </div>

                            <div className='mt-6 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
                                <div className='hover:text-primary flex h-[50px] w-[148px] cursor-pointer items-center justify-center gap-4 rounded-lg bg-[#ffffff10] px-4 text-sm font-semibold'>
                                    <FaPlay />
                                    <p className='text-sm'>Trailer</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-12'>
                            <Comment />
                        </div>
                    </div>
                </div>

                {/* col right */}
                <div className=':w-[30%] hidden pl-6 lg:block'>
                    <h4 className='text-xl font-semibold'>Diễn viên</h4>
                    <ul className='-mx-4 mt-6 flex justify-between'>
                        <li className='w-[33%] justify-items-center'>
                            <Image
                                className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                                src='https://image.tmdb.org/t/p/w500/4E7NuJsR7AnMYAefFSHkj4cftdf.jpg'
                                width={80}
                                height={80}
                                alt=''
                            />

                            <p className='text-sm'>Han Hyo-joo</p>
                        </li>
                        <li className='w-[33%] justify-items-center'>
                            <Image
                                className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                                src='https://image.tmdb.org/t/p/w500/tpb0eZLDvIaBVNLXFpxXAdPxooo.jpg'
                                width={80}
                                height={80}
                                alt=''
                            />
                            <p className='text-sm'>Km Da-mi</p>
                        </li>
                        <li className='w-[33%] justify-items-center'>
                            <Image
                                className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                                src='https://image.tmdb.org/t/p/w500/hRDiuKWwe156zRjEu826eci7H3r.jpg'
                                width={80}
                                height={80}
                                alt=''
                            />
                            <p className='text-sm'>Choi Woo-shik</p>
                        </li>
                    </ul>
                    <ul className='-mx-4 mt-6 flex justify-between'>
                        <li className='w-[33%] justify-items-center'>
                            <Image
                                className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                                src='https://image.tmdb.org/t/p/w500/wQjOvAFqCItwMw7dxa486KnGgEE.jpg'
                                width={80}
                                height={80}
                                alt=''
                            />
                            <p className='text-sm'>Moon Sung-keun</p>
                        </li>
                        <li className='w-[33%] justify-items-center'>
                            <Image
                                className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                                src='https://image.tmdb.org/t/p/w500/p0LjCRqVqgTyvlZScMmsVFCnTIt.jpg'
                                width={80}
                                height={80}
                                alt=''
                            />
                            <p className='text-sm'>Ryu Seung-ryong</p>
                        </li>
                        <li className='w-[33%] justify-items-center'>
                            <Image
                                className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                                src='https://image.tmdb.org/t/p/w500/69gbyFI0ET0l0dyjKChlx1Zx269.jpg'
                                width={80}
                                height={80}
                                alt=''
                            />
                            <p className='text-sm'>Zo In-sung</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
