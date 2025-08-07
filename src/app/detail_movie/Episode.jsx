'use client';

import { FaPlay, FaHeart, FaCaretDown } from 'react-icons/fa';
import { PiPaperPlaneTiltFill } from 'react-icons/pi';
import { IoChatboxEllipses } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';

import Comment from './Comment';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useUserStore } from '@/store/userStore';
import { useEffect, useState } from 'react';

const USER_URL = process.env.NEXT_PUBLIC_USER_URL;

export default function Episode({ episodes, infor }) {
    const [activeFavorite, setActiveFavorite] = useState(false);
    const router = useRouter();

    const { user } = useUserStore();

    const MoveToWatch = () => {
        sessionStorage.setItem('watchMovieData1', JSON.stringify(infor));
        sessionStorage.setItem('watchMovieData2', JSON.stringify(episodes));
        router.push(`/watch_movie`);
    };

    const addFavorite = async () => {
        if (/\s/.test(infor?.slug)) {
            toast.error('Tên phim không được chứa khoảng trắng! Vui lòng chọn phim khác!');
            return;
        }

        try {
            const res = await addFavoriteMovieApi(infor?.slug);

            if (res.status === 401) {
                toast.error('Bạn cần đăng nhập để thêm vào danh sách yêu thích!');
                return;
            }

            if (res.ok) {
                toast.success('Thêm vào danh sách yêu thích thành công!');
                setActiveFavorite(true);
            }
        } catch (error) {
            toast.error('Lỗi kết nối tới máy chủ!');
            console.error(error);
        }
    };

    useEffect(() => {
        const favoriteMovies = user?.favorite || [];
        const isFavorite = favoriteMovies.some((movie) => movie === infor?.slug);
        setActiveFavorite(isFavorite);
    }, [user, infor]);

    return (
        <div className="p-4" id="episode-section">
            <div className="flex flex-col items-center justify-start gap-6 lg:flex-row lg:gap-12">
                <div
                    onClick={MoveToWatch}
                    className="flex items-center gap-4 hover:shadow-[0_5px_10px_10px_rgba(255,218,125,0.15)] px-18 lg:px-8 py-2.5 lg:py-3.5 rounded-full font-semibold text-black text-lg cursor-pointer"
                    style={{
                        background: 'linear-gradient(39deg, rgba(254, 207, 89, 1), rgba(255, 241, 204, 1))',
                    }}
                >
                    <FaPlay />
                    <p>Xem ngay</p>
                </div>

                <ul className="flex items-center justify-center gap-4">
                    <div
                        onClick={addFavorite}
                        className="group justify-items-center hover:bg-[#ffffff10] lg:ml-24 px-4 py-2 rounded-xl cursor-pointer"
                    >
                        <FaHeart
                            className={`group-hover:text-yellow-500 text-xl ${activeFavorite ? 'text-primary' : ''}`}
                        />
                        <p className="mt-2 text-xs">Yêu thích</p>
                    </div>

                    <div
                        onClick={() => {
                            const commentInput = document.querySelector('textarea');
                            commentInput.focus();
                            document.getElementById('episode-section').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group justify-items-center hover:bg-[#ffffff10] px-4 py-2 rounded-xl cursor-pointer"
                    >
                        <IoChatboxEllipses className="text-xl group-hover:text-yellow-500" />
                        <p className="mt-2 text-xs">Bình luận</p>
                    </div>

                    <div className="group justify-items-center hover:bg-[#ffffff10] px-4 py-2 rounded-xl cursor-pointer">
                        <PiPaperPlaneTiltFill className="text-xl group-hover:text-yellow-500" />
                        <p className="mt-2 text-xs">Chia sẻ</p>
                    </div>
                </ul>
            </div>

            <div className="mt-6 lg:mt-12">
                <ul className="flex items-center gap-12 border-[#ffffff10] border-b-2 text-sm">
                    <li className="px-2 pt-2 pb-2 border-b-2 cursor-pointer border-primary text-primary">Tập phim</li>
                </ul>

                {/* content */}
                <div className="mt-6">
                    <div className="relative group w-fit">
                        <div
                            data-popovertarget="cac_phan"
                            className="flex items-center gap-6 hover:bg-[#ffffff10] px-4 py-2 rounded-lg w-fit text-xl cursor-pointer"
                        >
                            <FaBarsStaggered className="text-2xl text-primary" />
                            <p className="font-semibold">Phần 1</p>
                            <FaCaretDown />
                        </div>

                        <div
                            data-popover="manual"
                            id="cac_phan"
                            className="absolute right-0 z-50 hidden py-2 overflow-hidden text-sm bg-white rounded-lg group-hover:block bottom-15 w-fit"
                        >
                            <h5 className="px-4 py-1 mb-2 text-background2">Danh sách các phần </h5>
                            <div className="px-4 py-2 font-semibold bg-primary text-background2">Phần 1</div>
                        </div>
                    </div>

                    <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] mt-6">
                        {Array.isArray(episodes) &&
                            episodes?.map((item, index) => (
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
                    <Comment nameSlug={infor?.slug} />
                </div>
            </div>
        </div>
    );
}
