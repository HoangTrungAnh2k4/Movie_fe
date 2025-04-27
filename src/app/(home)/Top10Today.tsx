import Image from 'next/image';

export default function Top10Today() {
    return (
        <div className="">
            <div className="gap-6 grid grid-cols-5">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="group relative rounded-2xl">
                        <div
                            className={`hover:bg-primary overflow-hidden hover:p-1 cursor-pointer duration-300  rounded-2xl  itemTop10 ${
                                index % 2 != 0 ? 'itemTop10Left' : 'itemTop10Right'
                            } `}
                        >
                            <Image
                                src="https://static.nutscdn.com/vimg/400-0/3ac6b7f3647ae31e17d8f0675a162aa9.png"
                                alt="Movie Poster"
                                width={400}
                                height={600}
                                className={`rounded-xl ${index % 2 != 0 ? 'itemTop10Left' : 'itemTop10Right'}`}
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl w-full h-full transition duration-300" />
                        </div>

                        <div className="flex items-center gap-2 mt-3">
                            <div
                                className=""
                                style={{
                                    background: 'linear-gradient(39deg, rgba(254, 207, 89, 1), rgba(255, 241, 204, 1))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontStyle: 'italic',
                                    fontWeight: '800',
                                    fontSize: '4.2em',
                                    lineHeight: '1',
                                    width: '50px',
                                }}
                            >
                                {index + 1}
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-semibold text-white hover:text-primary text-sm duration-300 cursor-pointer">
                                    Người Hùng Yếu Đuối{' '}
                                </h3>
                                <h3 className="text-[#aaaaaa] text-xs">Người Hùng Yếu Đuối </h3>
                                <ul className="flex justify-between mt-[2px] text-[#aaa]">
                                    <li className="text-xs">T16</li>
                                    <li className="text-xs">Phần 1</li>
                                    <li className="text-xs">Tập 36</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
