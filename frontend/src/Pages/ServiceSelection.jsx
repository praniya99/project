// src/ServiceSelection.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown, DropdownButton, ListGroup } from 'react-bootstrap';

const services = [
  {
    id: 1,
    name: 'Eye brows & upper lips',
    price: 'LKR 800',
    professionals: ['Any Professional', 'Professional 1', 'Professional 2'],
  },
  {
    id: 2,
    name: 'Ladies Hair Cut',
    price: 'LKR 2500',
    professionals: ['Any Professional', 'Professional 3', 'Professional 4'],
  },
];

function ServiceSelection() {
  const [selectedProfessionals, setSelectedProfessionals] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);

  const handleSelectProfessional = (serviceId, professional) => {
    setSelectedProfessionals((prev) => ({
      ...prev,
      [serviceId]: professional,
    }));
  };

  const handleSelectService = (service) => {
    setSelectedServices((prev) => {
      const isSelected = prev.find((s) => s.id === service.id);
      if (isSelected) {
        return prev.filter((s) => s.id !== service.id);
      }
      return [...prev, service];
    });
  };

  const getTotal = () => {
    return selectedServices.reduce((total, service) => {
      const price = parseFloat(service.price.replace('LKR ', ''));
      return total + price;
    }, 0);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <h4>Professionals</h4>
          {services.map((service) => (
            <Card key={service.id} className="mb-3">
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <Card.Title>{service.name}</Card.Title>
                  </Col>
                  <Col md={4}>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={selectedProfessionals[service.id] || 'Any Professional'}
                      onSelect={(e) => handleSelectProfessional(service.id, e)}
                    >
                      {service.professionals.map((professional, index) => (
                        <Dropdown.Item eventKey={professional} key={index}>
                          {professional}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </Col>
                </Row>
                <Button variant="primary" onClick={() => handleSelectService(service)}>
                  {selectedServices.find((s) => s.id === service.id) ? 'Remove' : 'Select'}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h5>Summary</h5>
              <ListGroup variant="flush">
                {selectedServices.map((service) => (
                  <ListGroup.Item key={service.id}>
                    {service.name} - {service.price}
                    <br />
                    {selectedProfessionals[service.id] && (
                      <small>with {selectedProfessionals[service.id]}</small>
                    )}
                  </ListGroup.Item>
                ))}
                <ListGroup.Item><strong>Total: LKR {getTotal()}</strong></ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="mt-3" block>
                Continue
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceSelection;
