import useSWR, { mutate } from 'swr';
import axiosInstance from '@/utils/axiosInstance';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetcher = async (url: string) => {
    console.log('[Fetcher] Starting fetch:', url); // ✅ Nên thấy

    const res = await axiosInstance.get(url);

    console.log('[Fetcher] Status:', res.status);
    console.log('[Fetcher] Data:', res.data); // Không cần await nữa

    if (res.status !== 200) {
        throw new Error('Failed to fetch');
    }

    return res.data;
};

export const useComments = (nameSlug: string) => {
    if (!nameSlug) {
        return {
            data: null,
            isLoading: false,
            error: null,
        };
    }

    const commentApiUrl = `${BACKEND_URL}/movie/comment/${nameSlug}`;
    const { data, error, isLoading } = useSWR(commentApiUrl, fetcher, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            // Nếu là lỗi 404 thì không retry
            if (error?.response?.status === 404) return;
            if (retryCount >= 2) return;
            // Retry sau 5s
            setTimeout(() => revalidate({ retryCount }), 5000);
        },
    });

    return {
        data,
        isLoading,
        error,
        mutate: () => {
            mutate(commentApiUrl);
        },
    };
};

export const useFavoriteMovie = (enabled: boolean) => {
    const favoriteApiUrl = `${BACKEND_URL}/user/favorite-movie`;
    const { data, error, isLoading } = useSWR(enabled ? favoriteApiUrl : null, fetcher, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (error?.response?.status === 404) return;
            if (retryCount >= 2) return;

            setTimeout(() => revalidate({ retryCount }), 5000);
        },
    });

    return {
        data,
        isLoading,
        error,
    };
};

export function useProfile(enabled: boolean) {
    console.log('Fetching user profile...');

    const profileApiUrl = `${BACKEND_URL}/user/profile`;
    const { data, error, isLoading } = useSWR(enabled ? profileApiUrl : null, fetcher, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            // if (error?.response?.status === 404) return;
            if (retryCount >= 2) return;
            setTimeout(() => revalidate({ retryCount }), 5000);
        },
    });

    return {
        data,
        isLoading,
        error,
    };
}
