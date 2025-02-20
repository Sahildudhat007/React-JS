import React from 'react'
import { Link } from 'react-router-dom'

// css 
import './pageHeading.css'

function PageHeading({ pageTitle = 'pageTitle', goBackLink }) {
    return (
        <>
            <div className='mt-[4.5rem]'>
                <div className='container mx-auto py-12 px-3 mb-12 relative page-header'>
                    <div className='top-img'></div>
                    <div className='py-12 px-3'>
                        <h1 className='mb-6 text-5xl lg:text-7xl text-white font-bold' style={{ fontFamily: "'Lobster Two', cursive" }}>{pageTitle}</h1>
                        <ul className="tp-breadcrumb-link flex items-center mb-2.5 space-x-2 text-white">
                            <li><Link to="/" className="breadcrumb-item transition-all flex items-center justify-center text-[#FE5D37]">{goBackLink}<span className='ml-2'>/</span></Link></li>
                            <li><Link to="/" className="breadcrumb-item transition-all flex items-center justify-center text-[#FE5D37]">Pages<span className='ml-2'>/</span></Link></li>
                            <li><p className="PgTitle-text flex items-center justify-center">{pageTitle}</p></li>
                        </ul>
                    </div>
                    <div className='bottom-img'></div>
                </div>
            </div>
        </>
    )
}

export default PageHeading
