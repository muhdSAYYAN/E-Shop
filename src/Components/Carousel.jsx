import React from 'react'

export const Carousel = () => {
  return (
    <div className='Carousel'>
         <div  id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active caro">
      <img src="https://logan.nnnow.com/content/dam/nnnow-project/05-sep-2023/revised-uspa-aw-23/06SEP23-HP-USPA-LEGENDS-TB-DSK(1).jpg" class="d-block w-100 imagecaro" alt="..."/>
    </div>
    <div class="carousel-item caro">
      <img src="https://www.levi.in/on/demandware.static/-/Sites-LeviIN-Library/en_IN/dwec0c995a/images/homepage/StripBanners/Horizntal%20Banner%20biker1382%20X%20523.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item caro">
      <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/LP_D_HB_80_Polo?resMode=sharp2&wid=1600&hei=520" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item caro">
      <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_84_Blazer?resMode=sharp2&wid=1600&hei=642" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item caro">
      <img src="https://www.lee.in/media/mageplaza/bannerslider/banner/image/e/z/ezy_banners_11zon.jpg" class="d-block w-100" alt="..."/>
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
  )
}
