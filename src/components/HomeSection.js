import React from 'react';
import '../App.css';
import './HomeSection.css';
import Map from './Map'
import withScriptjs from "react-google-maps/lib/withScriptjs";
import "antd/dist/antd.css";
import { PageHeader, Button } from 'antd';

function HomeSection() {
    const MapLoader = withScriptjs(Map);

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

            {/*<div className="input-group">*/}
                {/*<input type="search" className="form-control rounded" placeholder="Search by location" aria-label="Search"*/}
                {/*       aria-describedby="search-addon"/>*/}
                <div className="map" >
                    <MapLoader
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2R2t03PiHkPhna_0HIxMZWXQxokn18W8&libraries=places"
                        loadingElement={<div  style={{height: `100%` }}/>}
                    />
                </div>
                {/*<button type="button" className="btn btn-outline-primary">search</button>*/}
            {/*</div>*/}
        </div>


    );
}

export default HomeSection;
