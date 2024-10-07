import React from 'react'

function Hero() {
    return (
        <React.Fragment>
            <section className="bg-white text-center py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Hi, I'm Sahil Dudhat</h1>
                <p className="text-gray-600 text-lg">I'm a Frontend Developer.</p>
                <div className='space-x-2'>
                    <a href="#projects" className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">See My Work</a>
                    <a href="..." className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Download CV</a>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Hero
