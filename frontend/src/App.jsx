
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from './Layout/AdminLayout'
import AdminCashierLayout from './Layout/AdminCashierLayout'
import MainLayout from './Layout/MainLayout' 
import AllServices from './Pages/AllServices/AllServices'
import Bridal from './Pages/Bridal/Bridal'
import Facialcleanup from './Pages/Facialclenup/Facialcleanup'
import Haircolour from './Pages/Haircolour/Haircolour'
import Haircuts from './Pages/Haircuts/Haircuts'
import Makeup from './Pages/Haircuts/Haircuts'
import Nails from './Pages/Nails/Nails'
import Threading from './Pages/Threading/Threading'
import Beauticians from './Pages/Beauticians/Beauticians'
import Servicelist from './Pages/Servilist/Servicelist'
import Addserviceform from "./Pages/Addserviceform/Addserviceform"
import UpdateService from './Pages/UpdateService/UpdateService'
import AddBeauticians from './Pages/AddBeauticians/AddBeauticians'
import Beauticianlist from './Pages/Beauticianlist/Beauticianlist'
import BeauticianProfile from './Pages/BeauticianProfile/BeauticianProfile'


function App() {
  

  return (
    
    <Router>
        <Routes>

              <Route path="/" element={<MainLayout />}>
                  <Route path="Allservices" element={<AllServices />} />
                  <Route path="Bridal" element={<Bridal />} />
                  <Route path="Facialcleanup" element={<Facialcleanup />} />
                  <Route path="Haircolour" element={<Haircolour />} />
                  <Route path="Haircuts" element={< Haircuts/>} />
                  <Route path="Makeup" element={<Makeup />} />
                  <Route path="Nails " element={<Nails />} />
                  <Route path="Threading " element={<Threading />} />
                  <Route path="Beauticians" element={<Beauticians />} />
              </Route>

               <Route path="/" element={<AdminLayout />}>
                  <Route path="Addserviceform" element={<Addserviceform />} />
                  <Route path="Servicelist" element={<Servicelist />} />
                  <Route path="UpdateService" element={<UpdateService />} />
                  <Route path="AddBeauticians" element={<AddBeauticians />} />
                  <Route path="Beauticianlist" element={<Beauticianlist />} />
                  <Route path="BeauticianProfile" element={<BeauticianProfile />} />
              </Route>

              <Route path="/" element={<AdminCashierLayout />}>
                
              </Route>

             
        
         </Routes>


     </Router>
  )

}


export default App
