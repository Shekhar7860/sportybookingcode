import React, { useState, useReducer } from "react";
import logoheader from "../assets/images/logo-small-transparent.svg";
import { Link } from "react-router-dom";
import entype from "../assets/images/image 12.png";
import mobilelogo from "../assets/images/Logotype.png";
import google from "../assets/images/Google.png";
import { useGoogleLogin } from "react-google-login";
import PhoneInput from "react-phone-input-2";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";
import { connect } from "react-redux";
import {
  loginUser,
  forgotUserPassword,
  signUpUser,
} from "../redux/actions/user";
import { getFaceBookData } from "../services/service";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail, validatePhone } from "../helpers/commonFunctions";
const initialData = {
  email: "",
  phone_number: "",
  first_name: "",
  last_name: "",
  password: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PHONE":
      return { ...state, phone_number: action.payload };
    case "FIRSTNAME":
      return { ...state, first_name: action.payload };
    case "LASTNAME":
      return { ...state, last_name: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const Header = ({ signUp, login, forgotPassword }) => {
  // $("document").ready(function () {
  //   $("#resetPass").modal("show");
  // });
  const [loading, showLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [resetPasswordModal, showResetPasswordModal] = useState(false);
  const [forgotPasswordModal, showforgotPasswordModal] = useState(false);
  const [signUpModal, showSignUpModal] = useState(false);
  const [loginModal, showLoginModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(91);
  const [state, dispatch] = useReducer(reducer, initialData);
  const history = useHistory();
  const onSuccess = (googleUser) => {
    let profile = googleUser.getBasicProfile();
    history.push("/owner");
  };

  const handleChange = (e, param) => {
    if (param == "email") {
      dispatch({ type: "EMAIL", payload: e.target.value });
    } else if (param == "phone") {
      dispatch({ type: "PHONE", payload: e.target.value });
    } else if (param == "firstName") {
      dispatch({ type: "FIRSTNAME", payload: e.target.value });
    } else if (param == "lastName") {
      dispatch({ type: "LASTNAME", payload: e.target.value });
    } else if (param == "password") {
      dispatch({ type: "PASSWORD", payload: e.target.value });
    }
  };
  const resetPassword = async (e) => {
    e.preventDefault();
    if (forgotEmail) {
      if (!validateEmail(forgotEmail)) {
        toast.error("Please Enter Valid Email Id");
      }
      showLoading(true);
      const res = await forgotPassword("/user/forgot/password", {
        email: forgotEmail,
      });
      showLoading(false);
      if (res.status == 200) {
        toast.success(res.data.message);
        showforgotPasswordModal(false);
        showResetPasswordModal(true);
      } else {
        toast.error(res.data ? res.data.error_description : String(res));
      }
    } else {
      toast.error("Please Enter Email First");
    }
  };
  const { signIn, loaded } = useGoogleLogin({
    onSuccess,
  });
  const selected = (phone) => {
    setPhone(phone);
  };

  const showHideSignUpModal = () => {
    showSignUpModal(!signUpModal);
  };
  const loginFb = async () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          getCurrentUserInfo(response);
        } else {
          console.log("Auth cancelled.");
        }
      },
      { scope: "email" }
    );
  };

  const getCurrentUserInfo = async (response) => {
    const fbResponse = await getFaceBookData(response.authResponse.accessToken);
    console.log("fb", fbResponse);
    history.push("/owner");
  };
  const loginGoogle = () => {
    signIn();
  };
  const onSignIn = (googleUser) => {
    // console.log("s", googleUser);
    let profile = googleUser.getBasicProfile();
  };

  const showLoginModalAgain = () => {
    showforgotPasswordModal(false);
    showLoginModal(true);
  };

  const showForgotPasswordModalAgain = () => {
    showResetPasswordModal(false);
    showforgotPasswordModal(true);
  };
  const showHideLoginModal = () => {
    showLoginModal(!loginModal);
  };
  const update = (e, param) => {
    if (param == "email") {
      setEmail(e.target.value);
    } else if (param == "forgotemail") {
      setForgotEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const userLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      if (!validateEmail(email)) {
        toast.error("Please Enter Valid Email Id");
      }
      showLoading(true);
      const res = await login("/user/login", {
        email,
        password,
      });
      if (res.status == 200) {
        showLoading(false);
        toast.success(res.data.message);
        history.push("/owner");
      } else {
        showLoading(false);
        toast.error(res.data ? res.data.error_description : String(res));
      }
    } else {
      toast.error("Please Enter Email And Password");
      showLoading(false);
    }
  };

  const closeResetModal = (e) => {
    e.preventDefault();
    showResetPasswordModal(false);
  };

  const showResetModal = (e) => {
    e.preventDefault();
    showLoginModal(false);
    showforgotPasswordModal(true);
  };

  const closeForgotModal = (e) => {
    e.preventDefault();
    showforgotPasswordModal(false);
  };

  const signUpUser = async (e) => {
    e.preventDefault();
    if (state.email == "") {
      return toast.error("Please Enter Email Id");
    }
    if (state.phone_number == "") {
      return toast.error("Please Enter Phone Number");
    }
    if (state.first_name == "") {
      return toast.error("Please Enter First Name");
    }
    if (state.last_name == "") {
      return toast.error("Please Enter Last Name");
    }
    if (state.password == "") {
      return toast.error("Please Enter Password");
    }
    if (!validatePhone(state.phone_number)) {
      return toast.error("Please Enter Valid Phone Number");
    }
    if (!validateEmail(state.email)) {
      return toast.error("Please Enter Valid Email Id");
    }
    showLoading(true);
    let updatedState = {
      ...state,
      country_code: phone,
    };
    const res = await signUp("/user/signup", updatedState);
    if (res.status == 200) {
      showLoading(false);
      showSignUpModal(false);
      showLoginModal(true);
      toast.success(res.data.message);
    } else {
      showLoading(false);
      toast.error(res.data ? res.data.error_description : String(res));
    }
  };
  return (
    <div>
      {/* Header start here */}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand desktopViwe">
                  <Link to="/">
                    <img src={logoheader} />
                  </Link>
                </a>
                <a className="navbar-brand mobileViwe">
                  <Link to="/">
                    <img src={mobilelogo} />
                  </Link>
                </a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars" />
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item en-type">
                      <a className="nav-link"><img src={entype} /></a>
                    </li> */}
                    <li
                      className="nav-item manage-facility desktopViwe"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <Link className="nav-link" to="/">
                        Manage Facility
                      </Link>
                    </li>
                    <li
                      className="nav-item manage-facility mobileViwe"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <Link className="nav-link" to="/">
                        Facility
                      </Link>
                    </li>
                    <li
                      className="nav-item login"
                      onClick={showHideSignUpModal}
                    >
                      <Link className="nav-link" to="/">
                        Sign Up
                      </Link>
                    </li>
                    <li className="nav-item login" onClick={showHideLoginModal}>
                      <Link className="nav-link" to="/">
                        Login
                      </Link>
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
      <Modal class="login-modal modal fade" show={loginModal}>
        <div>
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Log In
                </h5>
                <button
                  type="button"
                  id="close-modal"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span onClick={showHideLoginModal}>
                    <i class="fal fa-times"></i>
                  </span>
                </button>
              </div>
              <div class="modal-body">
                {loading ? (
                  <div class="loader-wrapper">
                    <div class="loader"></div>
                  </div>
                ) : null}
                <div className="login">
                  <form>
                    <div className="login-form">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="eg: john.j@gmail.com"
                        onChange={(e) => {
                          update(e, "email");
                        }}
                      />
                    </div>
                    <div className="login-form">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="•••••••••••••••••"
                        onChange={(e) => {
                          update(e, "password");
                        }}
                      />
                    </div>
                    <div className="forgot-pass">
                      <p>
                        Forgot password?{" "}
                        <span onClick={showResetModal}>Reset password</span>
                      </p>
                      <button class="btn btn-search" onClick={userLogin}>
                        Log In
                      </button>
                    </div>
                    <div className="login-with">
                      <span></span>
                      <p>or Log In with</p>
                      <div className="google-buttons">
                        <button
                          type="button"
                          class="btn-google"
                          onClick={loginGoogle}
                        >
                          <img src={google} />
                          Google
                        </button>
                        <button
                          type="button"
                          class="btn-google"
                          onClick={loginFb}
                        >
                          <i class="fab fa-facebook-f"></i>
                          Facebook
                        </button>
                      </div>
                    </div>

                    <div className="forgot-passsign signup-btn">
                      <p>
                        Don't have an account? <span>Sign up for free.</span>
                      </p>
                      <button
                        type="button"
                        class="btn btn-search sign-up"
                        data-toggle="modal"
                        data-target="#signupmodal"
                        data-dismiss="modal"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* Signup Modal here */}
      <Modal class="login-modal signup-modal modal fade" show={signUpModal}>
        <div
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenter"
          aria-hidden="false"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Sign Up
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" onClick={showHideSignUpModal}>
                    <i class="fal fa-times"></i>
                  </span>
                </button>
              </div>
              <div class="modal-body">
                <div className="login">
                  <form>
                    <div className="login-form">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="eg: john.j@gmail.com"
                        onChange={(e) => {
                          handleChange(e, "email");
                        }}
                      />
                    </div>

                    <div className="login-form">
                      <label>Phone Number</label>
                      <div className="rowAlign">
                        <PhoneInput
                          className="phonewidth"
                          country={"in"}
                          onChange={(phone) => selected(phone)}
                        />
                        <input
                          type="number"
                          placeholder="eg: +1 234 567 8900"
                          onChange={(e) => {
                            handleChange(e, "phone");
                          }}
                        />
                      </div>
                    </div>
                    <div className="full-div">
                      <div className="login-form half">
                        <label>First Name</label>
                        <input
                          type="email"
                          placeholder="eg: John"
                          onChange={(e) => {
                            handleChange(e, "firstName");
                          }}
                        />
                      </div>
                      <div className="login-form half">
                        <label>Last Name</label>
                        <input
                          type="email"
                          placeholder="eg: John"
                          onChange={(e) => {
                            handleChange(e, "lastName");
                          }}
                        />
                      </div>
                    </div>
                    <div className="login-form">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="•••••••••••••••••"
                        onChange={(e) => {
                          handleChange(e, "password");
                        }}
                      />
                    </div>
                    <div className="forgot-passsign signup-btn">
                      <button
                        class="btn btn-search sign-up"
                        onClick={signUpUser}
                      >
                        Sign Up
                      </button>
                    </div>
                    {loading ? (
                      <div class="loader-wrapper">
                        <div class="loader"></div>
                      </div>
                    ) : null}
                    <div className="login-with">
                      <span></span>
                      <p>or Sign Up with</p>

                      <div className="google-buttons">
                        <button
                          type="button"
                          class="btn-google"
                          onClick={loginGoogle}
                        >
                          <img src={google} />
                          Google
                        </button>
                        <button
                          type="button"
                          class="btn-google"
                          onClick={loginFb}
                        >
                          <i class="fab fa-facebook-f"></i>
                          Facebook
                        </button>
                      </div>
                    </div>

                    <div className="forgot-pass">
                      <p>
                        By signing up you accept the{" "}
                        <span>terms and conditions </span>and{" "}
                        <span>privacy policy </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Forgot Modal here */}

      <Modal
        class="login-modal signup-modal modal fade"
        show={forgotPasswordModal}
        role="dialog"
        aria-labelledby="exampleModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Forgot your password?
              </h5>
              <button type="button" class="close" onClick={closeForgotModal}>
                <span aria-hidden="true">
                  <i class="fal fa-times"></i>
                </span>
              </button>
            </div>
            <div class="modal-body">
              {loading ? (
                <div class="loader-wrapper">
                  <div class="loader"></div>
                </div>
              ) : null}
              <div className="login">
                <p className="no-worries">
                  No worries! Please enter the email address you used when
                  signing up and we'll send you instructions on how to set a new
                  password.
                </p>
                <form>
                  <div className="login-form">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="eg: john.j@gmail.com"
                      onChange={(e) => {
                        update(e, "forgotemail");
                      }}
                    />
                  </div>
                  <div className="forgot-pass">
                    <p>
                      Suddenly remembered your password?{" "}
                      <span onClick={showLoginModalAgain}>Log In </span>
                    </p>
                  </div>

                  <div className="forgot-passsign signup-btn">
                    {/* <button
                      class="btn btn-search sign-up"
                      data-bs-dismiss="modal"
                      data-toggle="modal"
                      data-target="#resetpass"
                      data-dismiss="modal"
                    >
                      Reset Password
                    </button> */}
                    <button
                      class="btn btn-search sign-up"
                      onClick={resetPassword}
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Reset pass Modal here */}

      <Modal
        class="reset-pass login-modal signup-modal modal fade"
        show={resetPasswordModal}
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Check your inbox
              </h5>
              <button type="button" class="close" onClick={closeResetModal}>
                <span aria-hidden="true">
                  <i class="fal fa-times"></i>
                </span>
              </button>
            </div>
            <div class="modal-body">
              {loading ? (
                <div class="loader-wrapper">
                  <div class="loader"></div>
                </div>
              ) : null}
              <div className="login">
                <p className="no-worries">
                  The instructions for resetting your password have been sent to{" "}
                  <b>{forgotEmail}</b>
                </p>
                <form>
                  <div className="forgot-pass">
                    <p>
                      Didn't get the email?{" "}
                      <span onClick={resetPassword}>Send another email. </span>
                    </p>
                    <p>
                      Whoops, typo in your email?{" "}
                      <span onClick={showForgotPasswordModalAgain}>
                        Fix it.{" "}
                      </span>
                    </p>
                  </div>

                  <div className="forgot-passsign close-btn signup-btn">
                    <button
                      class="btn btn-search sign-up"
                      onClick={closeResetModal}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (url, data) => dispatch(signUpUser(url, data)),
    login: (url, data) => dispatch(loginUser(url, data)),
    forgotPassword: (url, data) => dispatch(forgotUserPassword(url, data)),
  };
};

export default connect(null, mapDispatchToProps)(Header);
