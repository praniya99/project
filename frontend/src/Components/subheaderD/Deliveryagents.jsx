import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ContainerExample() {
  return (
<div>
<Container fluid>
      <Row style={{backgroundColor:"#F1A4BD",display:'flex'}}>
        <Col style={{padding:"40px"}}><h1>Delivery Agents</h1></Col>

      </Row>
    </Container>

</div>

   
  );
}

export default ContainerExample;