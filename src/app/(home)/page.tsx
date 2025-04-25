import Banner from './Banner';
import TypeList from './TypeList';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="bg-background px-8 pb-20">
            <div className="-mx-8">
                <Banner />
            </div>

            {/* Lớp phủ để che ranh giới của banner với phần còn lại */}
            <div className="bg-[linear-gradient(to_top,_#191b24_30%,_transparent_100%)] -mx-8 -mt-26 h-36"></div>

            {/* Type list */}
            <div className="-mt-24">
                <h4 className="font-semibold text-white text-2xl">Bạn đang quan tâm gì?</h4>
                <TypeList />
            </div>

            {/* poster 30/4 - 1/5 */}
            <div className="flex justify-between bg-[#fedaa8] mt-24 rounded-lg w-full h-[350px]">
                <div className="">
                    <Image
                        src="https://www.rophim.me/images/event_304/hero.webp"
                        alt="Event Poster"
                        width={300}
                        height={400}
                        className="top-0 left-10 z-10 relative w-[350px] h-[350px]"
                    />
                </div>
                <div className="h-full overflow-hidden">
                    <Image
                        src="https://www.rophim.me/images/event_304/behind-hero.webp"
                        alt="Event Poster"
                        width={600}
                        height={300}
                        className="w-auto h-[400px] -translate-y-4"
                    />
                </div>
                <Image
                    src="https://www.rophim.me/images/event_304/50y.webp"
                    alt="Event Poster"
                    width={300}
                    height={400}
                    className="my-auto ml-32 w-auto h-[200px]"
                />
                <Image
                    src="https://www.rophim.me/images/event_304/vn-flag-full.gif"
                    alt="Event Poster"
                    width={203}
                    height={180}
                    className="-top-9 -left-292 relative w-[203px] h-[180px] -rotate-[23deg]"
                />
            </div>
        </div>
    );
}
