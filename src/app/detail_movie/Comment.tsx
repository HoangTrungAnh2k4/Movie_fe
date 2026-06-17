import { useComments } from '@/api/fetchDataApi';
import { addCommentApi } from '@/api/movieApi';
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

type ApiError = {
    response?: {
        status?: number;
    };
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
        } catch (error: unknown) {
            const apiError = error as ApiError;

            if (apiError.response?.status === 401) {
                toast.error('Bạn cần đăng nhập để bình luận!');
            }
            console.log('Error adding comment:', error);
        }
    };

    return (
        <div className='text-white'>
            <div className='flex items-center gap-4'>
                <IoChatboxEllipses className='text-2xl' />
                <p className='text-xl font-semibold'>Bình luận (39)</p>
            </div>

            <div className='my-4 rounded-lg bg-[#ffffff14] p-2'>
                <textarea
                    className='bg-background h-[110px] w-full resize-none rounded-lg p-4 placeholder:text-sm placeholder:text-gray-600'
                    placeholder='Viết bình luận'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddComment();
                        }
                    }}
                ></textarea>
                <button
                    onClick={handleAddComment}
                    className='text-primary ml-auto flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-[#ffffff10]'
                >
                    <p className='text-sm'>Gửi</p>
                    <PiPaperPlaneRightFill className='text-lg' />
                </button>
            </div>

            <div className=''>
                {comments?.map((item: CommentProps, index: number) => {
                    return (
                        <div
                            key={index}
                            className='flex w-full items-start gap-4 rounded-lg pt-4 text-white'
                        >
                            {/* Avatar */}
                            <Image
                                src={getRandomAvatar()}
                                alt='Movie App Logo'
                                width={40}
                                height={40}
                                className='rounded-full'
                            />

                            {/* Nội dung */}
                            <div className='flex flex-1 flex-col'>
                                <div className='flex items-center gap-4 text-sm'>
                                    <span className='font-semibold'>
                                        {item?.username}
                                    </span>
                                </div>

                                <div className='mt-2 text-sm text-[#aaaaaa]'>
                                    {item?.content}
                                </div>

                                <div className='mt-3 flex items-center gap-4 text-xs text-[#aaaaaa]'>
                                    <button className='flex cursor-pointer items-center gap-1 transition hover:text-white'>
                                        Trả lời
                                    </button>
                                    <button className='flex cursor-pointer items-center gap-1 transition hover:text-white'>
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
