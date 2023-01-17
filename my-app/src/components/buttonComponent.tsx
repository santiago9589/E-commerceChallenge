import React from 'react'
import {motion} from "framer-motion"
import { varianstButton } from '../../motion'

interface props{
    title:string
    onClick:()=>void
}



const ButtonComponent = ({title,onClick}:props) => {
  return (
    <motion.button 
    variants={varianstButton}
    whileHover="hover"
    whileTap="tap"
    onClick={()=>{
      onClick()
    }} className='text-white font-bold capitalize bg-primary-500 p-2 w-full rounded-lg text-lg'>{title}</motion.button>
  )
}

export default ButtonComponent