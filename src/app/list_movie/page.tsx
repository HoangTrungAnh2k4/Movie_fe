'use client';

import Image from 'next/image';
import { FaFilter } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function ListMovie() {
    return (
        <div className="px-8 pt-28 pb-12 text-white">
            <h5 className="font-semibold text-2xl">Phim lẻ</h5>

            <div
                onClick={() => {
                    toast.warning('Chức năng đang được phát triển!');
                }}
                className="flex items-center gap-3 hover:bg-[#ffffff10] my-6 px-4 py-2 rounded-lg w-fit font-medium text-white cursor-pointer"
            >
                <FaFilter />
                <p>Bộ lọc</p>
            </div>

            <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className="group relative mb-2 rounded-2xl">
                        <div className="hover:bg-primary hover:p-1 rounded-2xl overflow-hidden duration-300 cursor-pointer itemTop10">
                            <Image
                                src="https://static.nutscdn.com/vimg/300-0/4f9cb16b41fe6cece6cb8a958f5e661c.jpg"
                                alt="Movie Poster"
                                width={250}
                                height={200}
                                className="rounded-xl w-full h-auto aspect-[300/450]"
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl h-auto aspect-[300/450] transition duration-300" />
                        </div>

                        <div className="flex flex-col items-center gap-1 mt-3">
                            <h3 className="hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer">
                                Đêm Kinh Hoàng ở Sở Thú
                            </h3>
                            <h4 className="text-[#aaaaaa] text-xs">Night of the Zoopocalypse</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className="flex justify-center items-center gap-4 mt-12">
                <button className="flex justify-center items-center bg-[#2f3346] hover:opacity-90 p-4 rounded-full size-[50px] cursor-pointer">
                    <FaArrowLeft className="" />
                </button>
                <div className="flex items-center gap-4 bg-[#2f3346] px-8 rounded-full h-[50px]">
                    <span>Trang </span>
                    <span className="font-medium text-primary">3</span>
                    <span>/</span>
                    <span>25</span>
                </div>
                <button className="flex justify-center items-center bg-[#2f3346] hover:opacity-90 p-4 rounded-full size-[50px] cursor-pointer">
                    <FaArrowRight className="" />
                </button>
            </div>
        </div>
    );
}
