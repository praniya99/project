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
      <img src="../src/assets/2.jpg" className="img-fluid" alt="Service Image" />

      <ServiceSection title="Services" />
      <div className="service-cards">
        <ServiceCard imageSrc="../src/assets/4.jpeg" altText="Treading Service" title="Treading"  />
        <ServiceCard imageSrc="../src/assets/3.jpeg" altText="Bridal Service" title="Bridal" />
        <ServiceCard imageSrc="../src/assets/5.jpeg" altText="Makeup Service" title="Makeup" />
        <ServiceCard imageSrc="../src/assets/14.jpeg" altText="Nails Service" title="Nails" />
      </div>

      <ServiceSection title="Staff" />
      <div className="staff-cards">
        <ServiceCard imageSrc="../src/assets/6.jpeg" altText="MS. Kumudika" title="MS. Kumudika"/>
        <ServiceCard imageSrc="../src/assets/7.png" altText="MS. Anuththara" title="MS. Anuththara"/>
        <ServiceCard imageSrc="../src/assets/8.jpeg" altText="MS. Gaweshika" title="MS. Gaweshika"/>
        <ServiceCard imageSrc="../src/assets/15.jpeg" altText= "Miss.Amanda" title="Miss.Amanda "/>
      </div>
       
      <img src="../src/assets/1.png" className="img2" alt="Service Image" />
    </div>
  );
};

export default Home;
