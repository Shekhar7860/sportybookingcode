import React, { useState, useEffect } from "react";
import logoheader from "../assets/images/logo-small-transparent.svg";
import { Link } from "react-router-dom";
import profile from "../assets/images/Avatar.png";
import mobilelogo from "../assets/images/Logotype.png";
import Searchmain from "../assets/images/Search.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { clearData, deleteUser } from "../redux/actions/user";
const InnerHeader = ({
  clearRedux,
  highLightedUserName,
  removeUser,
  userData,
}) => {
  const [topLabelName, setTopLabelName] = useState("");
  const history = useHistory();
  const logOut = async () => {
    const res = await removeUser(
      "/user/logout",
      userData.userData ? userData.userData.token : null
    );
    if (res.status == 200) {
      history.push("/");
      clearRedux(null);
    }
  };
  useEffect(() => {
    if (highLightedUserName != null) {
      setTopLabelName(highLightedUserName);
    }
  }, [highLightedUserName]);

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
                  <div className="search-main">
                    <img src={Searchmain} />
                    <input type="search" placeholder="Toronto, Canada" />
                  </div>
                  <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item manage-facility desktopViwe">
                      <Link className="nav-link" to="/owner">Manage Facility</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/home">
                        Dashboard
                      </Link>
                      <Link className="nav-link" to="/mybooking">
                        My Bookings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/favorite">
                        Favorites
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/messages">
                        Messages
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
                            <span className="text-color">{topLabelName}</span>
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
                          <Link className="dropdown-item" to="/messages">
                            Messages
                          </Link>
                          <Link className="dropdown-item" to="/favorite">
                            Favorites
                          </Link>
                          <Link className="dropdown-item" to="/mybooking">
                            My Bookings
                          </Link>
                          <div className="dropdown-item" onClick={logOut}>
                            <div className="circle-button">
                              <span className="text-color">{topLabelName}</span>
                            </div>
                            &nbsp;&nbsp;Log Out
                          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    clearRedux: (data) => dispatch(clearData(data)),
    removeUser: (url, token) => dispatch(deleteUser(url, token)),
  };
};

export default connect(null, mapDispatchToProps)(InnerHeader);
