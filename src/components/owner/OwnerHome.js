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


const OwnerHome  = () => {
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
                            <div className="glance-heading">
                                <h2>Today at a Glance</h2>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <div className="booked-box">
                                <h3>Booked Today</h3>
                                <h5>40</h5>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <div className="booked-box">
                                <h3>Open Today</h3>
                                <h5>21</h5>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <div className="booked-box">
                                <h3>All Time Bookings</h3>
                                <h5>1,245</h5>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <div className="booked-box">
                                <h3>All Time Revenue</h3>
                                <h5>$13,054<span>.99</span></h5>
                            </div>
                        </div>

                        <div className="col-md-6 mt-5">
                            <div className="booked">
                                <h2>Booked</h2>
                            </div>
                            
                            <div className="booked-open mb-3" id="dropdownMenuLink">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>North Rink <i className="fal fa-angle-down"></i></h3>
                                    
                                </div>
                                <div className="booked-one botton-booked">
                                    <h3>Bailey Johnson</h3>
                                    <h2>$45<span className="size-same">.55</span></h2>
                                </div>
                            </div>
                            {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div> */}
                            <div className="booked-open mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>South Rink <i className="fal fa-angle-down"></i></h3>
                                    
                                </div>
                                <div className="booked-one botton-booked">
                                    <h3>Scott Powell</h3>
                                    <h2>$45<span className="size-same">.55</span></h2>
                                </div>
                            </div>
                            <div className="booked-open mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>North Rink <i className="fal fa-angle-down"></i></h3>
                                    
                                </div>
                                <div className="booked-one botton-booked">
                                    <h3>Adam Carter</h3>
                                    <h2>$45<span className="size-same">.55</span></h2>
                                </div>
                            </div>
                            <div className="booked-open mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>South Rink <i className="fal fa-angle-down"></i></h3>
                                    
                                </div>
                                <div className="booked-one botton-booked">
                                    <h3>Jasmine Mccarthy</h3>
                                    <h2>$45<span className="size-same">.55</span></h2>
                                </div>
                            </div>
                            <div className="booked-open mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>South Rink <i className="fal fa-angle-down"></i></h3>
                                    
                                </div>
                                <div className="booked-one botton-booked">
                                    <h3>Adam Owen</h3>
                                    <h2>$45<span className="size-same">.55</span></h2>
                                </div>
                            </div>
                            <div className="booked-open mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>South Rink <i className="fal fa-angle-down"></i></h3>
                                    
                                </div>
                                <div className="booked-one botton-booked">
                                    <h3>Adam Owen</h3>
                                    <h2>$45<span className="size-same">.55</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="booked">
                                <h2>Open</h2>
                            </div>
                            <div className="booked-open Open-booked mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>North Rink <i className="fal fa-angle-down"></i></h3>
                                </div>
                            </div>
                            <div className="booked-open Open-booked mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>Swimming Pool <i className="fal fa-angle-down"></i></h3>
                                </div>
                            </div>
                            <div className="booked-open Open-booked mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>North Rink <i className="fal fa-angle-down"></i></h3>
                                </div>
                            </div>
                            <div className="booked-open Open-booked mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>South Rink <i className="fal fa-angle-down"></i></h3>
                                </div>
                            </div>
                            <div className="booked-open Open-booked mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>North Rink <i className="fal fa-angle-down"></i></h3>
                                </div>
                            </div>
                            <div className="booked-open Open-booked mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>North Rink <i className="fal fa-angle-down"></i></h3>
                                </div>
                            </div>
                            <div className="booked-open Open-booked mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>North Rink <i className="fal fa-angle-down"></i></h3>
                                </div>
                            </div>
                            <div className="booked-open Open-booked mb-3">
                                <div className="booked-one">
                                    <h2>9–10:30<span>AM</span></h2>
                                    <h3>North Rink <i className="fal fa-angle-down"></i></h3>
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

export default OwnerHome
