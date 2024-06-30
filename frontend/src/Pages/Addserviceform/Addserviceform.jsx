import  { useState } from 'react';
import './Addserviceform.css';
import Adminsubheaderservice from '../../components/Adminsubheaderservice/Adminsubheaderservice'


function Addserviceform() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const duration = { hours, minutes };
    console.log(duration);
  };
  return (
    <div>
      
      <Adminsubheaderservice/>
            <div className="form-container">
                 <form onSubmit={handleSubmit} className="product-form">
                    <div className="form-group">
                         <label>Service Name :</label>
                         <input type="text" name="name" placeholder="Name" className='field'  required />
                    </div>
                    <div className="form-group">
                         <label>Service Price :</label>
                          <input type="text" name="price" placeholder="Price" className='field'  required/>
                    </div>
                    <div className="form-group" >
                          <label>Select Category :</label>
                            <select name="category" className='field1'>
                              <option value="Bridal">Bridal</option>
                              <option value="Nails">Nails</option>
                              <option value="Makeup">Makeup</option>
                              <option value="Hair Cuts">Hair Cuts</option>
                              <option value="Hair Colouring">Hair Colouring</option>
                              <option value="Facial Cleanup">Facial Cleanup</option>
                               <option value="Threading">Threading</option>
                            </select>
                     </div>

                    <div className="form-group">
                        <label>Hours:
                              <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} min="0" required  placeholder="Hours"  className='field1'/>
                        </label><br />
                        <label>Minutes: 
                              <input type="number"  value={minutes}  onChange={(e) => setMinutes(e.target.value)} min="0" max="59" required placeholder="Minutes"className='field1'/>
                       </label>
        
                    </div>

                    <center><button type="submit"className='button'>ADD SERVICE</button></center>
                  </form>
          </div>

    </div>
  );
}

export default Addserviceform;