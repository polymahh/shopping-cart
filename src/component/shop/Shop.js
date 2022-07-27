import { useContext, useEffect } from "react"
import Item from "../item/Item"
import { cartArray, visibleArray } from "../../arrayContext"
import CartItem from "../cartitem/CartItem"

const Shop = ()=>{

const {cartArr,setCartArr} = useContext(cartArray)
const {visibleArr} = useContext(visibleArray)

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

const themeStyle = {
        position: 'fixed',
        backgroundColor: '#bd4242',
        width: '40%',
        height: '100%',
        right: '0%',
        top: '0',
        marginTop: '56px',
        display: visibleArr ? 'block' : 'none' 
    
}

useEffect(()=>{
    console.log(cartArr)
},[cartArr])
const addToCart = (val)=>{
    setCartArr([...cartArr,val])
    console.log(cartArr)
}

const removeFromCart = (item)=>{
    let index = cartArr.indexOf(item)
    console.log(index)
    setCartArr(cartArr.splice(index,1))
}
return (<>
    <div className="shop">
        {shopArray.map((item,index)=><Item key={index} addToCart={addToCart} item={item}/>)}
    </div>
    <div className="cartPage" style={themeStyle}>
        {cartArr.map((item,index)=><CartItem key={index} removeFromCart={removeFromCart} item={item}/>)}
        
    </div>
    </>
    )
}

export default Shop