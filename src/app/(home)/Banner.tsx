import { FaPlay, FaHeart, FaExclamationCircle } from 'react-icons/fa';
import Image from 'next/image';

function Banner() {
    return (
        <div
            className="inset-0 bg-cover bg-no-repeat bg-center shadow-[inset_150px_0_200px_200px_rgba(0,0,0,0.8)] w-full h-[650px] text-white"
            style={{
                backgroundImage: `url('https://static.nutscdn.com/vimg/1920-0/8e877fb92ede7c3024b5d80afa80e0b3.jpg')`,
            }}
        >
            <div className="flex h-full">
                <div className="flex flex-col flex-1 justify-center px-8 h-full">
                    <h1 className="font-semibold hover:text-primary text-3xl">Daredevil: Tái Xuất</h1>

                    <ul className="flex justify-start items-center gap-4 mt-8 text-xs">
                        <li className="bg-gradient-to-bl from-primary to-white px-2 py-[2px] pt-[3px] rounded-md font-semibold text-black">
                            4k
                        </li>
                        <li className="bg-white px-2 py-[2px] pt-[3px] rounded-md text-black">T16</li>
                        <li className="px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">2025</li>
                        <li className="px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">2h 30m</li>
                    </ul>

                    <ul className="flex gap-2 mt-4">
                        <li className="bg-[#f3f3f310] px-2 py-[2px] pt-[3px] rounded-md text-xs">Hành Động</li>
                        <li className="bg-[#f3f3f310] px-2 py-[2px] pt-[3px] rounded-md text-xs">Hình Sự</li>
                        <li className="bg-[#f3f3f310] px-2 py-[2px] pt-[3px] rounded-md text-xs">Tâm Lý</li>
                    </ul>

                    <p className="mt-8 w-[35%] text-sm line-clamp-3">
                        Matt Murdock, một luật sư mù với khả năng đặc biệt, chiến đấu cho công lý thông qua công ty luật
                        sầm uất của mình. Trong khi cựu trùm mafia Wilson Fisk theo đuổi những nỗ lực chính trị của
                        riêng mình ở New York. Khi quá khứ của họ bắt đầu lộ diện, cả hai người đều thấy mình trên con
                        đường va chạm không thể tránh khỏi.
                    </p>

                    <div className="flex justify-between items-center gap-4 mt-16 text-xs">
                        <div className="flex items-center gap-8">
                            <button className="flex justify-center items-center bg-gradient-to-tr from-yellow-400 to-yellow-50 hover:shadow-[0_0_20px_2px_rgba(255,215,0,0.8)] rounded-full size-[70px] text-black cursor-pointer">
                                <FaPlay className="ml-1 text-2xl" />
                            </button>

                            <div className="flex items-center border-[#ffffff10] border-2 hover:border-white rounded-full w-fit h-[50px]">
                                <button className="flex justify-center items-center px-5 py-2 border-[#ffffff10] border-r-2 h-full text-white hover:text-primary cursor-pointer">
                                    <FaHeart className="ml-1 text-xl" />
                                </button>
                                <button className="flex justify-center items-center px-5 py-2 h-full text-white hover:text-primary cursor-pointer">
                                    <FaExclamationCircle className="ml-1 text-2xl rotate-180" />
                                </button>
                            </div>
                        </div>

                        {/* slider */}
                        <ul className="flex justify-center items-center gap-4">
                            <li className="border-[3px] border-white w-[80px]">
                                <Image
                                    className="aspect-[25/14]"
                                    src="https://static.nutscdn.com/vimg/150-0/95a95932afef1c146d6da94a54ec3864.jpg"
                                    width={80}
                                    alt=""
                                    height={80}
                                />
                            </li>
                            <li className="w-[80px]">
                                <Image
                                    className="aspect-[25/14]"
                                    src="https://static.nutscdn.com/vimg/150-0/95a95932afef1c146d6da94a54ec3864.jpg"
                                    width={80}
                                    alt=""
                                    height={80}
                                />
                            </li>
                            <li className="w-[80px]">
                                <Image
                                    className="aspect-[25/14]"
                                    src="https://static.nutscdn.com/vimg/150-0/95a95932afef1c146d6da94a54ec3864.jpg"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                            </li>
                            <li className="w-[80px]">
                                <Image
                                    className="aspect-[25/14]"
                                    src="https://static.nutscdn.com/vimg/150-0/95a95932afef1c146d6da94a54ec3864.jpg"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                            </li>
                            <li className="w-[80px]">
                                <Image
                                    className="aspect-[25/14]"
                                    src="https://static.nutscdn.com/vimg/150-0/95a95932afef1c146d6da94a54ec3864.jpg"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
