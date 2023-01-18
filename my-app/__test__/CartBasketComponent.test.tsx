import { screen, render, cleanup, fireEvent, waitFor } from "@testing-library/react"
import CartBaskComponent from "../src/components/CartBasketComponent"
import React from "react"
import { FakeProvider } from "./ProviderContainerTest"
import { ContextProps } from "../context/AppContext"

const handleCart = jest.fn()
const deleteCart = jest.fn()
const handleTotal = 125*2
const setCart = jest.fn()

const PropsContext:ContextProps= {
    state: {
        cart: [{
            name: "test1",
            price: 125,
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
        <CartBaskComponent />
    </FakeProvider>)
})

afterEach(() => {
    cleanup()
})

describe("CartBasketComponent", () => {
    it("reenderiza correctamente", () => {
        expect(screen.getByText(/test1/i)).toBeInTheDocument()
        expect(screen.getByText(/Checkout/i)).toBeInTheDocument()

    })

    it("click en el checkout debe llamar a la funcion", () => {

        const jsdomAlert = window.alert;
        window.alert = () => {}
        const checkoutElement = screen.getByText(/Checkout/i)
        fireEvent.click(checkoutElement)
        expect(setCart).toBeCalledTimes(1)
        window.alert = jsdomAlert;
    })

    it("se realiza el calculo del total de la comprar correctamente", () => {
        expect(screen.getByText("Total $ 250,00")).toBeInTheDocument()
    })

})