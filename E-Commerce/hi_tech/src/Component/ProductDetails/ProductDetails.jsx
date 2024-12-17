// import React from 'react'

import { useParams } from 'react-router-dom';

import { ADD_CART, UPDATE_QUANTITY } from "../../Redux/Actions/Action";

import { useDispatch } from 'react-redux';

// assets
import asset111 from '../../assets/asset 111.svg'
import asset112 from '../../assets/asset 112.svg'
import asset113 from '../../assets/asset 113.svg'
import asset44 from '../../assets/asset 44.jpeg'
import asset45 from '../../assets/asset 45.jpeg'

import ProductOverview from '../ProductOverview/ProductOverview'
import ShopData from '../../Pages/Shop/ShopData'

function ProductDetails() {

    const { id } = useParams();
    const shop = ShopData.find((b) => b.id === parseInt(id, 10));

    if (!shop) {
        return <div>Blog not found!</div>;
    }

    const dispatch = useDispatch();
    const send = (e) => {
        console.log(e, "eeee")
        dispatch(ADD_CART(e))
        // let find = shop.findIndex(item => item.id === e.id);
        // find === -1 ? toast.success("This item is added to cart") : toast.error("This item is alredy in the Cart");
    }

    const changeQuantity = (event, id) => {
        const Quantity = parseInt(event.target.value);
        dispatch(UPDATE_QUANTITY(id, Quantity));
    };

    return (
        <>
            <section className="container mx-auto px-5 md:px-10 pt-20 mb-[60px] bg-gray-50">
                <div className='flex gap-x-[60px]'>
                    <div className='w-[100%] max-w-[45%]'>
                        <img src={shop.img} alt="" className='object-cover w-[100%] min-h-[730px] max-h-[730px]' />
                    </div>
                    <div className='flex flex-col justify-between w-[100%] max-w-[60%]'>
                        <div>
                            <div>
                                <h2 className='mb-[10px] text-4xl'>{shop.name}</h2>
                                <div className='flex items-center gap-x-[30px]'>
                                    <p className='text-[26px]'>$ {shop.price}.00 USD</p>
                                    <del className='text-[26px] text-[#999]'>$ 184.00 USD</del>
                                </div>
                                <p className='mt-[30px]'>The PulseWave Wireless Speaker is a premium audio device that delivers immersive sound and sleek design. With its wireless connectivity, long battery life, and powerful sound output, it&apos;s perfect for music enthusiasts.</p>
                            </div>
                            <div className='mt-10 mb-[50px]'>
                                <div className='flex flex-col gap-y-[10px]'>
                                    <div className='flex gap-x-[10px]'>
                                        <p>Brand:</p>
                                        <p className='text-[#333]'>NovaTech</p>
                                    </div>
                                    <div className='flex gap-x-[10px]'>
                                        <p>Color:</p>
                                        <p className='text-[#333]'>Black, Charcoal, White</p>
                                    </div>
                                    <div className='flex gap-x-[10px]'>
                                        <img src={asset111} alt="" />
                                        <p className='text-[#333]'>27 items in stock</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='mt-10 flex gap-x-5'>
                                        <input
                                            onChange={(event) => changeQuantity(event, id)}
                                            type="number"
                                            min={1}
                                            value={1}
                                            className='border rounded-md w-[65px] h-[45px] text-sm bg-transparent py-2 pr-[6px] pl-3' />
                                        <button onClick={() => send(shop)} className='bg-[#f63] flex gap-x-3 items-center text-white rounded-full px-6 py-3 text-sm hover:bg-black transition-all duration-200'>
                                            Add to Cart
                                            <img src={asset112} alt="" className='' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='border-t border-[#0003] flex flex-col pt-5'>
                                <div className='flex gap-x-[10px]'>
                                    <p>SKU:</p>
                                    <p className='text-stone-600'>ECH-567-EF</p>
                                </div>
                                <div className='flex gap-x-[10px]'>
                                    <p>Category:</p>
                                    <a href="/" className='text-stone-600 hover:underline'>Audio & Headphones</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='flex items-center gap-x-2 py-2 px-[26px] border border-black rounded-full'>
                                <img src={asset113} alt="" />
                                <p>Contact us for more information</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <ProductOverview />
            <section className='container mx-auto px-5 mb-[150px]'>
                <div className='mb-[25px]'>
                    <h4 className='text-[22px]'>What our customers says!</h4>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-x-10 gap-y-10'>
                        <div>
                            <div className='flex gap-x-5'>
                                <div className='w-[100%] max-w-[40%] overflow-hidden'>
                                    <img src={asset44} alt="" className='rounded-md w-[100%] min-h-[266px] max-h-[266px] object-cover' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <p className='text-stone-600'>The CyberSleek Gaming Keyboard is a must-have for serious gamers! The keys are responsive, and the backlighting adds a cool aesthetic to my gaming setup. Love it!</p>
                                    <div>
                                        <p>Leslie Alexander</p>
                                        <p className='text-sm text-stone-600'>Florida, US</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-x-5'>
                                <div className='w-[100%] max-w-[40%] overflow-hidden'>
                                    <img src={asset45} alt="" className='rounded-md w-[100%] min-h-[266px] max-h-[266px] object-cover' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <p className='text-stone-600'>The EchoSync Smart Home system has made my life so much easier! I can control my lights, thermostat, and security cameras from my phone, which adds a new level of convenience.</p>
                                    <div>
                                        <p>Cameron Williamson</p>
                                        <p className='text-sm text-stone-600'>New York, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails
