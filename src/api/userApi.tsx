import axiosInstance from '@/utils/axiosInstance';

const API_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function addFavoriteMovieApi(movieName: string) {
    const res = await axiosInstance.post(`${API_BACKEND_URL}/user/favorite-movie/${movieName}`);
    return res;
}

export async function getFavoriteMovieApi() {
    const res = await axiosInstance.get(`${API_BACKEND_URL}/user/favorite-movie`);
    return res;
}
