import React, { useContext } from 'react'
import datas from '../product'
import { Shopcontext } from './Contextprovider'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'
import { Navbar } from './Navigation/Navbar'


export const Cart = () => {
   
    const {cartItem,getTotalAmount}=useContext(Shopcontext)
     const showAmount = getTotalAmount();
     console.log(cartItem); 

     const deliVery = 50;
     const allAmount = showAmount + deliVery;
     
  return (
    <>
    <Navbar/>
    <div className='Cart'>

      <div className='cartdiv'>
        <div className='show'>
        {datas.map((product) =>{
          if(cartItem[product.id] !==0){
            return <CartItem data={product} key={product.id}/>
          }
        })}
        </div>
        {showAmount > 0 ?(
        <div className='totalamt'>
          <h5>Price Details:</h5>
          <div className='orderlist'>
          <h6>Total Product Price     :    +₹{showAmount}</h6>
          <h6>Delivery Fee : ₹50</h6>
          </div>
          <h5>Total Bill : ₹{allAmount}</h5>
          
          <div className='orderbtns'>
           <Link to='/Products'><button>Shop More</button></Link> 
           <Link to='/login'><button>Continue</button></Link> 
          </div>
        </div>
        ) : (<h2>Your cart is empty</h2>)}
        
      </div>
    </div>
    </>
  )
}
