import React, { createContext, useReducer, useEffect } from 'react'
import reducer from "./reducer"

export const NavDisplay = createContext();

const getLocalData = () => {
    let localData = localStorage.getItem("nav");
    if (localData === null) {
        return "false"
    }
    else {
        return localData;
    }

}

const initialState = {
    show: getLocalData(),
}


const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("nav", state.show);
    }, [state.show])


    const showNav = () => {
        dispatch({ type: "SET_SHOW_NAV" })
    }
    const hideNav = () => {
        dispatch({ type: "SET_HIDE_NAV" })
    }
    return (
        <NavDisplay.Provider value={{ ...state, showNav, hideNav }}>
            {children}
        </NavDisplay.Provider>
    )
}

export default Context