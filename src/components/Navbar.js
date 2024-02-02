import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="aliceblue" expand="lg">
      <Navbar.Brand href="#home" style={{margin: "15px"}} className="header">Developer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{margin: "15px"}}>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
