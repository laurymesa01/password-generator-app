"use client"

import { ChangeEvent, ChangeEventHandler, useState } from "react";
import Checkbox from "./Checkbox";
import Strength from "./Strength";
import { usePasswordContext } from "../context/Context";

export default function Details() {


    const { strength, countCheckedSwitch, length, setLength, generatePassword } = usePasswordContext();

    const handleLength = (event: ChangeEvent<HTMLInputElement>) => {
        setLength(Number(event.target.value));
    }

    return (
        <section className="bg-dark-grey w-full mt-6 p-2 sm:p-4">
            <div className="flex items-center justify-between">
                <p className="p text-almost-white">Character Length</p>
                <h1 className="heading-l text-neon-green">{length}</h1>
            </div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input onChange={handleLength} id="default-range" type="range" min="0" max="20"  step="1" defaultValue={0} className="w-full h-2 bg-very-dark-grey rounded-lg border-none cursor-pointer accent-neon-green"/>
            <ul className="space-y-2 mt-4">
                <li>
                    <Checkbox id="1" label="Include Uppercase Letters"/>
                </li>
                <li>
                    <Checkbox id="2" label="Include Lowercase Letters"/>
                </li>
                <li>
                    <Checkbox id="3" label="Include Numbers"/>
                </li>
                <li >
                    <Checkbox id="4" label="Include Symbols"/>
                </li>
            </ul>
            <Strength label={strength} countCheckedSwitch={countCheckedSwitch}/>
            <button className="button mt-6 flex items-center justify-center" onClick={() => generatePassword()}>
                {'Generate'.toUpperCase()}
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
                </svg>
            </button>
        </section>
    );
}