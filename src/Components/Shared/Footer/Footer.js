import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1> <span className="text-primary">Cholo</span> Ghuri </h1>

                <h4>A beacon of light on the darker roads of travel.</h4>
                <div className="row mt-4">
                  <div className="footer-menu-container fw-bold">

                    <Nav.Link as={Link} to="/home#home" className="text-light">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about#about" className="text-light">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/package offer#package offer" className="text-light">Package Offer</Nav.Link>
                    <Nav.Link as={Link} to="/accommodation#accommodation" className="text-light">Accommodation</Nav.Link>
                    <Nav.Link as={Link} to="/contacts#contacts" className="text-light">Contact</Nav.Link>

                  </div>
                </div>






              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <h3>Subscribe to our newsletter</h3>
                <input
                  className="footer-input "
                  type="text"
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <div className="mt-5">
                  <h4>Follow us on social media</h4>
                </div>
                <div className="icons-container d-flex text-center ">

                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
              </div>




            </div>
            <div className="col-md-5">
              <div className="right-footer-container">

                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+49 7520 555 85 77</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">

                  </div>
                  <div>
                    <p className="text-center">
                      © 1996-2021, cholo.ghuri@.com, Inc. or its affiliates,
                      <br /> 102 1st Avenue, New York, NY 101
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5">
          <small> Copyright 2014-2021 Cholo-Ghuri | Tourist | All Rights Reserved | Terms and Conditions | Privacy Policy</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;