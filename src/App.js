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
                </Switch>
            </Router>
        </div>
    )
}

export default App