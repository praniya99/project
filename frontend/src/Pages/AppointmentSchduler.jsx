import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const dates = [17, 18, 19, 20, 21, 22];
  const times = [
    "9:00 A.M",
    "9:15 A.M",
    "9:30 A.M",
    "9:00 A.M",
    "9:00 A.M",
    "9:00 A.M",
    "8:00 A.M",
    "9:00 A.M",
  ];

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={6}>
            <div style={{paddingLeft:'50px'}}>
            <h6><b>Service Proffessional Time</b> Confirm</h6>   
            <h3><b>Time</b></h3>
          <DropdownButton  id="dropdown-item-button" title="Mrs Kumudika">
            <Dropdown.ItemText >Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
            </div>
            <br/>
            <span style={{paddingLeft:'7px',fontSize:'17px'}}>May 2024</span>
          <br/>
          <div>
            {dates.map((date) => (
              <Button
                style={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  margin: "5px",
                  fontWeight:'750'
                  
                }}
                key={date}
                variant={selectedDate === date ? "primary" : "outline-primary"}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </Button>
            ))}
          </div>
          <br/><br/>
          <Card>
            <Card.Body>
              <ListGroup>
                {times.map((time, index) => (
                  <ListGroup.Item style={{margin:'10px',fontSize:'20px'}}
                    key={index}
                    action
                    active={selectedTime === time}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h5>Eye brows & upper lips</h5>
              <p>15 mins with MRS.Kumudika</p>
              <p>Total: LKR 800</p>
              <hr />
              <div className="d-grid">
                <Button 
                  variant="primary"
                  disabled={!selectedDate || !selectedTime}
                >
                  Continue
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentScheduler;
