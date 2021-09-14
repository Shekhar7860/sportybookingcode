import React, { useState } from 'react'
import InnerHeader from './InnerHeader'
import one from '../assets/images/imagesearch.png'
import verify from '../assets/images/Verified.png'
import preium from '../assets/images/preium.png'
import { Link } from 'react-router-dom'


function Favorite() {

   
    return (
        <div>
            <InnerHeader />

            <section className="search-main-page">
                <div className="container-fluid pr-0">
                    <div className="row mr-0">
                        <div className="col-md-8">
                           
                            <div className="total-results favrote">
                                <div className="total-fav">
                                    <h2>Favorites<span> 3</span></h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 pt-4">
                                    <Link to="/facility">
                                        <div className="search-box preium">
                                            <div className="serch-img">
                                                <img className="hover-img" src={one} />
                                                {/* <img className="favrate" src={fav} /> */}
                                                <svg className="favrate" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle opacity="0.6" cx="16" cy="16" r="16" fill="#080808"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0122 10.5717L14.9252 9.48469C12.7773 7.33681 9.29493 7.33681 7.14705 9.48469C4.99916 11.6326 4.99916 15.115 7.14705 17.2629L15.9859 26.1017L15.9877 26.0999L16.014 26.1262L24.8528 17.2874C27.0007 15.1395 27.0007 11.6571 24.8528 9.50923C22.705 7.36134 19.2226 7.36134 17.0747 9.50923L16.0122 10.5717Z" fill="#ED4C3F"/>
                                                </svg>


                                            </div>
                                            <div className="serch-content">
                                                <h2>Wayne Gretzky Sports Centre <img src={preium} /> <img src={verify} /> </h2>

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
                            
                                <div className="listing-tab pt-4">
                                    <button className="btn btn-black btn-filter">30 May–1 Jun</button>
                                    <div className="listing-text">
                                        <div className="listing-box">
                                            <h4>Wayne Gretzky Sports Centre<span>• North Rink</span></h4>
                                            <ul>
                                                <li>30 May<strong>9</strong><span>AM</span>—<strong>3</strong><span>PM</span></li>
                                                <li>$100<span className="ml-0">+</span></li>
                                            </ul>
                                        </div>
                                        <div className="listing-box">
                                            <h4>Wayne Gretzky Sports Centre<span>• North Rink</span></h4>
                                            <ul>
                                                <li>30 May<strong>9</strong><span>AM</span>—<strong>3</strong><span>PM</span></li>
                                                <li>$100<span className="ml-0">+</span></li>
                                            </ul>
                                        </div>
                                        <div className="listing-box">
                                            <h4>Wayne Gretzky Sports Centre<span>• North Rink</span></h4>
                                            <ul>
                                                <li>30 May<strong>9</strong><span>AM</span>—<strong>3</strong><span>PM</span></li>
                                                <li>$100<span className="ml-0">+</span></li>
                                            </ul>
                                        </div>
                                        <div className="listing-box">
                                            <h4>Wayne Gretzky Sports Centre<span>• North Rink</span></h4>
                                            <ul>
                                                <li>30 May<strong>9</strong><span>AM</span>—<strong>3</strong><span>PM</span></li>
                                                <li>$100<span className="ml-0">+</span></li>
                                            </ul>
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

export default Favorite
