import Information from './Information';
import Episode from './Episode';

export default function DetailMovie() {
    return (
        <div className="">
            {/* banner */}
            <div
                className="relative inset-0 bg-cover bg-no-repeat bg-center shadow-[inset_150px_0_150px_150px_rgba(0,0,0,0.5)] w-full h-[500px] text-white"
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
                {/* Gradient làm mờ */}
                <div className="bottom-0 absolute bg-gradient-to-b from-transparent to-background w-full h-40" />
            </div>

            {/* content */}
            <div className="flex justify-start text-white">
                {/* information */}
                <div className="py-2 pb-6 w-[30%]">
                    <Information />
                </div>

                {/* episode */}
                <div className="flex-grow pt-2 pb-6">
                    <Episode />
                </div>
            </div>
        </div>
    );
}
