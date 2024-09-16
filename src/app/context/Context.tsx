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
    countCheckedSwitch: any,
    generatePassword: any,
    length: number,
    setLength: (length: number) => void,
    copyToClipboard: any,
    message: boolean
}

const PasswordContext = React.createContext<PasswordContextType | undefined>(undefined);

export default function PasswordProvider({ children }:{ children: React.ReactNode}) {

    const [password, setPassword ] = useState<string>('PTx1f5DaFX');
    const [includeUppercaseLetters, setIncludeUppercaseLetters ] = useState<boolean>(false);
    const [includeLowercaseLetters, setIncludeLowercaseLetters ] = useState<boolean>(false);
    const [includeNumbers, setIncludeNumbers ] = useState<boolean>(false);
    const [includeSymbols, setIncludeSymbols ] = useState<boolean>(false);
    const [strength, setStrength ] = useState<string>('');
    const [length, setLength] = useState<number>(0);
    const [message, setMessage] = useState<boolean>(false);

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

    const generatePassword = () => {
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

        let allChars = "";
        if (includeUppercaseLetters) allChars += uppercaseChars;
        if (includeLowercaseLetters) allChars += lowercaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;
        if (allChars === "") {
            alert("Please select at least one character type.");
            return;
        }
        let generatedPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }
        setPassword(generatedPassword);
        setMessage(false)
    }

    const copyToClipboard = (): void => {
        navigator.clipboard.writeText(password).then(
            () => {
                setMessage(true);
            },
            (err) => {
                // alert("Failed to copy password to clipboard.");
            }
        );
    };

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
            length,
            setLength,
            changeStrength,
            checkboxes,
            countCheckedSwitch,
            generatePassword,
            copyToClipboard,
            message
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