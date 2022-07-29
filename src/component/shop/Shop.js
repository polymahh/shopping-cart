import { useEffect } from "react"
import Item from "../item/Item"
import { useArrayContext, useVisibleContext } from "../../arrayContext"
import CartItem from "../cartitem/CartItem"
import uniqid from "uniqid"

const Shop = ()=>{

const {cartArr,cartArrUp} = useArrayContext()
const {visibleArr} = useVisibleContext()




const shopArray=[
    {
    name:'item1',
    price:'101$',
    quantity:1
    },
    {
    name:'item2',
    price:'102$',
    quantity:1
    },
    {
    name:'item3',
    price:'103$',
    quantity:1
    },
    {
    name:'item4',
    price:'104$',
    quantity:1
    },
]

const themeStyle = {
        position:'fixed',
        backgroundColor: 'rgb(40 39 39 / 56%)',
        width : '100%',
        height : '100%',
        top:'0',
        display: visibleArr ? 'block' : 'none' 
    
}

useEffect(()=>{
    console.log(cartArr)
},[cartArr])



const addToCart = (val)=>{
    console.log(val)
    let item = cartArr.find(item => item.name === val.name)
    if(item){
        item.quantity = parseInt(item.quantity) + 1 
    }else {
        cartArrUp([...cartArr,val])
    }
    console.log(cartArr)
}

const quantityHandler = (e)=>{
    let index = e.target.id
    let newArr = cartArr
    newArr[index].quantity = e.target.value
    cartArrUp(newArr)
}

const removeFromCart = (index)=>{
    cartArr.splice(index,1)
    cartArrUp([...cartArr])
    console.log(cartArr)
}
return (<>
    <div className="shop" data-testid="shop">
        {shopArray.map((item,index)=><Item key={index} addToCart={addToCart} item={item}/>)}
    </div>

    <div  style={themeStyle}>
        <div className="cartPage">
            <h1 >Cart:</h1>
            {cartArr.map((item,index)=><CartItem key={uniqid()} index={index} quantityHandler={quantityHandler} removeFromCart={removeFromCart} item={item}/>)}
        </div>
    </div>
    </>
    )
}

export default Shop