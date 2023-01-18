import { useState } from "react"

export const useShow = ():[boolean,()=>void] =>{
    const [isShow, setIsShow] = useState<boolean>(false)

    const handleShow = ()=>{
        setIsShow(!isShow)
    }

    return [isShow,handleShow]
}