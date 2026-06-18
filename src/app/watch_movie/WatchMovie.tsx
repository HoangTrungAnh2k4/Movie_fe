'use client'; // BẮT BUỘC để tránh lỗi hydration

import ReactPlayer from 'react-player';
import {
    FaHeart,
    FaPlus,
    FaShareNodes,
    FaRegLightbulb,
    FaFlag,
} from 'react-icons/fa6';
import { PiPaperPlaneTiltFill } from 'react-icons/pi';

export default function WatchMovie({ url }: { url: string }) {
    return (
        <div className='pt-6 text-white'>
            <div className='overflow-hidden rounded-2xl bg-black'>
                <div className='aspect-video w-full'>
                    <ReactPlayer
                        url={url}
                        controls
                        playing
                        width='100%'
                        height='100%'
                    />
                </div>

                <div className='border-t border-white/10 bg-[#08080a] px-4 py-5 sm:px-6'>
                    <div className='flex items-center gap-5 overflow-x-auto text-sm whitespace-nowrap text-[#f3f3f3]'>
                        <button className='hover:text-primary flex cursor-pointer items-center gap-2 transition'>
                            <FaHeart />
                            <span>Yêu thích</span>
                        </button>
                        <button className='hover:text-primary flex cursor-pointer items-center gap-2 transition'>
                            <FaPlus />
                            <span>Thêm vào</span>
                        </button>
                        <button className='hover:text-primary flex cursor-pointer items-center gap-2 transition'>
                            <span className='mt-[3px] rounded-md border border-[#f3f3f3]/40 px-1.5 py-[1px] text-[11px] font-semibold'>
                                ON
                            </span>
                            <span>Chuyển tập</span>
                        </button>
                        <button className='hover:text-primary flex cursor-pointer items-center gap-2 transition'>
                            <span className='mt-[3px] rounded-md border border-[#f3f3f3]/40 px-1.5 py-[1px] text-[11px] font-semibold'>
                                OFF
                            </span>
                            <span>Bỏ qua giới thiệu</span>
                        </button>
                        <button className='hover:text-primary flex cursor-pointer items-center gap-2 transition'>
                            <FaShareNodes />
                            <span>Chia sẻ</span>
                        </button>
                        <button className='hover:text-primary flex cursor-pointer items-center gap-2 transition'>
                            <FaRegLightbulb />
                            <span>Rạp phim</span>
                        </button>
                        <button className='hover:text-primary ml-auto flex cursor-pointer items-center gap-2 transition'>
                            <PiPaperPlaneTiltFill />
                            <span>Báo lỗi</span>
                        </button>
                        <button className='hover:text-primary flex cursor-pointer items-center gap-2 transition'>
                            <FaFlag />
                            <span>Góp ý</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
