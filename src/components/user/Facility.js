import React, { useState } from "react";
import Footer from "./../Footer";
import InnerHeader from "./../InnerHeader";
import facilityLogo from "../../assets/images/facilityLogo.png";
import facilitys from "../../assets/images/facility.png";
import Photo from "../../assets/images/Photo.png";
import calender from "../../assets/images/Calendar.png";
import bell from "../../assets/images/bell.svg";
import googlecal from "../../assets/images/google-calendar 1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-bootstrap/Modal";
import { TabPanel, useTabs } from "react-headless-tabs";
import "./user-module.css";
import { toast } from "react-toastify";
function Facility() {
  const [bookingView, showBookingView] = useState(false);
  const [bookingModal, showBookingModal] = useState(false);
  const [confirmedModal, showConfirmedModal] = useState(false);
  const [showCalendar, toggleCalendar] = useState(false);
  const [table, toggleTable] = useState(true);
  const [checkboxChecked, setCheckBox] = useState(false);
  const items = ["1. Date & Time", "2. Terms & Conditions", "3. Confirm"];
  const [selectedTab, setSelectedTab] = useTabs(items);
  const changeTab = (e) => {
    e.preventDefault();
    setSelectedTab(e.target.dataset.tab);
  };
  const getSelectedTabIndex = () =>
    items.findIndex((item) => item === selectedTab);
  let eventGuid = 0;
  let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const showHideBookingModal = () => {
    showBookingModal(!bookingModal);
  };
  function createEventId() {
    return String(eventGuid++);
  }
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "North Rink",
      start: todayStr + "T09:00:00",
    },
    {
      id: createEventId(),
      title: "South Rink",
      start: todayStr + "T12:00:00",
    },
  ];

  const confirmBooking = () => {
    showHideConfirmedModal();
    showBookingModal(false);
  };
  const handleEventClick = (clickInfo) => {
    showBookingView(true);
  };

  const showHideConfirmedModal = () => {
    showConfirmedModal(!confirmedModal);
  };

  const showHideCalendarView = () => {
    toggleTable(false);
    toggleCalendar(true);
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
                      <svg
                        className=""
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.6"
                          cx="16"
                          cy="16"
                          r="16"
                          fill="#080808"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.0122 10.5717L14.9252 9.48469C12.7773 7.33681 9.29493 7.33681 7.14705 9.48469C4.99916 11.6326 4.99916 15.115 7.14705 17.2629L15.9859 26.1017L15.9877 26.0999L16.014 26.1262L24.8528 17.2874C27.0007 15.1395 27.0007 11.6571 24.8528 9.50923C22.705 7.36134 19.2226 7.36134 17.0747 9.50923L16.0122 10.5717Z"
                          fill="#ED4C3F"
                        />
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
                      <svg
                        className=""
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.6"
                          cx="16"
                          cy="16"
                          r="16"
                          fill="#080808"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.0122 10.5717L14.9252 9.48469C12.7773 7.33681 9.29493 7.33681 7.14705 9.48469C4.99916 11.6326 4.99916 15.115 7.14705 17.2629L15.9859 26.1017L15.9877 26.0999L16.014 26.1262L24.8528 17.2874C27.0007 15.1395 27.0007 11.6571 24.8528 9.50923C22.705 7.36134 19.2226 7.36134 17.0747 9.50923L16.0122 10.5717Z"
                          fill="#ED4C3F"
                        />
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
                      <svg
                        className=""
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.6"
                          cx="16"
                          cy="16"
                          r="16"
                          fill="#080808"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.0122 10.5717L14.9252 9.48469C12.7773 7.33681 9.29493 7.33681 7.14705 9.48469C4.99916 11.6326 4.99916 15.115 7.14705 17.2629L15.9859 26.1017L15.9877 26.0999L16.014 26.1262L24.8528 17.2874C27.0007 15.1395 27.0007 11.6571 24.8528 9.50923C22.705 7.36134 19.2226 7.36134 17.0747 9.50923L16.0122 10.5717Z"
                          fill="#ED4C3F"
                        />
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

      {bookingView == false ? (
        <>
          <section className="swining-pool pt-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-7 pl-5">
                  <div className="swining-text1">
                    <div className="swining-pol-text">
                      <h6>Ice Rink • Swimming Pool • Fitness</h6>
                      <h2>Wayne Gretzky Sports Centre</h2>
                      <p>
                        We are Brantford's primary sports and leisure facility.
                        We have everything you need for fitness, health and
                        recreation under one roof!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 text-right">
                  <div className="swining-text">
                    {/* <i class="fal fa-bell"></i> */}
                    <svg
                      className="not-change"
                      width="16"
                      height="22"
                      viewBox="0 0 16 22"
                      fill="#000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 2V2.28988C12.8915 3.15043 15 5.82898 15 9V16H16V18H0V16H1V9C1 5.82898 3.10851 3.15043 6 2.28988V2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM3 16H13V9C13 6.23858 10.7614 4 8 4C5.23858 4 3 6.23858 3 9V16ZM10 20V19H6V20C6 21.1046 6.89543 22 8 22C9.10457 22 10 21.1046 10 20Z"
                        fill="black"
                      />
                    </svg>

                    <svg
                      className="change"
                      width="16"
                      height="22"
                      viewBox="0 0 16 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 2V2.28988C12.8915 3.15043 15 5.82898 15 9V16H16V18H0V16H1V9C1 5.82898 3.10851 3.15043 6 2.28988V2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM10 20V19H6V20C6 21.1046 6.89543 22 8 22C9.10457 22 10 21.1046 10 20Z"
                        fill="black"
                      />
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
                    <button className="btn btn-black btn-filter">
                      All Rooms
                    </button>
                    <button className="btn btn-black btn-filter more-btn">
                      <span className="blue"></span>North Rink
                    </button>
                    <button className="btn btn-black btn-filter more-btn">
                      <span className="pink"></span>South Rink
                    </button>
                    <button className="btn btn-black btn-filter more-btn">
                      <span className="darkblue"></span>Swimming Pool
                    </button>
                    <button className="btn btn-black btn-filter more-btn">
                      <span className="green"></span>Fitness
                    </button>
                    <button className="btn btn-black btn-filter more-btn">
                      <span className="gray"></span>Gym
                    </button>
                  </div>
                </div>
                <div className="col-md-5 text-right">
                  <div className="all-room-right">
                    <button className="btn btn-black btn-filter more-btn">
                      <i className="fa fa-angle-left"></i>
                    </button>
                    <button className="btn btn-black btn-filter">10 May</button>
                    <button className="btn btn-black btn-filter more-btn">
                      <i className="fa fa-angle-right"></i>
                    </button>
                    <button className="btn btn-black btn-filter day">
                      Day
                    </button>
                    <button className="btn btn-black btn-filter more-btn">
                      Week
                    </button>
                    <button className="btn btn-black btn-filter more-btn">
                      Month
                    </button>
                  </div>
                </div>
                <div className="col-md-12 pt-4">
                  <div className="all-room-img">
                    <div className="demo-app">
                      <div className="demo-app-main">
                        {table == true ? (
                          <table>
                            <tr>
                              <th>North Rink</th>
                              <th>South Rink</th>
                              <th>Swimming Pool</th>
                              <th>Fitness</th>
                              <th>Gym</th>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td className="firstSelection">
                                7-8 A.M Swimming Pool $ 100
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td
                                className="secondSelection"
                                onClick={showHideCalendarView}
                              >
                                9-10 A.M North Rink $100
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td className="thirdSelection">
                                12-1 P.M South Rink $100
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className="fourthSelection">
                                2-3 P.M Fitness $120
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className="fifthSelection">
                                7-8 PM GYM $200
                              </td>
                            </tr>
                          </table>
                        ) : null}
                        {showCalendar ? (
                          <FullCalendar
                            plugins={[
                              dayGridPlugin,
                              timeGridPlugin,
                              interactionPlugin,
                            ]}
                            headerToolbar={{
                              left: "prev,next today",
                              center: "title",
                              right: "dayGridMonth,timeGridWeek,timeGridDay",
                            }}
                            initialView="timeGridDay"
                            editable={true}
                            selectable={true}
                            initialEvents={INITIAL_EVENTS}
                            eventClick={handleEventClick}
                          />
                        ) : null}
                      </div>
                    </div>
                    {/* <img src={calender} /> */}
                  </div>
                </div>
                <div className="col-md-9 pt-5 pl-5">
                  <div className="location">
                    <div className="right-search">
                      <h4>Location</h4>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1630095896548!5m2!1sen!2sin"
                        width="100%"
                        height="600px"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 pt-5">
                  <div className="location-text mt-4">
                    <p>
                      254 North Park Street
                      <br />
                      Brantford ON N3R 4L1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="swining-poolbooking">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 pl-5">
                <div className="swining-text1 border-pool">
                  <div className="swining-pol-text pt-4">
                    <h6>Wayne Gretzky Sports Centre</h6>
                    <h2>North Rink</h2>
                    <div>
                      Arena with four NHL sized rinks. Goalie warm-up rink.
                      Press box (main rink <br /> only). Change rooms with
                      showers.
                    </div>
                    <div className="abou-text-fac mt-4">About Facility</div>
                    <ul className="facility-fac">
                      <li>Rink Size</li>
                      <li>
                        <strong>200x80</strong> NHL Sized
                      </li>
                      <li>Max Capacity</li>
                      <li>
                        <strong>20</strong>
                      </li>
                      <li>Insurance Provided</li>
                      <li>
                        <strong>yes</strong>
                      </li>
                      <li>Chhange Rooms</li>
                      <li>
                        <strong>Yes</strong>
                      </li>
                      <li>Chhange Rooms Locks Provided</li>
                      <li>
                        <strong>Yes</strong>
                      </li>
                      <li>Waiver</li>
                      <li>
                        <strong>Details</strong>
                      </li>
                      <li>COVID Waiver</li>
                      <li>
                        <strong>Details</strong>
                      </li>
                      <li>Showers Available</li>
                      <li>
                        <strong>Yes</strong>
                      </li>
                      <li>Washroom</li>
                      <li>
                        <strong>Yes</strong>
                      </li>
                    </ul>
                    <div className="show-location">
                      <span>
                        Show Location <i class="fas fa-angle-down"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pt-4 right-facility-design">
                <div className="right-content-facility">
                  <div className="row">
                    <div className="col-md-4 ">Total Price</div>
                    <div className="col-md-4">Total Time</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 boldFont largeFont">$75</div>
                    <div className="col-md-4 boldFont largeFont">1:30</div>
                  </div>
                  <div className="commonSpace">
                    <div>Date</div>
                  </div>
                  <div className="big-text">
                    <h5>Monday 10, May</h5>
                  </div>
                  <div className="commonSpace">
                    <div className="row">
                      <div className="col-md-4">Start Time</div>
                      <div className="col-md-4">End Time</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="row">
                      <h6 className="col-md-4 date-big">
                        10:00 <span className="light-text">AM</span>
                      </h6>
                      <h6 className="col-md-4 date-big">
                        11:30 <span className="light-text">AM</span>
                      </h6>
                    </div>
                  </div>
                  <div className="commonSpace">
                    <h6>Choose another time</h6>
                  </div>
                  <div>
                    <button
                      className="common-button"
                      onClick={showHideBookingModal}
                    >
                      <span className="button-text-color">Book Now</span>
                    </button>
                    <div className="charged-yet">
                      <p>You wont be charged yet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Modal show={bookingModal} className="date-time-modal">
        <div className="App">
          <nav
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: `calc((100% / ${
                  items.length
                }) * ${getSelectedTabIndex()})`,
                height: "2px",
                width: `calc(100% / ${items.length})`,

                transition: "all ease 0.2s",
              }}
            />

            <div
              className="facily-modals"
              style={{
                display: "flex",
              }}
            >
              {items.map((item) => {
                return (
                  <a
                    href="#tab"
                    key={item}
                    style={{
                      flexGrow: 0.1,
                      display: "block",
                      padding: "1rem",
                      textDecoration: "none",
                      color: selectedTab === item ? "black" : "#b2bec3",
                    }}
                    onClick={changeTab}
                    data-tab={item}
                  >
                    {item}
                  </a>
                );
              })}
              <span onClick={showHideBookingModal} className="cross-icon-style">
                <i class="fal fa-times"></i>
              </span>
            </div>
          </nav>
          <div
            style={{
              padding: "0rem",
            }}
          >
            {items.map((item) => {
              return (
                <TabPanel key={item} hidden={selectedTab !== item}>
                  {selectedTab == "1. Date & Time" ? (
                    <section className="swining-poolbooking">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="swining-text1 border-pool">
                              <div className="swining-pol-text pt-4">
                                <h6>Wayne Gretzky Sports Centre</h6>
                                <h2>North Rink</h2>
                                <div>
                                  Arena with four NHL sized rinks. Goalie
                                  warm-up rink. Press box (main rink only).
                                  Change rooms with showers.
                                </div>
                                <div className="abou-text-fac mt-4">
                                  About Facility
                                </div>
                                <ul className="facility-fac">
                                  <li>Rink Size</li>
                                  <li>
                                    <strong>200x80</strong> NHL Sized
                                  </li>
                                  <li>Max Capacity</li>
                                  <li>
                                    <strong>20</strong>
                                  </li>
                                  <li>Insurance Provided</li>
                                  <li>
                                    <strong>yes</strong>
                                  </li>
                                  <li>Chhange Rooms</li>
                                  <li>
                                    <strong>Yes</strong>
                                  </li>
                                  <li>Chhange Rooms Locks Provided</li>
                                  <li>
                                    <strong>Yes</strong>
                                  </li>
                                  <li>Waiver</li>
                                  <li>
                                    <strong>Details</strong>
                                  </li>
                                  <li>COVID Waiver</li>
                                  <li>
                                    <strong>Details</strong>
                                  </li>
                                  <li>Showers Available</li>
                                  <li>
                                    <strong>Yes</strong>
                                  </li>
                                  <li>Washroom</li>
                                  <li>
                                    <strong>Yes</strong>
                                  </li>
                                  <li>Cancellation Policy</li>
                                  <li>
                                    <strong>14 Days</strong>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 pt-4 right-facility-design">
                            <img src={Photo} />
                            <div className="commonSpace">
                              <div className="row">
                                <div className="col-md-4 boldFont largeFont">
                                  $50
                                </div>
                              </div>
                            </div>

                            <div className="commonSpace">
                              <div>Date</div>
                            </div>
                            <div className="big-text">
                              <h5>Monday 10, May</h5>
                            </div>
                            <div className="commonSpace">
                              <div className="row">
                                <div className="col-md-6">Start Time</div>
                                <div className="col-md-6">End Time</div>
                              </div>
                            </div>
                            <div className="">
                              <div className="row">
                                <h6 className="col-md-6 date-big">
                                  10:00 <span className="light-text">AM</span>
                                </h6>
                                <h6 className="col-md-6 date-big">
                                  11:30 <span className="light-text">AM</span>
                                </h6>
                              </div>
                            </div>
                            <div className="commonSpace">
                              <h6>Choose another time</h6>
                            </div>
                            <div>
                              <button className="common-button-black">
                                <span className="button-text-color">
                                  Learn More
                                </span>
                              </button>
                              <button
                                className="common-button"
                                onClick={() => {
                                  setSelectedTab("2. Terms & Conditions");
                                }}
                              >
                                <span className="button-text-color">
                                  Continue
                                </span>
                              </button>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : selectedTab == "2. Terms & Conditions" ? (
                    <section className="swining-poolbooking pb-3">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="swining-text1 border-pool">
                              <div className="swining-pol-text pt-4">
                                <h6>Wayne Gretzky Sports Centre</h6>
                                <h2>North Rink</h2>
                                <div className="conditions-text pb-2">
                                  Please read and accept facility’s terms &
                                  conditions.
                                </div>
                                <div className="text-conditions">
                                  <p>
                                    Welcome to the Wayne Gretzky Sports Centre
                                    (WGSC)! Please find some helpful information
                                    below to help ensure everyone who uses the
                                    facility enjoys their visit.
                                  </p>
                                  <br />
                                  <p>Pass Inclusions</p>
                                  <p>
                                    Fitness Pass: includes all fitness classes
                                    (except registered programs) including: warm
                                    water workout classes; aqua fit; use of the
                                    weight room (orientations are included in
                                    your pass at no additional costs by
                                    appointment); gymnasium; 65m pool and 25m
                                    pool (as outlined in the Pool Pass
                                    information). Gymnasium Pass: includes use
                                    of the gymnasium during open program times.
                                    Pool Pass: includes use of the pools during
                                    any length swim, adult, family or public
                                    swim time. *Note: Children must be
                                    accompanied by an adult in the water during
                                  </p>
                                </div>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              checked={checkboxChecked}
                              onChange={(e) => {
                                setCheckBox(!checkboxChecked);
                              }}
                            />
                            &nbsp;
                            <label for="checkbox-1">
                              I agree with terms and conditions
                            </label>
                          </div>

                          <div className="col-md-4 right-facility-design pt-4">
                            <img src={Photo} />
                            <div className="commonSpace">
                              <div className="row">
                                <div className="col-md-4 ">Price</div>
                                <div className="col-md-4">Tax</div>
                                <div className="col-md-4">Total</div>
                              </div>

                              <div className="row">
                                <div className="col-md-4 boldFont largeFont">
                                  $50
                                </div>
                                <div className="col-md-4 boldFont largeFont">
                                  $5
                                </div>
                                <div className="col-md-4 boldFont largeFont">
                                  $55
                                </div>
                              </div>
                            </div>
                            <div className="commonSpace">
                              <div>Date</div>
                            </div>
                            <div className="big-text">
                              <h5>Monday 10, May</h5>
                            </div>
                            <div className="commonSpace">
                              <div className="row">
                                <div className="col-md-6">Start Time</div>
                                <div className="col-md-6">End Time</div>
                              </div>
                            </div>
                            <div className="">
                              <div className="row">
                                <h6 className="col-md-6 date-big">
                                  10:00 <span className="light-text">AM</span>
                                </h6>
                                <h6 className="col-md-6 date-big">
                                  11:30 <span className="light-text">AM</span>
                                </h6>
                              </div>
                            </div>
                            <div className="commonSpace">
                              <h6>Choose another time</h6>
                            </div>
                            <div>
                              <button
                                className="common-button"
                                onClick={() => {
                                  if (checkboxChecked == true) {
                                    setSelectedTab("3. Confirm");
                                  } else {
                                    toast.error(
                                      "Please accept terms and conditions"
                                    );
                                  }
                                }}
                              >
                                <span className="button-text-color">
                                  Continue
                                </span>
                              </button>
                              <button
                                className="common-button-black"
                                onClick={() => {
                                  setSelectedTab("1. Date & Time");
                                }}
                              >
                                <span className="button-text-color">Back</span>
                              </button>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : (
                    <section className="swining-poolbooking pb-4">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="swining-text1 border-pool pt-4 pr-4">
                              <div className="swining-pol-text">
                                <h6>Wayne Gretzky Sports Centre</h6>
                                <h2>North Rink</h2>
                                <div className="add-paymentss">
                                  Add Payment Method
                                </div>
                              </div>
                              <div className="facility-form">
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Credit Card Number</label>
                                    <input
                                      type="number"
                                      placeholder="XXXX XXXX XXXX XXXX"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="commonSpace mb-3">
                                <input type="checkbox" />
                                &nbsp;
                                <label for="checkbox-1">
                                  Save Card Details For Future Bookings
                                </label>
                              </div>
                              <div className="add-paymentss">
                                Billing Details
                              </div>
                              <div className="commonSpace">
                                <div className="facility-form">
                                  <label>Card Holder Name</label>
                                  <input
                                    type="text"
                                    placeholder="eg. John Johnson"
                                  />
                                </div>
                              </div>
                              <div className="commonSpace">
                                <div className="row">
                                  <div className="col-md-6 mb-4 mt-2">
                                    <div className="facility-form">
                                      <label>Address</label>
                                      <input
                                        type="text"
                                        placeholder="eg. 122 Example Street"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-4 mt-2">
                                    <div className="facility-form">
                                      <label>Apt</label>
                                      <input type="text" placeholder="#" />
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-4 mt-2">
                                    <div className="facility-form">
                                      <label>Postal Code</label>
                                      <input
                                        type="text"
                                        placeholder="eg : 10012"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-4 mt-2">
                                    <div className="facility-form">
                                      <label>City</label>
                                      <input
                                        type="text"
                                        placeholder="Select City"
                                      />
                                      <i class="fas fa-angle-down"></i>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="facility-form">
                                      <label>State</label>
                                      <input
                                        type="text"
                                        placeholder="Select State"
                                      />
                                      <i class="fas fa-angle-down"></i>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="facility-form">
                                      <label>Country</label>
                                      <input
                                        type="text"
                                        placeholder="Select Country"
                                      />
                                      <i class="fas fa-angle-down"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 right-facility-design pt-4">
                            <img src={Photo} />
                            <div className="commonSpace">
                              <div className="row mt-4">
                                <div className="col-md-4 ">Price</div>
                                <div className="col-md-4">Tax</div>
                                <div className="col-md-4">Total</div>
                              </div>
                              <div className="row">
                                <div className="col-md-4 boldFont largeFont">
                                  $50
                                </div>
                                <div className="col-md-4 boldFont largeFont">
                                  $5
                                </div>
                                <div className="col-md-4 boldFont largeFont">
                                  $55
                                </div>
                              </div>
                            </div>
                            <div className="commonSpace">
                              <div>Date</div>
                            </div>
                            <div className="big-text">
                              <h5>Monday 10, May</h5>
                            </div>
                            <div className="commonSpace mt-4">
                              <div className="row">
                                <div className="col-md-6">Start Time</div>
                                <div className="col-md-6">End Time</div>
                              </div>
                            </div>
                            <div className="">
                              <div className="row">
                                <h6 className="col-md-6 date-big">
                                  10:00 <span className="light-text">AM</span>
                                </h6>
                                <h6 className="col-md-6 date-big">
                                  11:30 <span className="light-text">AM</span>
                                </h6>
                              </div>
                            </div>

                            <div className="facility-form mt-4 mb-3">
                              <label>Promo Code</label>
                              <input type="email" placeholder="Promo Code" />
                            </div>
                            <div>
                              <button
                                className="common-button"
                                onClick={confirmBooking}
                              >
                                <span className="button-text-color">
                                  Confirm Booking
                                </span>
                              </button>
                              <button
                                className="common-button-black"
                                onClick={() => {
                                  setSelectedTab("1. Date & Time");
                                }}
                              >
                                <span className="button-text-color">Back</span>
                              </button>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}
                </TabPanel>
              );
            })}
          </div>
        </div>
      </Modal>
      <Modal show={confirmedModal} className="final-facily">
        <div className="swining-pol-text">
          <h2>Booking Confirmed</h2>
        </div>
        <span onClick={showHideConfirmedModal} class="cross-icon-style">
          <i class="fal fa-times"></i>
        </span>

        <section className="swining-poolbooking pb-4">
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3316.8756987751667!2d-84.3979549!3d33.7638778!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1631821472543!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="col-md-6 right-facility-design">
                <div className="text-commonn">
                  <p>An email confirmation of your booking has been sent</p>
                </div>
                <div className="commonSpace">
                  <div>Date</div>
                </div>
                <div className="big-text">
                  <h5>Monday 10, May</h5>
                </div>

                <div className="commonSpace">
                  <div>Facility</div>
                </div>
                <div className="big-text">
                  <h5>Wayne Gretzky Sports Centre</h5>
                </div>

                <div className="commonSpace mt-3">
                  <div className="row">
                    <div className="col-md-6">Room Name</div>
                    <div className="col-md-6">Room Type</div>
                  </div>
                </div>
                <div className="">
                  <div className="row">
                    <h6 className="col-md-6 date-big">North Rink</h6>
                    <h6 className="col-md-6 date-big">Ice Rink</h6>
                  </div>
                </div>

                <div className="commonSpace mt-3">
                  <div className="row">
                    <div className="col-md-6">Start Time</div>
                    <div className="col-md-6">End Time</div>
                  </div>
                </div>
                <div className="">
                  <div className="row">
                    <h6 className="col-md-6 date-big">
                      10:00 <span className="light-text">AM</span>
                    </h6>
                    <h6 className="col-md-6 date-big">
                      11:30 <span className="light-text">AM</span>
                    </h6>
                  </div>
                </div>

                <div>
                  <div className="Questions mt-2">Questions?</div>
                  <button
                    className="common-button mb-4 mt-0"
                    onClick={confirmBooking}
                  >
                    <span className="button-text-color">
                      Send Facility a Message
                    </span>
                  </button>
                </div>
                <div></div>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-md-6">
                <div className="share-socils">
                  <div className="socil-text">
                    <h3>Share</h3>
                    <div className="social-i">
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-instagram"></i>
                    </div>
                  </div>
                </div>
                <div className="share-socils pt-2">
                  <div className="socil-text">
                    <h3>Add to Calendar</h3>
                    <div className="social-i">
                      <img src={googlecal} />
                      <h3>.ics</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3 text-right pr-5">
                <button
                  className="close-btnss common-button mt-0"
                  onClick={showHideConfirmedModal}
                >
                  <span className="button-text-color">Close</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Modal>
      <Footer />
    </div>
  );
}

export default Facility;
