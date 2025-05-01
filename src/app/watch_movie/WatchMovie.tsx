'use client'; // BẮT BUỘC để tránh lỗi hydration

import ReactPlayer from 'react-player';

export default function WatchMovie({ url }: { url: string }) {
    return (
        <div className="mx-auto pt-4 w-[95%] aspect-video">
            <ReactPlayer url={url} controls playing width="100%" height="100%" />
        </div>
    );
}
