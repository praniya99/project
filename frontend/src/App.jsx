
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from './Layout/AdminLayout'

import AllServices from './pages/AllServices/AllServices'
import Bridal from './pages/Bridal/Bridal'
import Facialcleanup from './pages/Facialclenup/Facialcleanup'
import Haircolour from './pages/Haircolour/Haircolour'
import Haircuts from './pages/Haircuts/Haircuts'
import Makeup from './pages/Haircuts/Haircuts'
import Nails from './pages/Nails/Nails'
import Threading from './pages/Threading/Threading'
import Beauticians from './pages/Beauticians/Beauticians'


import Addserviceform from './pages/Addserviceform/Addserviceform'
import Servicelist from "./pages/Servicelist/Servicelist";
import AddBeauticians from './pages/AddBeauticians/AddBeauticians'
import Beauticianlist from './pages/Beauticianlist/Beauticianlist'
import BeauticianProfile from './pages/BeauticianProfile/BeauticianProfile'


function App() {
  

  return (
    
    <Router>
        <Routes>
{/*
              <Route path="/" element={<MainLayout />}>*/}
                    
                  <Route path="AllServices" element={<AllServices />} />
                  <Route path="Bridal" element={<Bridal />} />
                  <Route path="Facialcleanup" element={<Facialcleanup />} />
                  <Route path="Haircolour" element={<Haircolour />} />
                  <Route path="Haircuts" element={< Haircuts/>} />
                  <Route path="Makeup" element={<Makeup />} />
                  <Route path="Nails " element={<Nails />} />
                  <Route path="Threading " element={<Threading />} />
                  <Route path="Beauticians" element={<Beauticians />} />
              

               <Route path="/" element={<AdminLayout />}>
                  <Route path="Addserviceform" element={<Addserviceform />} />
                  <Route path="Servicelist" element={<Servicelist />} />
                 
                  <Route path="AddBeauticians" element={<AddBeauticians />} />
                  <Route path="Beauticianlist" element={<Beauticianlist />} />
                  <Route path="BeauticianProfile" element={<BeauticianProfile />} />
                  
               
              </Route>

                
            

             
        
         </Routes>


     </Router>
  )

}


export default App
