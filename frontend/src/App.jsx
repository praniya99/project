
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './homePage/Home';
import Cart from './cartPage/Cart';
import AllProduct from './page/AllProduct';
import AddItem from './addItemPage/AddItem';
import SkinCare from './page/SkinCare';
import MakeUp from './page/MakeUp';
import HairCare from './page/HairCare';
import BodyCare from './page/BodyCare';
import Item from './page/Item';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route path="/bodyCare" element={<BodyCare />} />
        <Route path="/hairCare" element={<HairCare />} />
        <Route path="/skinCare" element={<SkinCare />} />
        <Route path="/makeUp" element={<MakeUp />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </Router>
  );
}

export default App;
