import {  useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useArrayContext, useVisibleContext } from '../../arrayContext'
import CartItem from "../cartitem/CartItem"
import uniqid from "uniqid"



const Header = ()=>{
    
    const {cartArr,cartArrUp} = useArrayContext()
    const {visibleArr,visibleUp} = useVisibleContext()

    

    const visibleTogle = ()=> {
        visibleUp()
    }

    useEffect(()=>{
        const crt = document.querySelector(".cart")
        crt.addEventListener('click', visibleTogle)
        console.log(visibleArr)
        return ()=>{
            crt.removeEventListener('click',visibleTogle)
        }
    },[visibleArr])

    const themeStyle = {
        position:'fixed',
        backgroundColor: 'rgb(40 39 39 / 56%)',
        width : '100%',
        height : '100%',
        top:'0',
        display: visibleArr ? 'block' : 'none',
        zIndex: '95'
    
}

const quantityHandler = (e)=>{
    let index = e.target.id
    let newArr = cartArr
    newArr[index].quantity = e.target.value
    cartArrUp(newArr)
}

const removeFromCart = (index)=>{
    const arr = cartArr
    arr.splice(index,1)
    cartArrUp([...arr])
    console.log(cartArr)
}

return (
    <>
    <div className="header">
        <h1>ShopyShop</h1>
        <nav>
            <ul>
                <Link to='/'>
                <li data-testid ='nav'>Home</li>
                </Link>
                <Link to='/shop'>
                <li data-testid ='nav'>Shop</li>
                </Link>
                <li data-testid ='nav' className='cart'>Cart {cartArr.length}</li>
                
            </ul>
        </nav>
    </div>
    
    <div data-testid='cart' style={themeStyle}>
        <div className="cartPage">
            <h1 >Cart:</h1>
            {cartArr.map((item,index)=><CartItem key={uniqid()} index={index} quantityHandler={quantityHandler} removeFromCart={removeFromCart} item={item}/>)}
        </div>
    </div>
    </>
)
}

export default Header