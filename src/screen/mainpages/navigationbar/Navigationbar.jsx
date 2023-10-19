import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Navlogo from '../../../assets/navlogo.png'
import Navback from '../../../assets/navback.png'
import "./navigationbar.css"

const BasicExample = () => {
  return (
    <>
      <Navbar bg="#fff" expand="lg" className='navbar'>
        <Container fluid className='mx-5'>
          <Link to="/"><img src={Navlogo} alt="navlogo" className='nav_logo' /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav_text">
              <Link to="/">Home</Link>
              <Link to="/solution">Solution</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img src={Navback} alt="navback" className='nav_image' />
    </>
  );
}
export default BasicExample;