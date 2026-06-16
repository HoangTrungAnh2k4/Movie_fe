import Image from 'next/image';
import Link from 'next/link';
import { BiSolidMovie } from 'react-icons/bi';
import { FaArrowTrendUp, FaArrowTrendDown, FaHeartCircleCheck } from 'react-icons/fa6';

export default function TopTrending({ list_movie }) {
    return (
        <div className="hidden lg:flex bg-transparent border border-[#fff2] rounded-xl">
            {/* left col */}
            <div className="flex-1 py-6 pl-6 lg:pl-16 border-[#fff2] border-r h-full">
                <div className="flex items-center gap-4">
                    <BiSolidMovie className="text-primary text-2xl" />
                    <h4 className="font-semibold"> SÔI NỔI NHẤT</h4>
                </div>

                <ul className="flex flex-col gap-5 mt-6">
                    {list_movie?.slice(0, 5).map((item, index) => (
                        <Link href={`/detail_movie/${item?.slug}`} key={index} className="flex items-center gap-5">
                            <p className="opacity-40 font-semibold text-[#aaaaaa]">{index + 1}. </p>
                            {index % 2 === 0 ? (
                                <FaArrowTrendUp className="font-semibold text-[#bedc33] text-lg" />
                            ) : (
                                <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                            )}
                            <Image
                                src={item?.poster_url}
                                alt="Event Poster"
                                width={200}
                                height={400}
                                className="w-[40px] aspect-[3/4]"
                            />
                            <h5 className="hover:text-primary cursor-pointer">{item?.name}</h5>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* right col */}
            <div className="flex-1 py-6 pl-6 lg:pl-16 h-full">
                <div className="flex items-center gap-4">
                    <FaHeartCircleCheck className="text-primary text-2xl" />
                    <h4 className="font-semibold"> YÊU THÍCH NHẤT</h4>
                </div>

                <ul className="flex flex-col gap-5 mt-6">
                    {list_movie?.slice(5, 10).map((item, index) => (
                        <Link href={`/detail_movie/${item?.slug}`} key={index} className="flex items-center gap-5">
                            <p className="opacity-40 font-semibold text-[#aaaaaa]">{index + 1}. </p>
                            {index % 2 === 0 ? (
                                <FaArrowTrendUp className="font-semibold text-[#bedc33] text-lg" />
                            ) : (
                                <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                            )}
                            <Image
                                src={item?.poster_url}
                                alt="Event Poster"
                                width={200}
                                height={400}
                                className="w-[40px] aspect-[3/4]"
                            />
                            <h5 className="hover:text-primary cursor-pointer">{item?.name}</h5>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}
