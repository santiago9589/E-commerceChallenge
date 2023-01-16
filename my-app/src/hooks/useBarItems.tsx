import { useState } from "react"

export const useBar = (): [string, React.Dispatch<React.SetStateAction<string>>,string[]] => {
    const [bar, setBar] = useState<string[]>(["Collections", "Man", "Woman", "About", "Contact"])
    const [barItem, setBarItem] = useState<string>(bar[0])

    return [barItem,setBarItem,bar]
}