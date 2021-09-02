import React from 'react'
import InnerHeader from './../InnerHeader'
import sort from '../../assets/images/sort-size.png'
import one from '../../assets/images/imagesearch.png'
import fav from '../../assets/images/FavoriteAdd.png'
import verify from '../../assets/images/Verified.png'
import nine from '../../assets/images/imagenine.png'
import ten from '../../assets/images/imageten.png'
import elebn from '../../assets/images/imageelevn.png'
import twelb from '../../assets/images/imagetwelbe.png'


function Search() {
    return (
        <div>
            <InnerHeader />

            <section className="search-main-page">
                <div className="container-fluid pr-0">
                    <div className="row mr-0">
                        <div className="col-md-8">
                            <div className="left-search">
                                <div className="buttons-filters">
                                    <div className="filters-left">
                                        <button className="btn btn-black btn-filter">20 May</button>
                                        <button className="btn btn-black btn-filter">10:00 AM — 1:00 PM</button>
                                        <button className="btn btn-black btn-filter more-btn">Weekends</button>
                                        <button className="btn btn-black btn-filter">$10–100</button>
                                        <button className="btn btn-black btn-filter more-btn">More</button>
                                    </div>
                                    <div className="filters-right">
                                    <div class="anil_nepal">
                                        <span className="map-text map">Map</span>
                                        <label class="switch switch-left-right">
                                            <input class="switch-input" type="checkbox" />
                                            <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span> </label>
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
                                    <div className="search-box">
                                        <div className="serch-img">
                                            <img className="hover-img" src={one} />
                                            <img className="favrate" src={fav} />
                                        </div>
                                        <div className="serch-content">
                                            <h2>Wayne Gretzky Sports Centre  <img src={verify} /></h2>
                                           
                                            <p>254 North Park Street, Brantford ON N3R 4L1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-4">
                                    <div className="search-box">
                                        <div className="serch-img">
                                            <img className="hover-img" src={nine} />
                                            <img className="favrate" src={fav} />
                                        </div>
                                        <div className="serch-content">
                                            <h2>Wayne Gretzky Sports Centre  <img src={verify} /></h2>
                                           
                                            <p>254 North Park Street, Brantford ON N3R 4L1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-4">
                                    <div className="search-box">
                                        <div className="serch-img">
                                            <img className="hover-img" src={ten} />
                                            <img className="favrate" src={fav} />
                                        </div>
                                        <div className="serch-content">
                                            <h2>Wayne Gretzky Sports Centre  <img src={verify} /></h2>
                                           
                                            <p>254 North Park Street, Brantford ON N3R 4L1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-4">
                                    <div className="search-box">
                                        <div className="serch-img">
                                            <img className="hover-img" src={elebn} />
                                            <img className="favrate" src={fav} />
                                        </div>
                                        <div className="serch-content">
                                            <h2>Wayne Gretzky Sports Centre  <img src={verify} /></h2>
                                           
                                            <p>254 North Park Street, Brantford ON N3R 4L1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-4">
                                    <div className="search-box">
                                        <div className="serch-img">
                                            <img className="hover-img" src={twelb} />
                                            <img className="favrate" src={fav} />
                                        </div>
                                        <div className="serch-content">
                                            <h2>Wayne Gretzky Sports Centre  <img src={verify} /></h2>
                                           
                                            <p>254 North Park Street, Brantford ON N3R 4L1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loading text-center">
                                <p>Loading...</p>
                            </div>
                        </div>
                        <div className="col-md-4 pr-0">
                            <div className="right-search">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1630095896548!5m2!1sen!2sin" width="100%" height="600px" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div className="listing-tab pt-4">
                                <button className="btn btn-black btn-filter">30 May–1 Jun</button>
                                <div className="listing-text">
                                    <div className="listing-box">
                                        <h4>Wayne Gretzky Sports Centre<span>• North Rink</span></h4>
                                        <ul>
                                            <li>30 May<strong>9</strong><span>AM</span>--<strong>3</strong><span>PM</span></li>
                                            <li>$100+</li>
                                        </ul>
                                    </div>
                                    <div className="listing-box">
                                        <h4>Wayne Gretzky Sports Centre<span>• North Rink</span></h4>
                                        <ul>
                                            <li>30 May<strong>9</strong><span>AM</span>--<strong>3</strong><span>PM</span></li>
                                            <li>$100+</li>
                                        </ul>
                                    </div>
                                    <div className="listing-box">
                                        <h4>Wayne Gretzky Sports Centre<span>• North Rink</span></h4>
                                        <ul>
                                            <li>30 May<strong>9</strong><span>AM</span>--<strong>3</strong><span>PM</span></li>
                                            <li>$100+</li>
                                        </ul>
                                    </div>
                                    <div className="listing-box">
                                        <h4>Wayne Gretzky Sports Centre<span>• North Rink</span></h4>
                                        <ul>
                                            <li>30 May<strong>9</strong><span>AM</span>--<strong>3</strong><span>PM</span></li>
                                            <li>$100+</li>
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

export default Search
