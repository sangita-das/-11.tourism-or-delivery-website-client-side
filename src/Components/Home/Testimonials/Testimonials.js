import React from 'react';
import img1 from '../../../images/Testimonials/img1.png';
import img2 from '../../../images/Testimonials/img2.jpeg';
import img3 from '../../../images/Testimonials/img3.jpeg';

import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="container testimonials ">

      <h2 className="">Testimonials</h2>


      <div className="row">
        <div className="col-md-4 text-center">
          <div className="profile">
            <img src={img1} alt="" className="image" />
            <blockquote>
              I cannot speak highly enough about our 3 week trip to this place and the services provided by this travel company. Everything was seamless. The private guides were interesting and knowledgable. We felt that they were more than just guides. It was like we had a friend in each city.
            </blockquote>
            <h5 className="fw-bold">LARA CROWN</h5>
          </div>
        </div>

        <div className="col-md-4 text-center ">
          <div className="profile">
            <img src={img2} alt="" className="image" />
            <blockquote className="mt-4">
              My fiance and I had never been to Miami Beach, but wanted to plan a unique elopement trip to Florida. We had no idea where to start, and turned to some internet research to find the services of Zicasso. I cannot speak highly enough about our 3 week trip to this place.


            </blockquote>
            <h5 className="fw-bold text-dark">JARRY SPNELL</h5>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="profile">
            <img src={img3} alt="" className="image" />
            <blockquote>
              Everything was seamless. The private guides were interesting and knowledgeable. We felt that they were more than just guides. It was like we had a friend in each city. I cannot speak highly enough about our 3 week trip to this place and the services provided by them.
            </blockquote>
            <h5 className="fw-bold">TASHA STEWART </h5>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Testimonials;