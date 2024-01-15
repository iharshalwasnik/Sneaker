import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../Images/bluelogo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand as={Link} to="/"><img src={logo} alt='' style={{width:'250px',mixBlendMode:'lighten'}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{fontSize:'x-large'}} >
          <Nav.Link as={Link} to="/">HOME</Nav.Link>
          <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
          <Nav.Link as={Link} to="/styling">STYLING</Nav.Link>
          <Nav.Link as={Link} to="/categories">CATEGORIES</Nav.Link>
          <Nav.Link as={Link} to="/orders">ORDERS</Nav.Link>
          <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
          </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control type="text" style={{fontStyle:'italic'}} placeholder="What's up" className=" mr-sm-2"/>
          </Col>
          <Col xs="auto">
            <Button type="submit" variant='secondary'>SEARCH</Button>
          </Col>
        </Row>
      </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>
  )
}

export default Header







/*import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav , Navbar  } from 'react-bootstrap';
import logo from '../Images/bluelogo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/Header.css';

function Header() {
  return (
    <div>
       <Navbar className='navbar' expand="lg" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/"><img src={logo} alt='' style={{width:'250px',mixBlendMode:'lighten'}}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='catalog'>
          <Nav.Link as={Link} to="/">HOME</Nav.Link>
          <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
          <Nav.Link as={Link} to="/styling">STYLING</Nav.Link>
          <Nav.Link as={Link} to="/categories">CATEGORIES</Nav.Link>
          <Nav.Link as={Link} to="/orders">ORDERS</Nav.Link>
          <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control type="text" placeholder="Search" className=" mr-sm-2"/>
          </Col>
          <Col xs="auto">
            <Button type="submit" variant='secondary'>Submit</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  </Navbar>
     </div>
  )
}

export default Header  */