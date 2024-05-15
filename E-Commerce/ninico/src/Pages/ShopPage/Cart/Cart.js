import React, { useState, useRef } from 'react'

import PageHeading from '../../../Component/PageHeading/PageHeading'

import { REMOVE_CART, INCREMENT_CART } from '../../../Redux/Actions/Action';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

    const dispatch = useDispatch();

    const Remove_Cart = (id) => {
        console.log(id);
        dispatch(REMOVE_CART(id))
    }

    const showCount = (item) => {
        // console.log(item);
        dispatch(INCREMENT_CART(item))
    }

    const CartlistItem = useSelector((state) => state.cartreducer.carts)
    console.log(CartlistItem);

    return (
        <div>
            <div>
                <PageHeading goBackLink='Home' pageTitle='Cart' />
                <section className="mx-auto w-[100%] px-5">
                    <div className="mt-6 flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <div className="overflow-hidden border border-gray-200">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="">Images</th>
                                                <th scope="col" className="">Courses</th>
                                                <th scope="col" className="">Unit Price</th>
                                                <th scope="col" className="">Quantity</th>
                                                <th scope="col" className="">Total</th>
                                                <th scope="col" className="">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white text-center">
                                            {CartlistItem.map((item, ind) => {
                                                let { id, firstProductImg, productName, Price, quantity } = item
                                                return (
                                                    <tr key={ind}>
                                                        <td className="whitespace-nowrap">
                                                            <a href="#" className='flex justify-center'>
                                                                <img src={firstProductImg} alt="" className='product-img w-[125px] h-[143px]' />
                                                            </a>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="product-name">{productName}</div>
                                                        </td>
                                                        <td className="whitespace-nowrap">${Price}.00</td>
                                                        <td className="whitespace-nowrap">
                                                            {quantity}
                                                            <button onClick={()=>showCount(item)} className='border p-2 text-start'>
                                                                +
                                                            </button>
                                                            {/* <input type="number" min={1} defaultValue={1} name='qty' className='qty' /> */}
                                                        </td>
                                                        <td className="whitespace-nowrap">${Price * quantity}.00</td>
                                                        <td className="whitespace-nowrap">
                                                            <button onClick={() => Remove_Cart(id)}>Remove</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className='table w-[100%] px-5 mt-16 mb-10'>
                    <div className='table-content w-[100%]'>
                        <table className='table-auto w-full'>
                            <thead>
                                <tr>
                                    <th>Images</th>
                                    <th>Courses</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Add To Cart</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {CartlistItem.map((item, ind) => {
                                    let { id ,firstProductImg, productName, Price} = item
                                    return (
                                        <tr key={ind} className='cart-item'>
                                            <td className=''>
                                                <a href="#" className='flex justify-center'>
                                                    <img src={firstProductImg} alt="" className='' />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className='product-name'>{productName}</a>
                                            </td>
                                            <td>{Price}</td>
                                            <td className=''>
                                                <input type="number" min={1} defaultValue={1} name='qty' className='qty' />
                                            </td>
                                            <td>{Price}</td>
                                            <td>
                                                <button className='tp-btn'>Add To Cart</button>
                                            </td>
                                            <td>
                                                <button onClick={() => Remove_Cart(id)}>Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div> */}
                <div className='btn-group px-5 mb-10'>
                    <div className='coupon1 flex justify-between flex-wrap'>
                        <div className='coupon'>
                            <input type="text" placeholder='Coupon code' className='input-text border mr-3 h-[50px] p-2 outline-0 rounded-md' />
                            <button className='tp-btn font-semibold'>Apply Coupon</button>
                        </div>
                        <div className='coupon2'>
                            <button className='tp-btn font-semibold'>Update cart</button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 px-5 mb-16'>
                    <div></div>
                    <div className='cart-page-total'>
                        <h2 className='text-2xl font-semibold mb-4'>Cart Totals</h2>
                        <ul className='mb-7'>
                            <li className='border flex items-center justify-between px-5 h-12'>
                                <p>Subtotal</p>
                                <p>$20.00</p>
                            </li>
                            <li className='border flex items-center justify-between px-5 h-12'>
                                <p>Total</p>
                                <p>$20.00</p>
                            </li>
                        </ul>
                        <button className='bg-rose-600 p-3 text-white font-semibold rounded-md'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
