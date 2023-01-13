import React from 'react'


interface props{
    children:React.ReactNode
    classProps?:string
}

const NavbarContainerComponents = ({children,classProps}:props) => {
  return (
    <section className={`containerNavBar ${classProps}`}>
        {children}
    </section>
  )
}

export default NavbarContainerComponents