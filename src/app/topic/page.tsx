import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const topicList = [
    {
        name: 'Hành Động',
        slug: 'hanh-dong',
        cssBg: 'bg-gradient-to-b from-[#324fd1] via-[#324fd1] to-[#ff6f6fc9]',
    },
    {
        name: 'Hài Hước',
        slug: 'hai-huoc',
        cssBg: 'bg-gradient-to-b from-[#666699] via-[#666699] to-[#ff6f6fc9]',
    },
    {
        name: 'Kinh Dị',
        slug: 'kinh-di',
        cssBg: 'bg-gradient-to-b from-[#1b856c] via-[#1b856c] to-[#ff6f6fc9]',
    },
    {
        name: 'Tình Cảm',
        slug: 'tinh-cam',
        cssBg: 'bg-gradient-to-b from-[#7761b4] via-[#7761b4] to-[#ff6f6fc9]',
    },
    {
        name: 'Viễn Tưởng',
        slug: 'vien-tuong',
        cssBg: 'bg-gradient-to-b from-[#cd7e5f] via-[#cd7e5f] to-[#ff6f6fc9]',
    },
    {
        name: 'Phiêu Lưu',
        slug: 'phieu-luu',
        cssBg: 'bg-gradient-to-b from-[#a73939] via-[#a73939] to-[#ff6f6fc9]',
    },
    {
        name: 'Tâm Lý',
        slug: 'tam-ly',
        cssBg: 'bg-gradient-to-b from-[#4a4a8a] via-[#4a4a8a] to-[#ff6f6fc9]',
    },
    {
        name: 'Gia Đình',
        slug: 'gia-dinh',
        cssBg: 'bg-gradient-to-b from-[#e0a458] via-[#e0a458] to-[#ff6f6fc9]',
    },
    {
        name: 'Hình Sự',
        slug: 'hinh-su',
        cssBg: 'bg-gradient-to-b from-[#2c2c54] via-[#2c2c54] to-[#ff6f6fc9]',
    },
    {
        name: 'Cổ Trang',
        slug: 'co-trang',
        cssBg: 'bg-gradient-to-b from-[#b08968] via-[#b08968] to-[#ff6f6fc9]',
    },
    {
        name: 'Chiến Tranh',
        slug: 'chien-tranh',
        cssBg: 'bg-gradient-to-b from-[#5c5346] via-[#5c5346] to-[#ff6f6fc9]',
    },
    {
        name: 'Thể Thao',
        slug: 'the-thao',
        cssBg: 'bg-gradient-to-b from-[#2a9d8f] via-[#2a9d8f] to-[#ff6f6fc9]',
    },
    {
        name: 'Âm Nhạc',
        slug: 'am-nhac',
        cssBg: 'bg-gradient-to-b from-[#9b5de5] via-[#9b5de5] to-[#ff6f6fc9]',
    },
    {
        name: 'Học Đường',
        slug: 'hoc-duong',
        cssBg: 'bg-gradient-to-b from-[#4895ef] via-[#4895ef] to-[#ff6f6fc9]',
    },
    {
        name: 'Bí Ẩn',
        slug: 'bi-an',
        cssBg: 'bg-gradient-to-b from-[#3a0ca3] via-[#3a0ca3] to-[#ff6f6fc9]',
    },
    {
        name: 'Phim Tài Liệu',
        slug: 'phim-tai-lieu',
        cssBg: 'bg-gradient-to-b from-[#6c757d] via-[#6c757d] to-[#ff6f6fc9]',
    },
    {
        name: 'Hoạt Hình',
        slug: 'hoat-hinh',
        cssBg: 'bg-gradient-to-b from-[#f4a261] via-[#f4a261] to-[#ff6f6fc9]',
    },
    {
        name: 'Thần Thoại',
        slug: 'than-thoai',
        cssBg: 'bg-gradient-to-b from-[#7209b7] via-[#7209b7] to-[#ff6f6fc9]',
    },
    {
        name: 'Phiêu Lưu Mạo Hiểm',
        slug: 'phieu-luu-mao-hiem',
        cssBg: 'bg-gradient-to-b from-[#386641] via-[#386641] to-[#ff6f6fc9]',
    },
    {
        name: 'Drama',
        slug: 'drama',
        cssBg: 'bg-gradient-to-b from-[#9d4edd] via-[#9d4edd] to-[#ff6f6fc9]',
    },
];

export default function TopicPage() {
    return (
        <div className='min-h-screen px-8 py-30'>
            <h2 className='text-2xl font-semibold text-white'>Các chủ đề</h2>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4 pt-8 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
                {topicList.map((item, index) => (
                    <Link
                        href={'/list_movie'}
                        key={index}
                        className={`required: flex cursor-pointer flex-col justify-center rounded-tl-[16px] rounded-tr-[40px] rounded-br-[16px] rounded-bl-[40px] duration-300 hover:-translate-y-3 ${item.cssBg} h-20 w-[120px] flex-shrink-0 p-4 px-4 text-white sm:w-[140px] lg:h-32 lg:w-auto lg:px-6`}
                    >
                        <h2 className='text-sm font-bold lg:text-xl'>
                            {' '}
                            {item.name}
                        </h2>
                        <p className='mt-4 hidden items-center gap-2 text-sm font-semibold lg:flex'>
                            Xem toàn bộ
                            <IoIosArrowForward size={16} className='mt-[2px]' />
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
