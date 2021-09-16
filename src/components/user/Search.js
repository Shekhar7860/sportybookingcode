import React, { useState } from "react";
import InnerHeader from "./../InnerHeader";
import sort from "../../assets/images/sort-size.png";
import one from "../../assets/images/imagesearch.png";
import fav from "../../assets/images/FavoriteAdd.png";
import verify from "../../assets/images/Verified.png";
import nine from "../../assets/images/imagenine.png";
import ten from "../../assets/images/imageten.png";
import elebn from "../../assets/images/imageelevn.png";
import twelb from "../../assets/images/imagetwelbe.png";
import preium from "../../assets/images/preium.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Search({ userLabelName }) {
  const [list, setList] = useState(false);
  return (
    <div>
      <InnerHeader highLightedUserName={userLabelName} />

      <section className="search-main-page search-page">
        <div className="container-fluid pr-0">
          <div className="row mr-0">
            <div className="col-md-8">
              <div className="left-search">
                <div className="buttons-filters">
                  <div className="filters-left">
                    <button className="btn btn-black btn-filter">20 May</button>
                    <button className="btn btn-black btn-filter">
                      10:00 AM — 1:00 PM
                    </button>
                    <button className="btn btn-black btn-filter more-btn">
                      Weekends
                    </button>
                    <button className="btn btn-black btn-filter">
                      $10–100
                    </button>
                    <button className="btn btn-black btn-filter more-btn">
                      More
                    </button>
                  </div>
                  <div className="filters-right">
                    <div class="anil_nepal">
                      <span className="map-text map">Map</span>
                      <label class="switch switch-left-right">
                        <input
                          class="switch-input"
                          type="checkbox"
                          onChange={(e) => setList(e.target.checked)}
                        />
                        <span
                          class="switch-label"
                          data-on="On"
                          data-off="Off"
                        ></span>{" "}
                        <span class="switch-handle"></span>{" "}
                      </label>
                      <span className="map-text">Listings</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="total-result">
                <div className="total-left">
                  <h2>6 results</h2>
                </div>
                <div className="total-right">
                  <button className="popular">
                    <img src={sort} />
                    Popular
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pt-4">
                  <Link to="/facility">
                    <div className="search-box preium">
                      <div className="serch-img">
                        <img className="hover-img" src={one} />
                        {/* <img className="favrate" src={fav} /> */}
                        <svg
                          className="favrate"
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
                      <div className="serch-content">
                        <h2>
                          Wayne Gretzky Sports Centre
                          <span
                            className="tooltips-text"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Premium Gold Facility"
                          >
                            <img src={preium} />
                          </span>
                          <span
                            className="tooltips-cont"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Verified Facility"
                          >
                            <img src={verify} />
                          </span>
                        </h2>

                        <p>254 North Park Street, Brantford ON N3R 4L1</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-md-6 pt-4">
                  <Link to="/facility">
                    <div className="search-box">
                      <div className="serch-img">
                        <img className="hover-img" src={nine} />
                        <svg
                          className="favrate"
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
                      <div className="serch-content">
                        <h2>
                          Wayne Gretzky Sports Centre
                          <span
                            className="tooltips-cont"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Verified Facility"
                          >
                            <img src={verify} />
                          </span>
                        </h2>

                        <p>254 North Park Street, Brantford ON N3R 4L1</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 pt-4">
                  <Link to="/facility">
                    <div className="search-box">
                      <div className="serch-img">
                        <img className="hover-img" src={ten} />
                        <svg
                          className="favrate"
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
                      <div className="serch-content">
                        <h2>
                          Wayne Gretzky Sports Centre
                          <span
                            className="tooltips-cont"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Verified Facility"
                          >
                            <img src={verify} />
                          </span>
                        </h2>

                        <p>254 North Park Street, Brantford ON N3R 4L1</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 pt-4">
                  <Link to="/facility">
                    <div className="search-box">
                      <div className="serch-img">
                        <img className="hover-img" src={elebn} />
                        <svg
                          className="favrate"
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
                      <div className="serch-content">
                        <h2>
                          Wayne Gretzky Sports Centre
                          <span
                            className="tooltips-cont"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Verified Facility"
                          >
                            <img src={verify} />
                          </span>
                        </h2>

                        <p>254 North Park Street, Brantford ON N3R 4L1</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 pt-4">
                  <Link to="/facility">
                    <div className="search-box">
                      <div className="serch-img">
                        <img className="hover-img" src={twelb} />
                        <svg
                          className="favrate"
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
                      <div className="serch-content">
                        <h2>
                          Wayne Gretzky Sports Centre
                          <span
                            className="tooltips-cont"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Verified Facility"
                          >
                            <img src={verify} />
                          </span>
                        </h2>

                        <p>254 North Park Street, Brantford ON N3R 4L1</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="loading text-center">
                <p>Loading...</p>
              </div>
            </div>
            <div className="col-md-4 pr-0">
              {list ? (
                <div className="listing-tab pt-4">
                  <button className="btn btn-black btn-filter">
                    30 May–1 Jun
                  </button>
                  <div className="listing-text">
                    <div className="listing-box">
                      <h4>
                        Wayne Gretzky Sports Centre<span>• North Rink</span>
                      </h4>
                      <ul>
                        <li>
                          30 May<strong>9</strong>
                          <span>AM</span>—<strong>3</strong>
                          <span>PM</span>
                        </li>
                        <li>
                          $100<span className="ml-0">+</span>
                        </li>
                      </ul>
                    </div>
                    <div className="listing-box">
                      <h4>
                        Wayne Gretzky Sports Centre<span>• North Rink</span>
                      </h4>
                      <ul>
                        <li>
                          30 May<strong>9</strong>
                          <span>AM</span>—<strong>3</strong>
                          <span>PM</span>
                        </li>
                        <li>
                          $100<span className="ml-0">+</span>
                        </li>
                      </ul>
                    </div>
                    <div className="listing-box">
                      <h4>
                        Wayne Gretzky Sports Centre<span>• North Rink</span>
                      </h4>
                      <ul>
                        <li>
                          30 May<strong>9</strong>
                          <span>AM</span>—<strong>3</strong>
                          <span>PM</span>
                        </li>
                        <li>
                          $100<span className="ml-0">+</span>
                        </li>
                      </ul>
                    </div>
                    <div className="listing-box">
                      <h4>
                        Wayne Gretzky Sports Centre<span>• North Rink</span>
                      </h4>
                      <ul>
                        <li>
                          30 May<strong>9</strong>
                          <span>AM</span>—<strong>3</strong>
                          <span>PM</span>
                        </li>
                        <li>
                          $100<span className="ml-0">+</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="right-search">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1630095896548!5m2!1sen!2sin"
                    width="100%"
                    height="600px"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    userLabelName: state.user.userLabelName,
  };
};

export default connect(mapStateToProps, null)(Search);
