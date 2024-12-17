import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_CART, UPDATE_QUANTITY } from '../../Redux/Actions/Action';

// assets
import asset0 from '../../assets/asset 0.svg'
import asset60 from '../../assets/asset 60.svg'
import asset57 from '../../assets/asset 57.svg'
import asset1 from '../../assets/asset 1.svg'
import asset2 from '../../assets/asset 2.svg'

// react icon
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

// PopUp
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Navbar() {

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
            return total + item.price * quantity;
        }, 0);
    }, [CartlistItem, quantities]);

    return (
        <>
            <section className="container mx-auto px-5 md:px-10 py-4 border-b">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-12'>
                        <a href="/" className='mr-5'>
                            <img src={asset0} alt="" />
                        </a>
                        <nav className='hidden lg:block'>
                            <ul className='flex space-x-10'>
                                <li>
                                    <Link to="/shop" className='text-sm'>Shop</Link>
                                </li>
                                <li>
                                    <Link to="/categories" className='text-sm'>Categories</Link>
                                </li>
                                <li>
                                    <Link to="/aboutUs" className='text-sm'>About us</Link>
                                </li>
                                <li>
                                    <Link to="/blogs" className='text-sm'>Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/reviews" className='text-sm'>Reviews</Link>
                                </li>
                                <li>
                                    <Link to="/contactUs" className='text-sm'>Contact us</Link>
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
                        <Link to="/signUp">
                            <img src={asset1} alt="" />
                        </Link>
                        <Popup
                            trigger={<button className="relative button text-white flex items-center gap-1">
                                <img src={asset2} alt="" className="capitalize text-sm font-normal" />
                                <span className='absolute -top-2 -right-2 bg-orange-600 rounded-full w-4 h-4 text-xs font-semibold'>{data.length}</span>
                                {/* <ShoppingBag strokeWidth={1} className={`${isWhiteTheme ? 'text-black' : 'text-white'}`} />
                                <p className={`${isWhiteTheme ? 'text-black' : 'text-white'} capitalize text-sm font-normal`}>
                                    Cart ({data.length})
                                </p> */}
                            </button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal overflow-y-scroll h-[60vh]"
                                // Prevent propagation
                                >
                                    <section className='w-commerce-com'>
                                        <div className='commerce-cart-container align-middle'>
                                            <div className='w-commerce-commercecartheader py-4 px-6 flex justify-between items-center border-b'>
                                                <h4 className='w-commerce-commercecartheading text-[22px]'>Your Cart</h4>
                                                <button className="close" onClick={close}>
                                                    <img src={asset60} alt="" />
                                                </button>
                                            </div>
                                            <div className='w-commerce-commercecartformwrapper'>
                                                {CartlistItem.map((item, ind) => {

                                                    let { id, img, name, price } = item

                                                    return (
                                                        <div key={ind} className='w-commerce-commercecartform'>
                                                            <div className='w-commerce-commercecartlist py-4 px-6'>
                                                                <div className='w-commerce-commercecartitem flex py-3'>
                                                                    <img src={img} alt="" className='w-[60px] h-[72px]' />
                                                                    <div className='w-commerce-commercecartiteminfo mx-4 block flex-1'>
                                                                        <h2 className='w-commerce-commercecartproductname text-lg'>{name}</h2>
                                                                        <h3 className='text-stone-600'>${price}.00 USD</h3>
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
                                                                            className='mb-3 w-[70px] h-[38px] py-2 pl-3 pr-[6px] bg-stone-50 border border-stone-300' />
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
                        <div className='block lg:hidden'>
                            <LiaBarsSolid className='text-2xl' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
