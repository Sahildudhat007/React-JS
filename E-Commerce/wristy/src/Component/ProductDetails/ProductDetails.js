import React from 'react'

import dataBase from '../CommonData/CommonData';

// toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icon
import { IoCartOutline } from "react-icons/io5";

import { useParams } from 'react-router-dom'

import { ADD_CART, UPDATE_QUANTITY } from "../../Redux/Actions/Action";

import { useDispatch, useSelector } from 'react-redux';

// asset link
import asset111 from '../../Assets/asset111.svg'

function ProductDetails() {

    const ID = useParams();

    const Products = dataBase.productData.find(item => item.id === +ID.id)

    const { id, img, product, rate } = Products

    const data = useSelector((state) => state.cartreducer.carts);

    const dispatch = useDispatch();
    const send = (e) => {
        console.log(e, "eeee")
        dispatch(ADD_CART(e))
        let find = data.findIndex(item => item.id === e.id);
        find === -1 ? toast.success("This is item  added to cart") : toast.error("This item is alredy in the Cart");
    }

    const changeQuantity = (event, id) => {
        const Quantity = parseInt(event.target.value);
        dispatch(UPDATE_QUANTITY(id, Quantity));
    };

    return (
        <div>
            <div className='py-20 page-data'>
                <section className='container px-10 mx-auto products-main mb-14'>
                    <div className='grid items-center grid-cols-2 gap-12 product-wrap'>
                        <div className='relative product-main-img'>
                            <img src={img} alt="productImg" />
                            <a href="..." className='absolute p-3 duration-1000 bg-white rounded-full bottom-7 right-7 hover:duration-1000 hover:rotate-180'>
                                <img src={asset111} alt="" />
                            </a>
                        </div>
                        <div className='product-info'>
                            <h1 className='mb-3 text-4xl font-normal product-main-title'>{product}</h1>
                            <div className='product-price-box'>
                                <h3 className='mb-10 text-2xl sale-price'>$ {rate} USD</h3>
                            </div>
                            <div className='space-y-2 product-information'>
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
                                    <ul className='list-disc pl-7'>
                                        <li className=''>3 year warranty on just dial defects only.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='my-12'>
                                <div className='flex space-x-5'>
                                    <input onChange={(event) => changeQuantity(event, id)}
                                        type="number"
                                        name='number'
                                        min={1}
                                        value={1}
                                        className='border px-3 py-2 w-[80px]' />
                                    <button onClick={() => send(Products)} href="#" className='flex items-center px-5 text-xs text-white bg-black hover:bg-white hover:border hover:text-black'>Add to Cart <IoCartOutline className='ml-3 text-lg' /> </button>
                                </div>
                            </div>
                            <div className='pt-4 space-y-2 border-t product-btm'>
                                <div className='product-detail'>
                                    <p className='info-title'>SKU: <span className='text-stone-700'>WT-785-K12</span></p>
                                </div>
                                <div className='product-detail'>
                                    <p className='info-title text-stone-700'>Categories: <a href="...">Smart Watches</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='product-details'>
                    <div className='container px-10 mx-auto mb-14'>
                        <div className='w-richtext'>
                            <h3 className='mb-3 text-xl font-medium'>Product Description</h3>
                            <p className='mb-3 text-stone-700'>Elevate your wristwear collection with the exquisite Wristy. Crafted with precision and attention to detail, this stunning timepiece effortlessly blends timeless elegance with modern sophistication. With its water-resistant design and durable construction, the Wristy is built to withstand the rigors of everyday wear. Plus, with a 01-year warranty, you can enjoy peace of mind knowing your investment is protected.</p>
                            <p className='mb-3 text-stone-700'>Elevate your style with the Classic Chronograph Watch. This timeless timepiece features a stainless steel case and bracelet, accented by a sleek black dial. With its chronograph functionality, you can track elapsed time with precision, while the date window at the 4 o'clock position adds convenience.</p>
                            <ul className='my-5 list-disc pl-7'>
                                <li className='mb-3 text-stone-700'>Modern Innovations in Watchmaking: Embracing Technology and Style</li>
                                <li className='mb-3 text-stone-700'>The Art of Horology: Appreciating the Craftsmanship Behind Fine Timepieces</li>
                                <li className='mb-3 text-stone-700'>Watch Care Tips: How to Maintain Your Timepieces for Longevity</li>
                                <li className='mb-3 text-stone-700'>The Fascinating World of Vintage Watches: Nostalgia and Heritage</li>
                            </ul>
                            <p className='mb-2'>&zwj;</p>
                            <h3 className='mb-3 text-xl font-medium'>Care Instructions</h3>

                            Jayan Skill Qude, [24-08-2024 06:14 PM]
                            <p className='text-stone-700'>Proper care and maintenance are essential to preserve the longevity and performance of your cherished timepieces. To ensure your watches remain in pristine condition, it's important to handle them with care and avoid exposure to extreme temperatures, moisture, and chemicals. Regularly wipe down your watch with a soft, dry cloth to remove any dirt or debris, and avoid wearing it while engaging in activities that may subject it to undue stress or impact.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductDetails