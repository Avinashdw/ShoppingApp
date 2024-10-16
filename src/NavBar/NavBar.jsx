import React from 'react'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='nav-bar'>
        <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li><Link to='/' style={{textDecoration:'none'}}>Shop</Link></li>
            <li><Link to='/mens' style={{textDecoration:'none'}}>Men</Link></li>
            <li><Link to='/womens' style={{textDecoration:'none'}}>Women</Link></li>
            <li><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link></li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
           <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
export default NavBar