import Adminsubheaderservice from '../../Components/Adminsubheaderservice/Adminsubheaderservice'
import ServicePlus from '../../Components/ServicePlus/ServicePlus'
import Servicesort from '../../Components/Servicesort/Servicesort'
import  Servicelistrow from '../../Components/Servicelistrow/Servicelistrow'

const Servicelist = () => {
  return (
    <div>
      <Adminsubheaderservice/>
        <div>
        <ServicePlus/> 
         <Servicesort/>
        <Servicelistrow/>
        <Servicelistrow/>
        </div>
     
    </div>
  )
}

export default Servicelist
