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


const OwnerBilling = () => {
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
                <div className="owner-right">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-4">
                            <div className="glance-heading calender-page billing-page">
                                <h2>Billings</h2>
                                <div class="all-room-right ml-5">
                                <button class="btn btn-black btn-filter more-btn space-no month black-btnss">All</button>
                                    <button class="btn btn-black btn-filter more-btn space-no week">Income</button>
                                    <button class="btn btn-black btn-filter day space-no day">Expenses</button>
                                    <button class="btn btn-black btn-filter">This Week</button>
                                </div>
                                <div class="all-room-right text-right">
                                    <button class="btn btn-black btn-filter more-btn green">Export</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-4 mb-4">
                        <div className="transition-table billing-page">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">Invoice Id</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td scope="row">+</td>
                                                    <td>124123</td>
                                                    <td>11 May 2021, 10:36:02 AM</td>
                                                    <td>@North Rink • 1 May 2021, 12AM–3PM • Refund</td>
                                                    <td>$95.00</td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">+</td>
                                                    <td>124123</td>
                                                    <td>11 May 2021, 10:36:02 AM</td>
                                                    <td>@North Rink • 1 May 2021, 12AM–3PM • Refund</td>
                                                    <td>$95.00</td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">+</td>
                                                    <td>124123</td>
                                                    <td>11 May 2021, 10:36:02 AM</td>
                                                    <td>@North Rink • 1 May 2021, 12AM–3PM • Refund</td>
                                                    <td>$95.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default OwnerBilling
