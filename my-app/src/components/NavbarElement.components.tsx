import React from 'react'

interface props{
    name:string
}

const NavbarElement = ({name}:props) => {
  return (
    <li className='px-2 font-light'>{name}</li>
  )
}

export default NavbarElement