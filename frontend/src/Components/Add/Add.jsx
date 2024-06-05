import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ContainerExample() {
  return (
    <Container fluid>
     <Row style={{padding:"40px"}}>
        <Col sm={1}><a  href=""><i className="fas fa-plus"></i></a>
        
        </Col>
        <Col style={{fontSize:"30px"}}sm={11}>Add Delivery Agents</Col>
      </Row>
    </Container>

    
  );
}

export default ContainerExample;