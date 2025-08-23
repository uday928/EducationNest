// What is AppContext used for?

// Global state management — instead of passing props from parent -> child -> grandchild, you create a context and put the shared data there.

// import { createContext } from "react";
import { AppContext } from "./AppContext";

// create context
// export const AppContext=createContext();

// provider component
export const AppContextProvider=(props)=>{
    const currency=import.meta.env.VITE_CURRENCY
    // to access currency var around whole website add it in value
    const value={
        currency
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};