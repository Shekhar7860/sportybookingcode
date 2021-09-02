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
import cal from '../../assets/images/Calendar.png'
import { Link } from 'react-router-dom'

function OwnerBooking() {
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
                        <img src={listings} />
                        <h3>Listings</h3>
                    </div>
                    <div className="owner-icons">
                        <img src={bookings} />
                        <h3>Bookings</h3>
                    </div>
                    <div className="owner-icons">
                        <img src={facilities} />
                        <h3>My Facilities</h3>
                    </div>
                    <div className="owner-icons">
                        <img src={Payments} />
                        <h3>Payments</h3>
                    </div>
                    <div className="owner-icons">
                        <img src={notifications} />
                        <h3>Notifications</h3>
                    </div>
                    <div className="owner-icons">
                        <img src={subscriptions} />
                        <h3>Subscriptions</h3>
                    </div>
                </div>
                <div className="owner-right booking-owner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-4">
                        <div className="glance-heading">
                                <h2>Bookings</h2>
                                <div className="booking-box">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="booking-img">
                                                <input type="checkbox" />
                                                <img src={imagenine} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="booking-text">
                                                <h6>Wayne Gretzky Sports Centre</h6>
                                                <h4>North Rink</h4>
                                                <ul>
                                                    <li>
                                                        <p>Date</p>
                                                        <h3>Tuesday, 11 May</h3>
                                                    </li>
                                                    <li>
                                                        <p>Start Time</p>
                                                        <h3>1:00<span>PM</span></h3>
                                                    </li>
                                                    <li>
                                                        <p>End Time</p>
                                                        <h3>2:30<span>PM</span></h3>
                                                    </li>
                                                    <li>
                                                        <p>Booked by</p>
                                                        <h3>John</h3>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-right">
                                            <div className="sendmessege">
                                            <button className="btn btn-cancal">Refund</button>
                                                <button className="btn btn-cancal">Cancel</button>
                                                <button className="btn btn-messege">Send Message</button>
                                                <p className="mt-5">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-box">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="booking-img">
                                            <input type="checkbox" />
                                                <img src={imagenine} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="booking-text">
                                                <h6>Wayne Gretzky Sports Centre</h6>
                                                <h4>North Rink</h4>
                                                <ul>
                                                    <li>
                                                        <p>Date</p>
                                                        <h3>Tuesday, 11 May</h3>
                                                    </li>
                                                    <li>
                                                        <p>Start Time</p>
                                                        <h3>1:00<span>PM</span></h3>
                                                    </li>
                                                    <li>
                                                        <p>End Time</p>
                                                        <h3>2:30<span>PM</span></h3>
                                                    </li>
                                                    <li>
                                                        <p>Booked by</p>
                                                        <h3>John</h3>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-right">
                                            <div className="sendmessege">
                                            <button className="btn btn-cancal">Refund</button>
                                                <button className="btn btn-cancal">Cancel</button>
                                                <button className="btn btn-messege">Send Message</button>
                                                <p className="mt-5">$50</p>
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

export default OwnerBooking
