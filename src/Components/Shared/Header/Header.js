import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo1.png'

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <>

        <Navbar bg="dark" variant="secondary" sticky="top">
          <Container>
            <img className="logo" src={logo} alt="" />


            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end fw-bold">
              <Nav className="">
                <Nav.Link as={Link} to="/home#home" className="text-light">Home</Nav.Link>
                <Nav.Link as={Link} to="/about#about" className="text-light">About</Nav.Link>

                <Nav.Link as={Link} to="/services#services" className="text-light">Services</Nav.Link>
                <Nav.Link as={Link} to="/adminDashboard#adminDashboard" className="text-light">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/contact#contact" className="text-light">Contact</Nav.Link>
              </Nav>



              {user?.email ?
                <Nav.Link as={Link} to="/addServices#addServices" className="text-light">Add Services</Nav.Link>
                :
                <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>}

              {user?.email ?
                <Nav.Link as={Link} to="/myOrders#myOrders" className="text-light">MyOrders</Nav.Link>
                :
                <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>}
              {user?.email ?
                <Nav.Link as={Link} to="/AddClients#AddClients" className="text-light">Register </Nav.Link>
                :
                <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>}


              {user?.email ?
                <Button onClick={logOut} variant="light">Logout</Button>
                :
                <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>}

              <Navbar.Text className="text-secondary ms-3">
                Signed in as: <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>



      </>
    </div>
  );
};

export default Header;