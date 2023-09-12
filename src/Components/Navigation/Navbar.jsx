import React, { useContext } from 'react'
import '../Navigation/Nav.css'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import home from '../Image/home (1).gif'
import log from '../Image/login.gif'
import cart from '../Image/shopping-cart.gif'
import { Shopcontext } from '../Contextprovider'

export const Navbar = () => {

  const { cartItem } = useContext(Shopcontext);


const itemCount = Object.values(cartItem).reduce((acc , quantity) => acc + quantity,0)
  return (
    <>
    <div className='Navbar'>
        <div className='head' ><h1>E-SHOP</h1></div>
        <div className='func'>
          <Link className='link' to='/'><img className='navhome' src={home} alt="" /></Link>
          {/* <Link className='link' to='/Products'>PRODUCTS</Link> */}
          <Link className='link' to='/cart'>

          <div className='countpop'>
          <img className='navhome' src={cart} alt="" />
             {itemCount > 0 && <span className='countcart'>{itemCount}</span>}
          </div>
           


          </Link>
          <Link className='spanlin' to='/'><img className='navhome' src={log} alt="" />
          <div className='dropdownnav1'>
          <Link to='/login'><span>LOG OUT</span> / <span>LOG in</span></Link>
      </div>
          </Link>
        </div>
    </div>
    <div className='category'>

      <Link className='spanlin' ><span className='spanlin' >MEN
      
      <div className='dropdownnav'>
        <h6>CLOTHS</h6>
        <Link className='linka' to='/products?category=shirt'><span>SHIRT</span></Link>
        <Link to='/products?category=pant'><span>PANT</span></Link>
        <Link to='/products?category=sheo'><span>SHEO</span></Link>
      </div>  
       
      </span></Link>
      <span className='spanlin'  >WOMEN
        
      <div className='dropdownnav'>
        <h6>CLOTHS</h6>
        <a href="">SHIRT</a>
        <a href="">PANT</a>
        <a href="">SHOE</a>
      </div>

      </span>
      <span className='spanlin' >KID
      <div className='dropdownnav'>
        <h6>CLOTHS</h6>
        <a href="">SHIRT</a>
        <a href="">PANT</a>
        <a href="">SHOE</a>
      </div>
      </span>
      <span className='spanlin' >GADGETS
      <div className='dropdownnav'>
        
        <a href="">WATCH</a>
        <a href="">BELT</a>
        <a href="">RINGS</a>
        <a href="">CHAINS</a>
      </div>
      </span>

    </div>
    </>
  )
}
