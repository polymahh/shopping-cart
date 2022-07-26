import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { cartArray } from '../../arrayContext'

const Header = ()=>{
    const {cartArr} = useContext(cartArray)
return (
    <div className="header">
        <h1>ShopyShop</h1>
        <nav>
            <ul>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/shop'>
                <li>Shop</li>
                </Link>
                <Link to='/shop/cart'>
                <li className='cart'>Cart {cartArr.length}</li>
                </Link>
                
            </ul>
        </nav>
    </div>
)
}

export default Header