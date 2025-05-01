'use client';

import Image from 'next/image';
import WatchMovieComponent from './WatchMovie';
import { useEffect, useState } from 'react';
import Comment from '../detail_movie/Comment';
import { FaCaretDown, FaPlay } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';

export default function WatchMovie() {
    const [infor, setInfor] = useState(null);
    const [episodes, setEpisodes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    useEffect(() => {
        const raw1 = sessionStorage.getItem('watchMovieData1');
        const raw2 = sessionStorage.getItem('watchMovieData2');
        if (raw1) {
            setInfor(JSON.parse(raw1));
        }
        if (raw2) {
            setEpisodes(JSON.parse(raw2));
        }
    }, []);

    if (!infor)
        return (
            <div className="flex justify-center items-center bg-background h-52">
                <div className="border-4 border-primary border-t-transparent rounded-full w-16 h-16 animate-spin" />
            </div>
        );

    return (
        <div className="py-20 text-white">
            <h3 className="bg-primary mb-6 px-4 py-2 font-medium text-red-700 text-xl text-center">
                Vì vấn đề API phim nên em / tôi chỉ để 1 video để minh họa
            </h3>
            <WatchMovieComponent url={'https://youtu.be/LXb3EKWsInQ?si=4VlSzf0Wgn4nbIgm'} />

            <div className="flex mt-12 px-8">
                {/* col left */}
                <div className="pr-6 border-[#ffffff10] border-r-2 w-[70%]">
                    <div className="flex items-start gap-8">
                        <Image
                            className="rounded-lg h-fit object-cover aspect-[2/3]"
                            src={
                                infor?.poster_url ||
                                'https://static.nutscdn.com/vimg/300-0/055875f8424f76d54b2a36feaa6edc07.jpg'
                            }
                            width={100}
                            height={150}
                            alt=""
                        />

                        <div className="flex-shrink-0">
                            <h3 className="font-semibold text-xl">{infor?.name}</h3>
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
                        </div>

                        <p className="text-[#aaaaaa] text-sm">{infor?.content}</p>
                    </div>

                    <div className="mt-8">
                        <ul className="flex items-center gap-12 border-[#ffffff10] border-b-2 text-sm">
                            <li className="px-2 pt-2 pb-2 border-primary border-b-2 text-primary cursor-pointer">
                                Tập phim
                            </li>
                        </ul>

                        {/* content */}
                        <div className="mt-6">
                            <div className="group relative w-fit">
                                <div
                                    data-popovertarget="cac_phan"
                                    className="flex items-center gap-6 hover:bg-[#ffffff10] px-4 py-2 rounded-lg w-fit text-xl cursor-pointer"
                                >
                                    <FaBarsStaggered className="text-primary text-2xl" />
                                    <p className="font-semibold">Phần 1</p>
                                    <FaCaretDown />
                                </div>

                                <div
                                    data-popover="manual"
                                    id="cac_phan"
                                    className="hidden group-hover:block right-0 bottom-15 z-50 absolute bg-white py-2 rounded-lg w-fit overflow-hidden text-sm"
                                >
                                    <h5 className="mb-2 px-4 py-1 text-background2">Danh sách các phần </h5>
                                    <div className="bg-primary px-4 py-2 font-semibold text-background2">Phần 1</div>
                                </div>
                            </div>

                            <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] mt-6">
                                {episodes?.map((item, index: number) => (
                                    <div
                                        key={index}
                                        className="flex justify-center items-center gap-4 bg-[#ffffff10] px-4 rounded-lg h-[50px] hover:text-primary text-sm cursor-pointer"
                                    >
                                        <FaPlay />
                                        <p className="text-sm">Tập {index + 1}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12">
                            <Comment />
                        </div>
                    </div>
                </div>

                {/* col right */}
                <div className="pl-6 w-[30%]">
                    <h4 className="font-semibold text-xl">Diễn viên</h4>
                    <ul className="flex justify-between -mx-4 mt-6">
                        <li className="justify-items-center w-[33%]">
                            <Image
                                className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                                src="https://image.tmdb.org/t/p/w500/4E7NuJsR7AnMYAefFSHkj4cftdf.jpg"
                                width={80}
                                height={80}
                                alt=""
                            />

                            <p className="text-sm">Han Hyo-joo</p>
                        </li>
                        <li className="justify-items-center w-[33%]">
                            <Image
                                className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                                src="https://image.tmdb.org/t/p/w500/tpb0eZLDvIaBVNLXFpxXAdPxooo.jpg"
                                width={80}
                                height={80}
                                alt=""
                            />
                            <p className="text-sm">Km Da-mi</p>
                        </li>
                        <li className="justify-items-center w-[33%]">
                            <Image
                                className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                                src="https://image.tmdb.org/t/p/w500/hRDiuKWwe156zRjEu826eci7H3r.jpg"
                                width={80}
                                height={80}
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
                                width={80}
                                height={80}
                                alt=""
                            />
                            <p className="text-sm">Moon Sung-keun</p>
                        </li>
                        <li className="justify-items-center w-[33%]">
                            <Image
                                className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                                src="https://image.tmdb.org/t/p/w500/p0LjCRqVqgTyvlZScMmsVFCnTIt.jpg"
                                width={80}
                                height={80}
                                alt=""
                            />
                            <p className="text-sm">Ryu Seung-ryong</p>
                        </li>
                        <li className="justify-items-center w-[33%]">
                            <Image
                                className="mb-2 rounded-full h-auto object-center object-cover aspect-[1/1]"
                                src="https://image.tmdb.org/t/p/w500/69gbyFI0ET0l0dyjKChlx1Zx269.jpg"
                                width={80}
                                height={80}
                                alt=""
                            />
                            <p className="text-sm">Zo In-sung</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
