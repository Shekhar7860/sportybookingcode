import React, { useEffect, useState, useReducer } from "react";
import Footer from "./../Footer";
import InnerHeader from "./../InnerHeader";
import google from "../../assets/images/Google.png";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  getUserProfile,
  updateUserProfile,
  sendUserCode,
  verifyUserCode,
  updatePassword,
  setUserName,
} from "../../redux/actions/user";
import { saveCard } from "../../redux/actions/card";
import Cards from "react-credit-cards";
import { validatePassword } from "../../helpers/commonFunctions";
const initialData = {
  email: "",
  phone_number: "",
  first_name: "",
  last_name: "",
  password: "",
  card: "",
  expiry: "",
  cvc: "",
  name: "",
  address: "",
  apt: "",
  city: "",
  state: "",
  country: "",
  number: "",
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
    case "CARDNUMBER":
      return { ...state, number: action.payload };
    case "EXPIRY":
      return { ...state, expiry: action.payload };
    case "CARDHOLDERNAME":
      return { ...state, name: action.payload };
    case "CVV":
      return { ...state, cvc: action.payload };
    case "ADDRESS":
      return { ...state, address: action.payload };
    case "APT":
      return { ...state, apt: action.payload };
    case "POSTALCODE":
      return { ...state, postal_code: action.payload };
    case "CITY":
      return { ...state, city: action.payload };
    case "STATE":
      return { ...state, state: action.payload };
    case "COUNTRY":
      return { ...state, country: action.payload };
    default:
      return state;
  }
};
function Profile({
  getUser,
  userData,
  updateLoggedInUserProfile,
  sendUserOtp,
  verifyUserOtp,
  changePassword,
  userLabelName,
  changeUserName,
  saveUserCard,
}) {
  const [emailOtp, showEmailOtp] = useState(false);
  const [phoneOtp, showPhoneOtp] = useState(false);
  const [bookingChecked, toggleCheckbox] = useState(false);
  const [loggedUser, setLoggedUser] = useState({});
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [thirdText, setThirdText] = useState("");
  const [fourthText, setFourthText] = useState("");
  const [firstMobileText, setFirstMobileText] = useState("");
  const [secondMobileText, setSecondMobileText] = useState("");
  const [thirdMobileText, setThirdMobileText] = useState("");
  const [fourthMobileText, setFourthMobileText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialData);
  const [changePasswordText, setPasswordText] = useState("");
  const [changeOldPasswordText, setOldPasswordText] = useState("");
  const [confirmPassword, setConfirmPasswordText] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const userProfile = async () => {
      const res = await getUser(
        "/user/detail",
        userData.userData ? userData.userData.token : null
      );
      if (res.status == 200) {
        setLoggedUser(res.data);
        dispatch({ type: "FIRSTNAME", payload: res.data.first_name });
        dispatch({ type: "LASTNAME", payload: res.data.last_name });
        dispatch({ type: "PHONE", payload: res.data.phone_number });
        dispatch({ type: "EMAIL", payload: res.data.email });
      }
    };
    userProfile();
  }, [userData.userData]);

  const sendOtp = async (mode) => {
    let selected = state.email;
    if (mode == "phone") {
      selected = state.phone_number;
    }
    setLoading(true);
    const res = await sendUserOtp(
      "/user/otp",
      userData.userData ? userData.userData.token : null,
      selected,
      mode
    );
    setLoading(false);
    if (res.status == 200) {
      toast.success(res.data.message);
    } else {
      toast.error("Network Error");
    }
  };

  const updatePasswordFunction = async () => {
    if (changeOldPasswordText == "") {
      setOldPasswordText("");
      return toast.error("Please Enter Old Password");
    }
    if (changePasswordText == "") {
      setPasswordText("");
      return toast.error("Please Enter New Password");
    }
    if (confirmPassword == "") {
      setConfirmPasswordText("");
      return toast.error("Please Enter Confirm Password");
    }
    if (changePasswordText != confirmPassword) {
      setPasswordText("");
      setConfirmPasswordText("");
      return toast.error("Passwords Do Not Match");
    }
    if (
      !validatePassword(changePasswordText) ||
      !validatePassword(confirmPassword) ||
      !validatePassword(changeOldPasswordText)
    ) {
      return toast.error(
        "Please Enter Strong Password - one upper, one lower, one number and one special character"
      );
    }
    let obj = {
      old_password: changeOldPasswordText,
      new_password: changePasswordText,
    };
    setLoading(true);
    setOldPasswordText("");
    setPasswordText("");
    setConfirmPasswordText("");
    const res = await changePassword(
      "/user/change/password",
      userData.userData ? userData.userData.token : null,
      obj
    );
    setLoading(false);

    if (res.status == 200) {
      toast.success(res.data.message);
    } else {
      toast.error(
        res.data
          ? Object.keys(res.data.error_description).length !== 0
            ? res.data.error_description
            : "Network Error"
          : String(res)
      );
    }
  };

  const savePaymentInformation = async (e) => {
    if (state.number == "") {
      return toast.error("Please Enter Card Number");
    }
    if (state.expiry == "") {
      return toast.error("Please Enter Card Expiry Date");
    }
    if (state.cvc == "") {
      return toast.error("Please Enter CVC");
    }
    let splitData = state.expiry.split("/");
    const expiryMonth = splitData[0];
    const expiryYear = splitData[1];
    const payload = {
      card: state.number,
      exp_month: expiryMonth,
      exp_year: expiryYear,
      cvc: state.cvc,
      save: bookingChecked == true ? 1 : 0,
      name: state.name,
      address: state.address,
      postal_code: state.postal_code,
      city: state.city,
      state: state.state,
      country: state.country,
      apt: state.apt,
    };
    console.log("pa", payload);

    setLoading(true);
    const res = await saveUserCard(
      "/card",
      userData.userData ? userData.userData.token : null,
      payload
    );
    console.log("res", res);
    if (res.status == 200) {
      toast.success(res.data.message);
      // history.push("/home");
    } else {
      toast.error(res.data ? res.data.error_description : String(res));
    }
    setLoading(false);
    // const cardElement = elements.getElement(CardElement);
  };

  const getCardData = (e) => {
    console.log("e", e);
  };
  const verifyOtp = async (mode) => {
    let obj = {
      email: state.email,
      otp: firstText + secondText + thirdText + fourthText,
    };
    if (mode == "phone") {
      obj = {
        phone_number: state.phone_number,
        otp:
          firstMobileText +
          secondMobileText +
          thirdMobileText +
          fourthMobileText,
      };
    }
    setLoading(true);
    const res = await verifyUserOtp(
      "/user/setotp",
      userData.userData ? userData.userData.token : null,
      obj
    );
    setLoading(false);
    if (res.status == 200) {
      toast.success("User Verified Successfully");
    } else {
      toast.error("Network Error");
    }
  };

  const updateProfile = async () => {
    if (state.first_name == "") {
      return toast.error("Please Enter First Name");
    }
    if (state.last_name == "") {
      return toast.error("Please Enter Last Name");
    }

    let obj = {
      first_name: state.first_name,
      last_name: state.last_name,
      password: state.password,
    };
    if (loggedUser.phone_number != state.phone_number) {
      if (state.phone_number == "") {
        return toast.error("Please Enter Phone Number");
      }
      obj = {
        first_name: state.first_name,
        last_name: state.last_name,
        password: state.password,
        phone_number: state.phone_number,
      };
    }
    if (loggedUser.email != state.email) {
      if (state.email == "") {
        return toast.error("Please Enter Email");
      }
      obj = {
        first_name: state.first_name,
        last_name: state.last_name,
        password: state.password,
        email: state.email,
      };
    }

    if (state.password == "") {
      return toast.error("Please Enter Password");
    }
    setLoading(true);
    const res = await updateLoggedInUserProfile(
      "/user/profile",
      userData.userData ? userData.userData.token : null,
      obj
    );
    // console.log("s", res);
    setLoading(false);
    if (res.status == 200) {
      toast.success(res.data.message);
      const first = res.data.user.first_name.charAt(0).toUpperCase();
      const last = res.data.user.last_name.charAt(0).toUpperCase();
      changeUserName(first + last);
    } else {
      toast.error(res.data ? res.data.error_description : String(res));
    }
  };

  const saveNotifications = () => {
    toast.success("Notifications Saved Successfully");
  };
  const setText = (e, param) => {
    if (param == "first") {
      setFirstText(e.target.value);
    } else if (param == "second") {
      setSecondText(e.target.value);
    } else if (param == "third") {
      setThirdText(e.target.value);
    } else if (param == "fourth") {
      setFourthText(e.target.value);
    }
  };

  const setMobileText = (e, param) => {
    if (param == "first") {
      setFirstMobileText(e.target.value);
    } else if (param == "second") {
      setSecondMobileText(e.target.value);
    } else if (param == "third") {
      setThirdMobileText(e.target.value);
    } else if (param == "fourth") {
      setFourthMobileText(e.target.value);
    }
  };
  const handleChange = (e, param) => {
    if (param == "email") {
      if (loggedUser.email != e.target.value) {
        showEmailOtp(true);
      } else {
        showEmailOtp(false);
      }
      dispatch({ type: "EMAIL", payload: e.target.value });
    } else if (param == "phone") {
      if (loggedUser.phone_number != e.target.value) {
        showPhoneOtp(true);
      } else {
        showPhoneOtp(false);
      }
      dispatch({ type: "PHONE", payload: e.target.value });
    } else if (param == "firstName") {
      dispatch({ type: "FIRSTNAME", payload: e.target.value });
    } else if (param == "lastName") {
      dispatch({ type: "LASTNAME", payload: e.target.value });
    } else if (param == "password") {
      dispatch({ type: "PASSWORD", payload: e.target.value });
    } else if (param == "cardNumber") {
      dispatch({ type: "CARDNUMBER", payload: e.target.value });
    } else if (param == "expiry") {
      let selected = e.target.value;
      if (selected.length == 3) {
        selected = selected.slice(0, 2) + "/" + selected.slice(2, 4);
      }
      dispatch({ type: "EXPIRY", payload: selected });
    } else if (param == "cvv") {
      dispatch({ type: "CVV", payload: e.target.value });
    } else if (param == "cardholderName") {
      dispatch({ type: "CARDHOLDERNAME", payload: e.target.value });
    } else if (param == "address") {
      dispatch({ type: "ADDRESS", payload: e.target.value });
    } else if (param == "apt") {
      dispatch({ type: "APT", payload: e.target.value });
    } else if (param == "postalcode") {
      dispatch({ type: "POSTALCODE", payload: e.target.value });
    } else if (param == "city") {
      dispatch({ type: "CITY", payload: e.target.value });
    } else if (param == "state") {
      dispatch({ type: "STATE", payload: e.target.value });
    } else if (param == "country") {
      dispatch({ type: "COUNTRY", payload: e.target.value });
    }
  };

  return (
    <div>
      <InnerHeader highLightedUserName={userLabelName} userData={userData} />
      <section className="mybooking">
        {loading ? (
          <div class="loader-wrapper">
            <div class="loader"></div>
          </div>
        ) : null}
        <div className="mybookin-fluid">
          <div className="commoan-left">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Profile
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Password
              </a>
              <a
                className="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Payment Methods
              </a>
              <a
                className="nav-link"
                id="v-pills-notification-tab"
                data-toggle="pill"
                href="#v-notification"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Notifications
              </a>
              <a
                className="nav-link"
                id="v-pills-transation-tab"
                data-toggle="pill"
                href="#v-transation"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Transactions
              </a>
              <a
                className="nav-link"
                id="v-pills-wallet-tab-tab"
                data-toggle="pill"
                href="#v-pills-wallet"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                E-Wallet
              </a>
            </div>
          </div>
          <div className="common-right">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="upcoming-tab">
                  <h2>Profile</h2>
                  <div className="profile-data">
                    <div className="row mt-4">
                      <div className="col-md-2">
                        <label>First Name</label>
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="John"
                          onChange={(e) => {
                            handleChange(e, "firstName");
                          }}
                          value={state ? state.first_name : null}
                        />
                      </div>
                      <div className="col-md-2">
                        <label>Last Name</label>
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="Johnson"
                          onChange={(e) => {
                            handleChange(e, "lastName");
                          }}
                          value={state ? state.last_name : null}
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-4">
                        <label>Email</label>
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="john.j@gmail.com"
                          onChange={(e) => {
                            handleChange(e, "email");
                          }}
                          value={state ? state.email : null}
                        />
                      </div>
                      {emailOtp == true ? (
                        <div className="col-md-5 ml-4 verification-code">
                          <label>Verification Code</label>
                          <input
                            type="text"
                            autocomplete="off"
                            placeholder="1"
                            onChange={(e) => {
                              setText(e, "first");
                            }}
                          />
                          <input
                            type="text"
                            autocomplete="off"
                            placeholder="2"
                            onChange={(e) => {
                              setText(e, "second");
                            }}
                          />
                          <input
                            type="text"
                            placeholder="3"
                            autocomplete="off"
                            onChange={(e) => {
                              setText(e, "third");
                            }}
                          />
                          <input
                            type="text"
                            placeholder="4"
                            autocomplete="off"
                            onChange={(e) => {
                              setText(e, "fourth");
                            }}
                          />
                          <span onClick={() => verifyOtp("email")}>OK</span>{" "}
                          <span onClick={() => sendOtp("email")}>
                            Send Again
                          </span>
                        </div>
                      ) : null}
                    </div>
                    <div className="row mt-4 align-items-center">
                      <div className="col-md-2">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="+1 234 567 8900"
                          value={state ? state.phone_number : null}
                          onChange={(e) => {
                            handleChange(e, "phone");
                          }}
                        />
                      </div>
                      {phoneOtp == true ? (
                        <div className="col-md-5 ml-4 verification-code">
                          <label>Verification Code</label>
                          <input
                            type="text"
                            autocomplete="off"
                            placeholder="1"
                            onChange={(e) => {
                              setMobileText(e, "first");
                            }}
                          />
                          <input
                            type="text"
                            autocomplete="off"
                            placeholder="2"
                            onChange={(e) => {
                              setMobileText(e, "second");
                            }}
                          />
                          <input
                            type="text"
                            placeholder="3"
                            autocomplete="off"
                            onChange={(e) => {
                              setMobileText(e, "third");
                            }}
                          />
                          <input
                            type="text"
                            placeholder="4"
                            autocomplete="off"
                            onChange={(e) => {
                              setMobileText(e, "fourth");
                            }}
                          />
                          <span onClick={() => verifyOtp("phone")}>OK</span>{" "}
                          <span onClick={() => sendOtp("phone")}>
                            Send Again
                          </span>
                        </div>
                      ) : null}
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
                        <p>
                          To change your email, please enter your current
                          password.
                        </p>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-3">
                        <label>Password</label>
                        <input
                          type="password"
                          autocomplete="off"
                          placeholder="*********"
                          onChange={(e) => {
                            handleChange(e, "password");
                          }}
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <button className="update-btn" onClick={updateProfile}>
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="calender-tab">
                  <div className="upcoming-tab">
                    <h2>Password</h2>
                    <div className="profile-data">
                      <div className="row mt-4">
                        <div className="col-md-5">
                          <label>New Password</label>
                          <input
                            type="password"
                            autocomplete="off"
                            placeholder="*********"
                            onChange={(e) => {
                              setPasswordText(e.target.value);
                            }}
                            value={changePasswordText}
                          />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-5">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            autocomplete="off"
                            placeholder="*********"
                            onChange={(e) => {
                              setConfirmPasswordText(e.target.value);
                            }}
                            value={confirmPassword}
                          />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-8 Social-profile">
                          <h4>Connect Social Profile</h4>
                          <p>
                            To change your email, please enter your current
                            password.
                          </p>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-5">
                          <label>Password</label>
                          <input
                            type="password"
                            autocomplete="off"
                            placeholder="*********"
                            onChange={(e) => {
                              setOldPasswordText(e.target.value);
                            }}
                            value={changeOldPasswordText}
                          />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-12">
                          <button
                            className="update-btn"
                            onClick={updatePasswordFunction}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                {/**/}

                <div className="payment-method">
                  <div className="payment-heading">
                    <h2>Payment Methods</h2>
                    <p>Add Payment Method</p>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="card-number">
                        <label>Credit Card Information</label>
                        <div className="mt-3">
                          <Cards
                            cvc={state.cvc}
                            expiry={state.expiry}
                            focused={""}
                            name={state.name}
                            number={state.number}
                          />
                        </div>
                        <div className="form-group mt-3">
                          <input
                            type="tel"
                            name="number"
                            className="form-control"
                            placeholder="Card Number"
                            pattern="[\d| ]{16,22}"
                            required
                            onChange={(e) => {
                              handleChange(e, "cardNumber");
                            }}
                          />
                          {/* <small>E.g.: 49..., 51..., 36..., 37...</small> */}
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <input
                              type="tel"
                              name="expiry"
                              className="form-control"
                              placeholder="Valid Thru"
                              pattern="\d\d/\d\d"
                              required
                              value={state.expiry}
                              maxlength={5}
                              onChange={(e) => {
                                handleChange(e, "expiry");
                              }}
                            />
                          </div>
                          <div className="col-6">
                            <input
                              type="tel"
                              name="cvc"
                              className="form-control"
                              placeholder="CVC"
                              pattern="\d{3,4}"
                              required
                              onChange={(e) => {
                                handleChange(e, "cvv");
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="radio-btn">
                        <label>
                          <input
                            className="checkbox-custom"
                            type="checkbox"
                            checked={bookingChecked}
                            onChange={(e) => {
                              toggleCheckbox(!bookingChecked);
                            }}
                          />
                          <label
                            for="checkbox-1"
                            className="checkbox-custom-label"
                          ></label>
                          Save card details for future bookings
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
                        <input
                          type="text"
                          placeholder="eg: John Johnson"
                          onChange={(e) => {
                            handleChange(e, "cardholderName");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-3">
                      <div className="card-number">
                        <label>Address</label>
                        <input
                          type="text"
                          placeholder="eg: 122 Example Street"
                          onChange={(e) => {
                            handleChange(e, "address");
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card-number">
                        <label>Apt #</label>
                        <input
                          type="text"
                          placeholder="eg: 42"
                          onChange={(e) => {
                            handleChange(e, "apt");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-3">
                      <div className="card-number">
                        <label>Postal Code</label>
                        <input
                          type="text"
                          placeholder="eg: 10012"
                          onChange={(e) => {
                            handleChange(e, "postalcode");
                          }}
                          maxlength={6}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card-number">
                        <label>City</label>
                        <select
                          name="cars"
                          id="cars"
                          placeholder="Select City"
                          onChange={(e) => {
                            handleChange(e, "city");
                          }}
                        >
                          <option value="volvo">Select City</option>
                          <option value="New York">New York</option>
                          <option value="Los Angeles">Los Angeles</option>
                          <option value="Chicago">Chicago</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-3">
                      <div className="card-number">
                        <label>State</label>
                        <select
                          name="cars"
                          id="cars"
                          placeholder="Select State"
                          onChange={(e) => {
                            handleChange(e, "state");
                          }}
                        >
                          <option value="volvo">Select State</option>
                          <option value="California">California</option>
                          <option value="Washington">Washington</option>
                          <option value="Alaska">Alaska</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card-number">
                        <label>Country</label>
                        <select
                          name="cars"
                          id="cars"
                          placeholder="Select Country"
                          onChange={(e) => {
                            handleChange(e, "country");
                          }}
                        >
                          <option value="volvo">Select Country</option>
                          <option value="IN">India</option>
                          <option value="US">United States</option>
                          <option value="AU">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-12">
                      <button
                        className="update-btn"
                        onClick={savePaymentInformation}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                  {loading ? (
                    <div class="loader-wrapper">
                      <div class="loader"></div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-notification"
                role="tabpanel"
                aria-labelledby="v-notification-tab"
              >
                <div className="payment-method notification">
                  <div className="payment-heading">
                    <h2>Notifications</h2>
                    <p>SMS notifications</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-12">
                      <div className="radio-btn">
                        <label>
                          <input className="checkbox-custom" type="checkbox" />
                          <label
                            for="checkbox-1"
                            className="checkbox-custom-label"
                          ></label>
                          <span>
                            I would like to receive SMS Text Messages for Status
                            Changes to my Booking (ex. Confirmations,
                            ?Cancellations, etc)
                          </span>
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
                          <input className="checkbox-custom" type="checkbox" />
                          <label
                            for="checkbox-1"
                            className="checkbox-custom-label"
                          ></label>
                          <span>
                            I would like to recieve SMS notifications from
                            facilities
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-12">
                      <button
                        className="update-btn"
                        onClick={saveNotifications}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-transation"
                role="tabpanel"
                aria-labelledby="v-transation-tab"
              >
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
              <div
                className="tab-pane fade"
                id="v-pills-wallet"
                role="tabpanel"
                aria-labelledby="v-pills-wallet-tab"
              >
                <div className="payment-heading wallet">
                  <h2>E-Wallet</h2>
                  <p>Your balance</p>
                  <h4>${loggedUser ? loggedUser.wallet : 0}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    userLabelName: state.user.userLabelName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (url, token) => dispatch(getUserProfile(url, token)),
    changePassword: (url, token, obj) =>
      dispatch(updatePassword(url, token, obj)),
    updateLoggedInUserProfile: (url, token, params) =>
      dispatch(updateUserProfile(url, token, params)),
    sendUserOtp: (url, token, params, mode) =>
      dispatch(sendUserCode(url, token, params, mode)),
    verifyUserOtp: (url, token, params) =>
      dispatch(verifyUserCode(url, token, params)),
    changeUserName: (name) => dispatch(setUserName(name)),
    saveUserCard: (url, token, params) =>
      dispatch(saveCard(url, token, params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
