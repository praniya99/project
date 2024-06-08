import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import image from '../assets/Male.png';
import Button from 'react-bootstrap/Button';

function Admin01() {
  return (
    <div>
       <h1 style={{backgroundColor:'pink', height:'100px',textAlign:'center'}}>List of Customers</h1><br/><br/><br/><br/>
    <div style={{display:'flex'}}>   <span style={{paddingLeft:'40px', fontSize:'25px'}}>sort by :</span>
       <Dropdown style={{paddingLeft:'10px'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        A-Z
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">A</Dropdown.Item>
        <Dropdown.Item href="#/action-2">B</Dropdown.Item>
        <Dropdown.Item href="#/action-3">C</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>

    <div style={{paddingLeft:'40px', paddingTop:'20px',display:'flex'}}>
    <div style={{height:'70px', backgroundColor:'pink', width:'1000px', borderRadius:'10px',paddingLeft:'20px',fontSize:'25px'}}>
    <img src={image} alt="Example" className="img-fluid" />
        Name
    </div>
   <div style={{paddingLeft:'30px'}}> <Button variant="danger" style={{width:'200px',height:'70px',color:'black',fontSize:'30px'}}>Delete</Button>{' '}</div>
    </div>
    <div style={{paddingLeft:'40px', paddingTop:'20px',display:'flex'}}>
    <div style={{height:'70px', backgroundColor:'pink', width:'1000px', borderRadius:'10px',paddingLeft:'20px',fontSize:'25px'}}>
    <img src={image} alt="Example" className="img-fluid" />
        Name
    </div>
   <div style={{paddingLeft:'30px'}}> <Button variant="danger" style={{width:'200px',height:'70px',color:'black',fontSize:'30px'}}>Delete</Button>{' '}</div>
    </div>
    <div style={{paddingLeft:'40px', paddingTop:'20px',display:'flex'}}>
    <div style={{height:'70px', backgroundColor:'pink', width:'1000px', borderRadius:'10px',paddingLeft:'20px',fontSize:'25px'}}>
    <img src={image} alt="Example" className="img-fluid" />
        Name
    </div>
   <div style={{paddingLeft:'30px'}}> <Button variant="danger" style={{width:'200px',height:'70px',color:'black',fontSize:'30px'}}>Delete</Button>{' '}</div>
    </div>
    <div style={{paddingLeft:'40px', paddingTop:'20px',display:'flex'}}>
    <div style={{height:'70px', backgroundColor:'pink', width:'1000px', borderRadius:'10px',paddingLeft:'20px',fontSize:'25px'}}>
    <img src={image} alt="Example" className="img-fluid" />
        Name
    </div>
   <div style={{paddingLeft:'30px'}}> <Button variant="danger" style={{width:'200px',height:'70px',color:'black',fontSize:'30px'}}>Delete</Button>{' '}</div>
    </div>
    <div style={{paddingLeft:'40px', paddingTop:'20px',display:'flex'}}>
    <div style={{height:'70px', backgroundColor:'pink', width:'1000px', borderRadius:'10px',paddingLeft:'20px',fontSize:'25px'}}>
    <img src={image} alt="Example" className="img-fluid" />
        Name
    </div>
   <div style={{paddingLeft:'30px'}}> <Button variant="danger" style={{width:'200px',height:'70px',color:'black',fontSize:'30px'}}>Delete</Button>{' '}</div>
    </div>
    <div style={{paddingLeft:'40px', paddingTop:'20px',display:'flex'}}>
    <div style={{height:'70px', backgroundColor:'pink', width:'1000px', borderRadius:'10px',paddingLeft:'20px',fontSize:'25px'}}>
    <img src={image} alt="Example" className="img-fluid" />
        Name
    </div>
   <div style={{paddingLeft:'30px'}}> <Button variant="danger" style={{width:'200px',height:'70px',color:'black',fontSize:'30px'}}>Delete</Button>{' '}</div>
    </div>
    
    </div>
  )
}

export default Admin01
