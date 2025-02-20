import React from 'react'
import PageHeading from '../../Components/PageHeading/PageHeading'

function Error() {
    return (
        <>
            <div>
                <PageHeading goBackLink='Home' pageTitle='404 Error' />
                <div className='container mx-auto py-12 px-3'>
                    <div className='md:px-3 text-center'>
                        <div className='md:px-3 lg:w-[50%] mx-auto'>
                            <i className='fa-solid fa-triangle-exclamation text-5xl lg:text-[5rem] text-[#FE5D37] mb-4 lg:mb-4'></i>
                            <h1 className='text-6xl lg:text-[5rem] font-bold text-[#103741] mb-3 md:mb-4' style={{ fontFamily: "Lobster Two, cursive" }}>404</h1>
                            <h1 className='mb-6 text-3xl md:text-[2.5rem] font-bold text-[#103741]' style={{ fontFamily: "Lobster Two, cursive" }}>Page Not Found</h1>
                            <p className='mb-6 text-base text-[#74787C]'>We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <a href="..." className='text-white text-base bg-[#FE5D37] font-medium rounded-full py-4 px-12 hover:opacity-90'>Go Back To Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error
