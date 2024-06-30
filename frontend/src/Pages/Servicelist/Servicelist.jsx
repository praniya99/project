import Adminsubheaderservice from '../../components/Adminsubheaderservice/Adminsubheaderservice'
import ServicePlus from '../../components/ServicePlus/ServicePlus'
import Servicesort from '../../components/Servicesort/Servicesort'
import  Servicelistrow from '../../components/Servicelistrow/Servicelistrow'

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
