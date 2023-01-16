import React from 'react'
import { useCart } from '../src/hooks/useCart'
import { useProductView } from '../src/hooks/useProductView'
import { AppContext, ContextProps } from "./AppContext"

interface props {
    children: React.ReactNode
}

const AppContextProvider = ({ children }: props) => {

    
    const [productView,setProductView] = useProductView()

    const [cart,setCart,handleCart,deleteCart,handleTotal] = useCart()
  

    const PropsContext: ContextProps = {
        state: {
            cart,
            productView
        },
        actions: {
            handleCart,
            deleteCart,
            handleTotal,
            setCart
        }
    }

    return (
        <AppContext.Provider value={PropsContext}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider