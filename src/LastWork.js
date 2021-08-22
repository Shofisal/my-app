import Gambar from "./img/ilpus.png";
import { Card } from "react-bootstrap"
import './LastWork.css';


const LastWork = () => {

    return (
      <div className = "LastWork">
          <h1 className = "Judul4">Last Work</h1>
          <Card>
    <Card.Body>
      <Card.Text>
        Membuat Website mengenai perpustakaan
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src= {Gambar} width = "500px" height = "500px"/>
  </Card>

      </div>
    );
  };
  
  export default LastWork;