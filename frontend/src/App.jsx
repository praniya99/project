
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from './Layout/AdminLayout'
import AllServices from './pages/AllServices/AllServices'
import Bridal from './pages/Bridal/Bridal'
import Facialcleanup from './pages/Facialclenup/Facialcleanup'
import Haircolour from './pages/Haircolour/Haircolour'
import Haircuts from './pages/Haircuts/Haircuts'
import Makeup from './pages/Makeup/Makeup'
import Nails from './pages/Nails/Nails'
import Threading from './pages/Threading/Threading'
import Beauticians from './pages/Beauticians/Beauticians'


import Addserviceform from './pages/Addserviceform/Addserviceform'
import Servicelist from "./pages/Servicelist/Servicelist"
import AddBeauticians from './pages/AddBeauticians/AddBeauticians'
import Beauticianlist from './pages/Beauticianlist/Beauticianlist'
import BeauticianProfile from './pages/BeauticianProfile/BeauticianProfile'

import Admin01Cashier from './pages/AdminCashier/Admin01Cashier'
import AdminHome from './pages/AdminHome/AdminHome'
import BookingDetail from './pages/BookingDetails/BookingDetail'
import CashOnDelivery from './pages/CashierPayment01/CashOnDelivery'
import BankSlip from './pages/CashierPayment02/Bank Slip 01/BankSlip'
import ViewSlip from './pages/CashierPayment02/Bank Slip 02/ViewSlip'
import CashierSchedule from './pages/CashierSchedule/CashierSchedule'
import Admin01cashierRegister from './pages/CashierRegister/Admin01cashierReg'
import Salary from './pages/Salary/Salary'
import Report01 from './pages/AppointmentReport/Report01'
import MyLeaves from './pages/MyLeaves/MyLeaves'
import UpdateCashier from './pages/UpdateCashier/UpdateCashier'




function App() {
  

  return (
    
    <Router>
        <Routes>
{/*
              <Route path="/" element={<MainLayout />}>*/}
                    
                  <Route path="Allservices" element={<AllServices />} />
                  <Route path="Bridal" element={<Bridal />} />
                  <Route path="Facialcleanup" element={<Facialcleanup />} />
                  <Route path="Haircolour" element={<Haircolour />} />
                  <Route path="Haircuts" element={< Haircuts/>} />
                  <Route path="Makeup" element={<Makeup />} />
                  <Route path="Nails" element={<Nails/>} />
                  <Route path="Threading" element={<Threading/>} />
                  <Route path="Beauticians" element={<Beauticians/>} />


               <Route path="/" element={<AdminLayout />}>
                  <Route path="Addserviceform" element={<Addserviceform />} />
                  <Route path="Servicelist" element={<Servicelist />} />
                  <Route path="AddBeauticians" element={<AddBeauticians />} />
                  <Route path="Beauticianlist" element={<Beauticianlist />} />
                  <Route path="BeauticianProfile" element={<BeauticianProfile />} />

              </Route>

                  <Route path="Admin01Cashier" element={<Admin01Cashier />} />
                  <Route path="AdminHome" element={<AdminHome />} />
                  <Route path="BookingDetail" element={<BookingDetail />} />
                  <Route path="CashOnDelivery" element={<CashOnDelivery />} />
                  <Route path="BankSlip" element={<BankSlip />} />
                  <Route path="ViewSlip" element={<ViewSlip />} />
                  <Route path="CashierSchedule" element={<CashierSchedule />} />
                  <Route path="Admin01cashierRegister" element={<Admin01cashierRegister />} />
                  <Route path="Salary" element={<Salary />} />
                  <Route path="Report01" element={<Report01 />} />
                  <Route path="MyLeaves" element={<MyLeaves />} />
                  <Route path="UpdateCashier" element={<UpdateCashier />} />
                  <Route path="/" element={<Admin01Cashier />} />
                  <Route path="/updatecashier/:id" element={<UpdateCashier />} />

            

             
        
         </Routes>


     </Router>
  )

}


export default App
