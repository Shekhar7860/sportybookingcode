import React, { useEffect } from "react";
import Home from "./components/Home";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Search from "./components/user/Search";
import Facility from "./components/user/Facility";
import Mybooking from "./components/user/Mybooking";
import Messages from "./components/user/Messages";
import Profile from "./components/user/Profile";
import OwnerHome from "./components/owner/OwnerHome";
import OwnerCalendar from "./components/owner/OwnerCalender";
import OwnerBooking from "./components/owner/OwnerBooking";
import OwnerNotification from "./components/owner/OwnerNotification";
import OwnerPayment from "./components/owner/OwnerPayment";
import OwnerSubscriptions from "./components/owner/OwnerSubscriptions";
import OwnerBilling from "./components/owner/OwnerBilling";
import OwnerListing from "./components/owner/OwnerListing";
import Favorite from "./components/Favorite";
import OwnerMyFacilities from "./components/owner/OwnerMyFacilities";
import OwnerAddFacility from "./components/owner/OwnerAddfacility";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = ({ userData }) => {
  useEffect(() => {
    toast.configure();
  }, [userData]);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {userData.userData ? (
              userData.userData.user != undefined ? (
                <Redirect to="/home" />
              ) : (
                <Home />
              )
            ) : null}
          </Route>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/facility">
            <Facility />
          </Route>
          <Route path="/mybooking">
            <Mybooking />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <OwnerHome />{" "}
          </Route>
          <Route path="/calender">
            <OwnerCalendar />{" "}
          </Route>
          <Route path="/booking">
            <OwnerBooking />{" "}
          </Route>
          <Route path="/notification">
            <OwnerNotification />{" "}
          </Route>
          <Route path="/payment">
            <OwnerPayment />{" "}
          </Route>
          <Route path="/subscription">
            <OwnerSubscriptions />{" "}
          </Route>
          <Route path="/billing">
            <OwnerBilling />{" "}
          </Route>
          <Route path="/listing">
            <OwnerListing />{" "}
          </Route>
          <Route path="/favorite">
            <Favorite />{" "}
          </Route>
          <Route path="/myfacilities">
            <OwnerMyFacilities />{" "}
          </Route>
          <Route path="/addfacilitiy">
            <OwnerAddFacility />{" "}
          </Route>
          <ToastContainer />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps, null)(App);
