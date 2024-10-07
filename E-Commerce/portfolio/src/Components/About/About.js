import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div id="aboutUs" className="bg-gray-100 py-20 px-4">
                <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between">
                    {/* Text Section */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800">
                            About Us
                        </h2>
                        <p className="mt-4 text-gray-600">
                            We are passionate about building exceptional web solutions that help businesses thrive online.
                            With a team of talented developers, designers, and strategists, we craft innovative digital products
                            that provide lasting value. Our mission is to combine cutting-edge technology with creative vision
                            to deliver an unmatched user experience.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Whether you are a startup, a small business, or a large enterprise, we have the expertise to
                            bring your vision to life. Let's build something amazing together!
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src="https://via.placeholder.com/400x400"
                            alt="About us"
                            className="w-full max-w-sm rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About
