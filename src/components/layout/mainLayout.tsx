'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';
import { toast, ToastContainer } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';
import Header from './header';
import Footer from './footer';
import { getCookie } from 'cookies-next/client';
import { useProfile } from '@/api/fetchDataApi';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    const setUser = useUserStore((state) => state.setUser);

    const noLayoutRoutes = ['/login', '/register'];
    const isNoLayout = noLayoutRoutes.includes(pathname);

    const hasCookie = Boolean(getCookie('access_token'));

    const { data: profile, error } = useProfile(hasCookie);

    useEffect(() => {
        if (!hasCookie) return;

        if (profile) {
            console.log('User profile fetched successfully:', profile);
            setUser(profile);
        } else if (error) {
            console.log('Failed to fetch profile:', error);

            // Nếu lỗi 401 thì redirect
            if (error?.response?.status === 401) {
                router.push('/login');
            }
        }
    }, [profile, error, hasCookie, setUser, router]);

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
