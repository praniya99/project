import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import image from '../assets/Ellipse.png'; // Ensure the image path is correct

function Customer01() {
  const [profileImage, setProfileImage] = useState(image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: '#e27bb1', height: '150px', display: 'flex', justifyContent: 'left', alignItems: 'center', paddingLeft: '20px' }}>
        <h1><b>My Account</b></h1>
      </div>
      <br /><br />

      <Row>
        <Col xs={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src={profileImage} alt="Profile" className="img-fluid" style={{ width: '60%', cursor: 'pointer' }} onClick={() => document.getElementById('imageUpload').click()} />
          <input type="file" id="imageUpload" style={{ display: 'none' }} onChange={handleImageChange} />
        </Col>
        <Col xs={9}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ flex: '0 0 150px' }}><b>Name :</b></span>
            <span>W.Nimal Kumara</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ flex: '0 0 150px' }}><b>Date of birth :</b></span>
            <span>21/03/1990</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ flex: '0 0 150px' }}><b>Gender :</b></span>
            <span>Male</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ flex: '0 0 150px' }}><b>Mobile No :</b></span>
            <span>078 5263419</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ flex: '0 0 150px' }}><b>Email :</b></span>
            <span>nimal@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ flex: '0 0 150px' }}><b>Address :</b></span>
            <span>22/5, Nugegoda.</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <Button style={{ background: '#bb437e', color: 'white', width: '200px' }}><b>Edit Profile</b></Button>
          </div>
        </Col>
      </Row>

      <div style={{ backgroundColor: '#bb437e', paddingTop: '10px', paddingBottom: '10px', marginTop: '40px' }}>
        <Row>
          <Col xs={6}>
            <h5>Contact US</h5>
            <p>Address line</p>
            <p>Phone no</p>
            <p>Email Address</p>
            <p>
              <i className="fab fa-facebook-square"></i> <i className="fab fa-whatsapp-square"></i>
              <i className="fab fa-youtube-square"></i> <i className="fab fa-instagram"></i>
            </p>
          </Col>
          <Col xs={6}>
            <h5>Leave a comment</h5>
            <input type="text" placeholder="Name" style={{ width: '100%', marginBottom: '10px' }} />
            <input type="email" placeholder="Email" style={{ width: '100%', marginBottom: '10px' }} />
            <input type="text" placeholder="Subject" style={{ width: '100%', marginBottom: '10px' }} />
            <textarea placeholder="Message" style={{ width: '100%', marginBottom: '10px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button style={{ background: 'black', color: 'white', width: '100px' }}>Send Message</Button>
              <Button style={{ background: 'black', color: 'white', width: '100px' }}>Reviews</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Customer01;
