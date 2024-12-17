// import React from 'react'

import Banner from "../../Component/Banner/Banner"
import Bestselling from "../../Component/Bestselling/Bestselling"
import Brandlogo from "../../Component/Brandlogo/Brandlogo"
import Cta from "../../Component/Cta/Cta"
import Features from "../../Component/Features/Features"
import Hero from "../../Component/Hero/Hero"
import Latestproducts from "../../Component/Latestproducts/Latestproducts"
import Newsarticles from "../../Component/Newsarticles/Newsarticles"
import Productcategory from "../../Component/Productcategory/Productcategory"

function Home() {
    return (
        <>
            <section>
                <Hero />
                <div className="bg-gray-50 pt-10">
                    <Productcategory />
                    <Bestselling />
                    <Banner />
                    <Latestproducts />
                    <Brandlogo />
                    <Newsarticles />
                    <Cta />
                    <Features />
                </div>
            </section>
        </>
    )
}

export default Home
