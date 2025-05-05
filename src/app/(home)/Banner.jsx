'use client';

import { FaPlay, FaHeart, FaExclamationCircle } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';

const USER_URL = process.env.NEXT_PUBLIC_USER_URL;

function Banner({ list_movie, setList_movie }) {
    const router = useRouter();
    const [activeMovie, setActiveMovie] = useState(0);

    const [listMovies, setListMovies] = useState([]);

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR('https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1', fetcher);

    const moveToDetail = () => {
        router.push(`/detail_movie/${listMovies[activeMovie]?.slug}`);
    };

    const addFavorite = async (nameSlug) => {
        if (/\s/.test(nameSlug)) {
            toast.error('Tên phim không được chứa khoảng trắng! Vui lòng chọn phim khác!');
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
            <div className="flex justify-center items-center bg-background h-52">
                <div className="border-4 border-primary border-t-transparent rounded-full w-16 h-16 animate-spin" />
            </div>
        );

    return (
        <div
            className="inset-0 bg-cover bg-no-repeat bg-center shadow-[inset_0_200px_500px_200px_rgba(0,0,0,0.3)] lg:shadow-[inset_150px_0_200px_200px_rgba(0,0,0,0.8)] w-full h-[400px] lg:h-[650px] text-white"
            style={{
                backgroundImage: `url(${listMovies[activeMovie]?.thumb_url})`,
            }}
        >
            <div className="flex h-full">
                <div className="flex flex-col flex-1 justify-center items-center lg:items-start px-8 h-full">
                    <h1
                        onClick={moveToDetail}
                        className="font-semibold hover:text-primary text-lg lg:text-3xl line-clamp-1 cursor-pointer"
                    >
                        {listMovies[activeMovie]?.name}
                    </h1>

                    <h3 onClick={moveToDetail} className="mt-2 text-[#aaaaaa] text-sm">
                        {listMovies[activeMovie]?.origin_name}
                    </h3>

                    <ul className="flex justify-start items-center gap-4 mt-8 text-xs">
                        <li className="bg-gradient-to-bl from-primary to-white px-2 py-[2px] pt-[3px] rounded-md font-semibold text-black">
                            {listMovies[activeMovie]?.quality}
                        </li>
                        <li className="bg-white px-2 py-[2px] pt-[3px] rounded-md text-black">
                            {listMovies[activeMovie]?.type}
                        </li>
                        <li className="px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">
                            {listMovies[activeMovie]?.year}
                        </li>
                        <li className="px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">
                            {listMovies[activeMovie]?.time}
                        </li>
                    </ul>

                    <ul className="hidden lg:flex justify-start items-center gap-4 mt-4 text-xs">
                        {listMovies[activeMovie]?.category?.map((item, index) => (
                            <li key={index} className="bg-[#f3f3f310] px-2 py-[2px] pt-[3px] rounded-md text-xs">
                                {item.name}
                            </li>
                        ))}
                    </ul>

                    <p className="hidden lg:block mt-8 w-[35%] text-sm line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde aut similique veritatis
                        reiciendis quis dignissimos aliquam sit blanditiis explicabo. Consectetur dolore iusto quasi
                        nostrum doloremque minus, inventore ipsa dolorem.
                    </p>

                    <div className="flex justify-center lg:justify-between items-center gap-4 mt-6 lg:mt-16 w-full text-xs">
                        <div className="hidden lg:flex items-center gap-8">
                            <button
                                onClick={moveToDetail}
                                className="flex justify-center items-center bg-gradient-to-tr from-yellow-400 to-yellow-50 hover:shadow-[0_5px_10px_10px_rgba(255,218,125,0.15)] rounded-full size-[70px] text-black cursor-pointer"
                            >
                                <FaPlay className="ml-1 text-2xl" />
                            </button>

                            <div className="flex items-center border-[#ffffff10] border-2 hover:border-white rounded-full w-fit h-[50px]">
                                <button
                                    onClick={(e) => {
                                        addFavorite(listMovies[activeMovie]?.slug);
                                    }}
                                    className="flex justify-center items-center px-5 py-2 border-[#ffffff10] border-r-2 h-full hover:text-primary cursor-pointer"
                                >
                                    <FaHeart className="ml-1 text-xl" />
                                </button>
                                <Link
                                    href={`/detail_movie/${listMovies[activeMovie]?.slug}`}
                                    className="flex justify-center items-center px-5 py-2 h-full text-white hover:text-primary cursor-pointer"
                                >
                                    <FaExclamationCircle className="ml-1 text-2xl rotate-180" />
                                </Link>
                            </div>
                        </div>

                        {/* slider */}
                        <ul className="flex justify-center items-center gap-4">
                            {listMovies.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`${
                                            activeMovie === index ? 'border-[3px] border-white' : 'border-0'
                                        } lg:w-[80px] w-[40px] rounded-full lg:rounded-none overflow-hidden `}
                                        onClick={() => setActiveMovie(index)}
                                    >
                                        <Image
                                            className="object-center object-cover aspect-1/1 lg:aspect-[25/14] cursor-pointer"
                                            src={item.thumb_url}
                                            width={80}
                                            height={80}
                                            alt=""
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
