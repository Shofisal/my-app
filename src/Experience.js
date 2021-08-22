import {Container, Row, Col, Card} from "react-bootstrap";
import Gambar from "./img/scholars.png";
import Gambar2 from "./img/jasaraharja.jpeg";
import './Experience.css';
const Experience = () => {

    return (
      <div className = "Experience">
          <h1 className= "Judul2">Experience</h1>
            <Container>
    <Row>
    <Col xs={12} md={8}>
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Gambar} />
  <Card.Body>
    <Card.Title>Magang Digital Marketing</Card.Title>
    <Card.Text>
        <p>Scholars Official</p>
        <p>Juli 2020 - Sekarang</p>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Gambar2} />
    <Card.Body>
      <Card.Title>Pelatihan Web Development</Card.Title>
      <Card.Text>
        <p>Jasa Raharja Resilience</p>
        <p>Juni - Agustus 2021</p>
      </Card.Text>
    </Card.Body>
  </Card>
  </Col> 
  
  </Row>
  </Container>
  
      </div>
    );
  };
  
  export default Experience;