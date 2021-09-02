import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import rinks from "../assets/images/landingrinks.png";
import feilds from "../assets/images/landingfields.png";
import courts from "../assets/images/landingcourts.png";
import dark from "../assets/images/DarkOverlay.png";
import tennis from "../assets/images/image10.png";
import indoor from "../assets/images/indoor-tennis-court.png";
import SimpleSlider from "./SimpleSlider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <section className="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="bannertext">
                <h2>
                  Discover & Book a Sports <br />
                  Facility Near You
                </h2>
                <form>
                  <div className="search-form">
                    <div className="form-group">
                      <i className="fa fa-search"></i>
                      <input type="search" placeholder="Your Location" />
                      <i className="fas fa-map-marker-alt"></i>
                      <Link to="/search">
                        <button className="btn btn-search">Search</button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-facilities">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title">Explore Facilities</h2>
            </div>
            <div className="col-md-4 mb-4">
              <div className="box">
                <img src={rinks} />
                <p>Ice Rinks</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="box">
                <img src={feilds} />
                <p>Fields</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="box">
                <img src={courts} />
                <p>Indoor Courts</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="box">
                <img src={tennis} />
                <p>Tennis Courts</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="box">
                <img src={indoor} />
                <p>Fitness</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="box">
                <img src={dark} />
                <p>More</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spotywork desktopViwe">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="spotyworktext">
                <span></span>
                <h2 className="title">How SportyBooking Works</h2>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="box-one">
                <span>1</span>
                <h3>Browse Facilities</h3>
                <p>
                  Start by searching for a location in the area. You are now
                  connected to the world’s top sports facilities. You can easily
                  browse all available listings in the area with our convenient
                  map view.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="box-one">
                <span>2</span>
                <h3>Book a Time</h3>
                <p>
                  View availablilty in real time and select a time that works
                  for you. Book and pay with confidence as all bookings are
                  confirmed directly with the facility and paid online through
                  our secure Stripe payment system.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="box-one">
                <span>3</span>
                <h3>Game On</h3>
                <p>
                  Grab your skates, sticks, shoes or cleats and go! Improve your
                  skills and stay active while enjoying the best facilities in
                  the area. After your done, don't forget to book your next
                  session. Game on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SimpleSlider />

      <Footer />
    </>
  );
};

export default Home;
