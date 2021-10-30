import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo1.png'

const Header = () => {
  return (
    <div>
      <>

        <Navbar bg="dark" variant="secondary" sticky="top">
          <Container>
            <img className="logo" src={logo} alt="" />


            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end fw-bold">
              <Nav className="">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#about">ABOUT </Nav.Link>
                <Nav.Link href="#tours">TOURS</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#accommodation">ACCOMMODATION</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>



      </>
    </div>
  );
};

export default Header;