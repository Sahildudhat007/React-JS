import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { REMOVE_CART, UPDATE_QUANTITY } from '../../Redux/Actions/Action';

// PopUp
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


// * image import
import asset0 from '../../Assets/asset 0.svg'
import asset48 from '../../Assets/asset 48.svg'

// ? ICONS
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';

// * navLink data 
const navLinks = ["about", "categories", "shop", "blogs", "reviews", "contact"];

function NavBar() {

    const [openSearchBox, setOpenSearchBox] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    // redux concept
    const data = useSelector((state) => state.cartreducer.carts)
    // console.log(data, "data")

    // cart
    const dispatch = useDispatch();
    const Remove_Cart = (id) => {
        console.log(id);
        dispatch(REMOVE_CART(id))
    }

    const CartlistItem = useSelector((state) => state.cartreducer.carts);
    const quantities = useSelector((state) => state.cartreducer.quantities);
    console.log(CartlistItem);

    const changeQuantity = (event, id) => {
        const Quantity = parseInt(event.target.value);
        dispatch(UPDATE_QUANTITY(id, Quantity));
    };

    // subtotal
    const subtotal = useMemo(() => {
        return CartlistItem.reduce((total, item) => {
            const quantity = quantities[item.id] || 1;
            return total + item.rate * quantity;
        }, 0);
    }, [CartlistItem, quantities]);

    return (
        <div className='border-b border-gray-500 relative min-h-16'>

            <nav className='nav w-[100%] mx-auto px-10 max-sm:px-5 inset-0 flex items-center justify-between absolute z-20 bg-black'>

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

                <div className="navBtn_Box flex items-center gap-4 max-sm:gap-2">
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
                        {/* <Link to={'/cart'} className='text-white flex items-center justify-center gap-1' type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example">
                            <ShoppingBag strokeWidth={1} />
                            <p className='capitalize text-sm font-normal'>
                                Cart ({data.length})
                            </p>
                        </Link> */}

                        <Popup
                            trigger={<button className="button text-white flex items-center gap-1">
                                <ShoppingBag strokeWidth={1} />
                                <p className='capitalize text-sm font-normal'>
                                    Cart ({data.length})
                                </p>
                            </button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal overflow-y-scroll h-[60vh]">
                                    <section className='w-commerce-com'>
                                        <div className='commerce-cart-container align-middle'>
                                            <div className='w-commerce-commercecartheader py-4 px-6 flex justify-between items-center border-b'>
                                                <h4 className='w-commerce-commercecartheading text-lg'>Your Cart</h4>
                                                <button className="close" onClick={close}>
                                                    <img src={asset48} alt="" />
                                                </button>
                                            </div>
                                            <div className='w-commerce-commercecartformwrapper'>
                                                {CartlistItem.map((item, ind) => {
                                                    let { id, img, product, rate } = item
                                                    // const quantity = quantities[id] || 1;
                                                    // totalPrice += quantity * rate
                                                    return (
                                                        <div key={ind} className='w-commerce-commercecartform'>
                                                            <div className='w-commerce-commercecartlist py-4 px-6'>
                                                                <div className='w-commerce-commercecartitem flex py-3'>
                                                                    <img src={img} alt="" className='w-[60px] h-[72px]' />
                                                                    <div className='w-commerce-commercecartiteminfo mx-4 block flex-1'>
                                                                        <h2 className='w-commerce-commercecartproductname text-lg'>{product}</h2>
                                                                        <h3 className='text-stone-600'>{rate}</h3>
                                                                        <div className='mt-5'>
                                                                            <button onClick={() => Remove_Cart(id)} className='underline hover:no-underline text-stone-600'>Remove</button>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <input onChange={(event) => changeQuantity(event, id)}
                                                                            type="number"
                                                                            name='number'
                                                                            min="1"
                                                                            defaultValue={1}
                                                                            className='mb-3 w-[70px] h-[38px] bg-stone-50 border border-stone-300' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            {
                                                CartlistItem.length > 0 &&
                                                <div className='w-commerce-commercecartfooter border-t px-4 py-3'>
                                                    <div className='w-commerce-commercecartlineitem flex justify-between mb-4'>
                                                        <h4>Subtotal</h4>
                                                        <h4 className='font-medium'>${subtotal.toFixed(2)}</h4>
                                                    </div>
                                                    <div className=''>
                                                        <a href=".." className='bg-black text-white border border-black w-full block px-6 py-3 text-sm text-center transition-transform hover:bg-white hover:text-black '>Continue to Checkout</a>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </section>
                                </div>
                            )}
                        </Popup>

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