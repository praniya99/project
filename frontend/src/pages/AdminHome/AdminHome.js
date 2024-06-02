import React from 'react'
import banner3 from '../../assests/images/adminhome/banner3.jpg'
import './adminhome.css'
import Card from 'react-bootstrap/Card';


export default function AdminHome() {
  return (
    <div >
      
      <div className='image-container'>
        <div><Card className="card-no-border-radius text-white">
      <Card.Img src={banner3} alt="Card image" />
      <Card.ImgOverlay className='title'>
        <Card.Text className='text'>
        Welcome to the</Card.Text>
       <Card.Title className='Title' >Kumudika's</Card.Title>
       <Card.Title className='Title' > Saloon</Card.Title>

      </Card.ImgOverlay>
    </Card></div>
      </div>
      
    </div>
  );
}

