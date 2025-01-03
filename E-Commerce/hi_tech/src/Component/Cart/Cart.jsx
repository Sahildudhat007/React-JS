// import React from 'react'

// Asset link
import asset48 from '../../Assets/asset 48.svg'

import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_CART, UPDATE_QUANTITY } from '../../Redux/Actions/Action';


function Cart() {

    const dispatch = useDispatch();

    // Remove item from the cart
    const Remove_Cart = (id) => {
        dispatch(REMOVE_CART(id));
    };

    // Get cart items and quantities from Redux state
    const CartlistItem = useSelector((state) => state.cartreducer.carts);
    const quantities = useSelector((state) => state.cartreducer.quantities);

    // Change item quantity
    const changeQuantity = (event, id) => {
        const Quantity = Math.max(1, parseInt(event.target.value) || 1); // Ensure quantity is >= 1
        dispatch(UPDATE_QUANTITY(id, Quantity));
    };

    return (
        <div>
            <section className='w-commerce-com'>
                <div className='commerce-cart-container container mx-auto my-20 px-10 w-[100%] max-w-[50%] align-middle'>
                    <div className='w-commerce-commercecartheader py-4 px-6 flex justify-between items-center border-b'>
                        <h4 className='w-commerce-commercecartheading text-lg'>Your Cart</h4>
                        <a href="..." className='close'>
                            <img src={asset48} alt="" />
                        </a>
                    </div>
                    <div className='w-commerce-commercecartformwrapper'>
                        {CartlistItem.map((item, ind) => {
                            const { id, img, name, price } = item;
                            const quantity = quantities[id] || 1; // Fallback to 1 if quantity is undefined
                            const totalPrice = quantity * price;

                            return (
                                <div key={ind} className="w-commerce-commercecartform">
                                    <div className="w-commerce-commercecartlist py-4 px-6">
                                        <div className="w-commerce-commercecartitem flex py-3">
                                            <img src={img} alt="" className="w-[60px] h-[72px]" />
                                            <div className="w-commerce-commercecartiteminfo mx-4 block flex-1">
                                                <h2 className="w-commerce-commercecartproductname text-lg">{name}</h2>
                                                <h3 className="text-stone-600">$ {price} USD</h3>
                                                <div className="mt-5">
                                                    <button
                                                        onClick={() => Remove_Cart(id)}
                                                        className="underline hover:no-underline text-stone-600"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <input
                                                    onChange={(event) => changeQuantity(event, id)}
                                                    type="number"
                                                    name="number"
                                                    min="1"
                                                    value={quantity} // Bind to Redux state
                                                    className="mb-3 w-[70px] h-[38px] bg-stone-50 border border-stone-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-commerce-commercecartfooter border-t px-4 py-3">
                                        <div className="w-commerce-commercecartlineitem flex justify-between mb-4">
                                            <h4>Subtotal</h4>
                                            <h4 className="font-medium">${totalPrice.toFixed(2)}</h4>
                                        </div>
                                        <div className="">
                                            <a
                                                href="..."
                                                className="bg-black text-white border border-black w-full block px-6 py-3 text-sm text-center transition-transform hover:bg-white hover:text-black"
                                            >
                                                Continue to Checkout
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart
