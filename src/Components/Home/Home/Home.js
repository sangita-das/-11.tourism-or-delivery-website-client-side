// import React, { useEffect, useState } from 'react';

import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonials/Testimonials';
import aboutimg from '../../../images/about/aboutimg.jpg'
import '../Home/Home.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Detail/Service/Service';



const Home = () => {
  const [services, setServices] = useState([]);

  //Selected resort list
  const [carts, setCarts] = useState([]);

  // fetching data
  useEffect(() => {
    fetch('/resort.json')
      .then(res => res.json())
      .then(data => setServices(data.slice(0, 6)))
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
    <div>
      <Banner></Banner>
      {/* ------------------------welcome----------- */}
      <div className="container">
        <div className="row d-flex- justify-content-center align-items-center py-5 my-5">
          <div className="col-md-6">
            <img className="" src={aboutimg} alt="" />

          </div>
          <div className="col-md-6">
            <h1 className="text-dark">Warmly Welcome to you for visiting .....</h1>
            <p className="text-black"> <strong>Dedicated to a truly sustainable and sincerely responsible travel & tourism industry; featuring news, opinions, stories, and evolving best practices.</strong>
            </p>

            <p>With all the advancements in technology, online travel booking websites has proved to be a blessing for the modern world. You can book tickets, find the best place to stay and more.

              Below are some awesome travel web design inspirations for online websites. They are some of the perfect example of feature rich and user-friendly websites. If you want to start an online travel booking website, travel ​portal development  you can draw inspiration from them</p>
          </div>

        </div>
      </div>


      <h2 className="text-primary fw-bold">Upcoming TOURS</h2>

      <p className="fw-bold">All our services are given here. Choose your desire dream destination and click the book-now button <br /> for adding our special package service in your cart. Happy Travelling.</p>

      <div className="row container ms-5 ps-5">
        {
          // Displaying resort services
          services.map(service => <Service key={service.key} handleAddToList={handleAddToList} service={service}></Service>)
        }
      </div>

      <Testimonials></Testimonials>

      <Footer></Footer>
    </div>
  );
};

export default Home;