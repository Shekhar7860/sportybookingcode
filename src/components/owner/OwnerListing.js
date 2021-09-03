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
import { Link } from 'react-router-dom'


const OwnerListing = () => {
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
                <div className="owner-right">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-4">
                            <div className="glance-heading calender-page listing-page">
                                <h2>Listings</h2>
                                <div class="all-room-right ml-5">
                                    <button class="btn btn-black btn-filter more-btn space-no month">All</button>
                                    <button class="btn btn-black btn-filter more-btn space-no week">Booked</button>
                                    <button class="btn btn-black btn-filter day space-no day">Booked</button>
                                </div>
                                <div class="all-room-right text-right">
                                    <button class="btn btn-black btn-filter more-btn mr-5">This Week</button>
                                    <button class="btn btn-black btn-filter green">Import</button>
                                    <button class="btn btn-black btn-filter more-btn green">Add</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                        <div className="booking-box listingss booking-transprnt">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="booking-img">
                                                <input className="checkbox-custom" type="checkbox" />
                                                <label for="checkbox-1" className="checkbox-custom-label"></label>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">Select All</option>
                                                    <option value="saab">All</option>
                                                    <option value="mercedes">All Booked</option>
                                                    <option value="audi">All Open</option>
                                                    <option>Unselect All</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                        <div className="sendmessege">
                                            <button className="btn btn-cancal">Cancel</button>
                                            <button className="btn btn-cancal">Refund</button>
                                            <button className="btn btn-cancal">Delete</button>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-right">
                                           
                                        <div className="booking-text">
                                                <h6><span>Selected</span> 2</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-12">
                            <div className="week-monday">
                                <h3>1 May, Monday</h3>
                            </div>

                            <div className="booking-box listing-boxss">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="booking-img">
                                            <input className="checkbox-custom" type="checkbox" />
                                                <label for="checkbox-1" className="checkbox-custom-label"></label>
                                              <h4>10 — 11:30 <span>AM</span></h4>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mid-list">
                                            <div className="booking-text">
                                                <h4>North Rink <span> Booked</span></h4>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <div className="sendmessege list-sendbox">
                                            <p className="mb-3"><span>John Johnson</span>$50</p>
                                                <button className="btn btn-cancal">Delete</button>
                                                <button className="btn btn-cancal">Refund</button>
                                                <button className="btn btn-cancal">Cancel</button>
                                                <button className="btn btn-messege">Send Message</button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="booking-box listing-boxss booked-list">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="booking-img">
                                            <input className="checkbox-custom" type="checkbox" />
                                                <label for="checkbox-1" className="checkbox-custom-label"></label>
                                              <h4>10 — 11:30 <span>AM</span></h4>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mid-list">
                                            <div className="booking-text">
                                                <h4>North Rink <span> Open</span></h4>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <div className="sendmessege list-sendbox">
                                                <button className="btn btn-cancal">Delete</button>
                                                <button className="btn btn-messege">Book</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="booking-box listing-boxss">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="booking-img">
                                            <input className="checkbox-custom" type="checkbox" />
                                                <label for="checkbox-1" className="checkbox-custom-label"></label>
                                              <h4>10 — 11:30 <span>AM</span></h4>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mid-list">
                                            <div className="booking-text">
                                                <h4>North Rink <span> Booked</span></h4>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <div className="sendmessege list-sendbox">
                                            <p className="mb-3"><span>John Johnson</span>$50</p>
                                                <button className="btn btn-cancal">Delete</button>
                                                <button className="btn btn-cancal">Refund</button>
                                                <button className="btn btn-cancal">Cancel</button>
                                                <button className="btn btn-messege">Send Message</button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="booking-box listing-boxss booked-list">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="booking-img">
                                            <input className="checkbox-custom" type="checkbox" />
                                                <label for="checkbox-1" className="checkbox-custom-label"></label>
                                              <h4>10 — 11:30 <span>AM</span></h4>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mid-list">
                                            <div className="booking-text">
                                                <h4>North Rink <span> Open</span></h4>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <div className="sendmessege list-sendbox">
                                                <button className="btn btn-cancal">Delete</button>
                                                <button className="btn btn-messege">Book</button>
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

export default OwnerListing
