'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';
import { getProfileApi } from '@/api/userApi';
import { toast, ToastContainer } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';
import Header from './header';
import Footer from './footer';
import { getCookie } from 'cookies-next/client';
import { isProtectedRoute } from '@/lib/protectedRoutes';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

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
                    console.log('Unauthorized access, redirecting to login');

                    router.push('/login');
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
