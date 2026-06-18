import Image from 'next/image';
import Link from 'next/link';

export default function TopCinema({ list_movie }) {
    return (
        <div className='not-scroll mt-4 flex grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4 overflow-x-auto pt-4 lg:grid'>
            {list_movie?.map((item, index) => (
                <div
                    key={index}
                    className='group relative z-10 w-[160px] rounded-lg sm:w-[250px] lg:w-auto'
                >
                    <Link
                        href={`/detail_movie/${item?.slug}`}
                        key={index}
                        className='group relative z-10 w-[160px] rounded-xl sm:w-[250px] lg:w-full'
                    >
                        <div className='group bg-primary w-[160px] cursor-pointer overflow-hidden rounded-xl sm:w-[250px] lg:w-full'>
                            <div className='overflow-hidden rounded-xl'>
                                <Image
                                    src={item?.thumb}
                                    alt='Movie Poster'
                                    width={400}
                                    height={200}
                                    className='aspect-[500/281] w-[160px] rounded-xl object-cover object-center transition-transform duration-300 group-hover:scale-x-[98%] group-hover:scale-y-[97%] sm:w-[250px] lg:w-full'
                                />
                            </div>

                            {/* lớp phủ */}
                            <div className='bg-primary absolute top-0 left-0 aspect-[500/281] h-auto w-full rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-15' />
                        </div>
                    </Link>

                    <div className='relative z-20 mt-4 flex items-end gap-4 shadow-2xl lg:-mt-[60px] lg:px-6'>
                        <Image
                            src={item?.poster}
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
                                {item?.slug}{' '}
                            </h3>
                            <ul className='mt-[2px] flex justify-start gap-4 text-[#aaa]'>
                                <li className='line-clamp-1 text-xs'>
                                    {item?.movie?.type}
                                </li>
                                <li className='line-clamp-1 text-xs'>
                                    {item?.movie?.year}
                                </li>
                                <li className='line-clamp-1 text-xs'>
                                    {item?.movie?.episode}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
