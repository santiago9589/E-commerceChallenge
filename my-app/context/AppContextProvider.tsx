import React, { useEffect, useState } from 'react'
import { api } from '../src/api/product'
import { Product } from '../types/Product'
import { ProductRequest } from '../types/ProductRequest'
import { AppContext, ContextProps } from "./AppContext"

interface props {
    children: React.ReactNode
}

const AppContextProvider = ({ children }: props) => {

    const [productView, setProductView] = useState<ProductRequest>({
        Provider: "",
        title: "",
        priceOff: 0,
        priceSell: 0,
        description: ""
    })
    const [cart, setCart] = useState<Product[]>([])

    const handleCart = (newProduct: Product) => {
        if (!newProduct) return
        setCart([...cart, newProduct])
    }

    useEffect(() => {
        api.getProduct().then((response) => {
            setProductView(response)
        })
    })

    const PropsContext: ContextProps = {
        state: {
            cart,
            productView
        },
        actions: {
            handleCart
        }
    }

    return (
        <AppContext.Provider value={PropsContext}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider