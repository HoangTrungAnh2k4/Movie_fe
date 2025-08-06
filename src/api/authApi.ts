import axios from 'axios';

const API_BACKEND_URL = process.env.NEXT_PUBLIC_AUTH_URL;

export async function loginApi(email: string, password: string) {
    const res = await axios.post(`${API_BACKEND_URL}/auth/login`, {
        email,
        password,
    });

    return res;
}

export async function registerApi(email: string, password: string) {
    const res = await axios.post(`${API_BACKEND_URL}/auth/register`, {
        email,
        password,
    });

    return res;
}
