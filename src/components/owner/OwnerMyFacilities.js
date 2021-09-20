import React from "react";
import Ownerheader from "../Ownerheader";
import home from "../../assets/owner/home.png";
import calendar from "../../assets/owner/calendar.png";
import listings from "../../assets/owner/listings.png";
import bookings from "../../assets/owner/bookings.png";
import facilities from "../../assets/owner/facilities.png";
import Payments from "../../assets/owner/Payments.png";
import notifications from "../../assets/owner/notifications.png";
import subscriptions from "../../assets/owner/subscriptions.png";
import one from "../../assets/images/imagesearch.png";
import verify from "../../assets/images/Verified.png";
import preium from "../../assets/images/preium.png";
import Pending from "../../assets/images/Pending.png";
import Premium from "../../assets/images/Premium.png";
import { Link } from "react-router-dom";

const OwnerMyFacilities = () => {
  return (
    <div>
      <Ownerheader />
      <section className="owner-home">
        <div className="owner-main">
          <div className="onwer-left">
            <div className="owner-icons">
              <Link to="/home">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5 7.31008L11.684 1.4941C10.7077 0.517786 9.12479 0.517786 8.14848 1.4941L2.5 7.14258V19.2381H8.33333V14.2381C8.33333 13.3176 9.07953 12.5715 10 12.5715C10.9205 12.5715 11.6667 13.3176 11.6667 14.2381V19.2381H17.5V7.31008ZM9.32699 2.67261L4.16667 7.83293V17.5715H6.66667V14.2381C6.66667 12.3972 8.15905 10.9048 10 10.9048C11.8409 10.9048 13.3333 12.3972 13.3333 14.2381V17.5715H15.8333V8.00044L10.5055 2.67261C10.1801 2.34717 9.65243 2.34717 9.32699 2.67261Z"
                    fill="black"
                  />
                </svg>
                <h3>Home</h3>
              </Link>
            </div>
            <div className="owner-icons">
              <Link to="/calender" className="same-stoke">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66667 5.33334C2.66667 4.78106 3.11438 4.33334 3.66667 4.33334H16.3333C16.8856 4.33334 17.3333 4.78106 17.3333 5.33334V14.6667C17.3333 15.219 16.8856 15.6667 16.3333 15.6667H3.66667C3.11438 15.6667 2.66667 15.219 2.66667 14.6667V5.33334Z"
                    stroke="#080808"
                    stroke-width="2"
                  />
                  <path
                    d="M5 2.50001C5 2.03977 5.3731 1.66667 5.83333 1.66667C6.29357 1.66667 6.66667 2.03977 6.66667 2.50001V3.33334H5V2.50001Z"
                    fill="#080808"
                  />
                  <path
                    d="M13.3333 2.5C13.3333 2.03977 13.7064 1.66667 14.1667 1.66667C14.6269 1.66667 15 2.03977 15 2.5V3.33334H13.3333V2.5Z"
                    fill="#080808"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.83333 5.83333H4.16667V7.5H5.83333V5.83333ZM9.16667 5.83333H7.5V7.5H9.16667V5.83333ZM10.8333 5.83333H12.5V7.5H10.8333V5.83333ZM15.8333 5.83333H14.1667V7.5H15.8333V5.83333Z"
                    fill="#080808"
                  />
                  <path
                    opacity="0.4"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.83333 9.16667H4.16667V10.8333H5.83333V9.16667ZM5.83333 12.5H4.16667V14.1667H5.83333V12.5ZM7.5 9.16667H9.16667V10.8333H7.5V9.16667ZM9.16667 12.5H7.5V14.1667H9.16667V12.5ZM10.8333 9.16667H12.5V10.8333H10.8333V9.16667ZM12.5 12.5H10.8333V14.1667H12.5V12.5ZM14.1667 9.16667H15.8333V10.8333H14.1667V9.16667ZM15.8333 12.5H14.1667V14.1667H15.8333V12.5Z"
                    fill="#080808"
                  />
                </svg>

                <h3>Calendar</h3>
              </Link>
            </div>
            <div className="owner-icons">
              <Link to="/listing" className="same-stoke">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66667 5.33334C2.66667 4.78106 3.11438 4.33334 3.66667 4.33334H16.3333C16.8856 4.33334 17.3333 4.78106 17.3333 5.33334V14.6667C17.3333 15.219 16.8856 15.6667 16.3333 15.6667H3.66667C3.11438 15.6667 2.66667 15.219 2.66667 14.6667V5.33334Z"
                    stroke="#080808"
                    stroke-width="2"
                  />
                  <rect
                    x="4.16667"
                    y="5.83334"
                    width="11.6667"
                    height="1.66667"
                    fill="#080808"
                  />
                  <rect
                    opacity="0.4"
                    x="4.16667"
                    y="9.16669"
                    width="11.6667"
                    height="1.66667"
                    fill="#080808"
                  />
                  <rect
                    opacity="0.4"
                    x="4.16667"
                    y="12.5"
                    width="11.6667"
                    height="1.66667"
                    fill="#080808"
                  />
                  <path
                    d="M5 2.50001C5 2.03977 5.3731 1.66667 5.83333 1.66667C6.29357 1.66667 6.66667 2.03977 6.66667 2.50001V3.33334H5V2.50001Z"
                    fill="#080808"
                  />
                  <path
                    d="M13.3333 2.5C13.3333 2.03977 13.7064 1.66667 14.1667 1.66667C14.6269 1.66667 15 2.03977 15 2.5V3.33334H13.3333V2.5Z"
                    fill="#080808"
                  />
                </svg>

                <h3>Listings</h3>
              </Link>
            </div>
            {/* <div className="owner-icons">
                    <Link to="/booking" className="same-stoke">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.66667 6.16665C2.66667 5.61437 3.11438 5.16666 3.66667 5.16666H16.3333C16.8856 5.16666 17.3333 5.61437 17.3333 6.16666V15.5C17.3333 16.0523 16.8856 16.5 16.3333 16.5H3.66667C3.11438 16.5 2.66667 16.0523 2.66667 15.5V6.16665Z" stroke="#080808" stroke-width="2"/>
                        <path d="M5 3.33333C5 2.8731 5.3731 2.5 5.83333 2.5C6.29357 2.5 6.66667 2.8731 6.66667 3.33333V4.16667H5V3.33333Z" fill="#080808"/>
                        <path d="M13.3333 3.33333C13.3333 2.8731 13.7064 2.5 14.1667 2.5C14.6269 2.5 15 2.8731 15 3.33333V4.16667H13.3333V3.33333Z" fill="#080808"/>
                        <path d="M7.5 10.8333L9.16667 12.5L12.5 8.33334" stroke="#080808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                        <h3>Bookings</h3>
                        </Link>
                    </div> */}
            <div className="owner-icons">
              <Link to="/myfacilities">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.5 17.5C2.94772 17.5 2.5 17.0523 2.5 16.5L2.5 15.1667C2.5 14.6144 2.94772 14.1667 3.5 14.1667L9.83333 14.1667C10.3856 14.1667 10.8333 14.6144 10.8333 15.1667L10.8333 16.5C10.8333 17.0523 10.3856 17.5 9.83333 17.5L3.5 17.5ZM3.5 11.6667C2.94771 11.6667 2.5 11.219 2.5 10.6667L2.5 9.33333C2.5 8.78105 2.94771 8.33333 3.5 8.33333L17.3333 8.33333C17.8856 8.33333 18.3333 8.78105 18.3333 9.33333L18.3333 10.6667C18.3333 11.219 17.8856 11.6667 17.3333 11.6667L3.5 11.6667ZM10 4.83333C10 5.38562 10.4477 5.83333 11 5.83333L17.3333 5.83333C17.8856 5.83333 18.3333 5.38562 18.3333 4.83333L18.3333 3.5C18.3333 2.94772 17.8856 2.5 17.3333 2.5L11 2.5C10.4477 2.5 10 2.94771 10 3.5L10 4.83333ZM3.5 5.83333C2.94771 5.83333 2.5 5.38562 2.5 4.83333L2.5 3.5C2.5 2.94771 2.94771 2.5 3.5 2.5L6.5 2.5C7.05228 2.5 7.5 2.94772 7.5 3.5L7.5 4.83333C7.5 5.38562 7.05228 5.83333 6.5 5.83333L3.5 5.83333ZM13.3333 16.5C13.3333 17.0523 13.781 17.5 14.3333 17.5L17.3333 17.5C17.8856 17.5 18.3333 17.0523 18.3333 16.5L18.3333 15.1667C18.3333 14.6144 17.8856 14.1667 17.3333 14.1667L14.3333 14.1667C13.781 14.1667 13.3333 14.6144 13.3333 15.1667L13.3333 16.5Z"
                    fill="#080808"
                  />
                </svg>

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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.6667 2.49998V2.74154C14.0762 3.45867 15.8333 5.6908 15.8333 8.33331V14.1666H16.6667V15.8333H3.33333V14.1666H4.16667V8.33331C4.16667 5.6908 5.92376 3.45867 8.33333 2.74154V2.49998C8.33333 1.57951 9.07952 0.833313 10 0.833313C10.9205 0.833313 11.6667 1.57951 11.6667 2.49998ZM5.83333 14.1666H14.1667V8.33331C14.1667 6.03213 12.3012 4.16665 10 4.16665C7.69881 4.16665 5.83333 6.03213 5.83333 8.33331V14.1666ZM11.6667 17.5V16.6666H8.33333V17.5C8.33333 18.4205 9.07952 19.1666 10 19.1666C10.9205 19.1666 11.6667 18.4205 11.6667 17.5Z"
                    fill="black"
                  />
                </svg>

                <h3>Notifications</h3>
              </Link>
            </div>
            <div className="owner-icons">
              <Link to="/subscription" className="subs">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#BFA14F" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.5 10.5L5 6V15H10H15V6L12.5 10.5L10 6L7.5 10.5Z"
                    fill="white"
                  />
                </svg>

                <h3>Subscriptions</h3>
              </Link>
            </div>
          </div>
          <div className="owner-right my-facilities">
            <div className="container">
              <div className="row">
                <div className="col-md-11 mt-4">
                  <div className="glance-heading">
                    <h2>My Facilities</h2>
                    <Link to="/addfacilitiy">
                      <button className="btn btn-black btn-filter green">
                        Add Facility
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-6 pt-4">
                      <div className="search-box preium">
                        <div className="serch-img">
                          <img className="hover-img" src={one} />
                        </div>
                        <div className="serch-content">
                          <div className="facilities-both">
                            <div className="facilities-one">
                              <h2>
                                Wayne Gretzky Sports Centre <img src={preium} />{" "}
                                <img src={verify} />{" "}
                              </h2>
                              <p>254 North Park Street, Brantford ON N3R 4L1</p>
                            </div>
                            <div className="facilities-two">
                              <h3>12</h3>
                              <span>rooms</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 pt-4">
                      <div className="search-box pending">
                        <div className="serch-img">
                          <img className="hover-img" src={one} />
                          <div className="pending-hover">
                            <img className="" src={Pending} />
                            <h5>Pending</h5>
                          </div>
                          <div className="prium-text">
                            <h4>
                              <img src={Premium} />
                              <span>Go Premium</span>
                            </h4>
                          </div>
                        </div>
                        <div className="serch-content">
                          <div className="facilities-both">
                            <div className="facilities-one">
                              <h2>
                                Leon’s Centre <img src={verify} />{" "}
                              </h2>
                              <p>2872 Danforth Ave, Toronto, ON M4C 1M1</p>
                            </div>
                            <div className="facilities-two">
                              <h3>5</h3>
                              <span>rooms</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 pt-4">
                      <div className="search-box">
                        <div className="serch-img">
                          <img className="hover-img" src={one} />
                          <div className="prium-text">
                            <h4>
                              <img src={Premium} />
                              <span>Go Premium</span>
                            </h4>
                          </div>
                        </div>
                        <div className="serch-content">
                          <div className="facilities-both">
                            <div className="facilities-one">
                              <h2>
                                Magna Centre <img src={verify} />{" "}
                              </h2>
                              <p>1 Kenview Blvd, Brampton, ON L6T 5E6</p>
                            </div>
                            <div className="facilities-two">
                              <h3>8</h3>
                              <span>rooms</span>
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
        </div>
      </section>
    </div>
  );
};

export default OwnerMyFacilities;
