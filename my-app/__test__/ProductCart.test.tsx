import { screen, render, cleanup, fireEvent } from "@testing-library/react"
import ProductCart from "../src/components/ProductCart"
import React from "react"
import { FakeProvider } from "./ProviderContainerTest"
import { ContextProps } from "../context/AppContext"

const handleCart = jest.fn()
const deleteCart = jest.fn()
const handleTotal = 0
const setCart = jest.fn()

const PropsContext: ContextProps = {
    state: {
        cart: [{
            name: "test1",
            price: 2,
            quantity: 2,
            imgProduct: "test1",
            id: "test1"
        }],
        productView: {
            Provider: "Sneaker Company",
            title: "Fall Limited Edition Sneakers",
            priceOff: 0.5,
            priceSell: 250,
            description: "These low-profile sneakers are your perfect casual wear companion Featuring a durable rubber outer sole,they’ll withstand everything the weather can offer"
        }
    },
    actions: {
        handleCart,
        deleteCart,
        handleTotal,
        setCart
    }
}



beforeEach(() => {
    render(<FakeProvider PropsContext={PropsContext}>
        <ProductCart product={{
            name: "test1",
            price: 2,
            quantity: 2,
            imgProduct: "test1",
            id: "test1"
        }} />
    </FakeProvider>)
})

afterEach(() => {
    cleanup()
})

describe("ButtonComponent", () => {
    it("reenderiza correctamente", () => {
        expect(screen.getByText(/test1/i)).toBeInTheDocument()
    })

    it("click en el icono debe llamar a la funcion", () => {

        const deleteIconElement = screen.getByRole("img", { name: "delete.icon" })
        fireEvent.click(deleteIconElement)
        expect(deleteCart).toBeCalledTimes(1)
    })

    it("se realiza el calculo correctamente", () => {
        expect(screen.getByText(/4/i)).toBeInTheDocument()
    })

})