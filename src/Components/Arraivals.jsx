import React from 'react'
import convers from './Image/convers.gif'
import nike from './Image/download.gif'
import adidas from './Image/Adidas Sustainability.gif'

const Arraivals = () => {
  return (
    <div className='arraival'>
       <div><h1>NEW ARRAIVALS</h1></div>
       <div className='gifimg'>
            <img src={convers} alt="" />
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
       </div>
    </div>
  )
}

export default Arraivals
