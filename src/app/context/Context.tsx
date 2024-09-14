"use client"

import React, { ChangeEvent, useContext } from "react";
import { useState } from "react";

interface PasswordContextType {
    password: string,
    setPassword: (password: string) => void,
    includeUppercaseLetters: boolean,
    setIncludeUppercaseLetters: (includeUppercaseLetters: boolean) => void,
    includeLowercaseLetters: boolean,
    setIncludeLowercaseLetters: (includeLowercaseLetters: boolean) => void,
    includeNumbers: boolean,
    setIncludeNumbers: (includeNumbers: boolean) => void,
    includeSymbols: boolean,
    setIncludeSymbols: (includeNumbers: boolean) => void,
    strength: string,
    setStrength: (strength: string) => void,
    changeStrength: any,
    checkboxes: any
    countCheckedSwitch: any
}

const PasswordContext = React.createContext<PasswordContextType | undefined>(undefined);

export default function PasswordProvider({ children }:{ children: React.ReactNode}) {

    const [password, setPassword ] = useState<string>('');
    const [includeUppercaseLetters, setIncludeUppercaseLetters ] = useState<boolean>(false);
    const [includeLowercaseLetters, setIncludeLowercaseLetters ] = useState<boolean>(false);
    const [includeNumbers, setIncludeNumbers ] = useState<boolean>(false);
    const [includeSymbols, setIncludeSymbols ] = useState<boolean>(false);
    const [strength, setStrength ] = useState<string>('');

    const checkboxes = {
            includeUppercaseLetters: includeUppercaseLetters,
            includeLowercaseLetters: includeLowercaseLetters,
            includeNumbers: includeNumbers,
            includeSymbols: includeSymbols
    }

    const countCheckedSwitch = () => {
        return Object.values(checkboxes).filter((isChecked) => isChecked).length;
    };
    
    const changeStrength = () => {
        let counter = countCheckedSwitch();
        // Object.entries(checkboxes).forEach(([key, value]) => {
        //     if (value) {
        //         counter ++;
        //     }
        // });
        switch (counter) {
            case 4:
                setStrength('strong')
                break;
            case 3:
                setStrength('medium')
                break;
            case 2:
                setStrength('weak')
                break;
            case 1:
                setStrength('too weak!')
                break;
            default:
                setStrength('')
                break;
        }
    }

    return (
        <PasswordContext.Provider value={{
            password,
            setPassword,
            includeUppercaseLetters,
            setIncludeUppercaseLetters,
            includeLowercaseLetters,
            setIncludeLowercaseLetters,
            includeNumbers,
            setIncludeNumbers,
            includeSymbols,
            setIncludeSymbols,
            strength,
            setStrength,
            changeStrength,
            checkboxes,
            countCheckedSwitch
        }}>
            { children }
        </PasswordContext.Provider>
    );
}

export function usePasswordContext() {
    const context = useContext(PasswordContext);

    if(!context){
        throw new Error("Error");
    }

    return context;
}

export {PasswordContext}