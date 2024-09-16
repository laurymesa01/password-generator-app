"use client"

import { usePasswordContext } from "../context/Context";
import '../styles/password.css';

export default function Password() {
    const { password,  
            generatePassword,
            copyToClipboard,
            message } = usePasswordContext();


    return (
        <section className="w-full">
            <h2 className="heading-m text-grey text-center">Password Generator</h2>
            <form className="w-full mx-auto mt-8">   
                <label form="default-search" className="mb-2 text-sm font-medium  sr-only dark:text-white">Search</label>
                <div className="relative cursor-pointer">
                    <input  type="text" 
                            className="block w-full ps-3 input" 
                            placeholder="P4$5W0rD!" 
                            required 
                            disabled
                            value={password}/>
                    {message && <span className="absolute bottom-3.5 end-11 text-neon-green">{'copied'.toUpperCase()}</span> }        
                    <button type="button" 
                            className="absolute end-2.5 bottom-3.5 text-dark-grey"
                            onClick={() => copyToClipboard()}>
                                l
                        <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="#A4FFAF"/>
                        </svg>
                    </button>
                </div>
            </form>
        </section>
    );
}