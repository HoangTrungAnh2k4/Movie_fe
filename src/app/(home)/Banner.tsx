// Removed incorrect import of 'url'

function Banner() {
    return (
        <div
            className='absolute inset-0 h-full w-full bg-cover bg-center shadow-[inset_0_60px_200px_80px_rgba(0,0,0,1)]'
            style={{
                backgroundImage: `url('https://static.nutscdn.com/vimg/1920-0/8e877fb92ede7c3024b5d80afa80e0b3.jpg')`,
            }}
        >
            <div
                className='absolute inset-0 h-full w-full bg-cover bg-center shadow-[inset_0_60px_200px_80px_rgba(0,0,0,1)]'
                style={{
                    backgroundImage: `url('https://static.nutscdn.com/vimg/1920-0/8e877fb92ede7c3024b5d80afa80e0b3.jpg')`,
                }}
            ></div>

            <div className='flex'>
                <div className='flex-1'>
                    <h1 className='hover:text-primary'>Daredevil: Tái Xuất</h1>
                </div>
                <div className='flex-1'></div>
            </div>
        </div>
    );
}

export default Banner;
