import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SplashScreen() {
    return (
        <section className='flex min-h-screen items-end justify-center overflow-hidden px-4 text-white sm:px-6 lg:px-8'>
            <Image
                src='/home-background.jpg'
                alt=''
                fill
                priority
                sizes='100vw'
                className='object-cover'
            />

            <div className='relative w-[65%] rounded-t-[34px] border border-white/5 bg-[#12141d]/92 px-6 pt-8 pb-16 shadow-[0_28px_100px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-10'>
                <div className='mx-auto flex max-w-[1020px] flex-col items-center text-center'>
                    <div className='flex items-center gap-4'>
                        <Image
                            src='/ro-icon.svg'
                            alt='RoPhim'
                            width={250}
                            height={250}
                        />
                    </div>

                    <h2 className='mt-14 max-w-[980px] text-4xl leading-tight font-semibold tracking-normal'>
                        Xem phim online miễn phí, tìm phim nhanh và theo dõi nội
                        dung mới mỗi ngày
                    </h2>

                    <p className='mt-14 max-w-[1020px] text-left text-sm leading-8 text-white/62'>
                        NuiPhim là nơi tổng hợp phim lẻ, phim bộ, anime và nhiều
                        nội dung giải trí phổ biến với giao diện dễ dùng, tốc độ
                        truy cập nhanh và danh mục được cập nhật liên tục.
                    </p>

                    <Link
                        href='/home'
                        className='mt-12 inline-flex h-[66px] min-w-[300px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#ffd35f] to-[#fff0bc] pr-6 pl-10 text-xl font-bold text-[#333] hover:shadow-[0_5px_10px_10px_rgba(255,218,125,0.15)]'
                    >
                        Xem Phim Nào!
                        <ArrowRight className='size-6' strokeWidth={2.5} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
