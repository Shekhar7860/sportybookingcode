import React from 'react'
import Footer from './../Footer'
import InnerHeader from './../InnerHeader'
import imagenine from '../../assets/images/imagenine.png'
import calender from '../../assets/images/Calendar.png'

function Mybooking() {
    return (
        <div>
            <InnerHeader />

            <section className="mybooking">
                <div className="mybookin-fluid">
                <div className="commoan-left">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Upcoming</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Calendar</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Past</a>
                    </div>
                    </div>
                    <div className="common-right">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div className="upcoming-tab">
                                <h2>My Bookings</h2>
                                <div className="booking-box">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="booking-img">
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
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-right">
                                            <div className="sendmessege">
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
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-right">
                                            <div className="sendmessege">
                                                <button className="btn btn-cancal">Cancel</button>
                                                <button className="btn btn-messege">Send Message</button>
                                                <p className="mt-5">$50</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <div className="calender-tab">
                                <div className="inner-calender-tab">
                                        <h2>My Bookings</h2>
                                        <div class="all-room-right">
                                            <button class="btn btn-black btn-filter more-btn"><i class="fa fa-angle-left"></i></button>
                                            <button class="btn btn-black btn-filter">May</button>
                                            <button class="btn btn-black btn-filter more-btn"><i class="fa fa-angle-right"></i></button>
                                        </div>
                                </div>
                                <div className="calender-img all-room-img mt-4">
                                    <img src={calender} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                    </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Mybooking
