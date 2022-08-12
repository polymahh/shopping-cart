// import "./Item.css"

const Item = ({addToCart,item}) => {
    return <div className="container" data-testid="product">
  <div className="images">
    <img src={require( `../assets/${item.image}`)} />
  </div>
    
  <div className="product">
    <p>{item.category}</p>
    <h1>{item.name}</h1>
    <h2>{item.price}</h2>
    <p className="desc">{item.description}</p>
    <div className="buttons">
      <button onClick={()=> addToCart(item)}className="add">Add to Cart</button>
    </div>
  </div>
</div>
}

export default Item
