import Image from 'next/image';
import Link from 'next/link';

export default function TopCinema({ list_movie }) {
    return (
        <div className='not-scroll mt-4 flex grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4 overflow-x-auto pt-4 lg:grid'>
            {list_movie?.map((item, index) => (
                <div
                    key={index}
                    className='group relative w-[160px] overflow-hidden rounded-lg sm:w-[250px] lg:w-auto'
                >
                    <Link
                        href={`/detail_movie/${item?.slug}`}
                        className='hover:bg-primary block w-[160px] cursor-pointer overflow-hidden duration-300 hover:p-1 sm:w-[250px] lg:w-auto'
                    >
                        <Image
                            src={item?.thumb_url}
                            alt='Movie Poster'
                            width={500}
                            height={281}
                            className='aspect-[500/281] h-full w-[160px] rounded-lg object-cover object-center sm:w-[250px] lg:w-full'
                        />

                        {/* lớp phủ */}
                        <div className='bg-primary absolute top-0 left-0 aspect-[500/281] h-auto w-[160px] rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-15 sm:w-[250px] lg:w-auto' />
                    </Link>

                    <div className='relative z-20 mt-4 flex items-end gap-4 shadow-2xl lg:-mt-[60px] lg:px-6'>
                        <Image
                            src={item?.poster_url}
                            alt='Movie Poster'
                            width={400}
                            height={200}
                            className='hidden aspect-[100/157] h-auto w-[80px] rounded-lg border border-[#aaaaaa] lg:block'
                        />
                        <div className='flex flex-col gap-1'>
                            <Link
                                href={`/detail_movie/${item?.slug}`}
                                className='hover:text-primary line-clamp-1 cursor-pointer text-sm font-semibold text-white duration-300 lg:text-base'
                            >
                                {item?.name}
                            </Link>
                            <h3 className='line-clamp-1 text-xs text-[#aaaaaa] lg:text-sm'>
                                {item?.origin_name}{' '}
                            </h3>
                            <ul className='mt-[2px] flex justify-start gap-4 text-[#aaa]'>
                                <li className='line-clamp-1 text-xs'>
                                    {item?.movie?.type}
                                </li>
                                <li className='line-clamp-1 text-xs'>
                                    {item?.movie?.year}
                                </li>
                                <li className='line-clamp-1 text-xs'>
                                    {item?.movie?.episode_current}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
