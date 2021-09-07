import React from 'react'
import Ownerheader from '../Ownerheader'
import home from '../../assets/owner/home.png'
import calendar from '../../assets/owner/calendar.png'
import listings from '../../assets/owner/listings.png'
import bookings from '../../assets/owner/bookings.png'
import facilities from '../../assets/owner/facilities.png'
import Payments from '../../assets/owner/Payments.png'
import notifications from '../../assets/owner/notifications.png'
import subscriptions from '../../assets/owner/subscriptions.png'
import one from '../../assets/images/imagesearch.png'
import verify from '../../assets/images/Verified.png'
import preium from '../../assets/images/preium.png'
import Pending from '../../assets/images/Pending.png'
import Premium from '../../assets/images/Premium.png'
import { Link } from 'react-router-dom'


const OwnerMyFacilities  = () => {
    return (

        <div>
        <Ownerheader />
        <section className="owner-home">
            <div className="owner-main">
                <div className="onwer-left">
                    <div className="owner-icons">
                        <Link to="/owner">
                            <img src={home} />
                            <h3>Home</h3>
                        </Link>
                    </div>
                    <div className="owner-icons">
                        <Link to="/calender">
                            <img src={calendar} />
                            <h3>Calendar</h3>
                        </Link>
                    </div>
                    <div className="owner-icons">
                    <Link to="/listing">
                        <img src={listings} />
                        <h3>Listings</h3>
                        </Link>
                    </div>
                    <div className="owner-icons">
                    <Link to="/booking">
                        <img src={bookings} />
                        <h3>Bookings</h3>
                        </Link>
                    </div>
                    <div className="owner-icons">
                        <Link to="/myfacilities">
                        <img src={facilities} />
                        <h3>My Facilities</h3>
                        </Link>
                    </div>
                    <div className="owner-icons">
                    <Link to="/payment">
                        <img src={Payments} />
                        <h3>Payments</h3>
                        </Link>
                    </div>
                    <div className="owner-icons">
                    <Link to="/notification">
                        <img src={notifications} />
                        <h3>Notifications</h3>
                        </Link>
                    </div>
                    <div className="owner-icons">
                        <Link to="/subscription">
                        <img src={subscriptions} />
                        <h3>Subscriptions</h3>
                        </Link>
                    </div>
                </div>
                <div className="owner-right my-facilities">
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mt-4">
                            <div className="glance-heading">
                                <h2>My Facilities</h2>
                                <Link to="/addfacilitiy"><button className="btn btn-black btn-filter green">Add Facility</button></Link>
                            </div>
                        </div>
                        
                        
                        <div className="col-md-11">
                            <div className="row">
                                <div className="col-md-6 pt-4">
                                  
                                        <div className="search-box preium">
                                            <div className="serch-img">
                                                <img className="hover-img" src={one} />
                                               
                                            </div>
                                            <div className="serch-content">
                                                <div className="facilities-both">
                                                    <div className="facilities-one">
                                                        <h2>Wayne Gretzky Sports Centre <img src={preium} /> <img src={verify} /> </h2>
                                                        <p>254 North Park Street, Brantford ON N3R 4L1</p>
                                                    </div>
                                                    <div className="facilities-two">
                                                        <h3>12</h3>
                                                        <span>rooms</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col-md-6 pt-4">
                                  <div className="search-box pending">
                                      <div className="serch-img">
                                          <img className="hover-img" src={one} />
                                          <div className="pending-hover">
                                          <img className="" src={Pending} />
                                          <h5>Pending</h5>
                                          </div>
                                          <div className="prium-text">
                                              <h4>
                                                <img src={Premium} />
                                                <span>Go Premium</span>
                                                </h4>
                                          </div>
                                      </div>
                                      <div className="serch-content">
                                          <div className="facilities-both">
                                              <div className="facilities-one">
                                                  <h2>Leon’s Centre <img src={verify} /> </h2>
                                                  <p>2872 Danforth Ave, Toronto, ON M4C 1M1</p>
                                              </div>
                                              <div className="facilities-two">
                                                  <h3>5</h3>
                                                  <span>rooms</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                          </div>
                          <div className="col-md-6 pt-4">
                                  <div className="search-box">
                                      <div className="serch-img">
                                          <img className="hover-img" src={one} />
                                          <div className="prium-text">
                                              <h4>
                                                <img src={Premium} />
                                                <span>Go Premium</span>
                                                </h4>
                                          </div>
                                      </div>
                                      <div className="serch-content">
                                          <div className="facilities-both">
                                              <div className="facilities-one">
                                                  <h2>Magna Centre  <img src={verify} /> </h2>
                                                  <p>1 Kenview Blvd, Brampton, ON L6T 5E6</p>
                                              </div>
                                              <div className="facilities-two">
                                                  <h3>8</h3>
                                                  <span>rooms</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                          </div>
                            </div>
                            
                        </div>


                                         
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default OwnerMyFacilities
