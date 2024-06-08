import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const appointments1 = [
  {
    id: 1,
    serviceName: 'Eye brows & upper lips',
    price: 'LKR 800.00',
    duration: '15 min',
    professional: 'MRS.Kumudika',
    venue: 'Egodagama, Madampe, Chilaw',
    date: '17 May 2024, 9:00 A.M.',
    bookingRef: '182024',
  }
];

const appointments2 = [

    {
      id: 2,
      serviceName: 'Eye brows & upper lips',
      price: 'LKR 2500.00',
      duration: '1 hour',
      professional: 'MRS.Nadeka',
      venue: 'Egodagama, Madampe, Chilaw',
      date: '17 May 2024, 9:00 A.M.',
      bookingRef: '2B2024',
    }
  ];

function Appointment02() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <div className="mb-3">
              <div className="rounded-circle bg-secondary d-inline-block" style={{ width: '100px', height: '100px', lineHeight: '100px', fontSize: '50px', color: 'white', backgroundColor: 'pink' }}>
                  N
                </div>
              </div>
              <Card.Title>Nathasha Perera</Card.Title>
              <Card.Link href="#" style={{textDecoration:'none'}}>Edit basic info</Card.Link>
              <ListGroup variant="flush" className="text-left mt-3">
                <div style={{textAlign:'left'}}>
                <ListGroup.Item style={{border:'0'}}><b>First name:</b><br/>Nathasha</ListGroup.Item>
                <ListGroup.Item style={{border:'0'}}><b>Last name:</b><br/> Perera</ListGroup.Item>
                <ListGroup.Item style={{border:'0'}}><b>Mobile number:</b><br/> +94 767331989</ListGroup.Item>
                <ListGroup.Item style={{border:'0'}}><b>Email Address:</b><br/> sjfnsjfjnsjdns@gmail.com</ListGroup.Item>
                <ListGroup.Item style={{border:'0'}}><Card.Link href="#" style={{textDecoration:'none'}}><b>My Address</b></Card.Link></ListGroup.Item>
                <ListGroup.Item style={{border:'0'}}><Card.Link href="#" style={{textDecoration:'none'}}><b>My payments methods</b></Card.Link></ListGroup.Item>
                <ListGroup.Item className="text-danger" style={{border:'0'}}><Card.Link href="#" className="text-danger" style={{textDecoration:'none'}}><b>Delete My Account</b></Card.Link></ListGroup.Item>

                </div>
              </ListGroup>
              <Button variant="link" className="text-danger" style={{textDecoration:'none'}}><b>Log out</b></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Appointments</Card.Title>

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Eye Brows and Upper Lips</b></Accordion.Header>
        <Accordion.Body>
        {appointments1.map((appointment) => (
                <Card key={appointment.id} className="mb-3">
                  <Card.Body>
                    <Card.Title>{appointment.serviceName}</Card.Title>
                    <Card.Text>
                      <strong>Details</strong><br />
                      {appointment.serviceName} - {appointment.price}<br />
                      Duration: {appointment.duration}<br />
                      Professional: {appointment.professional}<br />
                      Venue: {appointment.venue}<br />
                      Date: {appointment.date}<br />
                      <strong>Cancellation policy</strong><br />
                      Please avoid cancelling within 30 minutes of your appointment time<br />
                      <Card.Link href="#">Manage appointment</Card.Link><br />
                      Booking ref: {appointment.bookingRef}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}

        </Accordion.Body>
      </Accordion.Item>
    </Accordion><br/>


    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Eye Brows and Upper Lips</b></Accordion.Header>
        <Accordion.Body>
        {appointments2.map((appointment) => (
                <Card key={appointment.id} className="mb-3">
                  <Card.Body>
                    <Card.Title>{appointment.serviceName}</Card.Title>
                    <Card.Text>
                      <strong>Details</strong><br />
                      {appointment.serviceName} - {appointment.price}<br />
                      Duration: {appointment.duration}<br />
                      Professional: {appointment.professional}<br />
                      Venue: {appointment.venue}<br />
                      Date: {appointment.date}<br />
                      <strong>Cancellation policy</strong><br />
                      Please avoid cancelling within 30 minutes of your appointment time<br />
                      <Card.Link href="#">Manage appointment</Card.Link><br />
                      Booking ref: {appointment.bookingRef}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Appointment02;
