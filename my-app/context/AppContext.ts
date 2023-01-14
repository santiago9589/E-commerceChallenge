import { createContext } from "react"
import {Product} from "../types/Product"
import { ProductRequest } from "../types/ProductRequest"

export interface ContextProps{
    state:{
        cart:Product[]
        productView: ProductRequest
    },
    actions:{
        handleCart:(newProduct:Product)=>void
    }
}

export const AppContext = createContext<ContextProps>({} as ContextProps)