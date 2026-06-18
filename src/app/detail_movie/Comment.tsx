import { useState } from 'react';
import Image from 'next/image';
import { IoChatboxEllipses } from 'react-icons/io5';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

type CommentProps = {
    id: string;
    content: string;
    createdAt: string;
    username: string;
};

function Comment() {
    // const { data: comments } = useComments(nameSlug);
    const comments = [
        {
            id: '1',
            content: 'This is a sample comment.',
            createdAt: new Date().toISOString(),
            username: 'User1',
        },
    ];

    const [commentText, setCommentText] = useState('');
    const [localComments, setLocalComments] = useState<CommentProps[]>([]);

    const handleAddComment = () => {
        const text = commentText.trim();

        if (!text) return;

        const newComment: CommentProps = {
            id: Date.now().toString(),
            content: text,
            createdAt: new Date().toISOString(),
            username: 'User411722',
        };

        setLocalComments((prev) => [newComment, ...prev]);
        setCommentText('');
    };

    const displayComments = [...localComments, ...(comments || [])];

    return (
        <div className='text-white'>
            <div className='flex items-center gap-4'>
                <IoChatboxEllipses className='text-2xl' />
                <p className='text-xl font-semibold'>
                    Bình luận ({displayComments.length})
                </p>
            </div>

            <div className='my-4 rounded-lg bg-[#ffffff14] p-2'>
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className='bg-background h-[110px] w-full resize-none rounded-lg p-4 placeholder:text-sm placeholder:text-gray-600'
                    placeholder='Viết bình luận'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleAddComment();
                        }
                    }}
                />

                <button
                    onClick={handleAddComment}
                    className='text-primary ml-auto flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-[#ffffff10]'
                >
                    <p className='text-sm'>Gửi</p>
                    <PiPaperPlaneRightFill className='text-lg' />
                </button>
            </div>

            <div>
                {displayComments.map((item: CommentProps, index: number) => (
                    <div
                        key={item.id || index}
                        className='flex w-full items-start gap-4 rounded-lg pt-4 text-white'
                    >
                        <Image
                            src='/avatar.jpg'
                            alt='Avatar'
                            width={40}
                            height={40}
                            className='rounded-full'
                        />

                        <div className='flex flex-1 flex-col'>
                            <div className='flex items-center gap-4 text-sm'>
                                <span className='font-semibold'>
                                    {item.username}
                                </span>
                            </div>

                            <div className='mt-2 text-sm text-[#aaaaaa]'>
                                {item.content}
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
                ))}
            </div>
        </div>
    );
}

export default Comment;
