import { useState, useContext, createContext } from "react";

const Popup2Context = createContext({})

export function Popup2ContextFunction () {
    return (
        useContext(Popup2Context)
    )
}

export function Popup2ContextProvider ({children}) {
    const [ modal, setModal ] = useState(false)

    function openModal () {
        setModal(true)
    }

    function closeModal () {
        setModal(false)
    }

    return (
        <Popup2Context.Provider value={{ modal, openModal, closeModal }}>
            {children}
        </Popup2Context.Provider>
    )
}