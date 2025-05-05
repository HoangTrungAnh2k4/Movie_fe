import Image from 'next/image';
import Link from 'next/link';

export default function Top10Today({ list_movie }) {
    return (
        <div className="">
            <div className="flex lg:flex-none gap-4 lg:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-4 pt-4 overflow-x-auto not-scroll">
                {list_movie?.map((item, index) => (
                    <div
                        key={index}
                        className="group relative flex-shrink-0 rounded-2xl w-[160px] sm:w-[250px] lg:w-auto"
                    >
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            className={`hover:bg-primary block overflow-hidden hover:p-1 lg:w-auto w-[160px] sm:w-[250px] cursor-pointer duration-300  rounded-2xl  itemTop10 ${
                                index % 2 != 0 ? 'itemTop10Left' : 'itemTop10Right'
                            } `}
                        >
                            <Image
                                src={item?.poster_url}
                                alt="Movie Poster"
                                width={400}
                                height={600}
                                className={`rounded-xl object-center object-cover aspect-[2/3] lg:w-[400px] w-[160px] sm:w-[250px]  ${
                                    index % 2 != 0 ? 'itemTop10Left' : 'itemTop10Right'
                                }`}
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl w-full h-full transition duration-300" />
                        </Link>

                        <div className="flex items-center gap-2 mt-3">
                            <div
                                className="text-3xl sm:text-6xl"
                                style={{
                                    background: 'linear-gradient(39deg, rgba(254, 207, 89, 1), rgba(255, 241, 204, 1))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontStyle: 'italic',
                                    fontWeight: '800',

                                    width: '50px',
                                }}
                            >
                                {index + 1}
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-semibold text-white hover:text-primary text-sm lg:text-lg line-clamp-1 duration-300 cursor-pointer">
                                    {item.name}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs lg:text-sm line-clamp-1">{item?.origin_name}</h3>
                                <ul className="hidden sm:flex justify-start gap-4 mt-[2px] text-[#aaa]">
                                    <li className="text-xs line-clamp-1">{item?.type}</li>
                                    <li className="text-xs line-clamp-1">{item?.year}</li>
                                    <li className="text-xs line-clamp-1">{item?.episode_current}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
