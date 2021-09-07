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
import upload from '../../assets/owner/Upload.png'
import nine from '../../assets/images/imagenine.png'
import { Link } from 'react-router-dom'


const OwnerAddFacility  = () => {
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
                <div className="owner-right my-facilities">
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mt-4">
                            <div className="glance-heading">
                                <h2>Add Facility</h2>
                            </div>
                        </div>
                        
                        
                        <div className="col-md-11">
                        <div className="add-facility">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    <span>1</span> <h2>Profile</h2>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                <span>2</span> <h2>Photo</h2>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                <span>3</span> <h2>Room</h2>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="add-facility-form">
                                            <div className="form-group">
                                                <input type="text" placeholder="Facility Name" />
                                            </div>
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Short description">
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="location">
                                            <h6>Location</h6>
                                            <div className="add-facility-form">
                                            <div className="form-group">
                                                <input type="text" placeholder="Facility Name" />
                                            </div>
                                            </div>
                                            <div className="right-search">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1630095896548!5m2!1sen!2sin" width="100%" height="600px" allowfullscreen="" loading="lazy"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 pl-5">
                                        <div className="location">
                                            <h6>Working Hours</h6>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Monday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Tuesday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Wednesday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Thursday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Friday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Saturday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal sunday">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Sunday</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-4 mb-5 text-right">
                                        <button className="continue-btn update-btn">Continue</button>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="drop-photo">
                                            <div className="form-group">
                                                <input type="file" className="open-file" />
                                                <div className="upload-file">
                                                    <img src={upload} />
                                                    <p>Drag photo here <br />or click to select file</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <button className="back-btn continue-btn update-btn">Back</button>
                                    </div>
                                    <div className="col-md-6 mb-5 text-right">
                                        <button className="back-btn-continue continue-btn update-btn">Continue</button>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                               <div className="row">
                               <div className="col-md-12">
                                   <div className="add-room">
                                       <button className="add-room btn" data-toggle="modal" data-target="#addroom">Add Room </button>
                                   </div>
                               </div>
                               <div className="col-md-12">
                                   <div className="add-room-box mt-3">
                                       <div className="add-room-one mr-4">
                                           <img src={nine} />
                                       </div>
                                       <div className="add-room-one mr-auto">
                                           <h3>North Rink</h3>
                                           <p>Hockey Rink, Skates, Curling</p>
                                           <span>7AM—11PM</span>
                                       </div>
                                       <div className="add-room-one text-right">
                                         
                                         <div class="dropdown">
                                         <i class="fas fa-angle-down" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Edit</a>
                                                <a class="dropdown-item" href="#">Manage Listings</a>
                                                <a class="dropdown-item delete" href="#">Delete</a>
                                            </div>
                                            </div>
                                       </div>
                                   </div>
                                   <div className="add-room-box mt-4">
                                       <div className="add-room-one mr-4">
                                           <img src={nine} />
                                       </div>
                                       <div className="add-room-one mr-auto">
                                           <h3>North Rink</h3>
                                           <p>Hockey Rink, Skates, Curling</p>
                                           <span>7AM—11PM</span>
                                       </div>
                                       <div className="add-room-one text-right">
                                         
                                         <div class="dropdown">
                                         <i class="fas fa-angle-down" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Edit</a>
                                                <a class="dropdown-item" href="#">Manage Listings</a>
                                                <a class="dropdown-item delete" href="#">Delete</a>
                                            </div>
                                            </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-md-6 mt-5 mb-5">
                                        <button className="back-btn continue-btn update-btn">Back</button>
                                    </div>
                                    <div className="col-md-6 mt-5 mb-5 text-right">
                                        <button className="continue-btn update-btn">Continue</button>
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





<div class="modal fade" id="addroom" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
    <div className="container">
                    <div className="row">
                <div className="col-md-12">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
                    <div className="add-facility">
                    <div className="add-room-modal">
                            <div className="glance-heading">
                                <p>Wayne Gretzky Sports Centre</p>
                                <h2>Add Room</h2>
                            </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    <span>1</span> <h2>Profile</h2>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                <span>2</span> <h2>Features</h2>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                <span>3</span> <h2>Agreements</h2>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#Photos" role="tab" aria-controls="contact" aria-selected="false">
                                <span>4</span> <h2>Photos</h2>
                                </a>
                            </li>
                        </ul>
                        </div>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="add-facility-form">
                                            <div className="form-group">
                                                <label>Room Name</label>
                                                <input type="text" placeholder="North Rink" />
                                            </div>
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Description">
                                                </textarea>
                                            </div>

                                            <div className="form-group half-select">
                                            <label for="cars">Room Type</label>
                                            <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                              
                                                </div>
                                            </div>
                                            <div className="form-group activities-half">
                                                <label><strong>Activities 1</strong></label>
                                                <input type="text" placeholder="Start typing" />
                                            </div>
                                            <div className="form-group buttons-addroom">
                                                <button className="btn btn-black">Ice Hockey</button>
                                                <button className="btn btn-black btn-tranpernt">Ice Skating</button>
                                            </div>
                                            <div className="form-group buttons-addroom activities-half">
                                                <label><strong>Activities 1</strong></label>
                                                <button className="btn btn-black">Ice Hockey</button>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="col-md-6 pl-5">
                                        <div className="location">
                                            <h6>Working Hours</h6>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Monday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Tuesday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Wednesday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Thursday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Friday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Saturday</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="select-box">
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                <select name="cars" id="cars">
                                                    <option value="volvo">7 AM </option>
                                                    <option value="saab">9 AM</option>
                                                    <option value="mercedes">13 AM</option>
                                                    <option value="audi">7 AM</option>
                                                </select>
                                                </div>
                                                <span>—</span>
                                                <div className="select-one">
                                                <i class="far fa-angle-down"></i>
                                                    <select name="cars" id="cars">
                                                        <option value="volvo">11 AM </option>
                                                        <option value="saab">7 AM</option>
                                                        <option value="mercedes">13 AM</option>
                                                        <option value="audi">17 AM</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="anil_nepal sunday">
                                                    <label class="switch switch-left-right">
                                                    <input class="switch-input" type="checkbox" />
                                                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
                                                    <span className="map-text">Sunday</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-4 mb-2 text-right">
                                        <button className="continue-btn update-btn" data-toggle="modal" data-target="#addcongrs" data-dismiss="modal">Continue</button>
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











<div class="modal fade" id="addcongrs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    <div className="container">
            <div className="row">
                <div className="col-md-12">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
                    <div className="add-facility">
                        <div className="add-room-modal">
                            <div className="glance-heading">
                                <h2>Congratulations!</h2>
                            </div>
                        </div>
                        <div className="congo-room">
                            <p>Facility was added. We will be in contact with you shortly to activate your facility. After that it will appears on listing.</p>
                            <button class="continue-btn update-btn">Got it!</button>
                        </div>
                        </div>
                        </div>       
                    </div>
                </div>
      
    </div>
  </div>
</div>


    </div>
    )
}

export default OwnerAddFacility
