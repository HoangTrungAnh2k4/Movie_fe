'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Danh sách các route không áp dụng layout
    const noLayoutRoutes = ['/login', '/register', '/auth/reset'];

    const isNoLayout = noLayoutRoutes.includes(pathname);

    if (isNoLayout) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            {children}
            <Footer />
            <ToastContainer autoClose={1500} position="bottom-left" toastClassName="custom-toast" />
        </>
    );
}
