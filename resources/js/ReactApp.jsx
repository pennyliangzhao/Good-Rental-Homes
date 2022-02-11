import React from 'react';
import Navbar from './Components/Navbar';
import '../css/App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './Pages/SignIn';
import RateLandlord from "./Pages/RateLandlord";
import RateTenant from "./Pages/RateTenant";
import RateAtHome from "./Pages/RateAtHome";
import RateHouse from "./Pages/RateHouse";
import RateNeighbour from "./Pages/RateNeighbour";
import Register from "./Pages/Register";
import ReactDOM from "react-dom";

function ReactApp() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/rate-tenant' element={<RateTenant/>}/>
                    <Route path='/rate-landlord' element={<RateLandlord/>}/>
                    <Route path='/sign-in' element={<SignIn/>}/>
                    <Route path='/rate-at-home' element={<RateAtHome/>} />
                    <Route path='/rate-house' element={<RateHouse/>} />
                    <Route path='/rate-neighbour' element={<RateNeighbour/>} />
                    <Route path='/register' element={<Register/>} />
                </Routes>
            </Router>
        </>
    );
}

export default ReactApp;

if (document.getElementById('ReactApp')) {
    ReactDOM.render(<ReactApp />, document.getElementById('ReactApp'));
}
