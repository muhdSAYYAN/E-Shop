import React, { createContext, useState } from 'react'

export const Productcontextpro = createContext();

export const Contextproduct = ({children}) => {
 const [selectedProduct,setSelectedProduct] = useState(null)

    return (
    <Productcontextpro.Provider value={{ selectedProduct,setSelectedProduct}}>
      
    </Productcontextpro.Provider>
  )
}
