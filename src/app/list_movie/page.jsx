'use client';

import Image from 'next/image';
import { FaFilter } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
import useSWR from 'swr';
import Link from 'next/link';

export default function ListMovie() {
    const [listMovies, setListMovies] = useState([]);

    const filterRef = useRef(null);

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR('https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=2', fetcher);

    useEffect(() => {
        if (data?.items) {
            console.log(data.items);

            // Lấy 5 thumb_url đầu tiên
            const thumbs = data.items;
            setListMovies(thumbs);
        }
    }, [data]);

    if (error) return <div>Failed to load</div>;
    if (isLoading)
        return (
            <div className="flex justify-center items-center bg-background h-screen">
                <div className="border-4 border-primary border-t-transparent rounded-full w-16 h-16 animate-spin" />
            </div>
        );

    return (
        <div className="px-8 pt-20 pb-12 text-white">
            <div
                onClick={() => {
                    filterRef.current.classList.toggle('hidden');
                    filterRef.current.classList.toggle('flex');
                }}
                className="flex items-center gap-3 hover:bg-[#ffffff10] my-6 px-4 py-2 rounded-lg w-fit font-medium text-white cursor-pointer"
            >
                <FaFilter />
                <p>Bộ lọc</p>
            </div>

            <div
                ref={filterRef}
                className="hidden flex-col gap-5 mb-12 py-6 pr-10 border-[#fff3] border-[1px] rounded-xl"
            >
                <ul className="flex items-start gap-6">
                    <h4 className="mt-2 mr-2 w-[130px] font-semibold text-sm text-end">Quốc gia: </h4>
                    <li className="px-3 py-2 border-[#fff3] border-[1px] rounded-lg text-primary text-sm">Tất cả</li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                        Hàn Quốc
                    </li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                        Trung Quốc
                    </li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                        Nhật Bản
                    </li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">Mỹ</li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                        Việt Nam
                    </li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                        Âu Mỹ
                    </li>
                </ul>

                <ul className="flex items-start gap-6">
                    <h4 className="mt-2 mr-2 w-[130px] font-semibold text-sm text-end">Loại phim: </h4>
                    <li className="px-3 py-2 border-[#fff3] border-[1px] rounded-lg text-primary text-sm">Tất cả</li>
                    <li className="opacity-80 px-3 py-2 text-[#fff hover:text-primary text-sm cursor-pointer]">
                        Phim bộ
                    </li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                        Phim lẻ
                    </li>
                </ul>

                <ul className="flex items-start gap-6">
                    <h4 className="flex-shrink-0 mt-2 mr-2 w-[130px] font-semibold text-sm text-end">Thể loại: </h4>
                    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <li className="flex-shrink-0 px-3 py-2 border-[#fff3] border-[1px] rounded-lg text-primary text-sm">
                            Tất cả
                        </li>
                        <li className="flex-shrink-0 opacity-80 px-3 py-2 text-[#fff] text-sm">Bí ẩn</li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Hành động
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Hài hước
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Kinh dị
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Tình cảm
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Viễn tưởng
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Tâm lý
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Học đường
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Tài liệu
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Thể thao
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Âm nhạc
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Gia đình
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Hoạt hình
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Cổ trang
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Tâm linh
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Viễn tưởng
                        </li>
                        <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                            Tình cảm
                        </li>
                    </ul>
                </ul>

                <ul className="flex items-start gap-6">
                    <h4 className="mt-2 mr-2 w-[130px] font-semibold text-sm text-end">Năm sản xuất: </h4>
                    <li className="px-3 py-2 border-[#fff3] border-[1px] rounded-lg text-primary text-sm">Tất cả</li>
                    <li className="opacity-80 px-3 py-2 text-[#fff hover:text-primary text-sm cursor-pointer]">2025</li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">2024</li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">2023</li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">2022</li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">2021</li>
                </ul>

                <ul className="flex items-start gap-6">
                    <h4 className="mt-2 mr-2 w-[130px] font-semibold text-sm text-end">Sắp xếp: </h4>
                    <li className="px-3 py-2 border-[#fff3] border-[1px] rounded-lg text-primary text-sm">Tất cả</li>
                    <li className="opacity-80 px-3 py-2 text-[#fff hover:text-primary text-sm cursor-pointer]">
                        Mới cập nhật
                    </li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                        Lượt xem
                    </li>
                    <li className="opacity-80 px-3 py-2 text-[#fff] hover:text-primary text-sm cursor-pointer">
                        Điểm IMDb
                    </li>
                </ul>

                <div className="flex gap-4 mt-4 ml-[200px]">
                    <button
                        onClick={() => {
                            toast.warning('Chức năng đang được phát triển!');
                        }}
                        className="bg-gradient-to-tr from-yellow-400 to-yellow-50 hover:shadow-[0_0_10px_5px_rgba(255,218,125,0.15)] px-5 py-2 rounded-full font-semibold text-[#191b24] text-sm cursor-pointer"
                    >
                        Lọc kết quả
                    </button>
                    <button
                        onClick={() => {
                            filterRef.current.classList.toggle('hidden');
                            filterRef.current.classList.toggle('flex');
                        }}
                        className="shadow-[#ffffff80] hover:shadow-inner px-6 py-2 border border-[#ffffff80] rounded-full cursor-pointer"
                    >
                        Đóng
                    </button>
                </div>
            </div>

            <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
                {listMovies?.map((item, index) => (
                    <div key={index} className="group relative mb-2 rounded-2xl">
                        <Link
                            href={`/detail_movie/${item?.slug}`}
                            className="block hover:bg-primary hover:p-1 rounded-2xl overflow-hidden duration-300 cursor-pointer"
                        >
                            <Image
                                src={item?.poster_url}
                                alt="Movie Poster"
                                width={250}
                                height={200}
                                className="rounded-xl object-center object-cover aspect-[2/3]"
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl h-auto aspect-[300/450] transition duration-300" />
                        </Link>

                        <div className="flex flex-col items-center gap-1 mt-3">
                            <Link
                                href={`/detail_movie/${item?.slug}`}
                                className="hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer"
                            >
                                {item?.name}
                            </Link>
                            <h4 className="text-[#aaaaaa] text-xs line-clamp-1">{item?.origin_name}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className="flex justify-center items-center gap-4 mt-12">
                <button
                    onClick={() => {
                        toast.warning('Chức năng đang được phát triển!');
                    }}
                    className="flex justify-center items-center bg-[#2f3346] hover:opacity-90 p-4 rounded-full size-[50px] cursor-pointer"
                >
                    <FaArrowLeft className="" />
                </button>
                <div className="flex items-center gap-4 bg-[#2f3346] px-8 rounded-full h-[50px]">
                    <span>Trang </span>
                    <span className="font-medium text-primary">1</span>
                    <span>/</span>
                    <span>25</span>
                </div>
                <button
                    onClick={() => {
                        toast.warning('Chức năng đang được phát triển!');
                    }}
                    className="flex justify-center items-center bg-[#2f3346] hover:opacity-90 p-4 rounded-full size-[50px] cursor-pointer"
                >
                    <FaArrowRight className="" />
                </button>
            </div>
        </div>
    );
}
