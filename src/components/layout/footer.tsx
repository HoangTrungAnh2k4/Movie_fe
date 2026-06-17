import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='bg-headerColor flex w-full flex-col items-center px-8 py-8 text-white lg:flex-row lg:items-start lg:px-16'>
            <div className='flex w-full flex-col items-center gap-6 lg:w-1/2 lg:items-start'>
                <div className='flex w-fit items-center gap-2 rounded-full bg-[#78140f] px-3 py-2'>
                    <Image
                        src='/vn_flag.svg'
                        alt='Movie App Logo'
                        width={20}
                        height={20}
                        className='aspect-[1/1]'
                    />
                    <p className='text-sm text-white'>
                        Hoàng Sa & Trường Sa là của Việt Nam!
                    </p>
                </div>

                <Link
                    href={'/'}
                    className='logo flex items-center justify-center gap-2'
                >
                    <Image
                        src='/ro-icon.svg'
                        alt='Movie App Logo'
                        width={180}
                        height={300}
                    />
                </Link>

                <p className='text-sm text-[#aaaaaa]'>
                    Đây là một dự án cá nhân được xây dựng với mục đích học tập
                    và thực hành, không nhằm mục đích thương mại. Nếu bạn có bất
                    kỳ vấn đề gì hoặc có câu hỏi nào về dự án này, vui lòng liên
                    hệ với tôi qua email:{' '}
                    <span className='ml-2 text-white'>
                        trunganh4002@gmail.com
                    </span>
                    .
                </p>
            </div>

            <h3 className='mt-6 mb-4 hidden text-lg font-bold lg:mt-0 lg:block'>
                Công nghệ sử dụng:
            </h3>

            <ul className='mt-4 flex flex-row flex-wrap items-center justify-start gap-4 lg:mt-0 lg:flex-col lg:items-start lg:pl-16'>
                <li className='flex items-center gap-6'>
                    <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
                        alt='React Logo'
                        width={40}
                        height={40}
                        className=''
                    />
                    <p className='font-semibold text-white'>Next.JS</p>
                </li>

                <li className='flex items-center gap-6'>
                    <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
                        alt='React Logo'
                        width={40}
                        height={40}
                        className=''
                    />
                    <p className='font-semibold text-white'>Tailwindcss</p>
                </li>
                <li className='flex items-center gap-6'>
                    <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg'
                        alt='React Logo'
                        width={40}
                        height={40}
                        className=''
                    />
                    <p className='font-semibold text-white'>Nest.Js</p>
                </li>
                <li className='flex items-center gap-6'>
                    <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
                        alt='React Logo'
                        width={40}
                        height={40}
                        className=''
                    />
                    <p className='font-semibold text-white'>Postgresql</p>
                </li>
            </ul>
        </div>
    );
}
