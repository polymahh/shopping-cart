import { useEffect } from "react"
import Item from "../item/Item"
import { useArrayContext, useVisibleContext } from "../../arrayContext"

const Shop = ()=>{

const {cartArr,cartArrUp} = useArrayContext()




const shopArray=[
    {
        category:'Babies',
        image:'spoon_bottle.jpg',
        name:'Spoon Bottle',
        price:'15$',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        quantity:1
    },
    {
        category:'Outdoors',
        image:'stroller.jpg',
        name:'Baby Stroller',
        price:'204$',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        quantity:1
    },
    {
        category:'Outdoors',
        image:'kids_tricycle.jpg',
        name:'Kids Tricycle',
        price:'99.99$',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        quantity:1
    },
    {
        category:'Summer Toys',
        image:'Floaty_Car.jpg',
        name:'Floaty Car',
        price:'25$',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        quantity:1
    },
    {
        category:'Outdoors',
        image:'Foldable_Bag.webp',
        name:'Foldable Bag',
        price:'35$',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
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


return (
<>
    <div className="contain">

    <div className="shop" data-testid="shop">
        {shopArray.map((item,index)=><Item key={index} addToCart={addToCart} item={item}/>)}
    </div>
    </div>

    
    </>
    )
}

export default Shop