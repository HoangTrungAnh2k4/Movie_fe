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
import { addFavoriteMovieApi } from '@/api/userApi';

type MovieInfo = {
    slug?: string;
    [key: string]: unknown;
};

type EpisodeList = unknown[];

export default function Episode({
    infor,
}: {
    episodes: EpisodeList;
    infor: MovieInfo;
}) {
    const [activeFavorite, setActiveFavorite] = useState(false);
    const router = useRouter();

    const { user } = useUserStore();

    const MoveToWatch = () => {
        router.push(`/watch_movie/${infor?.slug}`);
    };

    const addFavorite = async () => {
        const movieSlug = infor?.slug;

        if (!movieSlug || /\s/.test(movieSlug)) {
            toast.error(
                'Tên phim không được chứa khoảng trắng! Vui lòng chọn phim khác!',
            );
            return;
        }

        try {
            const res = await addFavoriteMovieApi(movieSlug);

            if (res.status === 401) {
                toast.error(
                    'Bạn cần đăng nhập để thêm vào danh sách yêu thích!',
                );
                return;
            }

            if (res.status === 201) {
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
        const isFavorite = favoriteMovies.some(
            (movie) => movie === infor?.slug,
        );
        setActiveFavorite(isFavorite);
    }, [user, infor]);

    return (
        <div className='p-4' id='episode-section'>
            <div className='flex flex-col items-center justify-start gap-6 lg:flex-row lg:gap-12'>
                <div
                    onClick={MoveToWatch}
                    className='flex cursor-pointer items-center gap-4 rounded-full px-18 py-2.5 text-lg font-semibold text-black hover:shadow-[0_5px_10px_10px_rgba(255,218,125,0.15)] lg:px-8 lg:py-3.5'
                    style={{
                        background:
                            'linear-gradient(39deg, rgba(254, 207, 89, 1), rgba(255, 241, 204, 1))',
                    }}
                >
                    <FaPlay />
                    <p>Xem ngay</p>
                </div>

                <ul className='flex items-center justify-center gap-4'>
                    <div
                        onClick={addFavorite}
                        className='group cursor-pointer justify-items-center rounded-xl px-4 py-2 hover:bg-[#ffffff10] lg:ml-24'
                    >
                        <FaHeart
                            className={`text-xl group-hover:text-yellow-500 ${activeFavorite ? 'text-primary' : ''}`}
                        />
                        <p className='mt-2 text-xs'>Yêu thích</p>
                    </div>

                    <div
                        onClick={() => {
                            const commentInput =
                                document.querySelector('textarea');
                            if (commentInput) {
                                commentInput.focus();
                            }
                            document
                                .getElementById('episode-section')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className='group cursor-pointer justify-items-center rounded-xl px-4 py-2 hover:bg-[#ffffff10]'
                    >
                        <IoChatboxEllipses className='text-xl group-hover:text-yellow-500' />
                        <p className='mt-2 text-xs'>Bình luận</p>
                    </div>

                    <div className='group cursor-pointer justify-items-center rounded-xl px-4 py-2 hover:bg-[#ffffff10]'>
                        <PiPaperPlaneTiltFill className='text-xl group-hover:text-yellow-500' />
                        <p className='mt-2 text-xs'>Chia sẻ</p>
                    </div>
                </ul>
            </div>

            <div className='mt-6 lg:mt-12'>
                <ul className='flex items-center gap-12 border-b-2 border-[#ffffff10] text-sm'>
                    <li className='border-primary text-primary cursor-pointer border-b-2 px-2 pt-2 pb-2'>
                        Tập phim
                    </li>
                </ul>

                {/* content */}
                <div className='mt-6'>
                    <div className='group relative w-fit'>
                        <div
                            data-popovertarget='cac_phan'
                            className='flex w-fit cursor-pointer items-center gap-6 rounded-lg px-4 py-2 text-xl hover:bg-[#ffffff10]'
                        >
                            <FaBarsStaggered className='text-primary text-2xl' />
                            <p className='font-semibold'>Phần 1</p>
                            <FaCaretDown />
                        </div>

                        <div
                            data-popover='manual'
                            id='cac_phan'
                            className='absolute right-0 bottom-15 z-50 hidden w-fit overflow-hidden rounded-lg bg-white py-2 text-sm group-hover:block'
                        >
                            <h5 className='text-background2 mb-2 px-4 py-1'>
                                Danh sách các phần{' '}
                            </h5>
                            <div className='bg-primary text-background2 px-4 py-2 font-semibold'>
                                Phần 1
                            </div>
                        </div>
                    </div>

                    <div className='mt-6 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4'>
                        <div
                            onClick={MoveToWatch}
                            className='hover:text-primary flex h-[50px] w-[148px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ffffff10] px-6 text-sm font-semibold'
                        >
                            <FaPlay />
                            <p>Trailer</p>
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <Comment />
                </div>
            </div>
        </div>
    );
}
