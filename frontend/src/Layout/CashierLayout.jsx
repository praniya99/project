import { Container, Row, Col } from "react-bootstrap";

import { Outlet } from "react-router-dom";
//import CashierNav from "../Components/CashierNav/CashierNav"
import AdminFooter from "../Components/AdminFooter/AdminFooter"

function CashierLayout() {
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
                <AdminFooter/>
            </Col>
        </Row>

    </Container>
    </>
  )
}

export default CashierLayout
