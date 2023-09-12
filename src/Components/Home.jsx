import React, { useState } from 'react'
import { Carousel } from './Carousel'
import { Card } from './Card'
import Arraivals from './Arraivals'
import Footer from '../Footer'
import { Navbar } from './Navigation/Navbar'




export const Home = () => {


  return (
    <>
    <div className='Home'>
        <Navbar/>
        <Carousel/>
        <Card/>
        <Arraivals/>
        <Footer/>
      
       
    </div>
    </>
  )
}
