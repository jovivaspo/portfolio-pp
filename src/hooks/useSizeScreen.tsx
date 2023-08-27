import { useState, useEffect } from "react"

export const useSizeScreen = () => {
    const [size, setSize] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    },[])

    return {size}
}