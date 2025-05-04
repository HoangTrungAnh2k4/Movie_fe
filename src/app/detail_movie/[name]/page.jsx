'use client';

import { useParams } from 'next/navigation';

import Information from '../Information';
import Episode from '../Episode';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function DetailMovie() {
    const { name } = useParams();
    const [infor, setInfor] = useState({});
    const [episodes, setEpisodes] = useState([]);

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(`https://phimapi.com/phim/${name}`, fetcher);

    useEffect(() => {
        if (data) {
            setInfor(data?.movie);
            setEpisodes(data?.episodes);
        }
    }, [data]);

    if (data?.status === false) {
        return (
            <div className="flex flex-col justify-center items-center gap-4 bg-background px-4 h-screen text-center">
                <h2 className="font-semibold text-red-500 text-2xl">Bộ phim này đang bị lỗi</h2>
                <p className="text-red-300 text-lg">Vui lòng xem phim khác</p>
            </div>
        );
    }

    if (error) return <div>Failed to load</div>;
    if (isLoading)
        return (
            <div className="flex justify-center items-center bg-background h-screen">
                <div className="border-4 border-primary border-t-transparent rounded-full w-16 h-16 animate-spin" />
            </div>
        );

    return (
        <div className="min-h-screen">
            {/* banner */}
            <div
                className="z-0 relative inset-0 bg-cover bg-no-repeat bg-center shadow-[inset_150px_0_150px_150px_rgba(0,0,0,0.5)] w-full h-[250px] lg:h-[500px] text-white"
                style={{
                    backgroundImage: `url('${infor?.thumb_url}')`,
                }}
            >
                <div
                    className="z-10 absolute inset-0 bg-repeat opacity-20"
                    style={{
                        backgroundImage: `url('https://www.rophim.me/images/dotted.png')`,
                    }}
                />
                {/* Gradient làm mờ */}
                <div className="bottom-0 absolute bg-gradient-to-b from-transparent to-background w-full h-40" />
            </div>

            {/* content */}
            <div className="z-50 relative flex lg:flex-row flex-col justify-start text-white">
                {/* information */}
                <div className="-mt-20 lg:-mt-0 py-2 pb-6 lg:w-[30%]">
                    <Information infor={infor} />
                </div>

                {/* episode */}
                <div className="flex-grow pt-2 pb-6">
                    <Episode episodes={episodes} infor={infor} />
                </div>
            </div>
        </div>
    );
}
