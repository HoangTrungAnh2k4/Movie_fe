'use client';

import Image from 'next/image';
import { FaFilter } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import {
    countryOptions,
    genreOptions,
    sortOptions,
    typeOptions,
    yearOptions,
} from './types/type';

export default function ListMovie() {
    const [listMovies, setListMovies] = useState([]);
    const [filters, setFilters] = useState({
        country: 'all',
        type: 'all',
        genre: 'all',
        year: 'all',
        sort: 'all',
    });

    const filterRef = useRef(null);

    const filterItemClass = (isActive) =>
        `flex-shrink-0 cursor-pointer rounded-lg border px-3 py-2 text-sm transition-colors duration-200 ${
            isActive
                ? 'border-primary text-primary'
                : 'border-transparent text-[#fff]/80 hover:border-[#fff3] hover:text-primary'
        }`;

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        'https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=2',
        fetcher,
    );

    useEffect(() => {
        if (data?.items) {
            console.log(data.items);

            // Lấy 5 thumb_url đầu tiên
            const thumbs = data.items;
            setListMovies(thumbs);
        }
    }, [data]);

    if (error) return <div>Failed to load</div>;
    if (isLoading)
        return (
            <div className='bg-background flex h-screen items-center justify-center'>
                <div className='border-primary h-16 w-16 animate-spin rounded-full border-4 border-t-transparent' />
            </div>
        );

    return (
        <div className='px-8 pt-20 pb-12 text-white'>
            <div
                onClick={() => {
                    filterRef.current.classList.toggle('hidden');
                    filterRef.current.classList.toggle('flex');
                }}
                className='my-6 flex w-fit cursor-pointer items-center gap-3 rounded-lg px-4 py-2 font-medium text-white hover:bg-[#ffffff10]'
            >
                <FaFilter />
                <p>Bộ lọc</p>
            </div>

            <div
                ref={filterRef}
                className='lg:;pl-0 mb-12 hidden flex-col gap-5 rounded-xl border-[1px] border-[#fff3] py-6 lg:pr-8'
            >
                <ul className='flex items-start gap-2'>
                    <h4 className='mt-2 mr-2 w-[80px] flex-shrink-0 text-end text-sm font-semibold lg:w-[130px]'>
                        Quốc gia:{' '}
                    </h4>
                    <ul className='flex flex-wrap items-center gap-2 gap-y-2'>
                        {countryOptions.map((item) => (
                            <li
                                key={item.value}
                                onClick={() =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        country: item.value,
                                    }))
                                }
                                className={filterItemClass(
                                    filters.country === item.value,
                                )}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </ul>

                <ul className='flex items-start gap-2'>
                    <h4 className='mt-2 mr-2 w-[80px] flex-shrink-0 text-end text-sm font-semibold lg:w-[130px]'>
                        Loại phim:{' '}
                    </h4>
                    <ul className='flex flex-wrap items-center gap-2 gap-y-2'>
                        {typeOptions.map((item) => (
                            <li
                                key={item.value}
                                onClick={() =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        type: item.value,
                                    }))
                                }
                                className={filterItemClass(
                                    filters.type === item.value,
                                )}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </ul>

                <ul className='flex items-start gap-2'>
                    <h4 className='mt-2 mr-2 w-[80px] flex-shrink-0 text-end text-sm font-semibold lg:w-[130px]'>
                        Thể loại:
                    </h4>
                    <ul className='flex flex-wrap items-center gap-2 gap-y-2'>
                        {genreOptions.map((item) => (
                            <li
                                key={item.value}
                                onClick={() =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        genre: item.value,
                                    }))
                                }
                                className={filterItemClass(
                                    filters.genre === item.value,
                                )}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </ul>

                <ul className='flex items-start gap-2'>
                    <h4 className='mt-2 mr-2 w-[80px] flex-shrink-0 text-end text-sm font-semibold lg:w-[130px]'>
                        Năm sản xuất:
                    </h4>
                    <ul className='flex flex-wrap items-center gap-2 gap-y-2'>
                        {yearOptions.map((item) => (
                            <li
                                key={item.value}
                                onClick={() =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        year: item.value,
                                    }))
                                }
                                className={filterItemClass(
                                    filters.year === item.value,
                                )}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </ul>

                <ul className='flex items-start gap-2'>
                    <h4 className='mt-2 mr-2 w-[80px] flex-shrink-0 text-end text-sm font-semibold lg:w-[130px]'>
                        Sắp xếp:{' '}
                    </h4>
                    <ul className='flex flex-wrap items-center gap-2 gap-y-2'>
                        {sortOptions.map((item) => (
                            <li
                                key={item.value}
                                onClick={() =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        sort: item.value,
                                    }))
                                }
                                className={filterItemClass(
                                    filters.sort === item.value,
                                )}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </ul>

                <div className='mt-4 flex justify-start gap-4 lg:ml-[150px]'>
                    <button
                        onClick={() => {
                            window.location.reload();
                        }}
                        className='cursor-pointer rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-50 px-6 py-2 text-sm font-semibold text-[#191b24] hover:shadow-[0_0_10px_5px_rgba(255,218,125,0.15)]'
                    >
                        Lọc kết quả
                    </button>
                    <button
                        onClick={() => {
                            filterRef.current.classList.toggle('hidden');
                            filterRef.current.classList.toggle('flex');
                        }}
                        className='cursor-pointer rounded-full border border-[#ffffff80] px-6 py-2 shadow-[#ffffff80] hover:shadow-inner'
                    >
                        Đóng
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] lg:gap-6'>
                {listMovies?.map((item, index) => (
                    <div
                        key={index}
                        className='group relative mb-2 rounded-2xl'
                    >
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            className='hover:bg-primary block cursor-pointer overflow-hidden rounded-2xl duration-300 hover:p-1'
                        >
                            <Image
                                src={item?.poster_url}
                                alt='Movie Poster'
                                width={250}
                                height={200}
                                className='aspect-[2/3] rounded-xl object-cover object-center'
                            />

                            {/* lớp phủ */}
                            <div className='bg-primary absolute top-0 left-0 aspect-[300/450] h-auto rounded-2xl opacity-0 transition duration-300 group-hover:opacity-15' />
                        </Link>

                        <div className='mt-3 flex flex-col items-center gap-1'>
                            <Link
                                href={`/detail_movie/${item?.slug}`}
                                className='hover:text-primary line-clamp-1 cursor-pointer text-sm duration-300'
                            >
                                {item?.name}
                            </Link>
                            <h4 className='line-clamp-1 text-xs text-[#aaaaaa]'>
                                {item?.origin_name}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className='mt-12 flex items-center justify-center gap-4'>
                <button
                    onClick={() => {
                        toast.warning('Chức năng đang được phát triển!');
                    }}
                    className='flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-[#2f3346] p-4 hover:opacity-90'
                >
                    <FaArrowLeft className='' />
                </button>
                <div className='flex h-[50px] items-center gap-4 rounded-full bg-[#2f3346] px-8'>
                    <span>Trang </span>
                    <span className='text-primary font-medium'>1</span>
                    <span>/</span>
                    <span>25</span>
                </div>
                <button
                    onClick={() => {
                        toast.warning('Chức năng đang được phát triển!');
                    }}
                    className='flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-[#2f3346] p-4 hover:opacity-90'
                >
                    <FaArrowRight className='' />
                </button>
            </div>
        </div>
    );
}
