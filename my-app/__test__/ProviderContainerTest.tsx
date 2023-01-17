import React from "react"
import { AppContext} from "../context/AppContext"


export const FakeProvider = ({ children,PropsContext }) => {
    return (
        <AppContext.Provider value={PropsContext}>
            {children}
        </AppContext.Provider>
    )
}




