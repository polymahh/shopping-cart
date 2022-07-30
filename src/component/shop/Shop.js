import { useEffect } from "react"
import Item from "../item/Item"
import { useArrayContext, useVisibleContext } from "../../arrayContext"

const Shop = ()=>{

const {cartArr,cartArrUp} = useArrayContext()




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


return (<>
    <div className="shop" data-testid="shop">
        {shopArray.map((item,index)=><Item key={index} addToCart={addToCart} item={item}/>)}
    </div>

    
    </>
    )
}

export default Shop