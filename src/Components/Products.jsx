import React, { useState } from 'react'
import datas from '../product'
import { Link, useLocation } from 'react-router-dom';
import { Propsdata } from './Propsdata';
import { Navbar } from './Navigation/Navbar'



export const Products = () => {
   
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category');

   
  const [searchItem,setSearchItem] = useState('');
  const [cateGory,setCateGory] = useState(null)
  const [brands,setBrands] = useState(null)
  const [priceRange,setPriceRange] = useState(null)


  const handleChange = (event) =>{
    setSearchItem(event.target.value);
  }

  const handleCategory = (category) =>{
    setCateGory(category)
  } 

  const handleBrand = (brand) => {
    setBrands(brand)
  }

  const handleFilterprice = (range) =>{
    setPriceRange(range)
  }

  const filterProductByCategory = (products, category) => {
    return products.filter((product) => product.category === category);
  };

  const filterProduct = datas.filter(products =>
     products.name.toLowerCase().includes(searchItem.toLowerCase())) 

 const filterCategory = () =>{
   
   let filterd = filterProduct;

  if(cateGory){
    filterd = filterd.filter((filterdproduct) => filterdproduct.category === cateGory);
  }
  if(brands){
      filterd = filterd.filter((filterBrand) => filterBrand.brand === brands)
  }
  if(priceRange){
    filterd = filterd.filter((fiterPrice) => fiterPrice.priceRange === priceRange)
  }

  return filterd

 } 
 
 
//  cateGory
//   ? filterProduct.filter((products) => products.category === cateGory)
//   : filterProduct;

  return (
    
    <>
     <Navbar/>
    <div className='Products'>

     <div className='type'>
      <h6>CATEGORY</h6>
      <div className='catefil'>
        <input type="radio" value='shirt' name='category' onClick={()=> handleCategory('shirt')} />  SHIRT
        <input type="radio" value='pant' name='category' onClick={()=> handleCategory('pant')} />  PANT
        <input type="radio" value='sheo' name='category' onClick={()=> handleCategory('sheo')}/>  SHEO
      </div>

      <h6>FILTERD BY</h6>
      <div className='filteringpro'>

     
      <div class="dropdown">
  <span>BRAND</span>
  <div class="dropdown-content">
  <img className='imgbrand' onClick={()=> handleBrand('lp')} src="https://imagescdn.louisphilippe.com/img/app/brands/superapp/Icons/header_brand_logo_LP.png?q=75&auto=format" alt="" />
  <img className='imgbrand' onClick={()=> handleBrand('uspolo')} src="https://cdn06.nnnow.com/web-images/master/navtree_metaData/59b24bede4b0e6b6e16a324c/1522324923120/USPA_DESKTOP_LOGO_2018.png" alt="" />
  <img className='imgbrand' onClick={()=> handleBrand('levis')} src="https://www.levi.in/on/demandware.static/-/Sites-LeviIN-Library/en_IN/dw96cbad45/images/homepage/logo.jpg" alt="" />
  <img className='imgbrand' onClick={()=> handleBrand('allensonly')} src="https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/header_brand_logo_AS.png?q=75&auto=format" alt="" />
</div>
    </div>    


    <div class="dropdown">
  <span>SIZE</span>
  <div class="dropdown-content2">
  <h5 className='hovdropdow'>1000 - 1500</h5>
  <h5 className='hovdropdow'>1500 - 2000</h5>
  <h5 className='hovdropdow'>2000 - 2500</h5>
  <h5 className='hovdropdow'>2500 - 3000</h5>
  <h5 className='hovdropdow'>3500 - 4000</h5>
  </div>
  </div>

     

    <div class="dropdown">
  <span>SIZE</span>
  <div class="dropdown-content2">
  <h5 className='hovdropdow'>S</h5>
  <h5 className='hovdropdow'>M</h5>
  <h5 className='hovdropdow'>L</h5>
  <h5 className='hovdropdow'>XL</h5>
  <h5 className='hovdropdow'>XXL</h5>
  </div>
</div>

      </div>

  {/* <button onClick={() => handleCategory('shirt')}>shirt</button> */}


  
      {/* <div className='search'>
      <input type="text" value={searchItem} onChange={handleChange} />
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAkFBMVEX///8rAAAAAAAoAAAhAAAmAAAfAAAkAAAXAAAQAAAbAAATAAAdAAALAAD6+fn18/Pk4eHv7e3OysrV09Pe29umn5/EwcG8uLiVjo4qExNORETo5+dfVlafmJivqqpRSkpEODhzbGw2KyshEBCCenqJhoY1HR0sICBoYGApGBg+MTFPOztbS0tVQ0NHNDQ2IyOKcXtpAAAFsElEQVR4nO1b63aqOhDWcEkAA3IRUEGBYkVr9f3f7pSEmz3uHp3Eutc6fL/6o0k/5p6Z6WQyYsSIESNGjHghHHce+F4Yev587dqvYGB7cZ68U9RAPSa7zfx3KQSLT4SIipVpBw3PKDLKyPklCm708Wbh6S0oJtmX/m9wiI/oNoWGCDES78kcnBRZyg8cGDBahc8ksdmT6w9XNKzqKtaUa2rYSIJncVhXSBswmFnmoTh+nJLk81zsl4QMFWUuF88hsZnNeo8giJSbcN4FCTeI0tOXw3YyUVDiyudgl6j7Czpaxbckbkf5sheXfohkk3Ar2t4+Uyvvj1FhvTiSlgcmG8kkstYsMap+Dgh29Ga0UkNSjWNuqp227zD+FJstjZ1EEllDQr/T8td5qz8jlkXCWTWfRrK7o0BKG+tAsmxj25Cg+QOH/L3e0JDjKbtGulb60DH3zMOLcpCR3kIEtHcn4zJUj+Ik1gfudvRxp7M/uDQscUdJ+E0UYuvOhacWJJrqG32QRwyzR2AyQeKtWFFqZ8zh8BF4zYZC1TnEgovCAFcLO4P5iSEiDJeLwoIHQLdgN5DHvPwaXKBaJvAlEZOmggWuwJq4iZ90wewaMqXiRITExNMF3aRksQIJFtQnlpAtaBx3mCi0ixiJiccsg5TA49ywDNHU7Kxq61L2wONlrVHlIvwGjlm1aMJU4mzrb1DFbLPGnMnUgnlJoMqqlbQ6m+iwVMQTGZLQlCjrQkNbgs7GVn32LKEhETFnQ6CbmJ+rMDlew8fwEHyptTmTUcm7RX0VBVnYvj5qSHldsdQMyszum4zwzfFZq2QGiZ5zzkJKlyphJgZhEeiyHHUyyU2ooctkUcJZzP4GWcw5CyldskqH2oV0H9FBFcYeHmq+g1UYBBQAWew0ZcRO5wj/ICZGkDK/I1gq4Dyyq0skbSUjp1rMxED9T1520rU4C1byKTrorE9kNYTeWelYgc66zLJ12OGri/hTAJid8zoHKUdhlSyYWZjAd+aGv0dEVWInmDXZgMe5JHEmyMJn15jg0rFSZZQYOUtIFPzw534OfEi04CFLJO4QRVwYFet6GgLNnJQ9JIQeidwqppZACF6zjCbybLdP7C1iCjVeY96is8AjsJSLApZDWjjvTBg6VCchb4WLTkk2zbfArnELpg/tKDpOPPIxEbBE4TMS8YwY6M1MAHBTxeKNQNjsseCtbMV6uA7O+dxRM2VsQ/CwM1XIg9JIuCTE0yFHYxqPmei6ncDKmqkG+2aOT/O7bT0smuEdlTZR9WbNWNLK7suMdtqO24F13k347XRUQ+Ud4ogu3VAey9wH8Q6NbUzNQ/wfPPxksLWjyHnotldn7fKFQosfeNheRfo1jVp67xKeEh3cVSdlxUL57Y2oID0jdXoNPZO6PLUbCFon5GPhzfv7bdePyr1FtOm/YG5lsph4hTW4HBv0skqqchfHZV5tM4zIYEUIq8vuZ0Pi+sMX7B3Sh19ZbyiZhBBzpuIrISj04DWVRQ25yyCTyTy/5nETCr3UVeaq/005XZAB/Eq1fmBQa6pImQ/N9518FEv6Opu/Q0j/wwIbNtG5c5+o86qptpfprw3C8oIMVRtS+bIRE6EkHvYEo940cPGE7a2JEyyqbaFSSg3LMiiylllSRt9XTdNeGrPTE1jUsNe+F23SOF1sQi+4+a15b0PAtQUZsJN+/RCJzNrF4Jz7gCvdX+/H2uj9lTx7/fTP8Mhgz/GX95MHGIQNLN6eAmOQUczkJWvjDLnR0bDER9VwGn3YoDJa2jC420F+fdJC8B1Y077+ePypKQ3B3+GvYW8aePU6R1k8rwJ8BLvOX5WnFBt3oury6wvz2sTp6mH88ToWbbPtC2+/9c8utxCYDY3Z0/6l4h6EzdvffF3IqBEU9Ct8aepLSXwhLhAyXxfEW7h++LpaZ8SIESNGjPg/4B894k2j4vf0lAAAAABJRU5ErkJggg==" alt="" />
     </div> */}
     </div>
     <div className='items'>
     {selectedCategory
            ? filterProductByCategory(filterCategory(), selectedCategory).map((item) => (
                <Propsdata data={item} key={item.id} />
              ))
            : filterCategory().map((item) => (
                <Propsdata data={item} key={item.id} />
              ))}
      {/* <div className='datacard'>
        <div className='imageitem'>
          <img src={} alt="" />
        </div>
        <p>ffffffffffffffffffff</p>
        <button>SHOP NOW</button>
      </div> */}
     </div>


    </div>
    </>
  )
}
