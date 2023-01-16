import { useEffect, useState } from "react"
import { ProductRequest } from "../../types/ProductRequest"
import { api } from "../api/product"

export const useProductView = ():[ProductRequest,React.Dispatch<React.SetStateAction<ProductRequest>>] =>{

    const [productView, setProductView] = useState<ProductRequest>({
        Provider: "",
        title: "",
        priceOff: 0,
        priceSell: 0,
        description: ""
    })

    useEffect(() => {
        api.getProduct().then((response) => {
            setProductView(response)
        })
    })

    return [productView,setProductView]
}