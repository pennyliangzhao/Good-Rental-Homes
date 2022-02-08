import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HomeSection.css';

function HomeSection() {
    return (
        <div className='home-container'>
            <video src='/videos/video.mp4' autoPlay loop muted />
            <h1>Empowering&Informing The Rental Community.</h1>
            <p>Where good tenants find good homes and good landlords?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>

            </div>
            <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Search by location" aria-label="Search"
                       aria-describedby="search-addon"/>
                <button type="button" className="btn btn-outline-primary">search</button>
            </div>

        </div>
    );
}

export default HomeSection;
