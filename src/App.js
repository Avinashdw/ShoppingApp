import React from 'react'
import NavBar from './NavBar/NavBar.jsx';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx'
import LoginSignup from './pages/LoginSignup.jsx';
import Cart from './pages/Cart.jsx';
import Footer from './footer/Footer.jsx';
import banner_mens from './Assests/banner_mens.png';
import banner_women from './Assests/banner_women.png';
import banner_kids from './Assests/banner_kids.png';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
     <Routes>
     <Route path="/" element={<Shop/>}/>
     <Route path="/mens" element={<ShopCategory category="men" banner={banner_mens}/>}/>
     <Route path="/womens" element={<ShopCategory category="women"banner={banner_women}/>}/>
     <Route path="/kids" element={<ShopCategory category="kid" banner={banner_kids}/>}/>
     <Route path='/product' element={<Product/>}/>
     <Route path=':productId' element={<Product/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App