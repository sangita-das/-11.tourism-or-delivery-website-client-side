import React from 'react';

const Cart = (props) => {
  // Destructuring object
  const { img, name, BDT } = props.service;
  return (


    <div className="d-flex align-items-center shadow-sm mt-3 px-2">
      <div className="w-25">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="w-75 ms-3">
        <h6>{name}</h6>
        <p>Cost: {BDT} tk</p>
      </div>

    </div>
  );
};

export default Cart;