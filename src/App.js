import React from 'react'
import Home from './components/Home'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './components/user/Search'
import Facility from './components/user/Facility'
import Mybooking from './components/user/Mybooking'
import Messages from './components/user/Messages'
import Profile from './components/user/Profile'
import OwnerHome from './components/owner/OwnerHome'
import OwnerCalendar from './components/owner/OwnerCalender'
import OwnerBooking from './components/owner/OwnerBooking'
import OwnerNotification from './components/owner/OwnerNotification'
import OwnerPayment from './components/owner/OwnerPayment'
import OwnerSubscriptions from './components/owner/OwnerSubscriptions'
import OwnerBilling from './components/owner/OwnerBilling'
import OwnerListing from './components/owner/OwnerListing'
const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Home path="/" exact />
                    <Route path="/search" ><Search /></Route>
                    <Route path="/facility" ><Facility /></Route>
                    <Route path="/mybooking" ><Mybooking /></Route>
                    <Route path="/messages" ><Messages /></Route>
                    <Route path="/profile" ><Profile /></Route>
                    <Route path="/owner" ><OwnerHome /> </Route>
                    <Route path="/calender" ><OwnerCalendar /> </Route>
                    <Route path="/booking" ><OwnerBooking /> </Route>
                    <Route path="/notification" ><OwnerNotification /> </Route>
                    <Route path="/payment" ><OwnerPayment /> </Route>
                    <Route path="/subscription" ><OwnerSubscriptions /> </Route>
                    <Route path="/billing" ><OwnerBilling /> </Route>
                    <Route path="/listing" ><OwnerListing /> </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App