import React from 'react'
import facebook from './Components/Image/facebook-app-symbol.png'
import insta from './Components/Image/instagram.png'
import twitter from './Components/Image/twitter (1).png'
import mail from './Components/Image/email.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div><h3>E - Shop</h3></div>
      <div className='foot1'>
        <div className='footcont'>
            <h6>CareersrHall of Fame</h6>
            <h6>Become a supplie</h6>
            <h6>Hall of Fame</h6>
            <h6>Sitemap</h6>
        </div>
        <div className='footcont'>
            <h6>Legal and Policies</h6>
            <h6>Meesho Tech Blog</h6>
            <h6>Notices and Returns</h6>
        </div>
        <div className='footcont'>
           <h5>Reach out to us</h5>
           <img src={facebook} alt="" />
           <img src={insta} alt="" />
           <img src={twitter} alt="" />
           <img src={mail} alt="" />
        </div>
        <div className='footcont'>
           <h5>Address</h5>
           <p>Fashnear Technologies Private Limited,
CIN: U74900KA2015PTC082263
06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India</p>
        </div>
      </div>
      <div><span>@2023e-shop.com</span></div>
    </div>
  )
}

export default Footer
