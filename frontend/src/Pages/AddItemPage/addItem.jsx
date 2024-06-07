import React, { useState } from 'react';

const AddItemForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && !file.type.startsWith('image/')) {
      setErrors(prevErrors => ({ ...prevErrors, productImage: 'Only image files are allowed' }));
      setProductImage(null);
    } else {
      setErrors(prevErrors => ({ ...prevErrors, productImage: null }));
      setProductImage(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = {};

    if (!productName.match(/^[A-Z\s]+$/)) {
      formErrors.productName = 'Product name must contain only uppercase English letters and spaces';
    }

    if (!productPrice.match(/^\d+(\.\d{1,2})?$/)) {
      formErrors.productPrice = 'Product price must be in rupees and cents format (e.g., 123.45)';
    }

    if (!additionalDetails.match(/^[A-Z\s]+$/)) {
      formErrors.additionalDetails = 'Additional details must contain only uppercase English letters and spaces';
    }

    if (!productImage) {
      formErrors.productImage = 'Product image is required';
    }

    if (!productName || !productPrice || !selectedCategory || !additionalDetails || !productImage) {
      formErrors.form = 'All fields must be filled';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', {
        productName,
        productPrice,
        selectedCategory,
        additionalDetails,
        productImage,
      });
    }
  };

  return (
    <div>
      <h1 style={{ backgroundColor: '#F1A4BD', padding: '20px', fontFamily: 'Arial', width: '100%', height: '80px' }}>
        Add Item
      </h1>
      <div style={{ boxShadow: '0 0 5px', height: '600px', width: '40%', marginLeft: '25%', backgroundColor: 'rgba(217, 217, 217, 1)' }}>
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
              {errors.productName && <p style={{ color: 'red' }}>{errors.productName}</p>}
            </div><br/>
            <div style={{ marginBottom: '10px' }}>
              <label><b>Product Price:</b></label><br />
              <input
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                style={{ width: '95%', height: '30px', border: 'none' }}
              />
              {errors.productPrice && <p style={{ color: 'red' }}>{errors.productPrice}</p>}
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
              {errors.selectedCategory && <p style={{ color: 'red' }}>{errors.selectedCategory}</p>}
            </div><br/>
            <div style={{ marginBottom: '10px' }}>
              <label><b>Additional Details:</b></label><br />
              <textarea
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                style={{ width: '95%', height: '90px', border: 'none' }}
              />
              {errors.additionalDetails && <p style={{ color: 'red' }}>{errors.additionalDetails}</p>}
            </div><br/>
            <div style={{ marginBottom: '10px' }}>
              <label><b>Upload Product Image:</b></label><br />
              <input type="file" onChange={handleImageUpload} style={{ backgroundColor: 'white', width: '95%', height: '30px' }} />
              {errors.productImage && <p style={{ color: 'red' }}>{errors.productImage}</p>}
            </div><br/>
            <button type="submit" style={{ backgroundColor: 'rgba(195, 104, 159, 1)', width: '95%', height: '40px', borderRadius: '5px' }}>
              Add Item
            </button>
            {errors.form && <p style={{ color: 'red' }}>{errors.form}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;
