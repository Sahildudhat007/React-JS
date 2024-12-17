// import React from 'react'

import CommonMake from "./CommonMake"
import MakeData from "./MakeData"

function WhatMake() {
    return (
        <>
            <section className="container mx-auto px-5">
                <div className="mb-6 pb-4 border-b border-[#0003]">
                    <h2 className="text-2xl md:text-4xl">What make us different</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[80px] md:mb-[150px]">
                    {
                        MakeData.map((item, ind) => {
                            return (
                                <CommonMake
                                    key={ind}
                                    img={item.img}
                                    title={item.title}
                                    text={item.text}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default WhatMake
