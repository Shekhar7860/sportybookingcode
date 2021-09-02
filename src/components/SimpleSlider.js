import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="mobileViwe testimonial">
        <section className="spotywork">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="spotyworktext">
                <h2 className="title">How SportyBooking Works</h2>
              </div>
            </div>
            </div>
            </div>
            </section>
        <Slider {...settings}>
          <div>
          <div className="col-md-12 mt-4">
               <div className="box-one">
                 <span>1</span>
                 <h3>Browse Facilities</h3>
                 <p>Start by searching for a location in the area. You are now connected to the world’s top sports facilities. You can easily browse all available listings in the area with our convenient map view.</p>
               </div>
             </div>
          </div>
          <div>
          <div className="col-md-12 mt-4">
               <div className="box-one">
                 <span>2</span>
                 <h3>Book a Time</h3>
                 <p>View availablilty in real time and select a time that works for you.  Book and pay with confidence as all bookings are confirmed directly with the facility and paid online through our secure Stripe payment system.</p>
               </div>
             </div>
          </div>
          <div>
          <div className="col-md-12 mt-4">
               <div className="box-one">
                 <span>3</span>
                 <h3>Game On</h3>
                 <p>Grab your skates, sticks, shoes or cleats and go! Improve your skills and stay active while enjoying the best facilities in the area. After your done, don't forget to book your next session. Game on.</p>
               </div>
             </div>
          </div>
        
        </Slider>
      </div>
    );
  }
}