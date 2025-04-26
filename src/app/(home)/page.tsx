import Banner from './Banner';
import TypeList from './TypeList';
import Poster30_4 from './Poster30_4';
import TopTrending from './TopTrending';
import Top10Today from './Top10Today';

export default function Home() {
    return (
        <div className="bg-background px-8 pb-20 text-white">
            <div className="-mx-8">
                <Banner />
            </div>

            {/* Lớp phủ để che ranh giới của banner với phần còn lại */}
            <div className="bg-[linear-gradient(to_top,_#191b24_30%,_transparent_100%)] -mx-8 -mt-26 h-36"></div>

            {/* Type list */}
            <div className="-mt-24">
                <h4 className="mb-6 font-semibold text-2xl">Bạn đang quan tâm gì?</h4>
                <TypeList />
            </div>

            {/* poster 30/4 - 1/5 */}
            <div className="mt-24">
                <Poster30_4 />
            </div>

            <div className="mt-24">
                <TopTrending />
            </div>

            <div className="mt-24">
                <Top10Today />
            </div>
        </div>
    );
}
