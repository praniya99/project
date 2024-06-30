

import { Container, Row, Col } from "react-bootstrap";

import { Outlet } from "react-router-dom";



const AdminLayout = () => {
  return (
    <>
    <Container>
    <Row>
    <Col>
     
    </Col>
  </Row>
  <Row style={{ minHeight: "100vh", marginTop: "-20px" }}>
    <Col>
      <Outlet />
    </Col>
  </Row>
  <Row>
    <Col>
      
    </Col>
  </Row>
  </Container>
</>
);
}


export default AdminLayout
