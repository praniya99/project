import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import exampleImage from '../assets/img/Male.png';

const Names = () => {
  return (
    <div>
      <div style={{ display: 'flex', paddingLeft: '30px', paddingTop: '30px' }}>
        <Button style={{ marginRight: '10px', width: '70px', height: '60px', fontSize: '30px' }}>+</Button>
        <div style={{ fontSize: "30px", paddingTop: '10px' }}>Add Deliveryagents</div>
      </div>
      <div style={{ display: 'flex', paddingLeft: '40px', alignItems: 'center', marginBottom: '20px', paddingTop: '30px' }}>
        <span style={{ fontSize: '25px' }}>Sort by :</span>
        <Dropdown style={{ paddingLeft: '10px' }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            A-Z
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">A</Dropdown.Item>
            <Dropdown.Item href="#/action-2">B</Dropdown.Item>
            <Dropdown.Item href="#/action-3">C</Dropdown.Item>
            <Dropdown.Item href="#/action-4">D</Dropdown.Item>
            <Dropdown.Item href="#/action-5">E</Dropdown.Item>
            <Dropdown.Item href="#/action-6">F</Dropdown.Item>
            <Dropdown.Item href="#/action-7">G</Dropdown.Item>
            <Dropdown.Item href="#/action-8">H</Dropdown.Item>
            <Dropdown.Item href="#/action-9">I</Dropdown.Item>
            <Dropdown.Item href="#/action-10">J</Dropdown.Item>
            <Dropdown.Item href="#/action-11">K</Dropdown.Item>
            <Dropdown.Item href="#/action-12">L</Dropdown.Item>
            <Dropdown.Item href="#/action-13">M</Dropdown.Item>
            <Dropdown.Item href="#/action-14">N</Dropdown.Item>
            <Dropdown.Item href="#/action-15">O</Dropdown.Item>
            <Dropdown.Item href="#/action-16">P</Dropdown.Item>
            <Dropdown.Item href="#/action-17">Q</Dropdown.Item>
            <Dropdown.Item href="#/action-18">R</Dropdown.Item>
            <Dropdown.Item href="#/action-19">S</Dropdown.Item>
            <Dropdown.Item href="#/action-20">T</Dropdown.Item>
            <Dropdown.Item href="#/action-21">U</Dropdown.Item>
            <Dropdown.Item href="#/action-22">V</Dropdown.Item>
            <Dropdown.Item href="#/action-23">W</Dropdown.Item>
            <Dropdown.Item href="#/action-24">X</Dropdown.Item>
            <Dropdown.Item href="#/action-25">Y</Dropdown.Item>
            <Dropdown.Item href="#/action-26">Z</Dropdown.Item>

            

            

          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div style={{ paddingLeft: '40px', paddingTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ height: '70px', backgroundColor: 'pink', width: '1000px', borderRadius: '10px', display: 'flex', alignItems: 'center', paddingLeft: '20px', fontSize: '25px' }}>
            <img src={exampleImage} alt="Example" style={{ height: '50px', width: '50px', borderRadius: '50%', marginRight: '20px' }} />
            Name
          </div>
          <div style={{ display: 'flex', paddingLeft: '30px' }}>
            <Button variant="primary" style={{ marginRight: '10px', width: '80px', height: '70px', fontSize: '15px' }}>View</Button>
            <Button variant="warning" style={{ marginRight: '10px', width: '80px', height: '70px', fontSize: '15px' }}>Edit</Button>
            <Button variant="danger" style={{ width: '80px', height: '70px', fontSize: '15px' }}>Delete</Button>
          </div>
        </div>
      </div>
    </div>

    



  );
};

export default Names;
