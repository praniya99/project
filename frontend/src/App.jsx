

<<<<<<< HEAD
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/homePage/home';
import Cart from './Pages/CartPage/cart';
import AllProduct from './Pages/AllItem/allProduct';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> 1f860f23cd3f041540377afeaf7294e7e4d84232
import AdminLayout from './Layout/AdminLayout'
import AdminCashierLayout from './Layout/AdminCashierLayout'
import MainLayout from './Layout/MainLayout' 
import AllServices from './Pages/AllServices/AllServices'
import Bridal from './Pages/Bridal/Bridal'
import Facialcleanup from './Pages/Facialclenup/Facialcleanup'
import Haircolour from './Pages/Haircolour/Haircolour'
import Haircuts from './Pages/Haircuts/Haircuts'
<<<<<<< HEAD
import MakeUpItem from './Pages/makeUpItem/makeUpItem';
=======
import Makeup from './Pages/Haircuts/Haircuts'
>>>>>>> 1f860f23cd3f041540377afeaf7294e7e4d84232
import Nails from './Pages/Nails/Nails'
import Threading from './Pages/Threading/Threading'
import Beauticians from './Pages/Beauticians/Beauticians'
import Servicelist from './Pages/Servilist/Servicelist'
import Addserviceform from "./Pages/Addserviceform/Addserviceform"
import UpdateService from './Pages/UpdateService/UpdateService'
import AddBeauticians from './Pages/AddBeauticians/AddBeauticians'
import Beauticianlist from './Pages/Beauticianlist/Beauticianlist'
import BeauticianProfile from './Pages/BeauticianProfile/BeauticianProfile';
import Makeup from './Pages/MakeUp/Makeup';

import AddItem from './Pages/AddItemPage/addItem';
import SkinCare from './Pages/SkinCare/skinCare';

import HairCare from './Pages/HairCare/hairCare';
import BodyCare from './Pages/BodyCare/bodyCare';
import Item from './Pages/Item/item';



<<<<<<< HEAD
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
         <Route path="MakeupItem" element={<MakeUpItem />} />
         <Route path="/item" element={<Item/>} />
       


                    
=======




function App() {
  return (
    

    <Router>
        <Routes>

              <Route path="/" element={<MainLayout />}>
>>>>>>> 1f860f23cd3f041540377afeaf7294e7e4d84232
                  <Route path="Allservices" element={<AllServices />} />
                  <Route path="Bridal" element={<Bridal />} />
                  <Route path="Facialcleanup" element={<Facialcleanup />} />
                  <Route path="Haircolour" element={<Haircolour />} />
                  <Route path="Haircuts" element={< Haircuts/>} />
<<<<<<< HEAD
                  <Route path="makeUp" element={<Makeup/>} />
                  <Route path="Nails" element={<Nails/>} />
                  <Route path="Threading" element={<Threading/>} />
                  <Route path="Beauticians" element={<Beauticians/>} />

=======
                  <Route path="Makeup" element={<Makeup />} />
                  <Route path="Nails " element={<Nails />} />
                  <Route path="Threading " element={<Threading />} />
                  <Route path="Beauticians" element={<Beauticians />} />
              </Route>
>>>>>>> 1f860f23cd3f041540377afeaf7294e7e4d84232

               <Route path="/" element={<AdminLayout />}/>
                  <Route path="Addserviceform" element={<Addserviceform />} />
                  <Route path="Servicelist" element={<Servicelist />} />
                  <Route path="UpdateService" element={<UpdateService />} />
                  <Route path="AddBeauticians" element={<AddBeauticians />} />
                  <Route path="Beauticianlist" element={<Beauticianlist />} />
                  <Route path="BeauticianProfile" element={<BeauticianProfile />} />
             

              <Route path="/" element={<AdminCashierLayout />}>
                
<<<<<<< HEAD
=======
              </Route>
>>>>>>> 1f860f23cd3f041540377afeaf7294e7e4d84232

         </Routes>


<<<<<<< HEAD

    
    </Router>
  );
=======
     </Router>

     
    

  )
>>>>>>> 1f860f23cd3f041540377afeaf7294e7e4d84232
}

export default App

