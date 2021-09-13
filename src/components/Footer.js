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
                  <li><Link to="">Sign Up For Free</Link></li>
                  <li><Link to="">Pricing</Link></li>
                  <li><Link to="">About</Link></li>
                  <li><Link to="">FAQ</Link></li>
                  <li><Link to="">Help</Link></li>
                  <li><Link to="">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pl-5 desktopViwe">
              <div className="footer-links">
                <ul>
                <li><Link to="">Ice Rinks</Link></li>
                <li><Link to="">Fields</Link></li>
                <li><Link to="">Indoor Courts</Link></li>
                <li><Link to="">Swimming Pools</Link></li>
                <li><Link to="">Tennis Courts</Link></li>
                <li><Link to="">Fitness Rooms</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 desktopViwe">
              <div className="footer-links">
                <ul>
                <li><Link to="">Climbing Walls</Link></li>
                <li> <Link to="">Yoga Studios</Link></li>
                <li><Link to="">Baseball</Link></li>
                <li><Link to="">Squash Courts</Link></li>
                <li><Link to="">Tracks</Link></li>
                <li><Link to="">Cricket</Link></li>
                </ul>
                <ul>
                
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
                <p className="">Terms of Service</p>
                    <p className="mt-0">Privacy policy</p>
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
