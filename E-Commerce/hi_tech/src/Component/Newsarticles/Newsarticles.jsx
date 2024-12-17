// import React from 'react'

// assets
import asset17 from "../../assets/asset 17.svg"
import Commonnews from "./Commonnews"
import NewsarticlesData from "./NewsarticlesData"

function Newsarticles() {
    return (
        <>
            <section className="container mx-auto px-5 md:px-10 mb-16 md:mb-36">
                <div className="mb-6">
                    <div className="border-b pb-4 flex justify-between items-center">
                        <h2 className=" md:text-4xl">News & Articles</h2>
                        <div className='flex items-center'>
                            <a href="/" className="text-[#999] text-sm">View All</a>
                            <img src={asset17} alt="" className='ml-1' />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        NewsarticlesData.map((item, ind) => {
                            return (
                                <Commonnews
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
        </>
    )
}

export default Newsarticles
