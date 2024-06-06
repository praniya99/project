import Adminsubheaderbeautician from '../../Components/Adminsubheaderbeautician/Adminsubheaderbeautician'
import BeauticianPlus from '../../Components/BeauticianPlus/BeauticianPlus'
import Beauticiansort from '../../Components/Beauticiansort/Beauticiansort'
import  Beauticianlistrow from '../../Components/Beauticianlistrow/Beauticianlistrow'


const Beauticianlist = () => {
    
  return (
    <div>
       <Adminsubheaderbeautician/>
        <div>
        <BeauticianPlus/> 
         <Beauticiansort/>
        <Beauticianlistrow/>
        <Beauticianlistrow/>
        </div>
     
    
    </div>
  )
}

export default Beauticianlist;