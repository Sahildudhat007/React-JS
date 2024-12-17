// import React from 'react'

import CommonBlogs from "./CommonBlogs"
import BlogData from './BlogData'
import Accordion from "../../Component/Accordion/Accordion"

function Blogs() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-36">
                <div className="mb-6">
                    <div className="py-[60px] flex justify-between items-center">
                        <h2 className="text-5xl">Latest Articles</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        BlogData.map((item, ind) => {
                            return (
                                <CommonBlogs
                                    key={ind}
                                    id={item.id}
                                    img={item.img}
                                    date={item.date}
                                    title={item.title}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <Accordion />
        </>
    )
}

export default Blogs
