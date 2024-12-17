// import React from 'react'

import CommonFea from "./CommonFea"
import FeaturesData from "./FeaturesData"

function Features() {
    return (
        <>
            <section className="bg-[#dbe5e1] py-[60px]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20">
                    {
                        FeaturesData.map((item, ind) => {
                            return (
                                <CommonFea
                                    key={ind}
                                    img={item.img}
                                    title={item.title}
                                    pera={item.pera}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Features
