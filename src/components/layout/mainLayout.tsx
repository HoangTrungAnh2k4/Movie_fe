'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';
import { getProfileApi } from '@/api/userApi';
import { toast, ToastContainer } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';
import { isProtectedRoute } from '@/lib/protectedRoutes';
import Header from '../Header';
import Footer from '../Footer';
import { getCookie } from 'cookies-next/client';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const Router = useRouter();

    const setUser = useUserStore((state) => state.setUser);

    const noLayoutRoutes = ['/login', '/register'];

    const isNoLayout = noLayoutRoutes.includes(pathname);

    const hasCookie = getCookie('access_token');

    useEffect(() => {
        if (!hasCookie) {
            return;
        }

        const fetchProfile = async () => {
            try {
                const res = await getProfileApi();

                if (res.statusText === 'OK') {
                    setUser(res.data);
                } else {
                    console.log('Failed to fetch user profile');
                }
            } catch (e: any) {
                if (e.status === 401) {
                    toast.error('Yêu cầu đăng nhập.');
                }
            }
        };

        fetchProfile();
    }, [setUser, pathname]);

    if (isNoLayout)
        return (
            <>
                {children}
                <ToastContainer autoClose={1500} position="bottom-left" toastClassName="custom-toast" />
            </>
        );

    return (
        <>
            <Header />
            {children}
            <Footer />
            <ToastContainer autoClose={1500} position="bottom-left" toastClassName="custom-toast" />
        </>
    );
}
