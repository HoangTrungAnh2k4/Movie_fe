import Link from 'next/link';

export default function TypeList() {
    const topicList = [
        {
            name: 'Hành Động',
            slug: 'hanh-dong',
            cssBg: 'bg-gradient-to-b from-[#324fd1] vie-[#324fd1] to-[#ff6f6fc9] ',
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
            name: 'Hành Động',
            slug: 'hanh-dong',
            cssBg: 'bg-gradient-to-b from-[#a73939] via-[#a73939] to-[#ff6f6fc9]',
        },
    ];

    return (
        <div className='not-scroll mt-4 flex grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 overflow-x-auto pt-4 lg:grid'>
            {topicList.map((item, index) => (
                <Link
                    href={'/list_movie'}
                    key={index}
                    className={`flex cursor-pointer flex-col justify-center duration-300 hover:-translate-y-3 ${item.cssBg} h-20 w-[120px] flex-shrink-0 rounded-xl p-4 px-4 text-white sm:w-[140px] lg:h-32 lg:w-auto lg:px-6`}
                >
                    <h2 className='text-sm font-bold lg:text-lg'>
                        {' '}
                        {item.name}
                    </h2>
                    <p className='mt-2 hidden text-sm lg:block'>Xem chủ đề</p>
                </Link>
            ))}
        </div>
    );
}
