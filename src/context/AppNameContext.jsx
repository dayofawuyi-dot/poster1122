import { Children, createContext } from "react";



export const AppNameContext = createContext();

// 2. crete provider: a provider is a super component that can provide any component that are its children with whatever he has
export const AppNameProvider = ({children}) => {
    const appName = "Invento App";
    // provide a state
    // update state
    // crud methods
    return (<AppNameContext.Provider value={{appName}}>
             {children}
    </AppNameContext.Provider>
    )
}