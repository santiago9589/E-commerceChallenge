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
        deleteCart:(Product:Product)=>void
        handleTotal: number
        setCart:React.Dispatch<React.SetStateAction<Product[]>>
    }
}

export const AppContext = createContext<ContextProps>({} as ContextProps)