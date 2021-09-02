import React from 'react'
import Footer from './../Footer'
import InnerHeader from './../InnerHeader'
import facilityLogo from '../../assets/images/facilityLogo.png'
import heartwhite from '../../assets/images/heart-white.png'
import calender from '../../assets/images/Calendar.png'

function Facility() {
    return (
        <div>
            <InnerHeader />
            <section className="facility">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="facility-banner">
                                <div className="facilty-logo">
                                    <img src={facilityLogo} />
                                </div>
                                <div className="heart-white">
                                    <img src={heartwhite} />
                                </div>
                                <button className="white-btn btn">View Photos • 4</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="swining-pool pt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 pl-5">
                            <div className="swining-text1">
                                <div className="swining-pol-text">
                                    <h6>Ice Rink • Swimming Pool • Fitness</h6>
                                    <h2>Wayne Gretzky Sports Centre</h2>
                                    <p>We are Brantford's primary sports and leisure facility. We have everything you need for fitness, health and recreation under one roof!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 text-right">
                            <div className="swining-text">
                                <i class="fal fa-bell"></i>
                                <span>Notifications</span>
                                <p>Get notified on new listings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="all-room pt-4 pb-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="filters-left">
                                <button className="btn btn-black btn-filter">All Rooms</button>
                                <button className="btn btn-black btn-filter more-btn"><span className="blue"></span>North Rink</button>
                                <button className="btn btn-black btn-filter more-btn"><span className="pink"></span>South Rink</button>
                                <button className="btn btn-black btn-filter more-btn"><span className="darkblue"></span>Swimming Pool</button>
                                <button className="btn btn-black btn-filter more-btn"><span className="green"></span>Fitness</button>
                                <button className="btn btn-black btn-filter more-btn"><span className="gray"></span>Gym</button>
                            </div>
                        </div>
                        <div className="col-md-5 text-right">
                            <div className="all-room-right">
                            <button className="btn btn-black btn-filter more-btn"><i className="fa fa-angle-left"></i></button>
                                <button className="btn btn-black btn-filter">10 May</button>
                                <button className="btn btn-black btn-filter more-btn"><i className="fa fa-angle-right"></i></button>
                                <button className="btn btn-black btn-filter day">Day</button>
                                <button className="btn btn-black btn-filter more-btn">Week</button>
                                <button className="btn btn-black btn-filter more-btn">Month</button>
                            </div>
                            
                        </div>
                        <div className="col-md-12 pt-4">
                            <div className="all-room-img">
                                <img src={calender} />
                            </div>
                        </div>
                        <div className="col-md-9 pt-5 pl-5">
                            <div className="location">
                            <div className="right-search">
                                <h4>Location</h4>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1630095896548!5m2!1sen!2sin" width="100%" height="600px" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 pt-5">
                            <div className="location-text mt-4">
                                <p>254 North Park Street<br />
                                    Brantford ON N3R 4L1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default Facility
