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

function OwnerNotification() {
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
                        <div className="payment-method notification owner-notification">
                                    <div className="glance-heading">
                                        <h2>Notifications</h2>
                                        <p>Booking Status Changes</p>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <div className="radio-btn">
                                                <label>
                                                <input className="checkbox-custom" type="checkbox" />
                                                <label for="checkbox-1" className="checkbox-custom-label"></label><span>Email Notification</span>Add email address
                                                </label>
                                                <label className="bottom-sms">
                                                <input className="checkbox-custom" type="checkbox" />
                                                <label for="checkbox-1" className="checkbox-custom-label"></label><span>SMS Notification</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <div className="billing-details">
                                                <h4>New Messages</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                        <div className="radio-btn">
                                                <label>
                                                <input className="checkbox-custom" type="checkbox" />
                                                <label for="checkbox-1" className="checkbox-custom-label"></label><span>Email Notification</span>Add email address
                                                </label>
                                                <label className="bottom-sms">
                                                <input className="checkbox-custom" type="checkbox" />
                                                <label for="checkbox-1" className="checkbox-custom-label"></label><span>SMS Notification</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <button className="update-btn">Save</button>
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

export default OwnerNotification
