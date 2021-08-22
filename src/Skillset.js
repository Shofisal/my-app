import Gambar from "./img/html.png";
import { Container, Row, Col, Image } from "react-bootstrap"
import './Skillset.css';


const Skillset = () => {

    return (
      <div className = "Skillset">
          <h1 className = "Judul3">Skillset</h1>
          <Container>
  <Row>
    <Col><Image src = {Gambar}/></Col>
  </Row>
</Container>
      </div>
    );
  };
  
  export default Skillset;