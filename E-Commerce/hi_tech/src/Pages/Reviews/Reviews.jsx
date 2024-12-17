// import React from 'react'

import CommonReview from "./CommonReview"
import ReviewData from "./ReviewData"

function Reviews() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-[150px]">
                <div className="py-[60px]">
                    <h1 className="text-5xl">Customers Review</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {
                        ReviewData.map((item, ind) => {
                            return (
                                <CommonReview
                                    key={ind}
                                    id={item.id}
                                    img={item.img}
                                    text={item.text}
                                    name={item.name}
                                    city={item.city}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Reviews
