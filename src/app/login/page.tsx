import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen text-white">
            <div className="flex bg-[#1e2545] rounded-xl w-[50%] h-[400px]">
                <div className="w-1/2">
                    <Image
                        src="https://www.rophim.me/images/rophim-login.jpg"
                        alt="image"
                        width={200}
                        height={200}
                        className="rounded-l-xl w-full h-full object-cover object-top"
                    />
                </div>

                <div className="flex flex-col justify-center px-10 w-1/2 i">
                    <h4 className="font-semibold text-lg">Đăng nhập</h4>
                    <p className="mt-4 text-[#aaaaaa] text-sm">
                        Nếu bạn chưa có tài khoản,{' '}
                        <Link href="/register" className="text-primary hover:underline">
                            đăng ký ngay
                        </Link>
                    </p>
                    <form>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="block mt-6 mb-3 px-4 py-2 border-[#ffffff10] border-[1px] rounded-lg w-full placeholder:text-[#aaaaaa] placeholder:text-xs"
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            required
                            className="block mb-2 px-4 py-2 border-[#ffffff10] border-[1px] rounded-lg w-full placeholder:text-[#aaaaaa] placeholder:text-xs"
                        />

                        <button
                            type="submit"
                            className="bg-primary hover:opacity-90 mt-6 px-4 py-2 rounded-lg w-full font-medium text-background2 cursor-pointer"
                        >
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
