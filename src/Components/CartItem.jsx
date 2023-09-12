import React, { useContext } from 'react'
import Remove from './Image/remove (1).png'
import { Shopcontext } from './Contextprovider';
import datas from '../product';

export const CartItem = (props) => {
    
    const {cartItem,addTocart,deletItem,removeCount} = useContext(Shopcontext)
    const {id,image,name,price,brand} = props.data;

    

  return (
    <div className='CartItem'>
        <img className='cartimg' src={image} alt="" />
        <div className='contentdiv'>
        <div className='pricede'>
          <h6>{name}</h6>
         {/* <label htmlFor="">Brand : {brand}</label>  */}
        <h6>Price : ₹{price}</h6>
        <div className='count'>
          <h6>Quantity :</h6><button onClick={() =>addTocart(id)}>+</button>
          <span >{cartItem[id]}</span>
          <button onClick={()=> removeCount(id)}>-</button>
        </div>
        
        </div>
        <img className='removeicon' onClick={()=> deletItem(id)} src={Remove} alt="" />
        </div>
    </div>
  )
}
 