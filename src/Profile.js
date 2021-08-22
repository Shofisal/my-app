import { Container, Row, Col, Image} from "react-bootstrap";
import Gambar from "./img/shofi.jpg";
import './Profile.css';
const Profile = () => {

  return (
    <div className = "Profil">
      <header>
      <h1 className= "judul"><strong>My Profile</strong></h1>
      </header>

      <Container>
    <Row>
    <Col xs={12} md={8}>
    <p>Hello Everyone,</p>
        <p>I'm <strong>Shofiyyah Salma</strong>, a Developer from <strong>Klaten</strong></p>
        <p>I'm Collage student in State Islamic University Yogyakarta </p>
        <p>My hobby is learn something new and learn about tecnology</p>
        <p>Let's Study and Try it !</p>
        <p>Just Scroll this </p>
        <p>for know me more</p>
    </Col>
    <Col xs={6} md={4}>
        <Image className = "Foto" src = {Gambar}  roundedCircle  alt = "FotoSalma" width = "200px" />
    </Col>
  </Row>
  </Container>


    </div>
  );
};

export default Profile;