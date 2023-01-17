import React, { useContext, useState } from 'react'
import NavbarElement from './NavbarElement.components'
import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"
import NavbarContainerComponents from './NavbarContainerComponents'
import CartBasketComponent from './CartBasketComponent'
import { useBar } from '../hooks/useBarItems'
import { AppContext } from '../../context/AppContext'
import { motion} from "framer-motion"
import {variants,variantsImage,variantsCart} from "../../motion"



const NavbarComponent = () => {

    const [barItem, setBarItem, bar] = useBar()
    const [isShow, setIsShow] = useState<boolean>(false)
    const { state } = useContext(AppContext)

    return (
        <nav className='flex justify-between items-center  border-b-2 border-slate-200 w-full p-2'>
            <NavbarContainerComponents>
                <img src={logo} alt="logo" />
                <ul className='hidden sm:flex sm:items-center sm:ml-12'>
                    {bar.map((bar, index) => {
                        return (
                            <NavbarElement key={index} name={bar} isSelected={barItem === bar} setSelected={setBarItem} />
                        )
                    })}
                </ul>
            </NavbarContainerComponents>
            <NavbarContainerComponents>
                <section>
                    {
                        state.cart.length ? (<motion.p initial="initial" animate="animate" variants={variants} className="absolute top-[2px] right-[70px] bg-primary-500 w-5 text-center rounded-lg text-white">{state.cart.length}</motion.p>) : (null)
                    }

                    <motion.img variants={variantsCart} whileHover="hover" onClick={() => { setIsShow(!isShow) }} src={cart} alt="cart" className='w-6 h-5 mr-2 sm:mr-8' />
                </section>
                <motion.img variants={variantsImage} whileHover="hover" src={avatar} alt="avatar" className='w-10 h-10' />
            </NavbarContainerComponents>
            {
                isShow ? (
                    <CartBasketComponent />
                ) : (
                    null
                )
            }
        </nav>
    )
}

export default NavbarComponent

