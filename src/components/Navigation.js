import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Find a Criterion</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/Explore">Explore</Nav.Link>
        <Nav.Link href="/Browse">Browse</Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default Navigation;
