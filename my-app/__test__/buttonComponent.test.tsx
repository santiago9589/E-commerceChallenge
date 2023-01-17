import {screen , render,cleanup,fireEvent} from "@testing-library/react"
import ButtonComponent from "../src/components/buttonComponent"
import React from "react"

const jestFn = jest.fn()

beforeEach(()=>{
    render(<ButtonComponent title="clickMe" onClick={jestFn}/>)
})

afterEach(()=>{
    cleanup()
})

describe("ButtonComponent",()=>{
    it("reenderiza correctamente",()=>{
        expect(screen.getByText(/clickme/i)).toBeInTheDocument()
    })

    it("Cuando se da click llama a la funcion",()=>{

        fireEvent.click(screen.getByText(/clickme/i))
        expect(jestFn).toHaveBeenCalledTimes(1)
    })
})