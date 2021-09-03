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
import cal from '../../assets/images/Calendar.png'
import { Link } from 'react-router-dom'


const OwnerCalendar = () => {
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
                            <div className="glance-heading calender-page owner-calender">
                                <h2>Calender</h2>
                                <div class="all-room-right mr-auto ml-5">
                                    <button class="btn btn-black btn-filter more-btn space-no upcoming">Upcoming</button>
                                    <button class="btn btn-black btn-filter more-btn space-no past">Past</button>
                                </div>
                                <div class="all-room-right">
                                    <button class="btn btn-black btn-filter more-btn space-no month">Month</button>
                                    <button class="btn btn-black btn-filter more-btn space-no week">Week</button>
                                    <button class="btn btn-black btn-filter day space-no day">Day</button>
                                    <button class="btn btn-black btn-filter more-btn">This Month</button>
                                    <button class="btn btn-black btn-filter green">Import</button>
                                    <button class="btn btn-black btn-filter more-btn green">Add</button>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-4 mb-4">
                            <div className="calender-owner">
                                <img src={cal} />
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

export default OwnerCalendar
