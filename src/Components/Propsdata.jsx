import React from 'react'
import { Link } from 'react-router-dom';


export const Propsdata = (props) => {
   
    const {id,name,price,image,category,brand,image2} = props.data;
     
  return (
    <div className='datacard'>
      <div className='hovimg'>
        <img className='hovim1' src={image} alt="" />
        {/* <img className='hovim2'  src={image2} alt="" /> */}
        </div>
        <div className='descrip'>
        <span className='span1'>{name}</span>
        <span className='span2'>{brand}</span>
        <span className='span3'> ₹{price}</span>
        </div>
        <Link className='btnmore' to={`/productDetails/${id}`}><button className='btnmore'>MORE INFO</button></Link>
    </div>
  )
}
