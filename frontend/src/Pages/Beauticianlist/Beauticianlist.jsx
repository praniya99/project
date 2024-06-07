import Adminsubheaderbeautician from '../../components/Adminsubheaderbeautician/Adminsubheaderbeautician'
import BeauticianPlus from '../../components/BeauticianPlus/BeauticianPlus'
import Beauticiansort from '../../components/Beauticiansort/Beauticiansort'
import  Beauticianlistrow from '../../components/Beauticianlistrow/Beauticianlistrow'


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