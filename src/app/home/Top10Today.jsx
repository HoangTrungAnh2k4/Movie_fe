import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MovieHoverPopup from '../../components/movie/movie-hover-popup';

export default function Top10Today({ list_movie }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [likedSlugs, setLikedSlugs] = useState([]);

    const timeoutRef = useRef(null);

    const toggleLike = (slug) => {
        setLikedSlugs((prev) =>
            prev.includes(slug)
                ? prev.filter((s) => s !== slug)
                : [...prev, slug],
        );
    };

    return (
        <div className=''>
            <div className='not-scroll mt-4 flex grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4 overflow-x-auto pt-4 lg:grid lg:flex-none lg:overflow-visible'>
                {list_movie?.map((item, index) => (
                    <div
                        key={index}
                        className='group relative w-[160px] flex-shrink-0 rounded-2xl sm:w-[250px] lg:w-auto'
                        onMouseEnter={() => {
                            timeoutRef.current = setTimeout(
                                () => setHoveredIndex(index),
                                300,
                            );
                        }}
                        onMouseLeave={() => {
                            clearTimeout(timeoutRef.current);
                            setHoveredIndex(null);
                        }}
                    >
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            className={`hover:bg-primary itemTop10 block w-[160px] cursor-pointer overflow-hidden rounded-2xl sm:w-[250px] lg:w-auto ${
                                index % 2 != 0
                                    ? 'itemTop10Left'
                                    : 'itemTop10Right'
                            } `}
                        >
                            <Image
                                src={item?.poster}
                                alt='Movie Poster'
                                width={400}
                                height={600}
                                className={`aspect-[2/3] w-[160px] rounded-xl object-cover object-center duration-300 group-hover:scale-x-[98%] group-hover:scale-y-[98%] sm:w-[250px] lg:w-[400px] ${
                                    index % 2 != 0
                                        ? 'itemTop10Left'
                                        : 'itemTop10Right'
                                }`}
                            />
                            <div className='bg-primary absolute top-0 left-0 h-full w-full rounded-2xl opacity-0 transition duration-300 group-hover:opacity-15' />
                        </Link>

                        <MovieHoverPopup
                            item={item}
                            isVisible={hoveredIndex === index}
                            isLiked={likedSlugs.includes(item?.slug)}
                            onToggleLike={toggleLike}
                        />

                        {/* Hàng thông tin dưới poster (giữ nguyên như cũ) */}
                        <div className='mt-3 flex items-center gap-2'>
                            <div
                                className='text-3xl sm:text-6xl'
                                style={{
                                    background:
                                        'linear-gradient(39deg, rgba(254, 207, 89, 1), rgba(255, 241, 204, 1))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontStyle: 'italic',
                                    fontWeight: '800',
                                    width: '40px',
                                    flexShrink: 0,
                                }}
                            >
                                {index + 1}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='hover:text-primary line-clamp-1 cursor-pointer text-sm font-semibold text-white duration-300 lg:text-lg'>
                                    {item.name}
                                </h3>
                                <h3 className='line-clamp-1 text-xs text-[#aaaaaa] lg:text-sm'>
                                    {item?.origin_name}
                                </h3>
                                <ul className='mt-[2px] hidden justify-start gap-4 text-[#aaa] sm:flex'>
                                    <li className='line-clamp-1 text-xs'>
                                        {item?.type}
                                    </li>
                                    <li className='line-clamp-1 text-xs'>
                                        {item?.year}
                                    </li>
                                    <li className='line-clamp-1 text-xs'>
                                        {item?.episode}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
