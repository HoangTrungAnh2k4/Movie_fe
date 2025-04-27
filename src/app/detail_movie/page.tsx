import Information from './Information';
import Episode from './Episode';

export default function DetailMovie() {
    return (
        <div className="">
            {/* banner */}
            <div
                className="relative inset-0 bg-cover bg-no-repeat bg-center shadow-[inset_150px_0_200px_200px_rgba(0,0,0,0.8)] w-full h-[500px] text-white"
                style={{
                    backgroundImage: `url('https://static.nutscdn.com/vimg/1920-0/727763d967d096fe446b2a8d2e2fe9c2.jpg')`,
                }}
            >
                <div
                    className="z-10 absolute inset-0 bg-repeat opacity-20"
                    style={{
                        backgroundImage: `url('https://www.rophim.me/images/dotted.png')`,
                    }}
                />
            </div>

            {/* content */}
            <div className="flex justify-start bg-background text-white">
                {/* information */}
                <div className="w-[30%]">
                    <Information />
                </div>

                {/* episode */}
                <div className="flex-grow p-8">
                    <Episode />
                </div>
            </div>
        </div>
    );
}
