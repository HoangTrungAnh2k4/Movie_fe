'use client';

import Link from 'next/link';
import Image from 'next/image';

import { IoSearch } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect((): (() => void) => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 50);
        };

        // kiểm tra ngay khi mount
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        // cleanup
        return (): void => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className='header fixed z-50 container flex items-center px-4 py-3 pt-6 pr-6 text-white transition-all'
            style={{
                backgroundColor: scrolled ? '#0F111A' : 'transparent',
            }}
        >
            <Link
                href={'/'}
                className='logo flex items-center justify-center gap-2'
            >
                <Image
                    src='/ro-icon.svg'
                    alt='Movie App Logo'
                    width={40}
                    height={40}
                />
                <p className='text-xl font-bold'>Movie App</p>
            </Link>

            <div className='ml-6 flex h-fit w-[25%] items-center justify-start gap-3 rounded-lg bg-[#ffffff14] px-4 py-2'>
                <IoSearch className='text-xl font-semibold' />
                <input
                    type='text'
                    placeholder='Search for movies...'
                    className='w-full bg-transparent py-1 text-sm text-white placeholder-white outline-none focus:outline-none'
                />
            </div>

            <ul className='ml-6 flex items-center justify-center gap-3 text-sm'>
                <li className='hover:text-primary px-3 py-1'>
                    <Link href='/'>Chủ Đề</Link>
                </li>
                <li className='hover:text-primary px-3 py-1'>
                    <Link href='/about'>Phim Lẻ</Link>
                </li>
                <li className='hover:text-primary px-3 py-1'>
                    <Link href='/contact'>Phim Bộ</Link>
                </li>
            </ul>

            <div className='ml-auto flex items-center justify-center gap-4'>
                <div className='flex size-[40px] items-center justify-center rounded-full border'>
                    <FaBell className='text-white' />
                </div>
                <Image
                    src='https://www.rophim.me/images/avatars/pack1/14.jpg'
                    alt='Movie App Logo'
                    width={40}
                    height={40}
                    className='rounded-full border-2 border-white'
                />
            </div>
        </header>
    );
};

export default Header;
