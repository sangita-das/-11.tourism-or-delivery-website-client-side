import React, { useEffect, useState } from 'react';
import Carts from '../../../Home/Detail/Carts/Carts';

const ManageServices = () => {
  const [services, setServices] = useState([]);

  //Selected resort list
  const [carts, setCarts] = useState([]);

  // fetching data
  useEffect(() => {
    fetch('/resort.json')
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

  return (
    <div className="container">
      {/* displaying selected resort */}
      <Carts carts={carts}></Carts>
    </div>
  );
};

export default ManageServices;