import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// * image import
import asset0 from '../../Assets/asset 0.svg'
import asset102 from '../../Assets/asset102.svg'

// ? ICONS
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useSelector } from 'react-redux';

// * navLink data 
const navLinks = ["about", "categories", "shop", "blogs", "reviews", "contact"];

function NavBar() {

    const [openSearchBox, setOpenSearchBox] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    // const [cartCount, setCartCount] = useState(1);

    const navigate = useNavigate();

    // redux concept
    const data = useSelector((state) => state.cartreducer.carts)
    // console.log(data, "data")

    return (
        <div className='border-b border-gray-500 relative min-h-16'>

            <nav className='nav w-[100%] mx-auto px-10 inset-0 flex items-center justify-between absolute z-20 bg-black'>

                <Link to={'/'} className='logoBox'>
                    <img src={asset0} alt="logoImage" />
                </Link>

                <div className='nevLinkWrp hidden lg:block'>

                    <ul className='nevLink flex items-center gap-x-6'>
                        {navLinks.map((val) => {
                            return (
                                <li key={val} className='text-white capitalize text-sm font-normal'>
                                    <Link to={`/${val}`}>{val}</Link>
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="navBtn_Box flex items-center gap-4">

                    <div className='search_box text-white relative hidden lg:flex '>
                        {openSearchBox &&
                            <ul className={`${openSearchBox ? " searchAnimation " : ""} search bg-white text-black flex items-center justify-center rounded-3xl h-10 gap-x-2 px-2 absolute top-[50%] -translate-y-2/4 -right-1 bottom-0 mx-auto `}>
                                <li className=""> <label htmlFor="search" className='text-xs'> <Search strokeWidth={1} /> </label>  </li>
                                <li> <input type="text" name="" className="text-base border-none outline-none" id="search" placeholder='search...' /> </li>
                                <li>
                                    <button onClick={() => setOpenSearchBox(!openSearchBox)} className='flex items-center justify-center'>
                                        <X strokeWidth={1} />
                                    </button>
                                </li>
                            </ul>}
                        <button onClick={() => setOpenSearchBox(!openSearchBox)} className='flex items-center justify-center'>
                            <Search strokeWidth={1} />
                        </button>
                    </div>

                    <div className='log_in_box'>
                        <Link to={'login'} className='text-white flex items-center justify-center'>
                            <User strokeWidth={1} />
                        </Link>
                    </div>

                    <div className='cart_box'>
                        <Link to={'/cart'} className='text-white flex items-center justify-center gap-1' type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example">
                            <ShoppingBag strokeWidth={1} />
                            <p className='capitalize text-sm font-normal'>
                                Cart ({data.length})
                            </p>
                        </Link>
                    </div>

                    {/* // ! Mobile Menu BTN  */}
                    <div className='mobile_Menu block lg:hidden'>
                        <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className='text-white flex items-center justify-center'>
                            {!openMobileMenu ? <Menu strokeWidth={1} /> : <X strokeWidth={1} />}
                        </button>
                    </div>
                </div>

            </nav>

            {/* /* ----------------------- // ! Mobile Menu container ----------------------- */}

            <div className={` ${!openMobileMenu ? "-top-[500%] transition-all h-0 overflow-hidden" : "mobileMenuAnimation top-0"}  z-10 Mobile_M_Container absolute  mx-auto left-0 right-0 border-b border-gray-500 bg-black py-4 `}>
                <ul className='nevLink flex flex-col items-center gap-4 mx-auto max-w-[95%] my-4'>
                    {navLinks.map((val) => {
                        return (
                            <li key={val} className='text-white capitalize text-sm font-normal'>
                                <a href="...">{val}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul className='border rounded-3xl flex gap-x-1 items-center justify-start h-10 px-1.5 max-w-[95%] mx-auto'>
                    <li className='text-lg'>
                        <label htmlFor='mobile_searchBox' className='flex items-center justify-center text-gray-400'>
                            <Search strokeWidth={1} />
                        </label>
                    </li>
                    <li className='block w-full text-gray-400'>
                        <input type="search" name="" id="mobile_searchBox" className='block text-lg w-full bg-transparent border-none outline-none' placeholder='Search...' />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar