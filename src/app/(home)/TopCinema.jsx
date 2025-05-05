import Image from 'next/image';
import Link from 'next/link';

export default function TopCinema({ list_movie }) {
    return (
        <div className="flex gap-4 lg:grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] mt-4 pt-4 overflow-x-auto not-scroll">
            {list_movie?.map((item, index) => (
                <div key={index} className="group relative rounded-lg w-[160px] sm:w-[250px] lg:w-auto overflow-hidden">
                    <Link
                        href={`/detail_movie/${item?.slug}`}
                        className="block hover:bg-primary hover:p-1 w-[160px] sm:w-[250px] lg:w-auto overflow-hidden duration-300 cursor-pointer"
                    >
                        <Image
                            src={item?.thumb_url}
                            alt="Movie Poster"
                            width={500}
                            height={281}
                            className="rounded-lg w-[160px] sm:w-[250px] lg:w-full h-full object-center object-cover aspect-[500/281]"
                        />

                        {/* lớp phủ */}
                        <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-[160px] sm:w-[250px] lg:w-auto h-auto aspect-[500/281] transition-all duration-300" />
                    </Link>

                    <div className="z-20 relative flex items-end gap-4 shadow-2xl mt-4 lg:-mt-[60px] lg:px-6">
                        <Image
                            src={item?.poster_url}
                            alt="Movie Poster"
                            width={400}
                            height={200}
                            className="hidden lg:block border border-[#aaaaaa] rounded-lg w-[80px] h-auto aspect-[100/157]"
                        />
                        <div className="flex flex-col gap-1">
                            <Link
                                href={`/detail_movie/${item?.slug}`}
                                className="font-semibold text-white hover:text-primary text-sm lg:text-base line-clamp-1 duration-300 cursor-pointer"
                            >
                                {item?.name}
                            </Link>
                            <h3 className="text-[#aaaaaa] text-xs lg:text-sm line-clamp-1">{item?.origin_name} </h3>
                            <ul className="flex justify-start gap-4 mt-[2px] text-[#aaa]">
                                <li className="text-xs line-clamp-1">{item?.movie?.type}</li>
                                <li className="text-xs line-clamp-1">{item?.movie?.year}</li>
                                <li className="text-xs line-clamp-1">{item?.movie?.episode_current}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
