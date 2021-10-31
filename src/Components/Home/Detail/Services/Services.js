
import Service from '../Service/Service'
import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';

const Services = () => {

  const [services, setServices] = useState([]);

  //Selected resort list
  const [carts, setCarts] = useState([]);

  // fetching data
  useEffect(() => {
    fetch('https://guarded-springs-48893.herokuapp.com/service')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);

  //Selecting resort 
  const handleAddToList = service => {
    //checking duplicate
    const check = carts.find(e => e.key === service.key);
    if (!check) {
      // Adding new resort to the list
      const newCartAddedList = [...carts, service];
      setCarts(newCartAddedList);
    }
  }

  return (

    <div className="row mt-5 ms-5">
      <div className="col-md-9">
        <div className="row">
          {
            // Displaying resort services
            services.map(service => <Service key={service._id} handleAddToList={handleAddToList} service={service}></Service>)
          }
        </div>
      </div>
      <div className="col-md-3">
        {/* displaying selected resort */}
        <Carts carts={carts}></Carts>
      </div>
    </div>
  );
};

export default Services;
