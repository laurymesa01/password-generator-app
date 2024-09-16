import React, { ChangeEvent, ChangeEventHandler } from "react";
import { PasswordContext, usePasswordContext } from "../context/Context";

export interface CheckboxProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    id: string;
    label: string;
}

export default function Checkbox(props: CheckboxProps) {
    const {
        setIncludeUppercaseLetters,
        setIncludeLowercaseLetters,
        setIncludeNumbers,
        setIncludeSymbols,
        checkboxes,
        changeStrength
    } = usePasswordContext();

    const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        if (props.label.includes('Uppercase')) {
            setIncludeUppercaseLetters(event.target.checked)
            checkboxes.includeUppercaseLetters = event.target.checked

        }
        else if (props.label.includes('Lowercase')) {
            setIncludeLowercaseLetters(event.target.checked)
            checkboxes.includeLowercaseLetters = event.target.checked

        }
        else if (props.label.includes('Numbers')) {
            setIncludeNumbers(event.target.checked)
            checkboxes.includeNumbers = event.target.checked
        }
        else if (props.label.includes('Symbols')) {
            setIncludeSymbols(event.target.checked)
            checkboxes.includeSymbols = event.target.checked
        }
        else{}
        changeStrength();
    }


    return (
        <section className="flex items-center">
                    <input onChange={ handleCheckbox } type="checkbox" value="" className="checkbox peer"/>
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" className="absolute hidden peer-checked:block stroke-white outline-none pointer-events-none ml-0.5">
                        <path className="w-4 h-4" stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/>
                    </svg>
                    <label className="ms-2 p text-almost-white">{props.label}</label>
        </section>
    );
}