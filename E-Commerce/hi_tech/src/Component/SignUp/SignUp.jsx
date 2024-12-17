// import React from 'react'

import { Link } from "react-router-dom"

function SignUp() {
    return (
        <>
            <section className="container mx-auto px-10">
                <div className="text-center py-[60px]">
                    <h1 className="text-5xl">Sign Up</h1>
                </div>
                <div className="mb-[150px]">
                    <div className="w-[100%] max-w-[400px] m-auto">
                        <form action="" className="align-middle">
                            <div className="flex flex-col gap-y-[30px]">
                                <div className="flex flex-col">
                                    <label htmlFor="Email" className="text-base mb-[6px]">Email</label>
                                    <input
                                        type="email"
                                        name="Email"
                                        className="text-[#333] border-b border-black pb-2"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="Name" className="text-base mb-[6px]">Name</label>
                                    <input
                                        type="text"
                                        className="text-[#333] border-b border-black pb-2"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="Password" className="text-base mb-[6px]">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="text-[#333] border-b border-black pb-2"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-[30px] flex flex-col">
                                <label htmlFor="" className="mb-[5px] space-x-2">
                                    <input type="checkbox" required />
                                    <span className="">
                                        By creating an account, I agree to this website&apos;s 
                                        <a href="" className="underline hover:no-underline inline-block">privacy policy</a>
                                        &nbsp;and&nbsp;
                                        <a href="" className="underline hover:no-underline inline-block">terms of service</a>
                                    </span>
                                </label>
                                <label htmlFor="" className="mb-[5px] space-x-2">
                                    <input type="checkbox" required />
                                    <span className="">I consent to receive marketing emails.</span>
                                </label>
                            </div>
                            <div className="mt-[30px] flex align-middle text-center justify-center w-[100%]">
                                <button className="py-3 px-[26px] text-sm border border-black w-[100%] rounded-full hover:bg-black hover:text-white transition-all duration-300">Sign Up</button>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Already have an account?</p>
                                <Link to="/login" className="underline hover:no-underline">Log In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp
