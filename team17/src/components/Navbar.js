import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../download.png';
import './Navbar.css';

function NavBar() {
  return (
      <>
        <Navbar className="navBar" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img id="logo" src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
            </Navbar.Brand>
            <Nav className="nav-links"> 
              <Nav.Link className="nav-link" href="/page">Posts</Nav.Link>
              <Nav.Link className="nav-link" href="/directory">Alumni Directory</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="navBar-line"></div>
      </>
  );
}

export default NavBar;
