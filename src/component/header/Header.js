import {  useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useArrayContext, useVisibleContext } from '../../arrayContext'

const Header = ()=>{
    
    const {cartArr} = useArrayContext()
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