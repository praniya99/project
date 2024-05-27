
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from './Layout/AdminLayout'
import Addserviceform from "./Pages/Addserviceform/Addserviceform";

function App() {
  

  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<AdminLayout />}>

        <Route path="Addserviceform" element={<Addserviceform />} />
        </Route>
        
      </Routes>
    </Router>
  )
}


export default App
