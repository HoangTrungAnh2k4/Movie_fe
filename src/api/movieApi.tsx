import axiosInstance from '@/utils/axiosInstance';

const API_BACKEND_URL = process.env.NEXT_PUBLIC_AUTH_URL;

export async function addCommentApi(movieName: string, content: string) {
    const res = await axiosInstance.post(`${API_BACKEND_URL}/movie/comment`, {
        movieName,
        content,
    });

    return res;
}
