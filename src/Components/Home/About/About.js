import React from 'react';
import aboutimg from '../../../images/about/aboutimg.jpg';
import aboutimg2 from '../../../images/about/aboutimg2.jpg';
import aboutbanner from '../../../images/about/about-banner.png';




const About = () => {
  return (
    <div>
      <img className="container-fluid bg-dark" src={aboutbanner} alt="" />
      <div className="container">

        <h1 className="text-dark mt-5 pt-5">Warmly Welcome to you for visiting our Website</h1>
        <div className="row d-flex- justify-content-center align-items-center ">
          <div className="col-md-6">
            <img className="" src={aboutimg} alt="" />

          </div>
          <div className="col-md-6">

            <p className="text-black"> <strong>Dedicated to a truly sustainable and sincerely responsible travel & tourism industry; featuring news, opinions, stories, and evolving best practices.</strong>
            </p>

            <p>With all the advancements in technology, online travel booking websites has proved to be a blessing for the modern world. You can book tickets, find the best place to stay and more.

              Below are some awesome travel web design inspirations for online websites. They are some of the perfect example of feature rich and user-friendly websites. If you want to start an online travel booking website, travel ​portal development  you can draw inspiration from them</p>
          </div>

        </div>


        <div className="row d-flex- justify-content-center align-items-centercontainer my-5 ">

          <div className="col-md-6">

            <p>Imagine that you're careening through the city on an old bus, and you find a notebook wedged in the corner of the seat. Open it up. Dusty sketches of swampy backwaters, photographs of foreign lands, illustrations of exotic foods. No destination reviews, no top 10 lists and no industry guest posts. It appears to be written merely for the joy of curious explorers and travelers.

              This was the reason I set out to create Notes from the Road in 1999. If you enjoy reading about travel, dive in: Notes from the Road rewards readers who enjoy digging deep and exploring even while surfing the web. Check out my Roam section, where I write about everything from organizing for travel, to the importance of science to travel bloggers, to traveling through the deserts of Mexico and the fight to save the marine wilderness of Guana Cay.</p>
          </div>
          <div className="col-md-6 mb-5 pm-5">
            <img className="" src={aboutimg2} alt="" />

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;