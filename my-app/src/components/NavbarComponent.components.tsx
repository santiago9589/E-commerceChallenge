import React, { useContext, useState } from 'react'
import NavbarElement from './NavbarElement.components'
import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"
import NavbarContainerComponents from './NavbarContainerComponents'
import CartBasketComponent from './CartBasketComponent'
import { useBar } from '../hooks/useBarItems'
import { AppContext } from '../../context/AppContext'

const NavbarComponent = () => {

    const [barItem, setBarItem, bar] = useBar()
    const [isShow, setIsShow] = useState<boolean>(false)
    const {state} = useContext(AppContext)
    
    return (
        <nav className='flex justify-between items-center  border-b-2 border-slate-200 w-full p-2'>
            <NavbarContainerComponents classProps='grow'>
                <img src={logo} alt="logo" />
                <ul className='containerNavBar ml-12'>
                    {bar.map((bar,index) => {
                        return (
                            <NavbarElement key={index}  name={bar} isSelected={barItem === bar} setSelected={setBarItem} />
                        )
                    })}
                </ul>
            </NavbarContainerComponents>
            <NavbarContainerComponents>
                <section>
                    {
                       state.cart.length ? (<p className="absolute top-[2px] right-[70px] bg-primary-500 w-5 text-center rounded-lg text-white">{state.cart.length}</p>) : (null) 
                    }
                    
                    <img onClick={() => { setIsShow(!isShow) }} src={cart} alt="cart" className='w-6 h-5 mr-8' />
                </section>
                <img src={avatar} alt="avatar" className='w-10 h-10' />
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

