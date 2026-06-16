import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

export default function ListCountryMovie({ list_movie, moveToDetail }) {
    return (
        <div className="bg-gradient-to-b from-background2 to-background p-6 lg:p-8 rounded-xl">
            <div className="flex lg:flex-row flex-col mb-8">
                <div className="flex flex-row lg:flex-col flex-shink-0 justify-between lg:justify-start gap-2 lg:w-[15%] text-wrap">
                    <h3
                        className="w-[200px] font-semibold text-gradient lg:text-[1.8em] text-xl"
                        style={{
                            background: 'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(103, 65, 150) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim Hàn Quốc Mới
                    </h3>
                    <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                        <Link href={'/list_movie'} className="text-xs">
                            Xem toàn bộ
                        </Link>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex gap-3 lg:gap-6 lg:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-4 lg:mt-0 lg:w-[85%] overflow-x-auto not-scroll">
                    {list_movie?.slice(0, 4).map((item, index) => (
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            key={index}
                            className="group relative rounded-xl w-[160px] sm:w-[250px] lg:w-full"
                        >
                            <div className="group bg-primary rounded-xl w-[160px] sm:w-[250px] lg:w-full overflow-hidden cursor-pointer">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src={item?.thumb_url}
                                        alt="Movie Poster"
                                        width={400}
                                        height={200}
                                        className="rounded-xl w-[160px] sm:w-[250px] lg:w-full object-center object-cover aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 lg:pl-4">
                                <h3
                                    onClick={() => moveToDetail(item?.slug)}
                                    className="font-semibold text-white hover:text-primary text-sm lg:text-base line-clamp-1 duration-300 cursor-pointer"
                                >
                                    {item?.name}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs lg:text-sm line-clamp-1">{item?.origin_name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex lg:flex-row flex-col mb-8">
                <div className="flex flex-row lg:flex-col flex-shink-0 justify-between lg:justify-start gap-2 lg:w-[15%] text-wrap">
                    <h3
                        className="w-[220px] lg:w-[200px] font-semibold text-gradient lg:text-[1.8em] text-xl"
                        style={{
                            background: 'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(247, 161, 11) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim Trung Quốc Mới
                    </h3>
                    <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                        <Link href={'/list_movie'} className="text-xs">
                            Xem toàn bộ
                        </Link>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex gap-3 lg:gap-6 lg:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-4 lg:mt-0 lg:w-[85%] overflow-x-auto not-scroll">
                    {list_movie?.slice(5, 9).map((item, index) => (
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            key={index}
                            className="group relative rounded-xl w-[160px] sm:w-[250px] lg:w-full"
                        >
                            <div className="group bg-primary rounded-xl w-[160px] sm:w-[250px] lg:w-full overflow-hidden cursor-pointer">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src={item?.thumb_url}
                                        alt="Movie Poster"
                                        width={400}
                                        height={200}
                                        className="rounded-xl w-[160px] sm:w-[250px] lg:w-full object-center object-cover aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 lg:pl-4">
                                <h3
                                    onClick={() => moveToDetail(item?.slug)}
                                    className="font-semibold text-white hover:text-primary text-sm lg:text-base line-clamp-1 duration-300 cursor-pointer"
                                >
                                    {item?.name}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs lg:text-sm line-clamp-1">{item?.origin_name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex lg:flex-row flex-col mb-8">
                <div className="flex flex-row lg:flex-col flex-shink-0 justify-between lg:justify-start gap-2 lg:w-[15%] text-wrap">
                    <h3
                        className="w-[200px] font-semibold text-gradient lg:text-[1.8em] text-xl"
                        style={{
                            background: 'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(255, 0, 153) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim US-UK Mới
                    </h3>
                    <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                        <Link href={'/list_movie'} className="text-xs">
                            Xem toàn bộ
                        </Link>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex gap-3 lg:gap-6 lg:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-4 lg:mt-0 lg:w-[85%] overflow-x-auto not-scroll">
                    {list_movie?.slice(9, 13).map((item, index) => (
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            key={index}
                            className="group relative rounded-xl w-[160px] sm:w-[250px] lg:w-full"
                        >
                            <div className="group bg-primary rounded-xl w-[160px] sm:w-[250px] lg:w-full overflow-hidden cursor-pointer">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src={item?.thumb_url}
                                        alt="Movie Poster"
                                        width={400}
                                        height={200}
                                        className="rounded-xl w-[160px] sm:w-[250px] lg:w-full object-center object-cover aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 lg:pl-4">
                                <h3
                                    onClick={() => moveToDetail(item?.slug)}
                                    className="font-semibold text-white hover:text-primary text-sm lg:text-base line-clamp-1 duration-300 cursor-pointer"
                                >
                                    {item?.name}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs lg:text-sm line-clamp-1">{item?.origin_name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
