import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from './Layout/AdminLayout'
import CashierLayout from './Layout/CashierLayout'
import BeauticianLayout from "./Layout/BeauticianLayout";

import AllServices from './Pages/AllServices/AllServices'
import Bridal from './Pages/Bridal/Bridal'
import Facialcleanup from './Pages/Facialclenup/Facialcleanup'
import Haircolour from './Pages/Haircolour/Haircolour'
import Haircuts from './Pages/Haircuts/Haircuts'
import Makeup from './Pages/Haircuts/Haircuts'
import Nails from './Pages/Nails/Nails'
import Threading from './Pages/Threading/Threading'
import Beauticians from './Pages/Beauticians/Beauticians'
import Servicelist from './Pages/Servicelist/Servicelist'
import Addserviceform from "./Pages/Addserviceform/Addserviceform"

import AddBeauticians from './Pages/AddBeauticians/AddBeauticians'
import Beauticianlist from './Pages/Beauticianlist/Beauticianlist'
import BeauticianProfile from './Pages/BeauticianProfile/BeauticianProfile'
import BeauticianSchedule from "./Pages/BeauticianSchedule/BeauticianSchedule"
import BeauticianSalary from './Pages/BeauticianSalary/BeauticianSalary'

import AdminCashier from './Pages/AdminCashier/Admin01Cashier'
import CashierPayment01 from './Pages/CashierPayment01/CashOnDelivery'
import BankSlip01 from './Pages/CashierPayment02/Bank Slip 01/BankSlip'
import BankSlip02 from './Pages/CashierPayment02/Bank Slip 02/ViewSlip'
import BookingDetails from './Pages/BookingDetails/BookingDetail'
import CashierSchedule from './Pages/CashierSchedule/CashierSchedule'
import CashierRegister from './Pages/CashierRegister/Admin01cashierReg'
import Salary from './Pages/Salary/Salary'


import AdminHome from "./Pages/AdminHome/AdminHome";
import Deliveryform from './Pages/Deliveryform/Form'



function App() {
  return (
    

    <Router>
        <Routes>
                 <Route path="Deliveryform" element={<Deliveryform />} />
             
                    
                  <Route path="Allservices" element={<AllServices />} />
                  <Route path="Bridal" element={<Bridal />} />
                  <Route path="Facialcleanup" element={<Facialcleanup />} />
                  <Route path="Haircolour" element={<Haircolour />} />
                  <Route path="Haircuts" element={< Haircuts/>} />
                  <Route path="Makeup" element={<Makeup />} />
                  <Route path="Nails " element={<Nails />} />
                  <Route path="Threading " element={<Threading />} />
                  <Route path="Beauticians" element={<Beauticians />} />
               

               <Route path="/" element={<AdminLayout />}>
                  <Route path='AdminHome'element={<AdminHome/>}/>

                  <Route path="Addserviceform" element={<Addserviceform />} />
                  <Route path="Servicelist" element={<Servicelist />} />
                  <Route path="AddBeauticians" element={<AddBeauticians />} />
                  <Route path="Beauticianlist" element={<Beauticianlist />} />
                  <Route path="BeauticianProfile" element={<BeauticianProfile />} />
                 
                  <Route path='AdminCashier'element={<AdminCashier/>}/>
                  <Route path='CashierRegister'element={<CashierRegister/>}/>
                 
               </Route>

              <Route path="/" element={<CashierLayout />}>
                
                  <Route path='BookingDetails'element={<BookingDetails/>}/>
                  <Route path='CashierSchedule'element={<CashierSchedule/>}/>
                  <Route path='CashierPayment01'element={<CashierPayment01/>}/>
                  <Route path='BankSlip01'element={<BankSlip01/>}/>
                  <Route path='BankSlip02'element={<BankSlip02/>}/>
                  <Route path='Salary'element={<Salary/>}/>

              </Route>

              <Route path="/" element={<BeauticianLayout />}>
              <Route path='BeauticianSchedule'element={<BeauticianSchedule/>}/>
              <Route path='BeauticianSalary'element={<BeauticianSalary/>}/>

                
               
            </Route>

             
        
         </Routes>


     </Router>

     
    

  )
}

export default App
