import useSWR, { mutate } from 'swr';
import axiosInstance from '@/utils/axiosInstance';

const fetcher = async (url: string) => {
    const res = await axiosInstance.get(url);

    if (res.status !== 200) {
        throw new Error('Failed to fetch');
    }

    return await res.data;
};

export const useComments = (nameSlug: string) => {
    if (!nameSlug) {
        return {
            data: null,
            isLoading: false,
            error: null,
        };
    }

    const commentApiUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/movie/comment/${nameSlug}`;
    const { data, error, isLoading } = useSWR(commentApiUrl, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate: () => {
            mutate(commentApiUrl);
        },
    };
};
