import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

export default function ListCountryMovie() {
    return (
        <div className="bg-gradient-to-b from-background2 to-background p-8 rounded-xl">
            <div className="flex mb-8">
                <div className="flex flex-col flex-shink-0 gap-2 text-wrap">
                    <h3
                        className="w-[200px] font-semibold text-[1.8em] text-gradient"
                        style={{
                            background: 'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(103, 65, 150) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim Hàn Quốc Mới
                    </h3>
                    <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                        <p className="text-xs">Xem toàn bộ</p>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex-grow gap-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="group relative rounded-xl">
                            <div className="group bg-primary rounded-xl overflow-hidden cursor-pointer">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src="https://static.nutscdn.com/vimg/500-0/65e897d29aca7803c5f1144592764bb2.jpg"
                                        alt="Movie Poster"
                                        width={400}
                                        height={200}
                                        className="rounded-xl aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 pl-4">
                                <h3 className="font-semibold text-white hover:text-primary text-sm duration-300 cursor-pointer">
                                    Người Hùng Yếu Đuối{' '}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs">Người Hùng Yếu Đuối </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mb-8">
                <div className="flex flex-col flex-shink-0 gap-2 text-wrap">
                    <h3
                        className="w-[200px] font-semibold text-[1.8em] text-gradient"
                        style={{
                            background: 'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(247, 161, 11) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim Trung Quốc Mới
                    </h3>
                    <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                        <p className="text-xs">Xem toàn bộ</p>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex-grow gap-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="group relative rounded-xl">
                            <div className="group bg-primary rounded-xl overflow-hidden cursor-pointer">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src="https://static.nutscdn.com/vimg/500-0/65e897d29aca7803c5f1144592764bb2.jpg"
                                        alt="Movie Poster"
                                        width={400}
                                        height={200}
                                        className="rounded-xl aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 pl-4">
                                <h3 className="font-semibold text-white hover:text-primary text-sm duration-300 cursor-pointer">
                                    Người Hùng Yếu Đuối{' '}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs">Người Hùng Yếu Đuối </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mb-6">
                <div className="flex flex-col flex-shink-0 gap-2 text-wrap">
                    <h3
                        className="w-[200px] font-semibold text-[1.8em] text-gradient"
                        style={{
                            background: 'linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(255, 0, 153) 130%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Phim US-UK mới
                    </h3>
                    <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                        <p className="text-xs">Xem toàn bộ</p>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex-grow gap-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="group relative rounded-xl">
                            <div className="group bg-primary rounded-xl overflow-hidden cursor-pointer">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src="https://static.nutscdn.com/vimg/500-0/65e897d29aca7803c5f1144592764bb2.jpg"
                                        alt="Movie Poster"
                                        width={400}
                                        height={200}
                                        className="rounded-xl aspect-[500/281] group-hover:scale-x-[98%] group-hover:scale-y-[96%] transition-transform duration-300"
                                    />
                                </div>

                                {/* lớp phủ */}
                                <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-xl w-full h-auto aspect-[500/281] transition-all duration-300" />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 pl-4">
                                <h3 className="font-semibold text-white hover:text-primary text-sm duration-300 cursor-pointer">
                                    Người Hùng Yếu Đuối{' '}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs">Người Hùng Yếu Đuối </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
