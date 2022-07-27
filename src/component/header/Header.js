import { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { cartArray, visibleArray } from '../../arrayContext'

const Header = ()=>{
    const {cartArr} = useContext(cartArray)
    const {visibleArr,setVisibleArr} = useContext(visibleArray)

    

    const visibleTogle = ()=> {
        setVisibleArr(!visibleArr)
    }

    useEffect(()=>{
        const crt = document.querySelector(".cart")
        crt.addEventListener('click', visibleTogle)
        console.log(visibleArr)
        return ()=>{
            crt.removeEventListener('click',visibleTogle)
        }
    },[visibleArr])
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
                
                <li className='cart'>Cart {cartArr.length}</li>
                
                
            </ul>
        </nav>
    </div>
)
}

export default Header