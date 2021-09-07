import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from '../assets/images/logo-small-transparent.svg'

const Footer = () => {
    return (
        <div>
            {/* Footer start here */}
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logo">
                <img src={footerlogo} />
                <p className="players">Where players come to play</p>
                <p className="mt-5 pt-5">© SportyBooking 2021</p>
              </div>
            </div>
            <div className="col-md-2 desktopViwe">
              <div className="footer-links">
                <ul>
                  <Link to=""><li>Sign Up For Free</li></Link>
                  <Link to=""><li>Pricing</li></Link>
                  <Link to=""><li>About</li></Link>
                  <Link to=""><li>FAQ</li></Link>
                  <Link to=""><li>Help</li></Link>
                  <Link to=""><li>Contact</li></Link>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pl-5 desktopViwe">
              <div className="footer-links">
                <ul>
                <Link to=""><li>Ice Rinks</li></Link>
                <Link to=""><li>Fields</li></Link>
                <Link to=""><li>Indoor Courts</li></Link>
                <Link to=""><li>Swimming Pools</li></Link>
                <Link to=""><li>Tennis Courts</li></Link>
                <Link to=""><li>Fitness Rooms</li></Link>
                </ul>
              </div>
            </div>
            <div className="col-md-2 desktopViwe">
              <div className="footer-links">
                <ul>
                <Link to=""><li>Climbing Walls</li></Link>
                <Link to=""><li>Yoga Studios</li></Link>
                <Link to=""><li>Baseball</li></Link>
                <Link to=""><li>Squash Courts</li></Link>
                <Link to=""><li>Tracks</li></Link>
                <Link to=""><li>Cricket</li></Link>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-links footer-icons">
                <ul>
                  <li><i className="fab fa-instagram"></i></li>
                  <li><i className="fab fa-facebook-f"></i></li>
                  <li><i className="fab fa-twitter"></i></li>
                </ul>
                <p className="mt-4 pt-4 english">
                  English
                </p>
                <p className="">Terms of Service<br/>
                    Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
       
      </footer>
      {/* Footer End here */}
        </div>
    )
}

export default Footer
