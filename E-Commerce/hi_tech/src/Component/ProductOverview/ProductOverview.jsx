// import React from 'react'

import { useState } from "react";

function ProductOverview() {

    const [activeTab, setActiveTab] = useState("overview");

    return (
        <>
            <section className="container mx-auto px-5 mb-[150px] bg-[#dbe5e1]">
                <div className="py-[60px]">
                    {/* Tab Navigation */}
                    <div className="flex gap-x-[60px] border-b border-[#0003] mb-6 ">
                        <button
                            className={`text-[22px] font-[400] pb-3 ${activeTab === "overview"
                                ? "text-black border-b border-black"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("overview")}
                        >
                            Product Overview
                        </button>
                        <button
                            className={`text-[22px] font-[400] pb-3 ${activeTab === "shipping"
                                ? "text-black border-b border-black pb-3"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("shipping")}
                        >
                            Shipping Information
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-6">
                        {activeTab === "overview" && (
                            <div>
                                <p className="mb-[10px] text-base text-stone-600">
                                    Discover the epitome of modern innovation with our latest creation. Designed with precision engineering and cutting-edge technology, this product sets a new standard for excellence in its category. Crafted with attention to detail and uncompromising quality, it seamlessly integrates functionality with style, offering a truly immersive experience like no other. Immerse yourself in a world of possibilities with this versatile solution.
                                </p>
                                <p className="mb-[10px] text-base text-stone-600">
                                    Whether you&apos;re a tech enthusiast, a professional, or someone in search of convenience, this product caters to all your needs. Its intuitive design and seamless performance make it the perfect companion for work, entertainment, and everything in between. Elevate your lifestyle with this game-changing product.
                                </p>
                                <p className="mb-[10px] text-base text-stone-600">
                                    Indulge in a symphony of innovation and elegance with this remarkable addition to your life. From its sleek design to its advanced features, every detail has been meticulously curated to offer a seamless fusion of style and performance. Embrace the future with confidence as you embark on a journey of discovery and delight with this exceptional product. Whether you&apos;re a discerning connoisseur or a trendsetter seeking the extraordinary, this product is designed to exceed your expectations and ignite your imagination.
                                </p>
                            </div>
                        )}
                        {activeTab === "shipping" && (
                            <div>
                                <h5 className="mb-[10px] text-lg">Cancellation Policy</h5>
                                <p className="mb-[10px] text-base text-stone-600">
                                    A. Cras auctor nisl non ornare pellentesque orci leo congue et vel pellentesque at amet quisque arcu purus tincidunt in lectus adipiscing phasellus
                                </p>
                                <ul className="my-5 pl-[30px] list-disc text-base text-stone-600">
                                    <li className="mb-[15px]">Erat in vitae pretium adipiscing convallis auctor lacus pharetra.</li>
                                    <li className="mb-[15px]">Orci arcu nisi nisl quisque fermentum vulputate vitae.</li>
                                    <li className="mb-[15px]">Cursus aliquet nunc faucibus mollis sed fusce fames consequat.</li>
                                </ul>
                                <h5 className="mb-[10px]">Shipping</h5>
                                <p className="mb-[10px] text-base text-stone-600">
                                    At senectus velit feugiat tortor est volutpat hendrerit orci. Tortor adipiscing proin orci euismod accumsan cursus felis morbi. Non dignissim sapien nec porttitor tellus. Eget feugiat sed sapien et. Faucibus sollicitudin tortor vestibulum tellus neque in turpis. Massa ipsum felis fermentum tortor mattis fermentum massa. Diam magna pharetra ipsum porta commodo tristique quam. Odio cras sed dis molestie vehicula amet. Non libero tortor tellus viverra viverra nulla amet aliquet. Dignissim aliquet magna vivamus et ac pellentesque. Nulla accumsan turpis vel convallis. Tellus pulvinar diam ultricies sed id sed aenean. Est enim commodo pharetra diam. Convallis leo neque faucibus et convallis vitae rhoncus.
                                </p>
                                <p className="mb-[10px] text-base text-stone-600">
                                    Odio porttitor eget ligula massa in risus fermentum fermentum enim. Feugiat euismod turpis sit massa sem pellentesque. Dapibus viverra in et vestibulum vulputate adipiscing lobortis rhoncus gravida. Leo quam cursus sit at amet augue ut et ut. Semper leo viverra in neque amet consectetur. Sagittis enim arcu lacus a feugiat in suspendisse. Eget non dui ultrices viverra sociis tortor. Lorem ullamcorper dignissim sed molestie duis cursus. Amet egestas enim ornare elit nascetur lectus porttitor.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductOverview
