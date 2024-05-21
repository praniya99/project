import React from 'react';
import Header from '../component/header';
import Card from 'react-bootstrap/Card';
import './home.css';

const ServiceSection = ({ title }) => (
  <div className="service">
    <span className="sev">{title}</span>
  </div>
);

const ServiceCard = ({ imageSrc, altText, title }) => (
  <div className="card-container">
    <Card className="card">
      <Card.Img variant="top" src={imageSrc} alt={altText} className="card-img" />
      <Card.Body className="card-content">
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  </div>
);

const Home = () => {
  return (
    <div>
      <Header />
      <img src="/image/2.jpg" className="img-fluid" alt="Service Image" />

      <ServiceSection title="Services" />
      <div className="service-cards">
        <ServiceCard imageSrc="/image/4.jpeg" altText="Treading Service" title="Treading"  />
        <ServiceCard imageSrc="/image/3.jpeg" altText="Bridal Service" title="Bridal" />
        <ServiceCard imageSrc="/image/5.jpeg" altText="Makeup Service" title="Makeup" />
        <ServiceCard imageSrc="/image/14.jpeg" altText="Nails Service" title="Nails" />
      </div>

      <ServiceSection title="Staff" />
      <div className="staff-cards">
        <ServiceCard imageSrc="/image/6.jpeg" altText="MS. Kumudika" title="MS. Kumudika"/>
        <ServiceCard imageSrc="/image/7.png" altText="MS. Anuththara" title="MS. Anuththara"/>
        <ServiceCard imageSrc="/image/8.jpeg" altText="MS. Gaweshika" title="MS. Gaweshika"/>
        <ServiceCard imageSrc="/image/15.jpeg" altText= "Miss.Amanda" title="Miss.Amanda "/>
      </div>
       
      <img src="/image/1.png" className="img2" alt="Service Image" />
    </div>
  );
};

export default Home;
