import { useMemo, useState } from "react"
import { Product } from "../../types/Product"

export const useCart = ():[Product[],React.Dispatch<React.SetStateAction<Product[]>>
,(newProduct: Product) => void,(Product: Product) => void,number]=>{

    const [cart, setCart] = useState<Product[]>([])

    const handleCart = (newProduct: Product) => {
        if (!newProduct) return
        setCart([...cart, newProduct])
    }

    const deleteCart = (Product: Product) => {
        if (!Product) return
       const draft = new Set<Product>(cart)
       if(draft.has(Product)){
         draft.delete(Product)
         setCart(Array.from(draft))
       }
    }

    const handleTotal = useMemo(()=>{
        let pricesTotal
        return  pricesTotal = cart.reduce((product,currentProduct):number=>{
            product = product + (currentProduct.price * currentProduct.quantity)
            return product
        },0)
    },[cart])

    return [cart,setCart,handleCart,deleteCart,handleTotal]
}