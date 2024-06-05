
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './homePage/home';
import Cart from './CartPage/cart';
import AllProduct from './AllItem/allProduct';
import AddItem from './AddItemPage/addItem';
import SkinCare from './SkinCare/skinCare';
import MakeUp from './MakeUp/makeUp';
import HairCare from './HairCre/hairCare';
import BodyCare from './BodyCare/bodyCare';
import Item from './Item/item'

function App() {
  
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/addItem" element={<AddItem />} />
         <Route path="/allProduct" element={<AllProduct />} />
         <Route path="/bodyCare" element={<BodyCare />} />
         <Route path="/hairCare" element={<HairCare/>} />
         <Route path="/skinCare" element={<SkinCare/>} />
         <Route path="/makeUp" element={<MakeUp/>} />
         <Route path="/item" element={<Item/>} />
       


      </Routes>
    </Router>
  );
}

export default App
