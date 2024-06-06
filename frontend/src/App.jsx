
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/homePage/home';
import Cart from './Pages/CartPage/cart';
import AllProduct from './Pages/AllItem/allProduct';

import AddItem from './Pages/AddItemPage/addItem';
import SkinCare from './Pages/SkinCare/skinCare';
import MakeUp from './Pages/MakeUp/makeUp';
import HairCare from './Pages/HairCare/hairCare';
import BodyCare from './Pages/BodyCare/bodyCare';
import Item from './Pages/Item/item';

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

