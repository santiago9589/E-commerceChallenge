import React, { useState } from 'react'
import NavbarElement from './NavbarElement.components'
import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"

const NavbarComponent = () => {

    const [bar, setBar] = useState(["Collections", "Man", "Woman", "About", "Contact"])

    return (
        <nav className='flex justify-between items-center  border-b-2 border-slate-200 w-full p-2'>
            <section className='flex grow items-center'>
                <img src={logo} alt="logo" />
                <ul className='flex ml-12 items-center'>
                    {bar.map((bar) => {
                        return (
                            <NavbarElement name={bar} />
                        )
                    })}
                </ul>
            </section>
            <section className='flex items-center'>
                <img src={cart} alt="cart" className='w-4 h-4 mr-8' />
                <img src={avatar} alt="avatar" className='w-10 h-10' />
            </section>
        </nav>
    )
}

export default NavbarComponent