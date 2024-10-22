
// assets
import asset0 from '../../assets/asset 0.svg'
import asset57 from '../../assets/asset 57.svg'
import asset1 from '../../assets/asset 1.svg'
import asset2 from '../../assets/asset 2.svg'

// react icon
import { LiaBarsSolid } from "react-icons/lia";

function Navbar() {
    return (
        <>
            <div className="container mx-auto px-5 lg:px-10 py-4 border-b">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-12'>
                        <a href="/" className='mr-5'>
                            <img src={asset0} alt="" />
                        </a>
                        <nav className='hidden lg:block'>
                            <ul className='flex space-x-10'>
                                <li>
                                    <a href="/" className='text-sm'>Shop</a>
                                </li>
                                <li>
                                    <a href="/" className='text-sm'>Categories</a>
                                </li>
                                <li>
                                    <a href="/" className='text-sm'>About us</a>
                                </li>
                                <li>
                                    <a href="/" className='text-sm'>Blogs</a>
                                </li>
                                <li>
                                    <a href="/" className='text-sm'>Reviews</a>
                                </li>
                                <li>
                                    <a href="/" className='text-sm'>Contact us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='hidden lg:block'>
                            <form action="" className='flex items-center border rounded-full py-2 px-3'>
                                <input type="search" maxLength={260} placeholder='search' className='search-input placeholder:text-black text-sm outline-none' />
                                <img src={asset57} alt="" />
                            </form>
                        </div>
                        <a href="/">
                            <img src={asset1} alt="" />
                        </a>
                        <a href="/">
                            <img src={asset2} alt="" />
                        </a>
                        <div className='block lg:hidden'>
                            <LiaBarsSolid className='text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
