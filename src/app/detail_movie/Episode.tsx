'use client';

import { FaPlay, FaHeart, FaCaretDown } from 'react-icons/fa';
import { PiPaperPlaneTiltFill } from 'react-icons/pi';
import { IoChatboxEllipses } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';

import Comment from './Comment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Episode({ episodes, infor }) {
    const router = useRouter();

    const MoveToWatch = () => {
        sessionStorage.setItem('watchMovieData1', JSON.stringify(infor));
        sessionStorage.setItem('watchMovieData2', JSON.stringify(episodes));
        router.push(`/watch_movie`);
    };

    return (
        <div className="p-4">
            <div className="flex justify-start items-center gap-12">
                <Link
                    href={`/watch_movie`}
                    className="flex items-center gap-4 hover:shadow-[0_5px_10px_10px_rgba(255,218,125,0.15)] px-8 py-3.5 rounded-full font-semibold text-black text-lg cursor-pointer"
                    style={{
                        background: 'linear-gradient(39deg, rgba(254, 207, 89, 1), rgba(255, 241, 204, 1))',
                    }}
                >
                    <FaPlay />
                    <p>Xem ngay</p>
                </Link>

                <div className="group justify-items-center hover:bg-[#ffffff10] ml-24 px-4 py-2 rounded-xl cursor-pointer">
                    <FaHeart className="group-hover:text-yellow-500 text-xl" />
                    <p className="mt-2 text-xs">Yêu thích</p>
                </div>

                <div className="group justify-items-center hover:bg-[#ffffff10] px-4 py-2 rounded-xl cursor-pointer">
                    <PiPaperPlaneTiltFill className="group-hover:text-yellow-500 text-xl" />
                    <p className="mt-2 text-xs">Chia sẻ</p>
                </div>

                <div className="group justify-items-center hover:bg-[#ffffff10] px-4 py-2 rounded-xl cursor-pointer">
                    <IoChatboxEllipses className="group-hover:text-yellow-500 text-xl" />
                    <p className="mt-2 text-xs">Bình luận</p>
                </div>
            </div>

            <div className="mt-12">
                <ul className="flex items-center gap-12 border-[#ffffff10] border-b-2 text-sm">
                    <li className="px-2 pt-2 pb-2 border-primary border-b-2 text-primary cursor-pointer">Tập phim</li>
                </ul>

                {/* content */}
                <div className="mt-6">
                    <div className="group relative w-fit">
                        <div
                            data-popovertarget="cac_phan"
                            className="flex items-center gap-6 hover:bg-[#ffffff10] px-4 py-2 rounded-lg w-fit text-xl cursor-pointer"
                        >
                            <FaBarsStaggered className="text-primary text-2xl" />
                            <p className="font-semibold">Phần 1</p>
                            <FaCaretDown />
                        </div>

                        <div
                            data-popover="manual"
                            id="cac_phan"
                            className="hidden group-hover:block right-0 bottom-15 z-50 absolute bg-white py-2 rounded-lg w-fit overflow-hidden text-sm"
                        >
                            <h5 className="mb-2 px-4 py-1 text-background2">Danh sách các phần </h5>
                            <div className="bg-primary px-4 py-2 font-semibold text-background2">Phần 1</div>
                        </div>
                    </div>

                    <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] mt-6">
                        {episodes?.map((item, index: number) => (
                            <div
                                onClick={MoveToWatch}
                                key={index}
                                className="flex justify-center items-center gap-4 bg-[#ffffff10] px-4 rounded-lg h-[50px] hover:text-primary text-sm cursor-pointer"
                            >
                                <FaPlay />
                                <p>Tập {index + 1}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12">
                    <Comment />
                </div>
            </div>
        </div>
    );
}
