
function Footer() {
    return (
        <>
            <section className="bg-black">
                <footer>
                    <div className="container mx-auto px-5 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 py-14 gap-5">
                            <div className="col-span-1">
                                <div className="space-y-2 md:space-y-5 grid grid-cols-2 md:grid-cols-1">
                                    <div>
                                        <p className="text-white pb-1">Where abouts</p>
                                        <p className="text-neutral-400 text-sm">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                    </div>
                                    <div>
                                        <p className="text-white pb-1">Mailbox</p>
                                        <a href="mailto:hello@example.io" className="text-neutral-400 text-sm">hello@example.io</a>
                                    </div>
                                    <div>
                                        <p className="text-white pb-1">Contact</p>
                                        <a href="tel:(808)555-0111" className="text-neutral-400 text-sm">(808) 555-0111</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="grid grid-cols-2 md:grid-cols-4">
                                    <div className="">
                                        <div className="text-white pb-3">
                                            <p>Pages</p>
                                        </div>
                                        <div className="text-neutral-400 text-sm flex flex-col space-y-3">
                                            <a href="">About us</a>
                                            <a href="">Categories</a>
                                            <a href="">Shop</a>
                                            <a href="">Contact us</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white pb-3">
                                            <p>Resource</p>
                                        </div>
                                        <div className="text-neutral-400 text-sm flex flex-col space-y-3">
                                            <a href="">Blogs</a>
                                            <a href="">FAQ</a>
                                            <a href="">Reviews</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white pb-3">
                                            <p>Utilities</p>
                                        </div>
                                        <div className="text-neutral-400 text-sm flex flex-col space-y-3">
                                            <a href="">Style</a>
                                            <a href="">Guide</a>
                                            <a href="">Error 404</a>
                                            <a href="">Changelog</a>
                                            <a href="">Return</a>
                                            <a href="">Policy</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white pb-3">
                                            <p>Connected</p>
                                        </div>
                                        <div className="text-neutral-400 text-sm flex flex-col space-y-3">
                                            <a href="">Instagram</a>
                                            <a href="">Facebook</a>
                                            <a href="">YouTube</a>
                                            <a href="">Twitter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1    ">
                                <div className="text-white pb-3">
                                    <p>Connected</p>
                                </div>
                                <form className="text-neutral-400 text-sm flex flex-col space-y-3">
                                    <input type="text" maxLength={256} placeholder="Enter your name" className="bg-transparent border border-gray-600 px-6 py-2" />
                                    <input type="email" maxLength={256} placeholder="Enter email" className="bg-transparent border border-gray-600 px-6 py-2" />
                                    <button className="border border-gray-600 px-6 py-2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-10 py-5 border-t border-gray-600">
                        <div className="flex justify-between flex-wrap lg:flex-nowrap">
                            <p className="text-neutral-400 text-sm">© 2024 HiTech. All rights reserved.</p>
                            <div className="flex items-center space-x-2">
                                <a href="/" className="text-neutral-400 hover:text-white text-sm">Privacy Policy</a>
                                <div className="w-2 h-2 bg-neutral-700 rounded-full"></div>
                                <a href="/" className="text-neutral-400 hover:text-white text-sm">Terms & Conditions</a>
                            </div>
                            <p className="text-neutral-400 text-sm mt-2 lg:mt-0 flex-wrap">Designed by
                                <a href="/" className="text-neutral-400 hover:text-white ml-1 text-sm">Nixar</a>
                                . Powered by
                                <a href="/" className="text-neutral-400 hover:text-white ml-1 text-sm">Webflow</a>
                                .
                            </p>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Footer
