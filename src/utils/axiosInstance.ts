import axios from 'axios';
import { getCookie } from 'cookies-next';

const axiosInstance = axios.create({
    withCredentials: true,
});

// Interceptor để gắn access token vào request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getCookie('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

export default axiosInstance;
