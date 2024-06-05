

import { Container, Row, Col } from "react-bootstrap";
import Adminheader from "../Components/Adminheader/Adminheader";
import { Outlet } from "react-router-dom";
import Adminfooter from "../Components/Adminfooter/Adminfooter";


const AdminLayout = () => {
  return (
    <>
    <Container>
    <Row>
    <Col>
      <Adminheader />
    </Col>
  </Row>
  <Row style={{ minHeight: "100vh", marginTop: "-20px" }}>
    <Col>
      <Outlet />
    </Col>
  </Row>
  <Row>
    <Col>
      <Adminfooter />
    </Col>
  </Row>
  </Container>
</>
);
}


export default AdminLayout
