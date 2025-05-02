import Image from 'next/image';

export default function information({ infor }) {
    if (!infor) {
        return (
            <div role="status" className="py-28 max-w-sm animate-pulse">
                <div className="bg-gray-100 dark:bg-gray-700 mb-4 rounded-full w-48 h-2.5"></div>
                <div className="bg-gray-100 dark:bg-gray-700 mb-2.5 rounded-full max-w-[360px] h-2"></div>
                <div className="bg-gray-100 dark:bg-gray-700 mb-2.5 rounded-full h-2"></div>
                <div className="bg-gray-100 dark:bg-gray-700 mb-2.5 rounded-full max-w-[330px] h-2"></div>
                <div className="bg-gray-100 dark:bg-gray-700 mb-2.5 rounded-full max-w-[300px] h-2"></div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full max-w-[360px] h-2"></div>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    return (
        <div className="pr-4 pl-16 w-fit">
            <Image
                className="rounded-lg w-[160px] h-auto object-cover aspect-[2/3]"
                src={infor?.poster_url || 'https://static.nutscdn.com/vimg/300-0/055875f8424f76d54b2a36feaa6edc07.jpg'}
                width={160}
                height={240}
                alt=""
            />
            <h3 className="mt-4 font-semibold text-2xl">{infor?.name}</h3>
            <h3 className="mt-3 text-primary text-sm">{infor?.origin_name}</h3>
            <ul className="flex justify-start items-center gap-4 mt-4 text-xs">
                <li className="bg-gradient-to-bl from-primary to-white px-2 py-[2px] pt-[3px] rounded-md font-semibold text-black">
                    {infor?.quality}
                </li>
                <li className="bg-white px-2 py-[2px] pt-[3px] rounded-md text-black">T16</li>
                <li className="bg-[#ffffff10] px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">
                    {infor?.year}
                </li>
                <li className="bg-[#ffffff10] px-2 py-[2px] pt-[3px] border border-white rounded-md text-white">
                    {infor?.time}
                </li>
            </ul>

            <ul className="flex gap-2 mt-4">
                <li className="bg-[#f3f3f310] px-2 py-1.5 rounded-md text-xs">Hành Động</li>
                <li className="bg-[#f3f3f310] px-2 py-1.5 rounded-md text-xs">Hình Sự</li>
                <li className="bg-[#f3f3f310] px-2 py-1.5 rounded-md text-xs">Tâm Lý</li>
            </ul>

            <h5 className="mt-6 mb-2 font-semibold text-white text-sm">Giới thiệu:</h5>

            <p className="text-[#aaaaaa] text-sm">{infor?.content}</p>

            <div className="flex gap-4 mt-6 mb-2 text-white text-sm">
                <p className="font-semibold">Thời lượng:</p>
                <p className="text-[#aaaaaa] text-sm">{infor?.time}</p>
            </div>

            <div className="flex gap-4 mt-6 mb-2 text-white text-sm">
                <p className="font-semibold">Quốc gia:</p>
                <p className="text-[#aaaaaa] text-sm">
                    {infor?.country && infor.country.length > 0 ? infor.country[0].name : 'Không rõ'}
                </p>
            </div>

            <p className="mt-6 font-semibold">Diễn viên:</p>
            <ul className="flex justify-between -mx-4 mt-6">
                <li className="justify-items-center w-[33%]">
                    <Image
                        className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                        src="https://image.tmdb.org/t/p/w500/4E7NuJsR7AnMYAefFSHkj4cftdf.jpg"
                        width={70}
                        height={70}
                        alt=""
                    />

                    <p className="text-sm">Han Hyo-joo</p>
                </li>
                <li className="justify-items-center w-[33%]">
                    <Image
                        className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                        src="https://image.tmdb.org/t/p/w500/tpb0eZLDvIaBVNLXFpxXAdPxooo.jpg"
                        width={70}
                        height={70}
                        alt=""
                    />
                    <p className="text-sm">Km Da-mi</p>
                </li>
                <li className="justify-items-center w-[33%]">
                    <Image
                        className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                        src="https://image.tmdb.org/t/p/w500/hRDiuKWwe156zRjEu826eci7H3r.jpg"
                        width={70}
                        height={70}
                        alt=""
                    />
                    <p className="text-sm">Choi Woo-shik</p>
                </li>
            </ul>
            <ul className="flex justify-between -mx-4 mt-6">
                <li className="justify-items-center w-[33%]">
                    <Image
                        className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                        src="https://image.tmdb.org/t/p/w500/wQjOvAFqCItwMw7dxa486KnGgEE.jpg"
                        width={70}
                        height={70}
                        alt=""
                    />
                    <p className="text-sm">Moon Sung-keun</p>
                </li>
                <li className="justify-items-center w-[33%]">
                    <Image
                        className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                        src="https://image.tmdb.org/t/p/w500/p0LjCRqVqgTyvlZScMmsVFCnTIt.jpg"
                        width={70}
                        height={70}
                        alt=""
                    />
                    <p className="text-sm">Ryu Seung-ryong</p>
                </li>
                <li className="justify-items-center w-[33%]">
                    <Image
                        className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                        src="https://image.tmdb.org/t/p/w500/69gbyFI0ET0l0dyjKChlx1Zx269.jpg"
                        width={70}
                        height={70}
                        alt=""
                    />
                    <p className="text-sm">Zo In-sung</p>
                </li>
            </ul>
        </div>
    );
}
