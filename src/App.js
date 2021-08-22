// import logo from './logo.svg';
import './App.css';
import {  Navbar, Nav} from "react-bootstrap";
import Profile from "./Profile";
import Experience from './Experience';
import Skillset from './Skillset';
import LastWork from './LastWork';
function App() {
  return (
    <div className="App">
      <header>
        
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Shofiyyah Salma</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Profile</Nav.Link>
      <Nav.Link href="#action2">Experience</Nav.Link>
      <Nav.Link href="#action1">Skillset</Nav.Link>
      <Nav.Link href="#action1">Last Work</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<h1 className= "Judul1">PERSONAL WEBSITE</h1>
<Profile/>
<Experience/>
<Skillset/>
<LastWork/>
</header>
    </div>
  );
}

export default App;
