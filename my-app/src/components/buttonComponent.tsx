import React from 'react'
import { Product } from '../../types/Product'

interface props{
    title:string
    onClick:()=>void
}

const ButtonComponent = ({title,onClick}:props) => {
  return (
    <button onClick={()=>{
      onClick()
    }} className='text-white font-bold capitalize bg-primary-500 p-2 w-full rounded-lg text-lg'>{title}</button>
  )
}

export default ButtonComponent