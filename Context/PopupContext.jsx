import { useState, useContext, createContext } from "react";

const PopupContext = createContext({})

export function PopupContextFunction () {
    return (
        useContext(PopupContext)
    )
}

export function PopupContextProvider ({children}) {
    const [ popup, setPopup ] = useState(false)

    function openPopup () {
        setPopup(true)
    }

    function closePopup () {
        setPopup(false)
    }

    return (
        <PopupContext.Provider value={{ popup, openPopup, closePopup }}>
            {children}
        </PopupContext.Provider>
    )
}