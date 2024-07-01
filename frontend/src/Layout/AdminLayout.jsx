

import { Container, Row, Col } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import Navigationbar from '../Components/Navigationbar/Navbar'
import AdminFooter from '../Components/AdminFooter/AdminFooter'


const AdminLayout = () => {
  return (
    <>
    <Container >
    <Row >
    <Col >
     <Navigationbar/>
    </Col>
  </Row>
  <Row style={{ minHeight: "110vh", marginTop: "-20px" }}>
    <Col>
      <Outlet />
    </Col>
  </Row>
  <Row>
    <Col>
      <AdminFooter/>
    </Col>
  </Row>
  </Container>
</>
);
}


export default AdminLayout
