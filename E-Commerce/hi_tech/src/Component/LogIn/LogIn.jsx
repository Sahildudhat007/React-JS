// import React from 'react'

import { Link } from "react-router-dom"

function SignUp() {
    return (
        <>
            <section className="container mx-auto px-10">
                <div className="text-center py-[60px]">
                    <h1 className="text-5xl">Log In</h1>
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
                                    <label htmlFor="Password" className="text-base mb-[6px]">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="text-[#333] border-b border-black pb-2"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-[30px] flex align-middle text-center justify-center w-[100%]">
                                <button className="py-3 px-[26px] text-sm border border-black w-[100%] rounded-full hover:bg-black hover:text-white transition-all duration-300">Log In</button>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Don&apos;t have an account?</p>
                                <Link to="/signUp" className="underline hover:no-underline">Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp
