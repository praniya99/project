import { Container, Row, Col } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import AdminFooter from "../Components/AdminFooter/AdminFooter"
import BeauticianNavbar from "../Components/BeauticianNavbar/BeauticianNavbar";

function BeauticianLayout() {
  return (
    <>
    <Container>

        <Row>
            <Col>
               <BeauticianNavbar/>
            </Col>
        </Row>

        <Row style={{ minHeight: "100vh", marginTop: "-20px" }}>
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
  )
}

export default BeauticianLayout
