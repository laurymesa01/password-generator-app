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
}

const PasswordContext = React.createContext<PasswordContextType | undefined>(undefined);

export default function PasswordProvider({ children }:{ children: React.ReactNode}) {

    const [password, setPassword ] = useState<string>('');
    const [includeUppercaseLetters, setIncludeUppercaseLetters ] = useState<boolean>(false);
    const [includeLowercaseLetters, setIncludeLowercaseLetters ] = useState<boolean>(false);
    const [includeNumbers, setIncludeNumbers ] = useState<boolean>(false);
    const [includeSymbols, setIncludeSymbols ] = useState<boolean>(false);
    const [strength, setStrength ] = useState<string>('too weak!');
    // const [checkboxes, setCheckboxes] = useState<Boolean[]>([
    //     includeUppercaseLetters, 
    //     includeLowercaseLetters, 
    //     includeNumbers, 
    //     includeSymbols
    // ]);

    const checkboxes = {
            includeUppercaseLetters: includeUppercaseLetters,
            includeLowercaseLetters: includeLowercaseLetters,
            includeNumbers: includeNumbers,
            includeSymbols: includeSymbols
    }

    const changeStrength = () => {
        let counter = 0;
        Object.entries(checkboxes).forEach(([key, value]) => {
            if (value) {
                counter ++;
            }
        });
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
            default:
                setStrength('too weak!')
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
            checkboxes
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