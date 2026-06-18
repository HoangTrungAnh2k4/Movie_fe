import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';

export default function MovieHoverPopup({
    item,
    isVisible,
    isLiked,
    onToggleLike,
}) {
    return (
        <div
            className={`absolute top-0 left-1/2 z-50 hidden w-[400px] -translate-x-1/2 overflow-hidden rounded-xl bg-[#2f3347] shadow-2xl ring-1 ring-white/10 transition-all duration-200 lg:block ${
                isVisible
                    ? 'pointer-events-auto scale-100 opacity-100'
                    : 'pointer-events-none scale-95 opacity-0'
            }`}
            style={{ top: '-16px' }}
        >
            <div className='relative aspect-[16/7] w-full'>
                <Image
                    src={item?.poster}
                    alt={item?.name}
                    fill
                    className='object-cover object-center'
                />
                <div className='absolute bottom-0 h-20 w-full bg-gradient-to-b from-transparent to-[#2f3347]' />
            </div>

            <div className='px-5 pt-4 pb-6'>
                <h3 className='line-clamp-1 text-base font-bold text-white'>
                    {item?.name}
                </h3>
                <h4 className='text-primary line-clamp-1 text-xs'>
                    {item?.slug}
                </h4>

                <div className='my-4 flex gap-2'>
                    <Link
                        href={`/detail_movie/${item?.slug}`}
                        className='bg-primary hover:bg-primary/80 flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold text-black transition'
                    >
                        <FaPlay size={11} className='mt-[2px]' />
                        Xem ngay
                    </Link>

                    <button
                        onClick={() => onToggleLike(item?.slug)}
                        className='flex flex-shrink-0 cursor-pointer items-center justify-center rounded-lg border border-white/20 px-4 text-white transition hover:border-white/50'
                    >
                        {isLiked ? (
                            <>
                                <FaHeart size={14} className='text-primary' />
                                <span className='text-primary ml-1 text-xs font-semibold'>
                                    Thích
                                </span>
                            </>
                        ) : (
                            <>
                                <FaRegHeart size={14} />
                                <span className='ml-1 text-xs font-semibold text-white'>
                                    Thích
                                </span>
                            </>
                        )}
                    </button>

                    <Link
                        href={`/detail_movie/${item?.slug}`}
                        className='flex items-center justify-center gap-1 rounded-lg border border-white/20 px-4 text-white transition hover:border-white/50'
                    >
                        <IoInformationCircleOutline
                            size={18}
                            className='mt-[2px]'
                        />
                        <span className='text-xs font-semibold text-white'>
                            Thông tin
                        </span>
                    </Link>
                </div>

                <div className='mt-3 mb-1 flex flex-wrap items-center gap-2'>
                    {/* {item?.tmdb?.vote_average > 0 && (
                        <span className='border-primary text-primary rounded border bg-transparent px-2 py-[3px] text-[10px] font-semibold'>
                            IMDb{' '}
                            <p className='ml-1 inline-block text-[10px] text-white'>
                                {item.tmdb.vote_average.toFixed(1)}
                            </p>
                        </span>
                    )} */}
                    <span className='rounded border border-white/30 px-2 py-[3px] text-[11px] font-semibold text-white'>
                        {item?.type}
                    </span>
                    <span className='rounded-md bg-gray-300/10 px-2 py-1 text-xs text-[#fefefe]'>
                        {item?.year}
                    </span>
                    {/* {item?.tmdb?.season && (
                        <span className='rounded-md bg-gray-300/10 px-2 py-1 text-xs text-[#fefefe]'>
                            Phần {item.tmdb.season}
                        </span>
                    )} */}
                    <span className='rounded-md bg-gray-300/10 px-2 py-1 text-xs text-[#fefefe]'>
                        {item?.episode}
                    </span>
                </div>

                {item?.category?.length > 0 && (
                    <span className='rounded-md bg-gray-300/10 px-2 py-1 text-xs text-[#fefefe]'>
                        {item.category
                            .map((category) => category?.name)
                            .join(' • ')}
                    </span>
                )}
            </div>
        </div>
    );
}
