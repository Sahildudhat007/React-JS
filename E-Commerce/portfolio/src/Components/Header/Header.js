import React from 'react'

function Header() {
    return (
        <React.Fragment>
            <header className="bg-white shadow-md fixed w-full z-10">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="text-xl font-bold">Sahil Dudhat</div>
                    <nav className="space-x-4">
                        <a href="#aboutUs" className="text-gray-600 hover:text-gray-900">About Us</a>
                        <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
