import React from 'react'

interface props{
    name:string
    isSelected:boolean
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

const NavbarElement = ({name,isSelected,setSelected}:props) => {
  return (
    <li onClick={()=>setSelected(name)} className={`px-2 font-light ${isSelected ? ("border-b-2 border-primary-500"):(null)}  `}>{name}</li>
  )
}

export default NavbarElement