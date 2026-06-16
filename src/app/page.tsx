import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SplashScreen() {
    return (
        <section className="relative  flex min-h-screen items-center justify-center overflow-hidden bg-[#10121b] px-4 py-10 text-white sm:px-6 lg:px-8">
            <Image src="/behind-hero.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
            <div className="absolute inset-0 bg-[#10121b]/70" />
            <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-black/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#10121b] to-transparent" />

            <div className="relative w-full max-w-[1350px] rounded-[34px] border border-white/5 bg-[#12141d]/92 px-6 py-16 shadow-[0_28px_100px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-10 lg:px-28 lg:py-24">
                <div className="mx-auto flex max-w-[1020px] flex-col items-center text-center">
                    <div className="flex items-center gap-4">
                        <Image src="/ro-icon.svg" alt="RoPhim" width={76} height={76} className="size-16 sm:size-20" />
                        <div className="text-left">
                            <h3 className="text-4xl font-bold leading-none tracking-normal sm:text-5xl">Movie app</h3>
                        </div>
                    </div>

                    <h2 className="mt-16 max-w-[980px] text-3xl font-bold leading-tight tracking-normal sm:text-4xl lg:text-[46px]">
                        Xem phim online miễn phí, tìm phim nhanh và theo dõi nội dung mới mỗi ngày
                    </h2>

                    <p className="mt-20 max-w-[1020px] text-left text-base leading-8 text-white/62 sm:text-lg">
                        RoPhim là nơi tổng hợp phim lẻ, phim bộ, anime và nhiều nội dung giải trí phổ biến với giao diện
                        dễ dùng, tốc độ truy cập nhanh và danh mục được cập nhật liên tục.
                    </p>

                    <Link
                        href="/home"
                        className="mt-16 inline-flex h-[84px] min-w-[350px] items-center justify-center gap-8 rounded-full bg-gradient-to-r from-[#ffd35f] to-[#fff0bc] px-10 text-2xl font-bold text-[#10121b] shadow-[0_14px_32px_rgba(255,216,117,0.2)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(255,216,117,0.28)] max-sm:h-16 max-sm:min-w-0 max-sm:w-full max-sm:text-lg"
                    >
                        Xem Phim Nào!
                        <ArrowRight className="size-7" strokeWidth={2.5} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
