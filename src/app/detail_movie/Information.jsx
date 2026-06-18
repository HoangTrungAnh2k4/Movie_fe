import Image from 'next/image';

import { IoIosArrowDown } from 'react-icons/io';

export default function information({ infor }) {
    if (!infor) {
        return (
            <div role='status' className='max-w-sm animate-pulse py-28'>
                <div className='mb-4 h-2.5 w-48 rounded-full bg-gray-100 dark:bg-gray-700'></div>
                <div className='mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-100 dark:bg-gray-700'></div>
                <div className='mb-2.5 h-2 rounded-full bg-gray-100 dark:bg-gray-700'></div>
                <div className='mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-100 dark:bg-gray-700'></div>
                <div className='mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-100 dark:bg-gray-700'></div>
                <div className='h-2 max-w-[360px] rounded-full bg-gray-100 dark:bg-gray-700'></div>
                <span className='sr-only'>Loading...</span>
            </div>
        );
    }

    return (
        <div className='w-full justify-items-center lg:w-fit lg:justify-items-start lg:pr-4 lg:pl-16'>
            {infor?.poster_url && (
                <Image
                    className='aspect-[2/3] h-auto w-[120px] rounded-lg object-cover lg:w-[160px]'
                    src={infor?.poster_url}
                    width={160}
                    height={240}
                    priority
                    alt=''
                />
            )}
            <h3 className='mt-4 text-lg font-semibold lg:text-2xl'>
                {infor?.name}
            </h3>
            <h3 className='lg:text-primary mt-3 text-sm text-[#aaaaaa]'>
                {infor?.origin_name}
            </h3>
            <div className='text-primary mt-6 flex items-center gap-2 text-sm font-semibold lg:hidden'>
                Thông tin phim <IoIosArrowDown className='text-xl' />
            </div>
            {/* sub information */}
            <div className='mt-4 hidden lg:block'>
                <ul className='mt-4 flex items-center justify-start gap-4 text-xs'>
                    <li className='from-primary rounded-md bg-gradient-to-bl to-white px-2 py-[2px] pt-[3px] font-semibold text-black'>
                        {infor?.quality}
                    </li>
                    <li className='rounded-md bg-white px-2 py-[2px] pt-[3px] text-black'>
                        T16
                    </li>
                    <li className='rounded-md border border-white bg-[#ffffff10] px-2 py-[2px] pt-[3px] text-white'>
                        {infor?.year}
                    </li>
                    <li className='rounded-md border border-white bg-[#ffffff10] px-2 py-[2px] pt-[3px] text-white'>
                        {infor?.time}
                    </li>
                </ul>

                <ul className='mt-4 flex gap-2'>
                    <li className='rounded-md bg-[#f3f3f310] px-2 py-1.5 text-xs'>
                        Hành Động
                    </li>
                    <li className='rounded-md bg-[#f3f3f310] px-2 py-1.5 text-xs'>
                        Hình Sự
                    </li>
                    <li className='rounded-md bg-[#f3f3f310] px-2 py-1.5 text-xs'>
                        Tâm Lý
                    </li>
                </ul>

                <h5 className='mt-6 mb-2 text-sm font-semibold text-white'>
                    Giới thiệu:
                </h5>

                <p className='text-sm text-[#aaaaaa]'>{infor?.content}</p>

                <div className='mt-6 mb-2 flex gap-4 text-sm text-white'>
                    <p className='font-semibold'>Thời lượng:</p>
                    <p className='text-sm text-[#aaaaaa]'>{infor?.time}</p>
                </div>

                <div className='mt-6 mb-2 flex gap-4 text-sm text-white'>
                    <p className='font-semibold'>Quốc gia:</p>
                    <p className='text-sm text-[#aaaaaa]'>
                        {infor?.country && infor.country.length > 0
                            ? infor.country[0].name
                            : 'Không rõ'}
                    </p>
                </div>

                <p className='mt-6 font-semibold'>Diễn viên:</p>
                <ul className='-mx-4 mt-6 flex justify-between'>
                    <li className='w-[33%] justify-items-center'>
                        <Image
                            className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                            src='https://image.tmdb.org/t/p/w500/4E7NuJsR7AnMYAefFSHkj4cftdf.jpg'
                            width={70}
                            height={70}
                            alt=''
                        />

                        <p className='text-sm'>Han Hyo-joo</p>
                    </li>
                    <li className='w-[33%] justify-items-center'>
                        <Image
                            className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                            src='https://image.tmdb.org/t/p/w500/tpb0eZLDvIaBVNLXFpxXAdPxooo.jpg'
                            width={70}
                            height={70}
                            alt=''
                        />
                        <p className='text-sm'>Km Da-mi</p>
                    </li>
                    <li className='w-[33%] justify-items-center'>
                        <Image
                            className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                            src='https://image.tmdb.org/t/p/w500/hRDiuKWwe156zRjEu826eci7H3r.jpg'
                            width={70}
                            height={70}
                            alt=''
                        />
                        <p className='text-sm'>Choi Woo-shik</p>
                    </li>
                </ul>
                <ul className='-mx-4 mt-6 flex justify-between'>
                    <li className='w-[33%] justify-items-center'>
                        <Image
                            className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                            src='https://image.tmdb.org/t/p/w500/wQjOvAFqCItwMw7dxa486KnGgEE.jpg'
                            width={70}
                            height={70}
                            alt=''
                        />
                        <p className='text-sm'>Moon Sung-keun</p>
                    </li>
                    <li className='w-[33%] justify-items-center'>
                        <Image
                            className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                            src='https://image.tmdb.org/t/p/w500/p0LjCRqVqgTyvlZScMmsVFCnTIt.jpg'
                            width={70}
                            height={70}
                            alt=''
                        />
                        <p className='text-sm'>Ryu Seung-ryong</p>
                    </li>
                    <li className='w-[33%] justify-items-center'>
                        <Image
                            className='mb-2 aspect-[1/1] h-auto rounded-full object-cover object-center'
                            src='https://image.tmdb.org/t/p/w500/69gbyFI0ET0l0dyjKChlx1Zx269.jpg'
                            width={70}
                            height={70}
                            alt=''
                        />
                        <p className='text-sm'>Zo In-sung</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
