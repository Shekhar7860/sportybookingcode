import React from 'react'
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
                  <li>Sign Up For Free</li>
                  <li>Pricing</li>
                  <li>About</li>
                  <li>FAQ</li>
                  <li>Help</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pl-5 desktopViwe">
              <div className="footer-links">
                <ul>
                  <li>Ice Rinks</li>
                  <li>Fields</li>
                  <li>Indoor Courts</li>
                  <li>Swimming Pools</li>
                  <li>Tennis Courts</li>
                  <li>Fitness Rooms</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 desktopViwe">
              <div className="footer-links">
                <ul>
                  <li>Climbing Walls</li>
                  <li>Yoga Studios</li>
                  <li>Baseball</li>
                  <li>Squash Courts</li>
                  <li>Tracks</li>
                  <li>Cricket</li>
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
                <p className="mt-5 pt-5">Terms of Service<br/>
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
