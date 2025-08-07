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
            <div className="flex flex-col items-center justify-center h-screen gap-4 px-4 text-center bg-background">
                <h2 className="text-2xl font-semibold text-red-500">Bộ phim này đang bị lỗi</h2>
                <p className="text-lg text-red-300">Vui lòng xem phim khác</p>
            </div>
        );
    }

    if (error) return <div>Failed to load</div>;
    if (isLoading)
        return (
            <div className="flex items-center justify-center h-screen bg-background">
                <div className="w-16 h-16 border-4 rounded-full border-primary border-t-transparent animate-spin" />
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
                    className="absolute inset-0 z-10 bg-repeat opacity-20"
                    style={{
                        backgroundImage: `url('https://www.rophim.me/images/dotted.png')`,
                    }}
                />
                {/* Gradient làm mờ */}
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-background" />
            </div>

            {/* content */}
            <div className="relative z-50 flex flex-col justify-start text-white lg:flex-row">
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
