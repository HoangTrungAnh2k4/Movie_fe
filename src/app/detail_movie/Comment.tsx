import { addCommentApi } from '@/api/movieApi';
import { useComments } from '@/hooks/useComment';
import Image from 'next/image';
import { IoChatboxEllipses } from 'react-icons/io5';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { toast } from 'react-toastify';

type CommentProps = {
    id: string;
    content: string;
    createdAt: string;
    username: string;
};

const avatarUrls = [
    'https://www.rophim.me/images/avatars/pack1/13.jpg',
    'https://www.rophim.me/images/avatars/pack1/26.jpg',
    'https://www.rophim.me/images/avatars/pack1/36.jpg',
    'https://www.rophim.me/images/avatars/pack1/22.jpg',
];

const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatarUrls.length);
    return avatarUrls[randomIndex];
};

function Comment({ nameSlug }: { nameSlug: string }) {
    const { data: comments, mutate } = useComments(nameSlug);

    const handleAddComment = async () => {
        const commentInput = document.querySelector('textarea');
        if (!commentInput) {
            return;
        }
        const commentText = commentInput.value.trim();

        if (!commentText) {
            return;
        }
        try {
            const res = await addCommentApi(nameSlug, commentText);

            if (res.status === 201) {
                commentInput.value = '';
                if (mutate) {
                    mutate();
                }
            }
        } catch (error: any) {
            if (error.response?.status === 401) {
                toast.error('Bạn cần đăng nhập để bình luận!');
            }
            console.log('Error adding comment:', error);
        }
    };

    return (
        <div className="text-white">
            <div className="flex items-center gap-4">
                <IoChatboxEllipses className="text-2xl" />
                <p className="text-xl font-semibold">Bình luận (39)</p>
            </div>

            <div className="bg-[#ffffff14] my-4 p-2 rounded-lg">
                <textarea
                    className="bg-background p-4 rounded-lg w-full h-[110px] placeholder:text-gray-600 placeholder:text-sm resize-none"
                    placeholder="Viết bình luận"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddComment();
                        }
                    }}
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
                {comments?.map((item: CommentProps, index: number) => {
                    return (
                        <div key={index} className="flex items-start w-full gap-4 pt-4 text-white rounded-lg">
                            {/* Avatar */}
                            <Image
                                src={getRandomAvatar()}
                                alt="Movie App Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />

                            {/* Nội dung */}
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="font-semibold">{item?.username}</span>
                                </div>

                                <div className="mt-2 text-[#aaaaaa] text-sm">{item?.content}</div>

                                <div className="flex items-center gap-4 mt-3 text-[#aaaaaa] text-xs">
                                    <button className="flex items-center gap-1 transition cursor-pointer hover:text-white">
                                        Trả lời
                                    </button>
                                    <button className="flex items-center gap-1 transition cursor-pointer hover:text-white">
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
