import React, { createContext, useState } from 'react'
import datas from '../product';

export const Shopcontext = createContext(null)

const getDefaultcart =()=>{
    let cart ={};
    for(let i=1 ; i<= datas.length+2;i++){
        cart[i]=0;
    }
    return cart;
}

export const Contextprovider = (props) => {
  const [cartItem,setCartitem] = useState(getDefaultcart());


  const getTotalAmount =()=>{
    let totalAmount = 0;
    for(const itemId in cartItem){
      if(cartItem[itemId]>0){
        let iteminfo = datas.find((item) => item.id === Number(itemId));
        totalAmount += cartItem[itemId] * iteminfo.price
      }
    }
    return totalAmount
  }

 const addTocart = (itemId) =>{
  setCartitem((prev) => ({...prev,[itemId]: prev[itemId] +1}))
 }

 const removeCount =(itemId) =>{
  setCartitem((prev) =>({...prev,[itemId]: prev[itemId]-1}))
 }

 const addQuantity = (newAmount,itemId) =>{
  setCartitem((prev) =>({...prev,[itemId]:newAmount}))
 }


 const deletItem =(itemId) =>{
  setCartitem((prev) =>({...prev,[itemId]: prev[itemId] - prev[itemId]}))
 }
 

//  const removeCartItem = (itemId) =>{
//   setCartitem ((Prev) =>{
//     const updateCart = {...Prev};
//     if(updateCart[itemId] >0){
//       delete updateCart[itemId];
//     }
//     return getDefaultcart(updateCart)
//   })
//  }

 const contextValue = {cartItem,addTocart,removeCount,setCartitem,addQuantity,deletItem,getTotalAmount}

  return <Shopcontext.Provider value={contextValue}>{props.children}</Shopcontext.Provider>
}
