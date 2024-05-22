
import './Addserviceform.css';

function Addserviceform() {
  return (
    <div>
<div className="BIg-main-main-rect-serviceform">
      <div className="main-head-serviceform">
        <h3 className="main-head-serviceform1-1">Services</h3>
        
        </div>
        </div>













    <div className="form-container">
      <form className="product-form">
        <div className="form-group">
          <label>Service Name :</label>
          <input type="text" name="name" placeholder="Name" className='field' />
        </div>
        <div className="form-group">
          <label>Service Price :</label>
          <input type="text" name="price" placeholder="Price" className='field'/>
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
          <label>Additional Details :</label>
          <textarea name="details" placeholder="Additional details" className='field'></textarea>
        </div>
        <div className="form-group">
          <label>Upload Service Image :</label>
          <input type="file" name="image" className='field1'/>
        </div>
        <button type="submit"className='button'>ADD SERVICE</button>
      </form>
    </div>

    </div>
  );
}

export default Addserviceform;