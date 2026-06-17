import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

export default function ListCountryMovie({ list_movie, moveToDetail }) {
    return (
        <div className='from-background2 to-background rounded-xl bg-gradient-to-b p-6 lg:p-8'>
            <div className='mb-8 flex flex-col lg:flex-row'>
                <div className='flex-shink-0 flex flex-row justify-between gap-2 text-wrap lg:w-[15%] lg:flex-col lg:justify-start'>
                    <h3
                        className='text-gradient w-[200px] text-xl font-semibold lg:text-[1.8em]'
                        style={{
                            background:
                                'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(103, 65, 150) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim Hàn Quốc Mới
                    </h3>
                    <div className='hover:text-primary flex cursor-pointer items-center gap-2'>
                        <Link href={'/list_movie'} className='text-xs'>
                            Xem toàn bộ
                        </Link>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className='not-scroll mt-4 flex grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 overflow-x-auto lg:mt-0 lg:grid lg:w-[85%] lg:gap-6'>
                    {list_movie?.slice(0, 4).map((item, index) => (
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
                                        width={400}
                                        height={200}
                                        className='aspect-[500/281] w-[160px] rounded-xl object-cover object-center transition-transform duration-300 group-hover:scale-x-[98%] group-hover:scale-y-[96%] sm:w-[250px] lg:w-full'
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className='bg-primary absolute top-0 left-0 aspect-[500/281] h-auto w-full rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-15' />
                            </div>

                            <div className='mt-2 flex flex-col gap-2 lg:pl-4'>
                                <h3
                                    onClick={() => moveToDetail(item?.slug)}
                                    className='hover:text-primary line-clamp-1 cursor-pointer text-sm font-semibold text-white duration-300 lg:text-base'
                                >
                                    {item?.name}
                                </h3>
                                <h3 className='line-clamp-1 text-xs text-[#aaaaaa] lg:text-sm'>
                                    {item?.origin_name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='mb-8 flex flex-col lg:flex-row'>
                <div className='flex-shink-0 flex flex-row justify-between gap-2 text-wrap lg:w-[15%] lg:flex-col lg:justify-start'>
                    <h3
                        className='text-gradient w-[220px] text-xl font-semibold lg:w-[200px] lg:text-[1.8em]'
                        style={{
                            background:
                                'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(247, 161, 11) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim Trung Quốc Mới
                    </h3>
                    <div className='hover:text-primary flex cursor-pointer items-center gap-2'>
                        <Link href={'/list_movie'} className='text-xs'>
                            Xem toàn bộ
                        </Link>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className='not-scroll mt-4 flex grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 overflow-x-auto lg:mt-0 lg:grid lg:w-[85%] lg:gap-6'>
                    {list_movie?.slice(5, 9).map((item, index) => (
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
                                        width={400}
                                        height={200}
                                        className='aspect-[500/281] w-[160px] rounded-xl object-cover object-center transition-transform duration-300 group-hover:scale-x-[98%] group-hover:scale-y-[96%] sm:w-[250px] lg:w-full'
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className='bg-primary absolute top-0 left-0 aspect-[500/281] h-auto w-full rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-15' />
                            </div>

                            <div className='mt-2 flex flex-col gap-2 lg:pl-4'>
                                <h3
                                    onClick={() => moveToDetail(item?.slug)}
                                    className='hover:text-primary line-clamp-1 cursor-pointer text-sm font-semibold text-white duration-300 lg:text-base'
                                >
                                    {item?.name}
                                </h3>
                                <h3 className='line-clamp-1 text-xs text-[#aaaaaa] lg:text-sm'>
                                    {item?.origin_name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='mb-8 flex flex-col lg:flex-row'>
                <div className='flex-shink-0 flex flex-row justify-between gap-2 text-wrap lg:w-[15%] lg:flex-col lg:justify-start'>
                    <h3
                        className='text-gradient w-[200px] text-xl font-semibold lg:text-[1.8em]'
                        style={{
                            background:
                                'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(255, 0, 153) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim US-UK Mới
                    </h3>
                    <div className='hover:text-primary flex cursor-pointer items-center gap-2'>
                        <Link href={'/list_movie'} className='text-xs'>
                            Xem toàn bộ
                        </Link>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className='not-scroll mt-4 flex grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 overflow-x-auto lg:mt-0 lg:grid lg:w-[85%] lg:gap-6'>
                    {list_movie?.slice(9, 13).map((item, index) => (
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
                                        width={400}
                                        height={200}
                                        className='aspect-[500/281] w-[160px] rounded-xl object-cover object-center transition-transform duration-300 group-hover:scale-x-[98%] group-hover:scale-y-[96%] sm:w-[250px] lg:w-full'
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className='bg-primary absolute top-0 left-0 aspect-[500/281] h-auto w-full rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-15' />
                            </div>

                            <div className='mt-2 flex flex-col gap-2 lg:pl-4'>
                                <h3
                                    onClick={() => moveToDetail(item?.slug)}
                                    className='hover:text-primary line-clamp-1 cursor-pointer text-sm font-semibold text-white duration-300 lg:text-base'
                                >
                                    {item?.name}
                                </h3>
                                <h3 className='line-clamp-1 text-xs text-[#aaaaaa] lg:text-sm'>
                                    {item?.origin_name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
