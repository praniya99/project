import { useState } from 'react';
import './BeauticianProfile.css';

const BeauticianProfile = () => {
  const [profile, setProfile] = useState({
    name: 'W.Nimali',
    dob: '1990-03-21',
    gender: 'Female',
    mobile: '0785263419',
    email: 'nimali@gmail.com',
    address: '22/5, Nugegoda',
    qualifications: '',
    image: 'profile-placeholder.png'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="BIg-main-main-rect-Beauticianprofile">
        <div className="main-head-Beauticianprofile">
          <h3 className="main-head-Beauticianprofile1-1">Services</h3>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-header">
          <div className="image-upload">
            <img src={profile.image} alt="Profile" className="profile-image" />
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className="profile-buttons">
            <button>Account</button>
            <button>Leave</button>
            <button>Salary</button>
            <button>History</button>
          </div>
        </div>
        <div className="profile-info">
          <label>
            <strong>Name :</strong>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className='Field2'
            />
          </label>
          <label>
            <strong>Date of birth :</strong>
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              className='Field2'
            />
          </label>
          <label>
            <strong>Gender :</strong>
            <input
              type="text"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className='Field2'
            />
          </label>
          <label>
            <strong>Mobile No :</strong>
            <input
              type="text"
              name="mobile"
              value={profile.mobile}
              onChange={handleChange}
              className='Field2'
            />
          </label>
          <label>
            <strong>e-mail :</strong>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className='Field2'
            />
          </label>
          <label>
            <strong>Address :</strong>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className='Field2'
            />
          </label>
          <label>
            <strong>Qualifications :</strong>
            <textarea
              name="qualifications"
              value={profile.qualifications}
              onChange={handleChange}
              className='Field2'
            />
          </label>
          <button className="schedule-button">Schedule</button>
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default BeauticianProfile;
