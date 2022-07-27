const CartItem = ({removeFromCart,item})=>{
return <div className="cartPage">
            <div className="images">
                <img src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" />
            </div>
            <div className="product">
                <p>Women's Running Shoe</p>
                <h1>Nike Epic React Flyknit</h1>
                <h2>$150</h2>
            </div>
            <div className="buttons">
                <button onClick={()=> removeFromCart(item)}className="add">X</button>
            </div>
        </div>
    
}

export default CartItem