import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/Home.jsx'
import { Home } from './Components/Home.jsx';
import { Navbar } from './Components/Navigation/Navbar';
import {Cart} from './Components/Cart';
import { Products } from './Components/Products';
import { Productdetail } from './Components/Productdetail';
import { Contextprovider } from './Components/Contextprovider';
import { Logpage } from './Components/Navigation/Logpage';
import Popup from './Components/Popup'



function App() {


  return (
    <div className="App">
     
     <BrowserRouter>
     <Contextprovider>
     <Routes>
      <Route path='/' element={<Home   />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/productDetails/:productId' element={<Productdetail/> }/>
      <Route path='/login' element={<Logpage/>}/>
      <Route path='/popup' element={<Popup/>}/>
     </Routes>
     </Contextprovider>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
 