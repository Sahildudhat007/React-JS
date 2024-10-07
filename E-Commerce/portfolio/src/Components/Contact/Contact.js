import React from 'react'

function Contact() {
    return (
        <React.Fragment>
            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Contact Me</h2>
                    <form className="max-w-lg mx-auto bg-gray-50 p-8 shadow-md rounded">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input id="name" type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input id="email" type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                            <textarea id="message" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows="4"></textarea>
                        </div>
                        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">Send Message</button>
                    </form>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact
