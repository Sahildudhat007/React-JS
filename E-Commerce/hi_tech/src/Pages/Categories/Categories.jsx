// import React from 'react'

import Instagram from "../../Component/Instagram/Instagram"
import CategoryData from "./CategoryData"
import CommonCategory from "./CommonCategory"

function Categories() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-[80px] md:mb-[150px] bg-gray-50">
                <div className="py-[60px]">
                    <h1 className="text-4xl md:text-5xl">Browse by Category</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        CategoryData.map((items, ind) => {
                            return (
                                <CommonCategory
                                    key={ind}
                                    id={items.id}
                                    img={items.img}
                                    name={items.name}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <div>
                <Instagram />
            </div>
        </>
    )
}

export default Categories
