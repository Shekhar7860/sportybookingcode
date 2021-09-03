import React from 'react'
import imagenine from '../../assets/images/imagenine.png'
import Ownerheader from '../Ownerheader'
import home from '../../assets/owner/home.png'
import calendar from '../../assets/owner/calendar.png'
import listings from '../../assets/owner/listings.png'
import bookings from '../../assets/owner/bookings.png'
import facilities from '../../assets/owner/facilities.png'
import Payments from '../../assets/owner/Payments.png'
import notifications from '../../assets/owner/notifications.png'
import subscriptions from '../../assets/owner/subscriptions.png'
import { Link } from 'react-router-dom'

function OwnerSubscriptions() {
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
                        <Link to="/billing">
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
                <div className="owner-right booking-owner">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 mt-4">
                            <div className="plans">
                                <div className="plans-box">
                                    <div className="standed-plan">
                                        <h6>Standard Plan</h6>
                                        <h2>Free</h2>
                                    </div>
                                    <div className="plans-name">
                                        <ul>
                                            <li>Unlimited Rooms</li>
                                            <li>Unlimited Listings</li>
                                            <li>Unlimited Bookings</li>
                                            <li>Marketing Materials</li>
                                            <li>Online How-To Videos</li>
                                        </ul>
                                            <div className="bottom-plan">
                                                <button className="select-btn">Selected</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="plans-box gold-plan">
                                    <div className="standed-plan">
                                        <h6>Gold Plan</h6>
                                        <h2>$249<span>/mo</span></h2>
                                    </div>
                                    <div className="plans-name">
                                        <ul>
                                            <li>All Standard Plan Features</li>
                                            <li>Prioritized Search Results</li>
                                            <li>Gold Featured Listing</li>
                                            <li>Social Media Reach</li>
                                            <li>Optimized SB Marketing</li>
                                            <li>Custom Online How-To Videos</li>
                                            <li>Enhanced Support</li>
                                            <li>Add Instructor Feature</li>
                                        </ul>
                                            <div className="bottom-plan">
                                                <button className="select-btn">Upgrade Now</button>
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

export default OwnerSubscriptions
