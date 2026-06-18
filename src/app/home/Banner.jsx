'use client';

import { FaPlay, FaHeart, FaExclamationCircle } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';

const USER_URL = process.env.NEXT_PUBLIC_USER_URL;

function Banner({ setList_movie }) {
    const router = useRouter();
    const [activeMovie, setActiveMovie] = useState(0);

    const [listMovies, setListMovies] = useState([]);

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        'https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1',
        fetcher,
        {
            revalidateOnFocus: false,
            dedupingInterval: 60000,
        },
    );

    const moveToDetail = () => {
        router.push(`/detail_movie/${listMovies[activeMovie]?.slug}`);
    };

    const addFavorite = async (nameSlug) => {
        if (/\s/.test(nameSlug)) {
            toast.error(
                'Tên phim không được chứa khoảng trắng! Vui lòng chọn phim khác!',
            );
            return;
        }

        const res = await fetch(`${USER_URL}/add_favorite`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: JSON.stringify({
                favorite: nameSlug,
            }),
        });

        const data = await res.json();

        if (res.status === 401) {
            toast.error('Bạn cần đăng nhập để thêm vào danh sách yêu thích!');
            return;
        }

        if (res.ok) {
            toast.success('Thêm vào danh sách yêu thích thành công!');
        } else {
            if (data?.message === 'Không thể thêm vào danh sách yêu thích.') {
                toast.error('Phim đã có trong danh sách yêu thích!');
            }
        }
    };

    const optimizeUrl = (url) => {
        if (url === '') return null;

        if (!url) return null;

        return url;
    };

    useEffect(() => {
        if (data?.items) {
            setList_movie(data.items);

            const thumbs = data.items.slice(0, 5);

            setListMovies(thumbs);
        }
    }, [data]);

    if (error) return <div>Failed to load</div>;
    if (isLoading)
        return (
            <div className='bg-background flex h-[350px] items-center justify-center lg:h-[600px]'>
                <div className='border-primary h-16 w-16 animate-spin rounded-full border-4 border-t-transparent' />
            </div>
        );

    return (
        <div className='relative h-[400px] w-full overflow-hidden text-white lg:h-[650px]'>
            {/* Ảnh nền dùng Image với fill và objectFit cover */}
            {optimizeUrl(listMovies[activeMovie]?.thumb_url) && (
                <Image
                    key={activeMovie}
                    src={listMovies[activeMovie]?.thumb_url}
                    alt='Movie thumbnail'
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className='animate-bg-shift absolute z-0'
                />
            )}
            {/* Lớp overlay tối ở rìa, sáng ở giữa */}
            <div className='pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_85%_50%,_rgba(0,0,0,0)_0,_rgba(0,0,0,0.8)_90%)]' />

            <div
                className='pointer-events-none absolute inset-0 z-10 bg-repeat opacity-20'
                style={{
                    backgroundImage: `url('/dotted.png')`,
                }}
            />

            {/* Gradient làm mờ */}
            <div className='to-background pointer-events-none absolute bottom-0 z-20 h-80 w-full bg-gradient-to-b from-transparent' />

            <div className='absolute z-30 flex h-full bg-transparent'>
                <div
                    key={activeMovie}
                    className='animate-slide-in flex h-full flex-1 flex-col items-center justify-center bg-transparent px-8 pt-12 lg:items-start'
                >
                    <h1
                        onClick={moveToDetail}
                        className='hover:text-primary line-clamp-1 cursor-pointer text-lg font-semibold lg:text-3xl'
                    >
                        {listMovies[activeMovie]?.name}
                    </h1>

                    <h3
                        onClick={moveToDetail}
                        className='mt-2 text-sm text-[#aaaaaa]'
                    >
                        {listMovies[activeMovie]?.origin_name}
                    </h3>

                    <ul className='mt-8 flex items-center justify-start gap-4 text-xs'>
                        <li className='from-primary rounded-md bg-gradient-to-bl to-white px-2 py-[2px] pt-[3px] font-semibold text-black'>
                            {listMovies[activeMovie]?.quality}
                        </li>
                        <li className='rounded-md bg-white px-2 py-[2px] pt-[3px] text-black'>
                            {listMovies[activeMovie]?.type}
                        </li>
                        <li className='rounded-md border border-white px-2 py-[2px] pt-[3px] text-white'>
                            {listMovies[activeMovie]?.year}
                        </li>
                        <li className='rounded-md border border-white px-2 py-[2px] pt-[3px] text-white'>
                            {listMovies[activeMovie]?.time}
                        </li>
                    </ul>

                    <ul className='mt-4 hidden items-center justify-start gap-4 text-xs lg:flex'>
                        {listMovies[activeMovie]?.category?.map(
                            (item, index) => (
                                <li
                                    key={index}
                                    className='rounded-md bg-[#f3f3f310] px-2 py-[2px] pt-[3px] text-xs'
                                >
                                    {item.name}
                                </li>
                            ),
                        )}
                    </ul>

                    <p className='mt-8 line-clamp-3 hidden w-[60%] text-sm lg:block'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad unde aut similique veritatis reiciendis quis
                        dignissimos aliquam sit blanditiis explicabo.
                        Consectetur dolore iusto quasi nostrum doloremque minus,
                        inventore ipsa dolorem.
                    </p>

                    <div className='mt-4 flex w-full items-center justify-start gap-12 text-xs lg:mt-12'>
                        <button
                            onClick={moveToDetail}
                            className='flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-50 text-black hover:shadow-[0_5px_10px_10px_rgba(255,218,125,0.15)]'
                        >
                            <FaPlay className='ml-1 text-2xl' />
                        </button>

                        <div className='flex h-[50px] w-fit items-center rounded-full border-2 border-[#ffffff10] hover:border-white'>
                            <button
                                onClick={(e) => {
                                    addFavorite(listMovies[activeMovie]?.slug);
                                }}
                                className='hover:text-primary flex h-full cursor-pointer items-center justify-center border-r-2 border-[#ffffff10] px-5 py-2'
                            >
                                <FaHeart className='ml-1 text-xl' />
                            </button>
                            <Link
                                href={`/detail_movie/${listMovies[activeMovie]?.slug}`}
                                className='hover:text-primary flex h-full cursor-pointer items-center justify-center px-5 py-2 text-white'
                            >
                                <FaExclamationCircle className='ml-1 rotate-180 text-2xl' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* slider */}
                <div className='flex w-1/2 items-end justify-center pb-40'>
                    <ul className='flex items-center justify-center gap-4'>
                        {listMovies.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`${
                                        activeMovie === index
                                            ? 'border-[3px] border-white'
                                            : 'border-[1px] border-[#ffffff50]'
                                    } w-[40px] overflow-hidden rounded-full lg:w-[80px] lg:rounded-none`}
                                    onClick={() => setActiveMovie(index)}
                                >
                                    <Image
                                        className='aspect-1/1 cursor-pointer object-cover object-center lg:aspect-[25/14]'
                                        src={item.thumb_url}
                                        width={80}
                                        height={80}
                                        alt='thumbnail'
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Banner;
