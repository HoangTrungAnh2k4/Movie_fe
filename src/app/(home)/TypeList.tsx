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
        <div className="justify-between gap-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-4">
            {topicList.map((item, index) => (
                <Link
                    href={'/list_movie'}
                    key={index}
                    className={`flex hover:-translate-y-3 cursor-pointer duration-300 flex-col justify-center ${item.cssBg} p-4 pl-6 rounded-xl h-32 text-white`}
                >
                    <h2 className="font-bold text-lg"> {item.name}</h2>
                    <p className="mt-2 text-sm">Xem chủ đề</p>
                </Link>
            ))}
        </div>
    );
}
