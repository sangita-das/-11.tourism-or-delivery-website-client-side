import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cartIcon, faList } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';


const Carts = (props) => {
  // Destructuring select places from props
  const { carts } = props || {};

  const cartIcon = <FontAwesomeIcon icon={faList} />


  // Calculating total cost
  const total = carts.reduce((previous, service) => previous + service.BDT, 0);



  return (
    <div className="shadow rounded p-4 sticky-top bg-light">
      <h5 className="fw-bold">{cartIcon} Booking List : <span className="text-success">{carts.length}</span></h5>
      {
        // displaying all selected place
        carts.map(service => <Cart key={service.key} service={service}></Cart>)

      }

      <h5 className="fw-bold mt-3">Total Cost : <span className="text-success"> {total}TK</span></h5>

      <Link to="addServices">
        <button>Proceed</button>
      </Link>

    </div>
  );
};

export default Carts;