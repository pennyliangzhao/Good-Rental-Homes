import React from 'react';
import '../../css/App.css';
import '../../css/HomeSection.css';
import Map from './Map';
import withScriptjs from "react-google-maps/lib/withScriptjs";
import "antd/dist/antd.css";
import {Button} from './Button';

function HomeSection() {
    const MapLoader = withScriptjs(Map);

    return (
        <div className='home-container'>
            <video src='videos/video.mp4' autoPlay loop muted />
            <h1>Empowering and Informing the Rental Community</h1>
            <p>Where good tenants find good homes and good landlords</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
            </div>
                <div className="map" >
                    <MapLoader
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2R2t03PiHkPhna_0HIxMZWXQxokn18W8&libraries=places"
                        loadingElement={<div  style={{height: `100%` }}/>}
                    />
                </div>
            </div>
    );
}

export default HomeSection;
