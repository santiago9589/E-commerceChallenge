import React from 'react'
import { Product } from '../../types/Product'

interface props{
    title:string
    handleButton?:(Product:Product)=>void
    onClick?:()=>void
}

const ButtonComponent = ({title,handleButton}:props) => {
  return (
    <button onClick={()=>{
      
    }} className='text-white font-bold capitalize bg-primary-500 p-2 w-full rounded-lg text-lg'>{title}</button>
  )
}

export default ButtonComponent