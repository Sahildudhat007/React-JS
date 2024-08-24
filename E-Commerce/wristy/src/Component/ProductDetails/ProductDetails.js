import { useState } from 'react'

// import dataBase from '../CommonData/CommonData';
// import productData from '../CommonData/CommonData';

import dataBase from '../CommonData/CommonData';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icon
import { IoCartOutline } from "react-icons/io5";

import { useParams } from 'react-router-dom'

import { ADD_CART, UPDATE_QUANTITY, INCREMENT_CART, DECREMENT_CART, } from "../../Redux/Actions/Action";

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

// asset link
import asset13 from '../../Assets/asset 13.jpeg'
import asset111 from '../../Assets/asset111.svg'

function ProductDetails({ id, img, product, rate, quantity }) {

    const navigate = useNavigate();

    const data = useSelector((state) => state.cartreducer.carts);
    
    const Products = { id, img, product, rate, quantity  }
    const dispatch = useDispatch();
    const send = (e) => {
        console.log(e, "eeee")
        dispatch(ADD_CART(e))
        let find = data.findIndex(item => item.id === e.id);
        find === -1 ?  toast.success("This is item  added to cart"):  toast.error("This item is alredy in the Cart");
    }

    const changeQuantity = (event, id) => {
        const Quantity = parseInt(event.target.value);
        dispatch(UPDATE_QUANTITY(id, Quantity));
    };

    const Inc_Cart = (item) => {
        console.log(item);
        dispatch(INCREMENT_CART(item))
    }

    const Dec_Cart = (item) => {
        console.log(item);
        dispatch(DECREMENT_CART(item))
    }

    return (
        <div>
            <div className='page-data py-20'>
                <section className='products-main container mx-auto px-10 mb-14'>
                    <div className='product-wrap grid grid-cols-2 gap-12 items-center'>
                        <div className='product-main-img relative'>
                            {/* <img src={asset13} alt="" /> */}
                            <img src={img} alt="productImg" />
                            <a href="#" className='absolute bottom-7 right-7 bg-white p-3 rounded-full duration-1000 hover:duration-1000 hover:rotate-180'>
                                <img src={asset111} alt="" />
                            </a>
                        </div>
                        <div className='product-info'>
                            <h1 className='product-main-title mb-3 text-4xl font-normal'>{product}</h1>
                            <div className='product-price-box'>
                                <h3 className='sale-price text-2xl mb-10'>{rate}</h3>
                            </div>
                            <div className='product-information space-y-2'>
                                <div className='product-detail'>
                                    <p className='info-title'>Brand Material: <span className='text-stone-700'>Silicon Strap</span></p>
                                </div>
                                <div className='product-detail'>
                                    <p className='info-title'>Case Shape: <span className='text-stone-700'>Cushion</span></p>
                                </div>
                                <div className='product-detail'>
                                    <p className='info-title'>Display Type: <span className='text-stone-700'>Skeleton Dial</span></p>
                                </div>
                                <div className='product-detail'>
                                    <p className='info-title'>Water Resistant: <span className='text-stone-700'>5 ATM</span></p>
                                </div>
                                <div className='warranty w-richtext'>
                                    <ul role='list' className='list-disc pl-7'>
                                        <li className=''>3 year warranty on just dial defects only.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='my-12'>
                                <form action="" className='flex space-x-5'>
                                    <input onChange={(event) => changeQuantity(event, id)}
                                        type="number" 
                                        name='number'
                                        min={1} 
                                        value={1} 
                                        className='border px-3 py-2 w-[80px]' />
                                    <button onClick={() => send(Products)} href="#" className='flex items-center px-5 text-xs bg-black text-white hover:bg-white hover:border hover:text-black'>Add to Cart <IoCartOutline className='ml-3 text-lg' /> </button>
                                </form>
                            </div>
                            <div className='product-btm border-t pt-4 space-y-2'>
                                <div className='product-detail'>
                                    <p className='info-title'>SKU: <span className='text-stone-700'>WT-785-K12</span></p>
                                </div>
                                <div className='product-detail'>
                                    <p className='info-title text-stone-700'>Categories: <a href="#">Smart Watches</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='product-details'>
                    <div className='container mx-auto px-10 mb-14'>
                        <div className='w-richtext'>
                            <h3 className='text-xl font-medium mb-3'>Product Description</h3>
                            <p className='mb-3 text-stone-700'>Elevate your wristwear collection with the exquisite Wristy. Crafted with precision and attention to detail, this stunning timepiece effortlessly blends timeless elegance with modern sophistication. With its water-resistant design and durable construction, the Wristy is built to withstand the rigors of everyday wear. Plus, with a 01-year warranty, you can enjoy peace of mind knowing your investment is protected.</p>
                            <p className='mb-3 text-stone-700'>Elevate your style with the Classic Chronograph Watch. This timeless timepiece features a stainless steel case and bracelet, accented by a sleek black dial. With its chronograph functionality, you can track elapsed time with precision, while the date window at the 4 o'clock position adds convenience.</p>
                            <ul role="list" className='my-5 list-disc pl-7'>
                                <li className='mb-3 text-stone-700'>Modern Innovations in Watchmaking: Embracing Technology and Style</li>
                                <li className='mb-3 text-stone-700'>The Art of Horology: Appreciating the Craftsmanship Behind Fine Timepieces</li>
                                <li className='mb-3 text-stone-700'>Watch Care Tips: How to Maintain Your Timepieces for Longevity</li>
                                <li className='mb-3 text-stone-700'>The Fascinating World of Vintage Watches: Nostalgia and Heritage</li>
                            </ul>
                            <p className='mb-2'>&zwj;</p>
                            <h3 className='text-xl font-medium mb-3'>Care Instructions</h3>
                            <p className='text-stone-700'>Proper care and maintenance are essential to preserve the longevity and performance of your cherished timepieces. To ensure your watches remain in pristine condition, it's important to handle them with care and avoid exposure to extreme temperatures, moisture, and chemicals. Regularly wipe down your watch with a soft, dry cloth to remove any dirt or debris, and avoid wearing it while engaging in activities that may subject it to undue stress or impact.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductDetails
