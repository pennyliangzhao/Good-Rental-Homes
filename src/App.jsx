import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/pages/SignIn';
import RateLandlord from "./components/pages/RateLandlord";
import RateTenant from "./components/pages/RateTenant";
//import RateAtHome from "./components/pages/RateAtHome";
//import RateHouse from "./components/pages/RateHouse";
//import RateNeighbour from "./components/pages/RateNeighbour";
import Register from "./components/pages/Register";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                    <Route path='/rate-tenant' element={<RateTenant/>} />
                    <Route path='/rate-landlord' element={<RateLandlord/>} />
                    <Route path='/sign-in' element={<SignIn/>} />
					{/*<Route path='/rateathome' element={<RateAtHome/>} />
                    <Route path='/ratehouse' element={<RateHouse/>} />
                    <Route path='/rateneighbour' element={<RateNeighbour/>} />*/}
                    <Route path='/register' element={<Register/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
