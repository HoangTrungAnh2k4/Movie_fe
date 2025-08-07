import axiosInstance from '@/utils/axiosInstance';

const API_BACKEND_URL = process.env.NEXT_PUBLIC_AUTH_URL;

export async function getProfileApi() {
    const res = await axiosInstance.get(`${API_BACKEND_URL}/user/profile`);
    return res;
}

export async function addFavoriteMovieApi(movieName: string) {
    const res = await axiosInstance.post(`${API_BACKEND_URL}/user/add-favorite-movie/${movieName}`);
    return res;
}
