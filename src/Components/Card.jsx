import React from 'react'
import { Link } from 'react-router-dom'


export const Card = () => {
  return (
    <><h1>MENS CLOTHS</h1>
    <div className='Cards'>
       <div className='card'>  
         <Link to='/Products'> <img src="https://logan.nnnow.com/content/dam/nnnow-project/25-aug-2023/P3.jpg" alt="" /></Link>
          
       </div>
       <div className='card'>  
         <Link to='/Products'> <img src="https://logan.nnnow.com/content/dam/nnnow-project/25-aug-2023/P2.jpg" alt="" /></Link> 
          
                </div>
       <div className='card'>  
          <Link to='/Products'><img src="https://logan.nnnow.com/content/dam/nnnow-project/25-aug-2023/P4.jpg" alt="" /></Link>
          
       </div>
       <div className='card'>  
          <Link to='/Products'><img src="https://images.unsplash.com/photo-1579362093956-a743707ecac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVucyUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" /></Link>
          
       </div>
        
        
       
    </div>
    </>
  )
}
