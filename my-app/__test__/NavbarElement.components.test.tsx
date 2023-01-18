import {screen , render,cleanup,fireEvent} from "@testing-library/react"
import NavbarElement from "../src/components/NavbarElement.components"
import React from "react"

const jestFn = jest.fn()

beforeEach(()=>{
    
})

afterEach(()=>{
    cleanup()
})

describe("Navbar Element",()=>{
    it("reenderiza correctamente",()=>{
        render(<NavbarElement name="element" setSelected={jestFn} isSelected={true}/>)
        expect(screen.getByText(/element/i)).toBeInTheDocument()
    })

    it("Cuando se da click llama a la funcion",()=>{
        render(<NavbarElement name="element" setSelected={jestFn} isSelected={true}/>)
        fireEvent.click(screen.getByText(/element/i))
        expect(jestFn).toHaveBeenCalledTimes(1)
    })

    it("cuando esta seleccionado tiene la clase el claseName de selected",()=>{
        render(<NavbarElement name="element" setSelected={jestFn} isSelected={true}/>)
        expect(screen.getByText(/element/i)).toHaveClass("border-b-2 border-primary-500")
    })

    it("cuando no esta seleccionado no tiene la clase el claseName de selected",()=>{
        render(<NavbarElement name="element" setSelected={jestFn} isSelected={false}/>)
        expect(screen.getByText(/element/i)).not.toHaveClass("border-b-2 border-primary-500")
    })
})