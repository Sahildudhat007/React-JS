// import React from 'react'

import Category from "./Category"
import CategoryData from "./CategoryData"


function Productcategory() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-20 md:mb-36 bg-gray-50">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
                    {
                        CategoryData.map((item, ind) => {
                            return (
                                <Category
                                    key={ind}
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Productcategory
