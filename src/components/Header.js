import React from 'react'
import logoheader from '../assets/images/logo-small-transparent.svg'
import { Link } from 'react-router-dom'
import entype from '../assets/images/image 12.png'
import mobilelogo from '../assets/images/Logotype.png'
import google from '../assets/images/Google.png'

const Header = () => {
  return (
    <div>
      {/* Header start here */}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">

              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand desktopViwe">
                  <Link to="/"><img src={logoheader} /></Link>
                </a>
                <a className="navbar-brand mobileViwe">
                  <Link to="/"><img src={mobilelogo} /></Link>
                </a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars" />
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item en-type">
                      <a className="nav-link"><img src={entype} /></a>
                    </li>
                    <li className="nav-item manage-facility desktopViwe">
                      <Link className="nav-link" to="/owner">Manage Facility</Link>
                    </li>
                    <li className="nav-item manage-facility mobileViwe">
                      <Link className="nav-link" to="/">Facility</Link>
                    </li>
                    <li className="nav-item login" data-toggle="modal" data-target="#exampleModalCenter">
                      <Link className="nav-link" to="/">Login</Link>
                    </li>
                  </ul>

                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Header End here */}


      {/* Login Modal here */}


      <div class="login-modal modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Log In</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fal fa-times"></i></span>
              </button>
            </div>
            <div class="modal-body">
              <div className="login">
                <form>
                  <div className="login-form">
                    <label>Email</label>
                    <input type="email" placeholder="eg: john.j@gmail.com" />
                  </div>
                  <div className="login-form">
                    <label>Password</label>
                    <input type="password" placeholder="•••••••••••••••••" />
                  </div>
                  <div className="forgot-pass">
                    <p>Forgot password? <span data-bs-dismiss="modal" data-toggle="modal" data-target="#forgot" data-dismiss="modal">Reset password</span></p>
                    <button class="btn btn-search" data-dismiss="modal">Log In</button>
                  </div>
                  <div className="login-with">
                    <span></span>
                    <p>or Log In with</p>
                    <div className="google-buttons">
                      <button type="button" class="btn-google">
                        <img src={google} />Google</button>
                      <button type="button" class="btn-google">
                        <i class="fab fa-facebook-f"></i>
                        Facebook
                      </button>
                    </div>
                  </div>

                  <div className="forgot-passsign signup-btn">
                    <p>Don't have an account?  <span>Sign up for free.</span></p>
                    <button type="button" class="btn btn-search sign-up" data-toggle="modal" data-target="#signupmodal" data-dismiss="modal">Sign Up</button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Signup Modal here */}

      <div class="login-modal signup-modal modal fade" id="signupmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenter" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fal fa-times"></i></span>
              </button>
            </div>
            <div class="modal-body">
              <div className="login">
                <form>
                  <div className="login-form">
                    <label>Email</label>
                    <input type="email" placeholder="eg: john.j@gmail.com" />
                  </div>

                  <div className="login-form">
                    <label>Phone Number</label>
                    <input type="number" placeholder="eg: +1 234 567 8900" />
                  </div>
                  <div className="full-div">
                    <div className="login-form half">
                      <label>First Name</label>
                      <input type="email" placeholder="eg: John" />
                    </div>
                    <div className="login-form half">
                      <label>Last Name</label>
                      <input type="email" placeholder="eg: John" />
                    </div>
                  </div>
                  <div className="login-form">
                    <label>Password</label>
                    <input type="password" placeholder="•••••••••••••••••" />
                  </div>
                  <div className="forgot-passsign signup-btn">
                    <button class="btn btn-search sign-up" data-dismiss="modal">Sign Up</button>
                  </div>
                  <div className="login-with">
                    <span></span>
                    <p>or Sign Up with</p>
                    <div className="google-buttons">
                      <button type="button" class="btn-google">
                        <img src={google} />Google</button>
                      <button type="button" class="btn-google">
                        <i class="fab fa-facebook-f"></i>
                        Facebook
                      </button>
                    </div>
                  </div>

                  <div className="forgot-pass">
                    <p>By signing up you accept the  <span>terms and conditions </span>and <span>privacy policy </span></p>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>


 {/* Forgot Modal here */}

 <div class="login-modal signup-modal modal fade" id="forgot" tabindex="-1" role="dialog" aria-labelledby="exampleModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Forgot your password?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fal fa-times"></i></span>
              </button>
            </div>
            <div class="modal-body">
              <div className="login">
                <p className="no-worries">No worries! Please enter the email address you used when signing up and we'll send you instructions on how to set a new password.</p>
                <form>
                  <div className="login-form">
                    <label>Email</label>
                    <input type="email" placeholder="eg: john.j@gmail.com" />
                  </div>
                  <div className="forgot-pass">
                    <p>Suddenly remembered your password? <span data-toggle="modal" data-target="#exampleModalCenter" data-dismiss="modal">Log In </span></p>
                  </div>
                
                  <div className="forgot-passsign signup-btn">
                    <button class="btn btn-search sign-up" data-bs-dismiss="modal" data-toggle="modal" data-target="#resetpass" data-dismiss="modal">Reset Password</button>
                  </div>
                 

                

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>




 {/* Reset pass Modal here */}

 <div class="reset-pass login-modal signup-modal modal fade" id="resetpass" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Check your inbox</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fal fa-times"></i></span>
              </button>
            </div>
            <div class="modal-body">
              <div className="login">
                <p className="no-worries">The instructions for resetting your password have been sent to <b>john.j@gmail.com</b></p>
                <form>
                 
                  <div className="forgot-pass">
                    <p>Didn't get the email? <span>Send another email. </span></p>
                    <p>Whoops, typo in your email? <span>Fix it. </span></p>
                  </div>
                
                  <div className="forgot-passsign close-btn signup-btn">
                    <button class="btn btn-search sign-up" data-dismiss="modal">Close</button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}

export default Header
