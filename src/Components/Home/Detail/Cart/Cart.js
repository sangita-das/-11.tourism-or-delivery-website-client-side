import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  // Destructuring object
  const { _id, img, name, BDT } = props.service;
  return (


    <div className="d-flex align-items-center shadow-sm mt-3 px-2">
      <div className="w-25">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="w-75 ms-3">
        <h6>{name}</h6>
        <p>Cost: {BDT} tk</p>
      </div>
      <div>

        <Link to={`/manageServices/${_id}`}>
          <button className="btn btn-warning m-5 ">Confirm Booking</button>
        </Link>

      </div>

    </div>
  );
};

export default Cart;