import { ProductRequest } from "../../types/ProductRequest"

const product: ProductRequest = {
    Provider: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    priceOff: 0.5,
    priceSell: 250,
    description: "These low-profile sneakers are your perfect casual wear companion Featuring a durable rubber outer sole,they’ll withstand everything the weather can offer"
}

export const api = {
    getProduct: async (): Promise<ProductRequest> => {
        return product
    }
}