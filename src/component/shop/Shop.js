import { useContext, useEffect, useState } from "react"
import Item from "../item/Item"
import { cartArray } from "../../arrayContext"

const Shop = ()=>{

const {cartArr,setCartArr} = useContext(cartArray)

const shopArray=[
    {
    name:'item1',
    price:'101$'
    },
    {
    name:'item2',
    price:'102$'
    },
    {
    name:'item3',
    price:'103$'
    },
    {
    name:'item4',
    price:'104$'
    },
]

// const [cartArray,setCartArray] = useState([])

// const addToCart = (val)=>{
//     setCartArray([...cartArray,val])
//     console.log(cartArray)
// }

const addToCart = (val)=>{
    setCartArr([...cartArr,val])
    console.log(cartArr)
}
return (
    <div className="shop">
        {shopArray.map((item,index)=><Item key={index} addToCart={addToCart} item={item}/>)}
    </div>
    )
}

export default Shop