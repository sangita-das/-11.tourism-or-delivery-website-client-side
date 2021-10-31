import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../../../Home/Detail/Cart/Cart';
import Carts from '../../../Home/Detail/Carts/Carts';

const ManageServices = () => {
  const { serviceKey } = useParams()
  const [services, setServices] = useState([]);

  //Selected resort list
  const [carts, setCarts] = useState([]);

  // Loading data
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceKey}`)
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);




  //Selecting resort 
  const HandleBooking = service => {
    //checking duplicate
    const check = carts.find(e => e.key === service.key);
    if (!check) {
      // Adding new resort to the list
      const newCartAddedList = [...carts, service];
      setCarts(newCartAddedList);
    }
  }


  // delete service
  const handleDelete = key => {
    const url = `http://localhost:5000/service/${key}`
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          alert('deleted')
          setServices(data);
        }

      })
  }

  return (



    <div className="container shadow p-4 rounded">
      <h4> This is booking no: {serviceKey} </h4>
      <div>
        <h2>Service Details</h2>
        <div className="text-brand text-center ">
          <img src={services?.img} alt="" />
        </div>
        <div className="col-md-4 text-brand text-center">
          <h4>Resort Nmae: {services?.name}</h4>
          <h4>Location: {services?.address}</h4>
          <p>{services?.description}</p>
          <p>Price: {services?.BDT}</p>
          <p>Email: {services?.Email}</p>
        </div>

        <div className=" p-4 rounded">

          <Link to="/addServices">
            <button className="me-3 btn btn-success"> Procedd Order</button>

          </Link>


          <button onClick={() => handleDelete(services._id)} className="btn btn-danger">Delete</button>
        </div>



        <Link to="/services"> <button>Add service</button> </Link>
      </div>



    </div>
  );
};

export default ManageServices;