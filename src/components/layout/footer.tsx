import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex flex-col items-center w-full px-8 py-8 text-white lg:flex-row lg:items-start bg-headerColor lg:px-16">
            <div className="flex flex-col items-center w-full gap-6 lg:items-start lg:w-1/2">
                <div className="flex items-center gap-2 bg-[#78140f] px-3 py-2 rounded-full w-fit">
                    <Image src="/vn_flag.svg" alt="Movie App Logo" width={20} height={20} className="aspect-[1/1]" />
                    <p className="text-sm text-white">Hoàng Sa & Trường Sa là của Việt Nam!</p>
                </div>

                <Link href={'/'} className="flex items-center justify-center gap-2 logo">
                    <Image src="/ro-icon.svg" alt="Movie App Logo" width={70} height={70} />
                    <p className="text-2xl font-bold">Movie App</p>
                </Link>

                <p className="text-[#aaaaaa] text-sm">
                    Đây là một dự án cá nhân được xây dựng với mục đích học tập và thực hành, không nhằm mục đích thương
                    mại. Nếu bạn có bất kỳ vấn đề gì hoặc có câu hỏi nào về dự án này, vui lòng liên hệ với tôi qua
                    email: <span className="ml-2 text-white">trunganh4002@gmail.com</span>.
                </p>
            </div>

            <h3 className="hidden mt-6 mb-4 text-lg font-bold lg:block lg:mt-0">Công nghệ sử dụng:</h3>

            <ul className="flex flex-row flex-wrap items-center justify-start gap-4 mt-4 lg:flex-col lg:items-start lg:mt-0 lg:pl-16">
                <li className="flex items-center gap-6">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                        alt="React Logo"
                        width={40}
                        height={40}
                        className=""
                    />
                    <p className="font-semibold text-white">Next.JS</p>
                </li>

                <li className="flex items-center gap-6">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                        alt="React Logo"
                        width={40}
                        height={40}
                        className=""
                    />
                    <p className="font-semibold text-white ">Tailwindcss</p>
                </li>
                <li className="flex items-center gap-6">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
                        alt="React Logo"
                        width={40}
                        height={40}
                        className=""
                    />
                    <p className="font-semibold text-white">Nest.Js</p>
                </li>
                <li className="flex items-center gap-6">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                        alt="React Logo"
                        width={40}
                        height={40}
                        className=""
                    />
                    <p className="font-semibold text-white">Postgresql</p>
                </li>
            </ul>
        </div>
    );
}
