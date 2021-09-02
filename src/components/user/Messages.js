import React from 'react'
import Footer from './../Footer'
import InnerHeader from './../InnerHeader'
import imagenine from '../../assets/images/imagenine.png'
import calender from '../../assets/images/Calendar.png'

function Messages() {
    return (
        <div>
            <InnerHeader />

            <section className="mybooking messages-page">
                <div className="mybookin-fluid">
                    <div className="commoan-left">
                        <div className="messages">
                            <h3>Messages</h3>
                            <select name="cars" id="cars">
                                <option value="volvo">Recent</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="chat-list">
                            <div className="messages-name active">
                                <h6>Mike S.</h6>
                                <span className="pull-right">1:16 PM</span>
                                <p>Wayne Gretzky Sports Centre</p>
                                <h5>You: Ok</h5>
                            </div>
                            <div className="messages-name">
                                <h6>Mike S.</h6>
                                <span className="pull-right">1:16 PM</span>
                                <p>Wayne Gretzky Sports Centre</p>
                                <h5>You: Ok</h5>
                            </div>
                        </div>
                    </div>
                    <div className="common-right">
                        <div className="chat-page">
                            <div className="chat-title">
                                <h2>Mike S.</h2>
                            </div>
                            <div className="chat-content">
                                <h5>30 May, 10:00–11:30 AM</h5>
                                <p>Wayne Gretzky Sports Centre</p>
                            </div>
                        </div>
                        <div className="chat-messages">
                            <div className="chat-left">
                                <span>MS</span>
                                <div className="chat-user">
                                    <h3>Mike S.</h3>
                                    <p>Hey, let’s confirm your booking at 30 May, 10:00–11:30 AM</p>
                                </div>
                            </div>
                            <div className="chat-right">
                                <p>9 May, 10:03 AM</p>
                            </div>
                        </div>
                        <div className="text-center date-text">
                            <span>Today</span>
                        </div>

                        <div className="chat-messages">
                            <div className="chat-left">
                                <span>AS</span>
                                <div className="chat-user">
                                    <h3>You</h3>
                                    <p>Ok</p>
                                </div>
                            </div>
                            <div className="chat-right">
                                <p>Just now</p>
                            </div>
                        </div>
                    
                    <div className="messeng-sent">
                        <input type="text" placeholder="Message" />
                        <button className="btn btn-send">Send</button>
                    </div>

                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </div>
    )
}



export default Messages
