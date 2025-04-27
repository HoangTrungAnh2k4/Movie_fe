import Image from 'next/image';

export function TopCinema() {
    return (
        <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
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

                    <div className="z-20 relative flex items-end gap-4 shadow-2xl -mt-[45px] px-6">
                        <Image
                            src="https://static.nutscdn.com/vimg/100-0/6642a2a1f24e530401ccc15d01410cd2.jpg"
                            alt="Movie Poster"
                            width={400}
                            height={200}
                            className="border border-[#aaaaaa] rounded-xl w-[80px] h-auto aspect-[100/157]"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-white hover:text-primary text-sm duration-300 cursor-pointer">
                                Người Hùng Yếu Đuối{' '}
                            </h3>
                            <h3 className="text-[#aaaaaa] text-xs">Người Hùng Yếu Đuối </h3>
                            <ul className="flex justify-between mt-[2px] text-[#aaaaaa]">
                                <li className="text-xs">T16</li>
                                <li className="text-xs">Phần 1</li>
                                <li className="text-xs">Tập 36</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
