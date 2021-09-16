import React, { useEffect, useState } from "react";
import logoheader from "../assets/images/logo-small-transparent.svg";
import { Link } from "react-router-dom";
import profile from "../assets/images/Avatar.png";
import mobilelogo from "../assets/images/Logotype.png";
import Searchmain from "../assets/images/Search.png";
import { connect } from "react-redux";
import { setUserName } from "../redux/actions/user";
const Ownerheader = ({ userData, setNameLabel }) => {
  const [userLabel, setUserLabel] = useState("");
  useEffect(() => {
    if (userData.userData.user != undefined) {
      const first = userData.userData.user.first_name.charAt(0).toUpperCase();
      const last = userData.userData.user.last_name.charAt(0).toUpperCase();
      setUserLabel(first + last);
      setNameLabel(first + last);
    }
  }, [userData.userData]);
  return (
    <div>
      {/* Header start here */}
      <header className="innerheader">
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
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* <div className="search-main">
                    <img src={Searchmain} />
                    <input type="search" placeholder="Toronto, Canada" />
                  </div> */}
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/home">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/messages">
                        Messages<span className="message-notification">1</span>{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <div class="dropdown">
                        <button
                          class=""
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="circle-button">
                            <span className="text-color">
                              {userLabel ? userLabel : null}
                            </span>
                          </div>
                          {/* <img src={profile} /> */}
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link class="dropdown-item" to="/profile">
                            Profile
                          </Link>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header End here */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setNameLabel: (name) => dispatch(setUserName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ownerheader);
