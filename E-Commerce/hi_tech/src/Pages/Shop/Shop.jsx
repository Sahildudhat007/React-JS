// import React from 'react'

import CommonShop from "./CommonShop"
import ShopData from "./ShopData"

function Shop() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 pb-[150px]">
                <div className="py-[60px]">
                    <h1 className="text-4xl md:text-5xl">Latest Products</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        ShopData.map((item, ind) => {
                            return (
                                <CommonShop
                                    key={ind}
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                    delPrice={item.delPrice}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Shop
