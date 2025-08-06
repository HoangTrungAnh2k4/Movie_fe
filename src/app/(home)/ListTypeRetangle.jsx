'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ListTypeRetangle({ list_movie }) {
    return (
        <div className="">
            <div className="flex gap-4 lg:grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] mt-4 pt-4 overflow-x-auto not-scroll">
                {list_movie?.map((item, index) => (
                    <div key={index} className="group relative rounded-2xl w-[160px] sm:w-[250px] lg:w-auto">
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            className="block hover:bg-primary hover:p-1 rounded-2xl w-[160px] sm:w-[250px] lg:w-auto overflow-hidden duration-300 cursor-pointer"
                        >
                            <Image
                                src={item?.poster_url}
                                alt="Movie Poster"
                                width={400}
                                height={600}
                                className="rounded-xl w-[160px] sm:w-[250px] lg:w-full aspect-[300/450]"
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl w-full h-auto aspect-[300/450] transition duration-300" />
                        </Link>

                        <div className="flex flex-col items-center gap-1 mt-3">
                            <Link
                                href={`/detail_movie/${item?.slug}`}
                                className="text-sm font-semibold duration-300 cursor-pointer hover:text-primary lg:text-base line-clamp-1"
                            >
                                {item?.name}
                            </Link>
                            <h4 className="text-[#aaaaaa] text-xs lg:text-sm line-clamp-1">{item?.origin_name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
