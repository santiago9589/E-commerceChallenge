// import { screen, render } from "@testing-library/react"
// import { AppContext, ContextProps } from "../context/AppContext"
// import React from "react"


// const PropsContext: ContextProps = {
//     state: {
//         cart: [{
//             name: "test1",
//             price: 2,
//             quantity: 2,
//             imgProduct: "test1",
//             id: "test1"
//         }],
//         productView: {
//             Provider: "Sneaker Company",
//             title: "Fall Limited Edition Sneakers",
//             priceOff: 0.5,
//             priceSell: 250,
//             description: "These low-profile sneakers are your perfect casual wear companion Featuring a durable rubber outer sole,they’ll withstand everything the weather can offer"
//         }
//     },
//     actions: {
//         handleCart: jest.fn(),
//         deleteCart: jest.fn(),
//         handleTotal: 0,
//         setCart: jest.fn()
//     }
// }

// const fakeProvider = ({ children }) => {
//     return (
//         <AppContext.Provider value={PropsContext}>
//             {children}
//         </AppContext.Provider>
//     )
// }