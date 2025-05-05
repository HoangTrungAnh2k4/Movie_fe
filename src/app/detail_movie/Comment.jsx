import Image from 'next/image';
import { IoChatboxEllipses } from 'react-icons/io5';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { toast } from 'react-toastify';
import useSWR, { mutate } from 'swr';

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
const USER_URL = process.env.NEXT_PUBLIC_USER_URL;

function Comment({ nameSlug }) {
    const fetcher = async (url) => {
        const accessToken = localStorage.getItem('access_token');
        const res = await fetch(url, {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
        });

        return await res.json();
    };

    const commentApiUrl = `${AUTH_URL}/get_comment/${nameSlug}`;
    const { data } = useSWR(commentApiUrl, fetcher);

    const handleAddComment = async () => {
        const commentInput = document.querySelector('textarea');
        const commentText = commentInput.value.trim();
        if (commentText) {
            const res = await fetch(`${USER_URL}/add_comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
                body: JSON.stringify({
                    comment: commentText,
                    movieName: nameSlug,
                }),
            });

            if (res.ok) {
                commentInput.value = '';
                mutate(commentApiUrl);
            }

            if (res.status === 401) {
                toast.error('Bạn cần đăng nhập để bình luận!');
            }
        }
    };

    return (
        <div className="text-white">
            <div className="flex items-center gap-4">
                <IoChatboxEllipses className="text-2xl" />
                <p className="font-semibold text-xl">Bình luận (39)</p>
            </div>

            <div className="bg-[#ffffff14] my-4 p-2 rounded-lg">
                <textarea
                    className="bg-background p-4 rounded-lg w-full h-[100px] placeholder:text-gray-600 placeholder:text-sm resize-none"
                    placeholder="Viết bình luận"
                ></textarea>
                <button
                    onClick={handleAddComment}
                    className="flex items-center gap-2 hover:bg-[#ffffff10] ml-auto px-4 py-2 rounded-lg text-primary cursor-pointer"
                >
                    <p className="text-sm">Gửi</p>
                    <PiPaperPlaneRightFill className="text-lg" />
                </button>
            </div>

            <div className="">
                {data?.listComment?.map((item, index) => {
                    return (
                        <div key={index} className="flex items-start gap-4 pt-4 rounded-lg w-full text-white">
                            {/* Avatar */}
                            <Image
                                src="https://www.rophim.me/images/avatars/pack1/14.jpg"
                                alt="Movie App Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />

                            {/* Nội dung */}
                            <div className="flex flex-col flex-1">
                                {/* Tên + Icon + Thời gian */}
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="font-semibold">{item?.user_name}</span>
                                </div>

                                {/* Nội dung comment */}
                                <div className="mt-2 text-[#aaaaaa] text-sm">{item?.comment}</div>

                                {/* Action buttons */}
                                <div className="flex items-center gap-4 mt-3 text-[#aaaaaa] text-xs">
                                    <button className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                                        Trả lời
                                    </button>
                                    <button className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                                        Thêm
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Comment;
