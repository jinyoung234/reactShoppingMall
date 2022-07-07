import './App.css';
import {Navbar, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar style={{padding:'20px 40px'}} bg="dark" variant="dark">
          <Navbar.Brand href="#home">JMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
      </Navbar>      
    </div>
  );
}

export default App;
