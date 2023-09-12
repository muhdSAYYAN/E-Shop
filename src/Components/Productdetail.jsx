import React, { useContext, useEffect, useState } from 'react'
import datas from '../product'
import { Link, useParams } from 'react-router-dom'
import { Shopcontext } from './Contextprovider'
import { Navbar } from './Navigation/Navbar'

export const Productdetail = () => {
  
  const { productId } = useParams();
  const [productData,setProductdata] = useState();
  
 const {cartItem,addTocart}=useContext(Shopcontext)


  useEffect(() => {
    const data = datas.filter((item)=>{
      return item.id == productId;
    });
    setProductdata(data[0])
    
  },[productId]);

  if(!productData){
    return null;
  }

  const { id,image,name,price,category,brand,image2,image3} = productData;

  return (
    <>
    <Navbar/>
    <div className='Productdetail'>
      <div className='sub1'>
        <div className='imagesdiv'>
        {/* <div className='smallimg'></div> */}
          

        <div className='imageppppp'>
      {/* <img className='imgdetail'  src={image} alt="" /> */}

      <div id="carouselExampleControls" class="carousel slide prcaro" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={image} class="d-block w-100 imgcaro" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={image2} class="d-block w-100 imgcaro" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={image3} class="d-block w-100 imgcaro" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>







      </div>
      </div>
      <div className='addbtn'>
       <button onClick={()=> addTocart(productId)}  className='cartbtnlin'>ADD TO CART</button>
        <button className='shpbth'>SHOP NOW</button>
      </div>
      </div>
      <div className='sub2'>
        <div className='pricediv'>
      <h4>{name}</h4>
      <h2>₹{price}</h2>
      <span>Free Delivery</span>
      </div>
      <div className='pricediv'>
        <h4>Select Size : </h4>
        <span>S</span><span>M</span><span>L</span>
      </div>
      <div className='prodetaildiv'>
      <h4>Product Detail:</h4>
      <span>Name : T shirt For Men and Boys

Fabric : Cotton Blend <br/>

Sleeve Length : Short Sleeves <br />

Pattern : Colorblocked <br />

Net Quantity (N) : 1 <br />

Sizes :  <br />

S (Chest Size : 36 in, Length Size: 26 in)

M (Chest Size : 38 in, Length Size: 27 in)

tshirt, tshirt for men <br />

Country of Origin : India</span>
      </div>
      </div>
      
    </div>
    </>
  )
}
