import Image from 'next/image';

export default function Top10Today() {
    return (
        <div className="p-8 text-primary">
            <div className="gap-6 grid grid-cols-5">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden r">
                        <Image
                            src="https://static.nutscdn.com/vimg/400-0/3ac6b7f3647ae31e17d8f0675a162aa9.png"
                            alt="Movie Poster"
                            width={400}
                            height={600}
                            className="rounded-xl aspect-[2/3] [clip-path:polygon(94.239%_100%,5.761%_100%,5.761%_100%,4.826%_99.95%,3.94%_99.803%,3.113%_99.569%,2.358%_99.256%,1.687%_98.87%,1.111%_98.421%,.643%_97.915%,.294%_97.362%,.075%_96.768%,0_96.142%,0_3.858%,0_3.858%,.087%_3.185%,.338%_2.552%,.737%_1.968%,1.269%_1.442%,1.92%_.984%,2.672%_.602%,3.512%_.306%,4.423%_.105%,5.391%_.008%,6.4%_.024%,94.879%_6.625%,94.879%_6.625%,95.731%_6.732%,96.532%_6.919%,97.272%_7.178%,97.942%_7.503%,98.533%_7.887%,99.038%_8.323%,99.445%_8.805%,99.747%_9.326%,99.935%_9.88%,100%_10.459%,100%_96.142%,100%_96.142%,99.925%_96.768%,99.706%_97.362%,99.357%_97.915%,98.889%_98.421%,98.313%_98.87%,97.642%_99.256%,96.887%_99.569%,96.06%_99.803%,95.174%_99.95%,94.239%_100%)"
                        />

                        <div className="p-4">
                            <h3 className="font-bold text-white text-lg">Người Hùng Yếu Đuối</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
