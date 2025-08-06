import axiosInstance from '@/utils/axiosInstance';

const API_BACKEND_URL = process.env.NEXT_PUBLIC_AUTH_URL;

export async function getProfileApi() {
    console.log(`Fetching profile from: ${API_BACKEND_URL}/user/profile`);

    const res = await axiosInstance.get(`${API_BACKEND_URL}/user/profile`);
    return res;
}

export async function getUserByName(username: string) {
    const res = await axiosInstance.get(`${API_BACKEND_URL}/user/byName/${username}`);
    return res;
}
