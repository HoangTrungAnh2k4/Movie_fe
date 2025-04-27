import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function Information() {
    return (
        <div className="p-8 w-fit">
            <Image
                className="rounded-lg w-[160px] h-auto object-cover aspect-[2/3]"
                src="https://static.nutscdn.com/vimg/300-0/ca47b1f251a8fba93b5856f94a4ece1b.jpg"
                width={160}
                height={240}
                alt=""
            />
            <h3 className="mt-4 font-semibold text-2xl">Giờ Phiêu Lưu</h3>
            <h3 className="mt-3 text-primary text-sm">Giờ Phiêu Lưu</h3>
            <ul className="flex justify-start items-center gap-4 mt-4 text-xs">
                <li className="bg-gradient-to-bl from-primary to-white px-2 py-[2px] pt-[3px] rounded-md font-semibold text-black">
                    4k
                </li>
                <li className="bg-white px-2 py-[2px] pt-[3px] rounded-md text-black">T16</li>
                <li className="bg-[#ffffff10] px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">
                    2025
                </li>
                <li className="bg-[#ffffff10] px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">
                    2h 30m
                </li>
            </ul>

            <ul className="flex gap-2 mt-4">
                <li className="bg-[#f3f3f310] px-2 py-1.5 rounded-md text-xs">Hành Động</li>
                <li className="bg-[#f3f3f310] px-2 py-1.5 rounded-md text-xs">Hình Sự</li>
                <li className="bg-[#f3f3f310] px-2 py-1.5 rounded-md text-xs">Tâm Lý</li>
            </ul>

            <div className="flex items-center gap-2 bg-[#22cb4c1a] mt-4 px-4 py-1 rounded-full w-fit text-[#22cb4c] text-xs">
                <FaCheckCircle /> Đã hoàn thành 16/16 tập
            </div>

            <h5 className="mt-6 mb-2 font-semibold text-white text-sm">Giới thiệu:</h5>

            <p className="text-[#aaaaaa] text-sm">
                Cậu bé Finn và anh bạn Jake, chú chó biết thay đổi hình dạng, có một loạt những cuộc phiêu lưu kì ảo khi
                chu du khắp Xứ Ooo hậu tận thế.
            </p>

            <div className="flex gap-4 mt-6 mb-2 text-white text-sm">
                <p className="font-semibold">Thời lượng:</p>
                <p className="text-[#aaaaaa] text-sm">2h 30m</p>
            </div>

            <div className="flex gap-4 mt-6 mb-2 text-white text-sm">
                <p className="font-semibold">Quốc gia:</p>
                <p className="text-[#aaaaaa] text-sm">Mỹ</p>
            </div>

            <div className="flex gap-4 mt-6 mb-2 text-white text-sm">
                <p className="font-semibold">NetWorks</p>
                <p className="text-[#aaaaaa] text-sm">Cartoon Network</p>
            </div>

            <p className="mt-6 font-semibold">Diễn viên:</p>
            <ul className="space-y-2 pt-2 text-white text-sm list-disc list-inside">
                <li className="text-[#aaaaaa] text-sm">Tom Kenny</li>
                <li className="text-[#aaaaaa] text-sm">John DiMaggio</li>
                <li className="text-[#aaaaaa] text-sm">Jeremy Shada</li>
                <li className="text-[#aaaaaa] text-sm">Hynden Walch</li>
                <li className="text-[#aaaaaa] text-sm">Niki Yang</li>
            </ul>
        </div>
    );
}
