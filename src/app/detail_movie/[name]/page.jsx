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

    if (error) return <div>Failed to load</div>;
    if (isLoading)
        return (
            <div className="flex justify-center items-center bg-background h-52">
                <div className="border-4 border-primary border-t-transparent rounded-full w-16 h-16 animate-spin" />
            </div>
        );

    return (
        <div className="">
            {/* banner */}
            <div
                className="relative inset-0 bg-cover bg-no-repeat bg-center shadow-[inset_150px_0_150px_150px_rgba(0,0,0,0.5)] w-full h-[500px] text-white"
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
            <div className="flex justify-start text-white">
                {/* information */}
                <div className="py-2 pb-6 w-[30%]">
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
