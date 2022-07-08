// nav bar import
import {Navbar, Nav} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

// nav bar
function NavigationBar() {
    let nevigate = useNavigate();
    return (
      <>
        {/* nav bar */}
        <Navbar style={{padding:'20px 40px'}} bg="dark" variant="dark">
            <Navbar.Brand onClick={()=>{nevigate('/')}}>JMall</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="nav-text" onClick={() => {nevigate('/')}}>
                Home
              </Nav.Link>
              <Nav.Link className="nav-text" onClick={() => {nevigate('/detail')}}>
                Detail
              </Nav.Link>
            </Nav>
        </Navbar>
        {/* end nav bar */}
      </>     
    )
}

export default NavigationBar;