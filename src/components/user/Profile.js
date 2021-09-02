import React from 'react'
import Footer from './../Footer'
import InnerHeader from './../InnerHeader'
import google from '../../assets/images/Google.png'

function Profile() {
    return (
        <div>
            <InnerHeader />

            <section className="mybooking">
                <div className="mybookin-fluid">
                    <div className="commoan-left">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Password</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Payment Methods</a>
                            <a className="nav-link" id="v-pills-notification-tab" data-toggle="pill" href="#v-notification" role="tab" aria-controls="v-pills-home" aria-selected="true">Notifications</a>
                            <a className="nav-link" id="v-pills-transation-tab" data-toggle="pill" href="#v-transation" role="tab" aria-controls="v-pills-profile" aria-selected="false">Transactions</a>
                            <a className="nav-link" id="v-pills-wallet-tab-tab" data-toggle="pill" href="#v-pills-wallet" role="tab" aria-controls="v-pills-messages" aria-selected="false">E-Wallet</a>
                        </div>
                    </div>
                    <div className="common-right">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="upcoming-tab">
                                    <h2>Profile</h2>
                                    <div className="profile-data">
                                        <div className="row mt-4">
                                            <div className="col-md-2">
                                                <label>First Name</label>
                                                <input type="text" autocomplete="off" placeholder="John" />
                                            </div>
                                            <div className="col-md-2">
                                                <label>Last Name</label>
                                                <input type="text" autocomplete="off" placeholder="Johnson" />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-4">
                                                <label>Email</label>
                                                <input type="text" autocomplete="off" placeholder="john.j@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="row mt-4 align-items-center">
                                            <div className="col-md-2">
                                                <label>Phone Number</label>
                                                <input type="text" autocomplete="off" placeholder="+1 234 567 8900" />
                                            </div>
                                            <div className="col-md-5 ml-4 verification-code">
                                                <label>Verification Code</label>
                                                <input type="text" autocomplete="off" placeholder="1" />
                                                <input type="text" autocomplete="off" placeholder="2" />
                                                <input type="text" placeholder="3" autocomplete="off" />
                                                <input type="text" placeholder="4" autocomplete="off" />
                                                <span>OK</span> <span>Send Again</span>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-3">
                                                <h4>Connect Social Profile</h4>
                                                <button className="btn-google">
                                                    <img src={google} />
                                                    {/* <i class="fab fa-google"></i> */}
                                                    Connect Google
                                                </button>
                                                <button className="btn-google">

                                                    <i className="fab fa-facebook-f"></i>
                                                    Connect Facebook
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-8 Social-profile">
                                                <h4>Connect Social Profile</h4>
                                                <p>To change your email, please enter your current password.</p>
                                            </div>

                                        </div>
                                        <div className="row mt-4">

                                            <div className="col-md-3">
                                                <label>Password</label>
                                                <input type="password" autocomplete="off" placeholder="*********" />
                                            </div>

                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <button className="update-btn">Update Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div className="calender-tab">
                                    <div className="upcoming-tab">
                                        <h2>Password</h2>
                                        <div className="profile-data">
                                            <div className="row mt-4">
                                                <div className="col-md-5">
                                                    <label>New Password</label>
                                                    <input type="password" autocomplete="off" placeholder="*********" />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-md-8 Social-profile">
                                                    <h4>Connect Social Profile</h4>
                                                    <p>To change your email, please enter your current password.</p>
                                                </div>

                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-md-5">
                                                    <label>Password</label>
                                                    <input type="password" autocomplete="off" placeholder="*********" />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-md-12">
                                                    <button className="update-btn">Change Password</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div className="payment-method">
                                    <div className="payment-heading">
                                        <h2>Payment Methods</h2>
                                        <p>Add Payment Method</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card-number">
                                                <label>Credit Card Number</label>
                                                <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="radio-btn">
                                                <label>
                                                    <input type="checkbox" />Save card details for future bookings
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <div className="billing-details">
                                                <h4>Billing Details</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-number">
                                                <label>Cardholder Name</label>
                                                <input type="text" placeholder="eg: John Johnson" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-3">
                                            <div className="card-number">
                                                <label>Address</label>
                                                <input type="text" placeholder="eg: 122 Example Street" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-number">
                                                <label>Apt #</label>
                                                <input type="text" placeholder="eg: 42" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-3">
                                            <div className="card-number">
                                                <label>Postal Code</label>
                                                <input type="text" placeholder="eg: 10012" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-number">
                                                <label>City</label>
                                                <select name="cars" id="cars" placeholder="Select City">
                                                    <option value="volvo">Select City</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-3">
                                            <div className="card-number">
                                                <label>State</label>
                                                <select name="cars" id="cars" placeholder="Select State">
                                                    <option value="volvo">Select State</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-number">
                                                <label>Country</label>
                                                <select name="cars" id="cars" placeholder="Select Country">
                                                    <option value="volvo">Select Country</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <button className="update-btn">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-notification" role="tabpanel" aria-labelledby="v-notification-tab">
                                <div className="payment-method notification">
                                    <div className="payment-heading">
                                        <h2>Notifications</h2>
                                        <p>SMS notifications</p>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <div className="radio-btn">
                                                <label>
                                                    <input type="checkbox" /><span>I would like to receive SMS Text Messages for Status Changes to my Booking (ex. Confirmations, ?Cancellations, etc)</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <div className="billing-details">
                                                <h4>Newsletter</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="radio-btn">
                                                <label>
                                                    <input type="checkbox" /><span>I would like to recieve SMS notifications from facilities</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <button className="update-btn">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-transation" role="tabpanel" aria-labelledby="v-transation-tab">
                                <div className="transition">
                                    <div className="payment-heading">
                                        <h2>Transactions</h2>
                                    </div>
                                    <div className="transition-table">
                                        <table class="table mt-4">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">Invoice Id</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td scope="row">+</td>
                                                    <td>124123</td>
                                                    <td>11 May 2021, 10:36:02 AM</td>
                                                    <td>@North Rink • 1 May 2021, 12AM–3PM • Refund</td>
                                                    <td>$95.00</td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">+</td>
                                                    <td>124123</td>
                                                    <td>11 May 2021, 10:36:02 AM</td>
                                                    <td>@North Rink • 1 May 2021, 12AM–3PM • Refund</td>
                                                    <td>$95.00</td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">+</td>
                                                    <td>124123</td>
                                                    <td>11 May 2021, 10:36:02 AM</td>
                                                    <td>@North Rink • 1 May 2021, 12AM–3PM • Refund</td>
                                                    <td>$95.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-wallet" role="tabpanel" aria-labelledby="v-pills-wallet-tab">
                            <div className="payment-heading wallet">
                                <h2>E-Wallet</h2>
                                <p>Your balance</p>
                                <h4>$100</h4>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Profile
