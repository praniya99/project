import React from 'react'
import Navbar from '../components/Navbar'
import banner3 from '../components/images/banner3.jpg'
import './adminhome.css'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card';

 

export default function AdminHome() {
  return (
    <div >
      <div>
              <Navbar />
      </div>
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
      <div>
        <Footer/>
      </div>
    </div>
  );
}

