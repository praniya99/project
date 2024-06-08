
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const services = [
  { id: 1, category: 'popular', name: 'Eye brows & upper lips', duration: '15 mins', price: 'LKR 800' },
  { id: 1, category: 'popular', name: 'Eye brows & upper lips', duration: '15 mins', price: 'LKR 800' },


  { id: 2, category: 'Hair cut', name: 'Eye brows & upper lips', duration: '15 mins', price: 'LKR 800' },
  { id: 2, category: 'Hair cut', name: 'Eye brows & upper lips', duration: '15 mins', price: 'LKR 800' },
  { id: 2, category: 'Hair cut', name: 'Eye brows & upper lips', duration: '15 mins', price: 'LKR 800' },
  { id: 2, category: 'Hair cut', name: 'Eye brows & upper lips', duration: '15 mins', price: 'LKR 800' },
  { id: 2, category: 'Hair cut', name: 'Eye brows & upper lips', duration: '15 mins', price: 'LKR 800' },
  // Oyata tawa services oone nam add karaganna.Prices wla value eka change karaganna oone nam.Caregory ekath change karanna Puluwan.
];

function Booking02() {
  const [selectedServices, setSelectedServices] = useState([]);

  const addService = (service) => {
    setSelectedServices([...selectedServices, service]);
  };

  const total = selectedServices.reduce((sum, service) => sum + parseInt(service.price.split(' ')[1]), 0);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1><b>Select services</b></h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          {['popular', 'Hair cut'].map((category) => (
            <div key={category}>
              <h3>{category}</h3>
              {services.filter(service => service.category === category).map(service => (
                <Card key={service.id} className="my-2">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title>{service.name}</Card.Title>
                      <Card.Text>{service.duration}</Card.Text>
                      <Card.Text>{service.price}</Card.Text>
                    </div>
                    <Button onClick={() => addService(service)}>+</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          ))}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Selected Services</Card.Title>
              <ListGroup variant="flush">
                {selectedServices.length === 0 ? (
                  <ListGroup.Item>No services selected</ListGroup.Item>
                ) : (
                  selectedServices.map((service, index) => (
                    <ListGroup.Item key={index}>
                      {service.name} - {service.price}
                    </ListGroup.Item>
                  ))
                )}
              </ListGroup>
              <Card.Text className="mt-3">Total: LKR {total}</Card.Text>
              <Button variant="primary" disabled={selectedServices.length === 0}>
                Continue
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Booking02;
