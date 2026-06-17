'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ListTypeRetangle({ list_movie }) {
    return (
        <div className=''>
            <div className='not-scroll mt-4 flex grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4 overflow-x-auto pt-4 lg:grid'>
                {list_movie?.map((item, index) => (
                    <div
                        key={index}
                        className='group relative w-[160px] rounded-2xl sm:w-[250px] lg:w-auto'
                    >
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            key={index}
                            className='group relative w-[160px] rounded-xl sm:w-[250px] lg:w-full'
                        >
                            <div className='group bg-primary w-[160px] cursor-pointer overflow-hidden rounded-xl sm:w-[250px] lg:w-full'>
                                <div className='overflow-hidden rounded-xl'>
                                    <Image
                                        src={item?.thumb_url}
                                        alt='Movie Poster'
                                        width={300}
                                        height={450}
                                        className='aspect-[300/450] w-[160px] rounded-xl object-cover object-center transition-transform duration-300 group-hover:scale-x-[98%] group-hover:scale-y-[99%] sm:w-[250px] lg:w-full'
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className='bg-primary absolute top-0 left-0 aspect-[300/450] h-auto w-full rounded-2xl opacity-0 transition duration-300 group-hover:opacity-15' />
                            </div>
                        </Link>

                        <div className='mt-3 flex flex-col items-center gap-1'>
                            <Link
                                href={`/detail_movie/${item?.slug}`}
                                className='hover:text-primary line-clamp-1 cursor-pointer text-sm font-semibold duration-300 lg:text-base'
                            >
                                {item?.name}
                            </Link>
                            <h4 className='line-clamp-1 text-xs text-[#aaaaaa] lg:text-sm'>
                                {item?.origin_name}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
