import { type } from "@testing-library/user-event/dist/type";
import React, {useState, useEffect, createContext} from "react";


const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage){
        const storedPrefs = window.localStorage.getItem('colot-theme')
        if (typeof storedPrefs === 'string'){
            return storedPrefs
        }


        const userMedia = window.matchMedia ('(prefers-color-scheme: dark)')
        if (userMedia.matches) {
            return 'dark'
        }
    }
    return 'light'
}


export const ThemeContext = createContext()

export const ThemeProvider = ({getInitialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)


    const rawSetTheme = (theme) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark'

        root.classList.remove(isdark ? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme', theme)
    }

    if(initialTheme) {
        rawSetTheme(initialTheme)
    }


    useEffect(() =>{
        rawSetTheme(theme)
    },[theme])

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}















