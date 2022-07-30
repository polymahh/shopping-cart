import { useEffect, useState } from "react"
const CartItem = ({removeFromCart,index,item,quantityHandler})=>{
    const [val,setVal] = useState(item.quantity)

    const inputHandler = (e)=>{
        setVal(e.target.value)
        
    }
return <div className="cartItem"  >
            <div className="small-image">
                <img src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" />
            </div>
            <div className="item-info">
                <p>Women's Running Shoe</p>
                <h1>Nike Epic React Flyknit</h1>
                <h2>$150</h2>
                <hr></hr>
                <div className="input">
                <label htmlFor="quantity">Quantity: </label>
                <input id={index} value={val} onChange={(e) => {inputHandler(e); quantityHandler(e)}} type="number" min="1" max="99"/>
                </div>
            </div>
            <div className="item-button">
                <button onClick={()=> removeFromCart(index)} className="remove" data-testid="deleteItem">X</button>
            </div>
        </div>
    
}

export default CartItem