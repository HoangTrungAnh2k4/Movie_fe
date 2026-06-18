import Image from 'next/image';
import Link from 'next/link';
import { BiSolidMovie } from 'react-icons/bi';
import {
    FaArrowTrendUp,
    FaArrowTrendDown,
    FaHeartCircleCheck,
} from 'react-icons/fa6';

export default function TopTrending({ list_movie }) {
    return (
        <div className='hidden rounded-xl border border-[#fff2] bg-transparent lg:flex'>
            {/* left col */}
            <div className='h-full flex-1 border-r border-[#fff2] py-6 pl-6 lg:pl-16'>
                <div className='flex items-center gap-4'>
                    <BiSolidMovie className='text-primary text-2xl' />
                    <h4 className='font-semibold'> SÔI NỔI NHẤT</h4>
                </div>

                <ul className='mt-6 flex flex-col gap-5'>
                    {list_movie?.slice(0, 5).map((item, index) => (
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            key={index}
                            className='flex items-center gap-5'
                        >
                            <p className='font-semibold text-[#aaaaaa] opacity-40'>
                                {index + 1}.{' '}
                            </p>
                            {index % 2 === 0 ? (
                                <FaArrowTrendUp className='text-lg font-semibold text-[#bedc33]' />
                            ) : (
                                <FaArrowTrendDown className='text-lg font-semibold text-[#dc328c]' />
                            )}
                            <Image
                                src={item?.poster}
                                alt='Event Poster'
                                width={200}
                                height={400}
                                className='aspect-[3/4] w-[40px]'
                            />
                            <h5 className='hover:text-primary cursor-pointer'>
                                {item?.name}
                            </h5>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* right col */}
            <div className='h-full flex-1 py-6 pl-6 lg:pl-16'>
                <div className='flex items-center gap-4'>
                    <FaHeartCircleCheck className='text-primary text-2xl' />
                    <h4 className='font-semibold'> YÊU THÍCH NHẤT</h4>
                </div>

                <ul className='mt-6 flex flex-col gap-5'>
                    {list_movie?.slice(5, 10).map((item, index) => (
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            key={index}
                            className='flex items-center gap-5'
                        >
                            <p className='font-semibold text-[#aaaaaa] opacity-40'>
                                {index + 1}.{' '}
                            </p>
                            {index % 2 === 0 ? (
                                <FaArrowTrendUp className='text-lg font-semibold text-[#bedc33]' />
                            ) : (
                                <FaArrowTrendDown className='text-lg font-semibold text-[#dc328c]' />
                            )}
                            <Image
                                src={item?.poster}
                                alt='Event Poster'
                                width={200}
                                height={400}
                                className='aspect-[3/4] w-[40px]'
                            />
                            <h5 className='hover:text-primary cursor-pointer'>
                                {item?.name}
                            </h5>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}
