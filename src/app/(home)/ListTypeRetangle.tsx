import Image from 'next/image';

export default function ListTypeRetangle() {
    return (
        <div className="">
            <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="group relative rounded-2xl">
                        <div className="hover:bg-primary hover:p-1 rounded-2xl overflow-hidden duration-300 cursor-pointer itemTop10">
                            <Image
                                src="https://static.nutscdn.com/vimg/300-0/4f9cb16b41fe6cece6cb8a958f5e661c.jpg"
                                alt="Movie Poster"
                                width={400}
                                height={600}
                                className="rounded-xl w-full h-auto aspect-[300/450]"
                            />

                            {/* lớp phủ */}
                            <div className="top-0 left-0 absolute bg-primary opacity-0 group-hover:opacity-15 rounded-2xl w-full h-auto aspect-[300/450] transition duration-300" />
                        </div>

                        <div className="flex flex-col items-center gap-1 mt-3">
                            <h3 className="hover:text-primary text-sm line-clamp-1 duration-300 cursor-pointer">
                                Đêm Kinh Hoàng ở Sở Thú
                            </h3>
                            <h4 className="text-[#aaaaaa] text-xs">Night of the Zoopocalypse</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
