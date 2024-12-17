
// assets
import { Link } from 'react-router-dom'
import asset3 from '../../assets/asset 3.svg'
import asset4 from '../../assets/asset 4.jpeg'
import asset5 from '../../assets/asset 5.jpeg'
import asset6 from '../../assets/asset 6.jpeg'
import asset7 from '../../assets/asset 7.png'
import asset8 from '../../assets/asset 8.png'

// css
import './hero.css'

function Hero() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 py-10 mb-10 flex flex-wrap">
                <div className="w-full md:w-[100%] lg:max-w-[38%] flex flex-col justify-between mb-10 lg:mb-0">
                    <div className='space-y-6 md:space-y-8'>
                        <div>
                            <h1 className='text-[40px] md:text-[65px] font-semibold leading-[45px] md:leading-[75px] mb-4 md:mb-7'>Find Your Perfect Tech Companion Here</h1>
                            <p className='text-sm'>Founded with a vision to redefine the way you shop for electronics, HiTech is your one-stop destination for all things tech</p>
                        </div>
                        <Link to={'/Shop'} className='bg-orange-600 text-white w-[35%] text-sm rounded-full flex items-center text-center px-6 py-3 '>
                            <span className=''>Shop Now</span>
                            <img src={asset3} alt="" className='text-white mt-1 ml-2' />
                        </Link>
                    </div>
                    <div className='w-full max-w-[100%] md:max-w-[75%] flex items-center mt-8'>
                        <div className='flex items-center pr-4'>
                            <div className='min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] -mr-4'>
                                <img src={asset4} alt="" className='rounded-full' />
                            </div>
                            <div className='min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] -mr-4'>
                                <img src={asset5} alt="" className='rounded-full' />
                            </div>
                            <div className='min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] -mr-4'>
                                <img src={asset6} alt="" className='rounded-full' />
                            </div>
                        </div>
                        <div className='ml-4'>
                            <p className='text-sm'>Proven Excellence <strong>4.5</strong>-Star Rating Over <strong>3,500</strong> Customers</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:max-w-[62%] flex flex-wrap md:flex-nowrap  gap-5'>
                    <div className='w-full md:w-[48%] lg:w-[38%] flex justify-center hero-img min-h-[280px] max-h-[280px] rounded-md overflow-hidden items-end'>
                        <img src={asset7} alt="" className='min-h-[264px] max-h-[264px] object-cover' />
                    </div>
                    <div className='w-full md:w-[52%] lg:w-[62%]'>
                        <div className='hero-main-img flex justify-center items-center rounded-md min-h-[400px] md:min-h-[500px] max-h-[500px] relative overflow-hidden'>
                            <img src={asset8} alt="" className='min-h-[300px] md:min-h-[445px] max-h-[445px] object-cover' />
                            <p className='bg-white absolute top-32 right-16 w-[70px] h-[70px] flex text-center justify-center items-center rounded-full text-sm text-zinc-700'>15%<br />OFF</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
