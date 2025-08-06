import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

export default function Poster30_4() {
    return (
        <div className="hidden sm:flex justify-between bg-[#fedaa8] px-12 rounded-xl w-full h-[350px]">
            <div className="flex">
                <Image
                    src="https://www.rophim.me/images/event_304/hero.webp"
                    alt="Event Poster"
                    width={300}
                    height={400}
                    className="top-0 -left-10 z-30 relative w-[350px] h-[350px]"
                />
                <Image
                    src="https://www.rophim.me/images/event_304/vn-flag-full.gif"
                    alt="Event Poster"
                    width={203}
                    height={180}
                    className="-top-8 -left-86 z-20 relative w-[203px] h-[180px] -rotate-[23deg]"
                />
            </div>

            <div className="-ml-[500px] h-full overflow-hidden">
                <Image
                    src="https://www.rophim.me/images/event_304/behind-hero.webp"
                    alt="Event Poster"
                    width={600}
                    height={400}
                    className="h-[400px] w-auto -translate-y-4"
                />
            </div>
            <div className="flex flex-col justify-center items-center py-6">
                <Image
                    src="https://www.rophim.me/images/event_304/50y.webp"
                    alt="Event Poster"
                    width={300}
                    height={200}
                    className="my-auto w-auto h-[200px]"
                />
                <button
                    onClick={() =>
                        window.open(
                            'https://vi.wikipedia.org/wiki/S%E1%BB%B1_ki%E1%BB%87n_30_th%C3%A1ng_4_n%C4%83m_1975',
                        )
                    }
                    className="flex items-center gap-8 bg-white px-12 py-3 rounded-lg text-black cursor-pointer"
                >
                    <p className="font-semibold">Tìm hiểu về ngày 30/4 </p>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}
