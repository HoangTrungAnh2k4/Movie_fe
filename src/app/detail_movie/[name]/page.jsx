'use client';

import { useParams } from 'next/navigation';

import Information from '../Information';
import Episode from '../Episode';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';

export default function DetailMovie() {
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
        <div className='min-h-screen'>
            {/* background */}
            <div className='relative h-[250px] overflow-hidden lg:h-[500px]'>
                <Image
                    src={infor?.thumb_url}
                    alt=''
                    fill
                    priority
                    className='object-cover'
                />

                <div
                    className='absolute inset-0 opacity-20'
                    style={{
                        backgroundImage: "url('/dotted.png')",
                    }}
                />

                <div className='absolute inset-0 shadow-[inset_150px_0_150px_150px_rgba(0,0,0,0.5)]' />

                <div className='to-background absolute bottom-0 h-40 w-full bg-gradient-to-b from-transparent' />
            </div>

            {/* content */}
            <div className='relative z-50 flex flex-col justify-start text-white lg:flex-row'>
                {/* information */}
                <div className='-mt-20 py-2 pb-6 lg:-mt-0 lg:w-[30%]'>
                    <Information infor={infor} />
                </div>

                {/* episode */}
                <div className='flex-grow pt-2 pb-6'>
                    <Episode infor={infor} />
                </div>
            </div>
        </div>
    );
}
