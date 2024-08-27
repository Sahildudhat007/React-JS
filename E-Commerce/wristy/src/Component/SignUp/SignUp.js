import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div>
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-center pb-3 text-4xl leading-tight">
                            Sign Up
                        </h2>
                        <form action="#" method="POST" className="mt-8 bg-stone-100 p-5">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="text-sm text-gray-600">
                                        {' '}
                                        Email {' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-6 w-full border-b border-black bg-transparent py-2 text-sm placeholder:text-gray-400 outline-0 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="" className="text-sm text-gray-600">
                                        {' '}
                                        Name {' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-6 w-full border-b border-black bg-transparent py-2 text-sm placeholder:text-gray-400 outline-0 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="name"
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-sm text-gray-600">
                                            {' '}
                                            Password{' '}
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-6 w-full border-b border-black bg-transparent py-2 text-sm placeholder:text-gray-400 outline-0 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                        ></input>
                                    </div>
                                </div>
                                <div className='agreement-checkbox'>
                                    <label htmlFor="" className='w-checkbox pl-1 flex items-start'>
                                        <input type="checkbox" className='w-checkbox-input mt-[7px] mr-2' />
                                        <p className='w-form-label text-stone-700'>By creating an account, I agree to this website's  <a href="..." className='underline'>privacy policy</a> and <a href="..." className='underline'>terms of service</a></p>
                                    </label>
                                </div>
                                <div className='agreement-checkbox'>
                                    <label htmlFor="" className='w-checkbox pl-1 flex items-start'>
                                        <input type="checkbox" className='w-checkbox-input mt-[7px] mr-2' />
                                        <p className='w-form-label text-stone-700'>I consent to receive marketing emails.</p>
                                    </label>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex w-full text-sm items-center border justify-center bg-black px-3.5 py-2.5 mb-2 leading-7 text-white hover:bg-transparent hover:text-black hover:border hover:border-black"
                                    >
                                        Sign Up
                                    </button>
                                    <div className="flex items-center justify-between">
                                        <span htmlFor="" className="text-sm text-gray-600">
                                            Already have an account?
                                        </span>
                                        <Link to="/login" className="text-sm text-gray-600 underline hover:no-underline">
                                            Log In
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp
