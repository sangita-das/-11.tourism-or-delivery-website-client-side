import React from 'react';
import { Navbar } from 'react-bootstrap';


const Topbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark px-5 ">
        <div className="container-fluid">

          <Navbar.Brand className="text-light fw-bold" href="#home">Cholo-Ghuri</Navbar.Brand>

          <div className="collapse navbar-collapse ms-5 ps-5" id="navbarSupportedContent">
            <h4 className="text-secondary">What is your next destination?</h4>
            <form className="d-flex flex-fill mx-5">

              <input className="form-control me-2 bg-dark" type="search" placeholder="SEARCH THE PLACE" aria-label="Search" />
              <button className="btn btn-secondary" type="submit">Search</button>
            </form>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Topbar;