import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex lg:flex-row flex-col items-center lg:items-start bg-headerColor px-8 lg:px-16 py-8 w-full text-white">
            <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/2">
                <div className="flex items-center gap-2 bg-[#78140f] px-3 py-2 rounded-full w-fit">
                    <Image
                        src="https://www.rophim.me/images/vn_flag.svg"
                        alt="Movie App Logo"
                        width={20}
                        height={20}
                        className="aspect-[1/1]"
                    />
                    <p className="text-white text-sm">Hoàng Sa & Trường Sa là của Việt Nam!</p>
                </div>

                <Link href={'/'} className="flex justify-center items-center gap-2 logo">
                    <Image src="/ro-icon.svg" alt="Movie App Logo" width={70} height={70} />
                    <p className="font-bold text-2xl">Movie App</p>
                </Link>

                <p className="text-[#aaaaaa] text-sm">
                    Đây là một dự án cá nhân nhằm cung cấp thông tin về các bộ phim mới nhất, được xây dựng với mục đích
                    học tập và thực hành, không nhằm mục đích thương mại. Nếu bạn có bất kỳ vấn đề gì hoặc có câu hỏi
                    nào về dự án này, vui lòng liên hệ với tôi qua email:{' '}
                    <span className="ml-2 text-white">trunganh4002@gmail.com</span>.
                </p>
            </div>

            <h3 className="hidden lg:block mt-6 lg:mt-0 mb-4 font-bold text-lg">Công nghệ sử dụng:</h3>

            <ul className="flex flex-row lg:flex-col justify-start items-center lg:items-start gap-4 mt-4 lg:mt-0 lg:pl-16">
                <li className="flex items-center gap-6">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                        alt="React Logo"
                        width={40}
                        height={40}
                        className=""
                    />
                    <p className="ml-[10px] font-semibold text-white">Next.JS</p>
                </li>

                <li className="flex items-center gap-6">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                        alt="React Logo"
                        width={40}
                        height={40}
                        className=""
                    />
                    <p className="ml-[10px] font-semibold text-white">Tailwindcss</p>
                </li>
                <li className="flex items-center gap-6">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                        alt="React Logo"
                        width={50}
                        height={50}
                        className=""
                    />
                    <p className="font-semibold text-white">Node.Js</p>
                </li>
                <li className="flex items-center gap-6">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                        alt="React Logo"
                        width={50}
                        height={50}
                        className=""
                    />
                    <p className="font-semibold text-white">MongoDB</p>
                </li>
            </ul>
        </div>
    );
}
