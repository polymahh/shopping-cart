import { useState, createContext, useContext } from "react";

export const arrayContext = createContext()
export const visibleContext = createContext()

export const ArrayProvider = ({children}) => {
    const [cartArr,setCartArr] = useState([])
    const [visibleArr,setVisibleArr] = useState(false)

    const cartArrUp = (arr) => {
        setCartArr(arr)
    }
    const visibleUp = () => {
        setVisibleArr(!visibleArr)
    }
    
    return (
    <arrayContext.Provider value={{cartArr,cartArrUp}}>
        <visibleContext.Provider value={{visibleArr,visibleUp}}>
        {children}
        </visibleContext.Provider>
    </arrayContext.Provider>
    )
}

export const useArrayContext = ()=> useContext(arrayContext)
export const useVisibleContext = ()=> useContext(visibleContext)