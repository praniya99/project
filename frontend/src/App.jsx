
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './homePage/home';
import Cart from './cartPage/cart';
import AllProduct from './page/allProduct';
import AddItem from './addItemPage/addItem';
import SkinCare from './page/skinCare';
import MakeUp from './page/makeUp';
import HairCare from './page/hairCare';
import BodyCare from './page/bodyCare';
import Item from './page/item'

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
