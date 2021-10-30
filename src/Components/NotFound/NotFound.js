import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="mt-5 pt-5">
      <h1>404</h1>
      <h1>!!</h1>
      <h3>Opps!! sorry, Page Not Found.</h3>

      <p>Well, This is awkward. This site you're looking for is not here.</p>
      <Link to="/" ><button className="btn btn-success">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;