import Image from 'next/image';
import { BiSolidMovie } from 'react-icons/bi';
import { FaArrowTrendUp, FaArrowTrendDown, FaHeartCircleCheck } from 'react-icons/fa6';

export default function TopTrending() {
    return (
        <div className="flex bg-transparent border border-[#fff2] rounded-xl">
            {/* left col */}
            <div className="flex-1 py-6 pl-16 border-[#fff2] border-r h-full">
                <div className="flex items-center gap-4">
                    <BiSolidMovie className="text-primary text-2xl" />
                    <h4 className="font-semibold"> SÔI NỔI NHẤT</h4>
                </div>

                <ul className="flex flex-col gap-5 mt-6">
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">1. </p>
                        <FaArrowTrendUp className="font-semibold text-[#bedc33] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">2. </p>
                        <FaArrowTrendUp className="font-semibold text-[#bedc33] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">3. </p>
                        <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">3. </p>
                        <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">3. </p>
                        <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                </ul>
            </div>

            {/* right col */}
            <div className="flex-1 py-6 pl-16 h-full">
                <div className="flex items-center gap-4">
                    <FaHeartCircleCheck className="text-primary text-2xl" />
                    <h4 className="font-semibold"> YÊU THÍCH NHẤT</h4>
                </div>

                <ul className="flex flex-col gap-5 mt-6">
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">1. </p>
                        <FaArrowTrendUp className="font-semibold text-[#bedc33] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">2. </p>
                        <FaArrowTrendUp className="font-semibold text-[#bedc33] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">3. </p>
                        <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">3. </p>
                        <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                    <li className="flex items-center gap-5">
                        <p className="opacity-40 font-semibold text-[#aaaaaa]">3. </p>
                        <FaArrowTrendDown className="font-semibold text-[#dc328c] text-lg" />
                        <Image
                            src="https://static.nutscdn.com/vimg/300-0/2b7adbb9776aa316d79ee4d7e2ae57d0.png"
                            alt="Event Poster"
                            width={200}
                            height={400}
                            className="w-[40px] aspect-[3/4]"
                        />
                        <h5 className="hover:text-primary cursor-pointer">Người Hùng Yếu Đuối</h5>
                    </li>
                </ul>
            </div>
        </div>
    );
}
