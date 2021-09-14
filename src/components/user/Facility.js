import React from 'react'
import Footer from './../Footer'
import InnerHeader from './../InnerHeader'
import facilityLogo from '../../assets/images/facilityLogo.png'
import facilitys from '../../assets/images/facility.png'
import calender from '../../assets/images/Calendar.png'
import bell from '../../assets/images/bell.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Facility() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <InnerHeader />
            <section className="facility">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">




                            <Slider {...settings}>
                                <div>
                                    <div className="facility-banner">
                                        <img src={facilitys} className="full-img" />
                                        <div className="facilty-logo">
                                            <img src={facilityLogo} />
                                        </div>
                                        <div className="heart-white">
                                            {/* <img src={heartwhite} /> */}
                                            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.6" cx="16" cy="16" r="16" fill="#080808" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0122 10.5717L14.9252 9.48469C12.7773 7.33681 9.29493 7.33681 7.14705 9.48469C4.99916 11.6326 4.99916 15.115 7.14705 17.2629L15.9859 26.1017L15.9877 26.0999L16.014 26.1262L24.8528 17.2874C27.0007 15.1395 27.0007 11.6571 24.8528 9.50923C22.705 7.36134 19.2226 7.36134 17.0747 9.50923L16.0122 10.5717Z" fill="#ED4C3F" />
                                            </svg>
                                        </div>
                                        <button className="white-btn btn">View Photos • 4</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="facility-banner">
                                        <img src={facilitys} className="full-img" />
                                        <div className="facilty-logo">
                                            <img src={facilityLogo} />
                                        </div>
                                        <div className="heart-white">
                                            {/* <img src={heartwhite} /> */}
                                            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.6" cx="16" cy="16" r="16" fill="#080808" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0122 10.5717L14.9252 9.48469C12.7773 7.33681 9.29493 7.33681 7.14705 9.48469C4.99916 11.6326 4.99916 15.115 7.14705 17.2629L15.9859 26.1017L15.9877 26.0999L16.014 26.1262L24.8528 17.2874C27.0007 15.1395 27.0007 11.6571 24.8528 9.50923C22.705 7.36134 19.2226 7.36134 17.0747 9.50923L16.0122 10.5717Z" fill="#ED4C3F" />
                                            </svg>
                                        </div>
                                        <button className="white-btn btn">View Photos • 4</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="facility-banner">
                                        <img src={facilitys} className="full-img" />
                                        <div className="facilty-logo">
                                            <img src={facilityLogo} />
                                        </div>
                                        <div className="heart-white">
                                            {/* <img src={heartwhite} /> */}
                                            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.6" cx="16" cy="16" r="16" fill="#080808" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0122 10.5717L14.9252 9.48469C12.7773 7.33681 9.29493 7.33681 7.14705 9.48469C4.99916 11.6326 4.99916 15.115 7.14705 17.2629L15.9859 26.1017L15.9877 26.0999L16.014 26.1262L24.8528 17.2874C27.0007 15.1395 27.0007 11.6571 24.8528 9.50923C22.705 7.36134 19.2226 7.36134 17.0747 9.50923L16.0122 10.5717Z" fill="#ED4C3F" />
                                            </svg>
                                        </div>
                                        <button className="white-btn btn">View Photos • 4</button>
                                    </div>
                                </div>

                            </Slider>


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
                                {/* <i class="fal fa-bell"></i> */}
                                <svg className="not-change" width="16" height="22" viewBox="0 0 16 22" fill="#000" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2V2.28988C12.8915 3.15043 15 5.82898 15 9V16H16V18H0V16H1V9C1 5.82898 3.10851 3.15043 6 2.28988V2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM3 16H13V9C13 6.23858 10.7614 4 8 4C5.23858 4 3 6.23858 3 9V16ZM10 20V19H6V20C6 21.1046 6.89543 22 8 22C9.10457 22 10 21.1046 10 20Z" fill="black"/>
                                </svg>


                                <svg className="change" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2V2.28988C12.8915 3.15043 15 5.82898 15 9V16H16V18H0V16H1V9C1 5.82898 3.10851 3.15043 6 2.28988V2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM10 20V19H6V20C6 21.1046 6.89543 22 8 22C9.10457 22 10 21.1046 10 20Z" fill="black"/>
                                </svg>


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
