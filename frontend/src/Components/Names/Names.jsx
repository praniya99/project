import React from 'react';
import { Button } from 'react-bootstrap';

const RectangleComponent = ({ name, profilePicture, onDelete }) => {
  return (
    <div className="rectangle-container">
      <div className="rectangle" style={{ backgroundColor: '#F1A4BD' }}>
        <img src={profilePicture} alt="Profile" className="profile-picture"style={{backgroundColor:'#D9D9D9'}} />
      <h2 style={{marginRight:''}}>Shashini Nathasha Perera</h2>

       
      </div>
      <Button variant="danger" size="sm" onClick={onDelete} className="delete-button">Delete</Button>
    </div>

    
  );
};

export default RectangleComponent;
