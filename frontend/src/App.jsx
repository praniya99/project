
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from './Layout/AdminLayout'
import AllServices from './Pages/AllServices/AllServices'
import Bridal from './Pages/Bridal/Bridal'
import Facialcleanup from './Pages/Facialclenup/Facialcleanup'
import Haircolour from './Pages/Haircolour/Haircolour'
import Haircuts from './Pages/Haircuts/Haircuts'
import Makeup from './Pages/Makeup/Makeup'
import Nails from './Pages/Nails/Nails'
import Threading from './Pages/Threading/Threading'
import Beauticians from './Pages/Beauticians/Beauticians'


import Addserviceform from './Pages/Addserviceform/Addserviceform'
import Servicelist from "./Pages/Servicelist/Servicelist";
import AddBeauticians from './Pages/AddBeauticians/AddBeauticians'
import Beauticianlist from './Pages/Beauticianlist/Beauticianlist'
import BeauticianProfile from './Pages/BeauticianProfile/BeauticianProfile'




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

                
            

             
        
         </Routes>


     </Router>
  )

}


export default App
