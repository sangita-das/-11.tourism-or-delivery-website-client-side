import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <section className="contact my-5 py-5 mx-5 px-5 rounded shadow-lg">
      <h5>Ready to take the next step towards your goals? Fill out the form or email <strong>cholo.ghuri@gmail.com</strong> and we’ll get back to you as soon as we can. Before you contact us, you may like to read more about us or view our services and available packages from our extensive portfolio of <strong>Cholo-Ghuri</strong> websites.</h5>
      <div className="container me-5 ">
        <div className="section-header text-center text-white mb-5">
          <h2 className="text-primary fw-bold mt-4">Contact Us</h2>
          <h4 className="text-center fw-bold text-dark">We'd Love To Hear From You!</h4>
          <h1 className="text-secondary mt-5">Leave Your Message Here</h1>
        </div>


        <div className="row d-flex- justify-content-center align-items-center mx-5 px-5">
          <div className="col-md-6 mx-auto  ">

            <div className="col-md-6 ">

              <div className=" contact-info ">
                <p className="fw-bold">Monday to Saturday:</p>
                <h5>9:00 AM to 6:00 PM</h5>
                <div className="phone d-flex align-items-center justify-content-center mt-4">

                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <p className="fw-bold">24/7 service available</p>
                    <br />
                    <h5>Call Now:</h5>
                    <h5>001 998 657 4444</h5>
                    <h6>E-mail: info@p.chologhuri.com</h6>
                    <h6>E-mail: cholo.ghuri@gmail.com</h6>
                  </div>
                </div>
                <br />
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">

                  </div>
                  <div>
                    <h6 className="text-center">
                      © 1996-2021, cholo.ghuri@gmail.com, Inc. or its affiliates,
                      <br /> 102 1st Avenue, New York, NY 101;
                      <br /> 685 Lane Drive St.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-6 ">
            <form action="">
              <div className="form-group mb-3">
                <input type="text" className="form-control  text-white" placeholder="Name *" />
              </div>
              <div className="form-group mb-3">
                <input type="text" className="form-control  text-white" placeholder="Email Address *" />
              </div>
              <div className="form-group mb-3">
                <input type="text" className="form-control  text-white" placeholder="Subject *" />
              </div>
              <div className="form-group mb-3">
                <textarea name="" className="form-control  text-white" id="" cols="30" rows="10" placeholder="Type Your Message *"></textarea>
              </div>
              <div className="form-group text-center">
                <button type="button" className="btn btn-lg btn-primary"> Send </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;