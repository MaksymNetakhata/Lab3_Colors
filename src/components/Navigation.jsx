import '../index.css';

const Navigation = () => {
    return(
        <>
        <div className='w-128 font-semibold font-barlow text-white text-2xl tracking-wider drop-shadow flex flex-row h-[105px] items-center'>
            <a href="/">FLAT UI COLORS 2</a>
            <div className='font-bolder flex justify-end absolute right-0 text-base'>
                <a href="" className=''>Designer Inspiration</a>
                <a href="" className='ml-10'>Subscribe</a>
            </div>
        </div>
        </>
    )
}

export default Navigation;