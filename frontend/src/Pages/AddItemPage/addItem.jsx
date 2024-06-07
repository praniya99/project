import React, { useState } from 'react';

const AddItemForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    if (!productName) newErrors.productName = 'Product name is required';
    if (!/^[a-zA-Z\s]*$/.test(productName)) newErrors.productName = 'Product name must contain only letters';

    if (!productPrice) newErrors.productPrice = 'Product price is required';
    if (!/^\d+$/.test(productPrice)) newErrors.productPrice = 'Product price must contain only numbers';

    if (!selectedCategory) newErrors.selectedCategory = 'Category is required';

    if (!additionalDetails) newErrors.additionalDetails = 'Additional details are required';

    if (!productImage) newErrors.productImage = 'Product image is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', {
        productName,
        productPrice,
        selectedCategory,
        additionalDetails,
        productImage,
      });
      setFormError('');
    } else {
      setFormError('All fields must be filled');
    }
  };

  return (
    <div>
      <h1 style={{ backgroundColor: '#F1A4BD', padding: '20px', fontFamily: 'Arial', width: '100%', height: '80px' }}>
        Add Item
      </h1>
      <div style={{boxShadow:' 0 0 5px',height:'600px',width:'40%',marginLeft:'25%',backgroundColor:'rgba(217, 217, 217, 1)'}}>
      <div style={{ marginLeft: '5%' }}>
        <form onSubmit={handleSubmit}><br/>
          <div style={{ alignItems: 'center', marginTop: '20px' }}>
            <label><b>Product Name:</b></label><br />
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              style={{ width: '95%', height: '30px', border: 'none' }}
            />
            {errors.productName && <div style={{ color: 'red' }}>{errors.productName}</div>}
          </div><br/>
          <div style={{ marginBottom: '10px' }}>
            <label><b>Product Price:</b></label><br />
            <input
              type="text"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              style={{ width: '95%', height: '30px', border: 'none' }}
            />
            {errors.productPrice && <div style={{ color: 'red' }}>{errors.productPrice}</div>}
          </div><br/>
          <div style={{ marginBottom: '10px' }}>
            <label><b>Select Category:</b></label><br />
            <select value={selectedCategory} onChange={handleCategoryChange} style={{ width: '95%', height: '30px', border: 'none' }}>
              <option value="">Select...</option>
              <option value="Skin care">Skin care</option>
              <option value="Make up">Make up</option>
              <option value="Nails">Nails</option>
              <option value="Hair care">Hair care</option>
              <option value="Bath & body care">Bath & body care</option>
            </select>
            {errors.selectedCategory && <div style={{ color: 'red' }}>{errors.selectedCategory}</div>}
          </div><br/>
          <div style={{ marginBottom: '10px' }}>
            <label><b>Additional Details:</b></label><br />
            <textarea
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              style={{ width: '95%', height: '90px', border: 'none' }}
            />
            {errors.additionalDetails && <div style={{ color: 'red' }}>{errors.additionalDetails}</div>}
          </div><br/>
          <div style={{ marginBottom: '10px' }}>
            <label><b>Upload Product Image:</b></label><br />
            <input type="file" onChange={handleImageUpload} style={{backgroundColor:'white', width: '95%', height: '30px'}} />
            {errors.productImage && <div style={{ color: 'red' }}>{errors.productImage}</div>}
          </div><br/>
          {formError && <div style={{ color: 'red', marginBottom: '10px' }}>{formError}</div>}
          <button type="submit" style={{ backgroundColor: 'rgba(195, 104, 159, 1)', width: '95%', height: '40px', borderRadius: '5px' }}>
            Add Item
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AddItemForm;
