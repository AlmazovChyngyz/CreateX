import React from 'react';
import Map from "./map.svg"
import "./aboutMap.css"

function AboutMap (props) {
    return (
        <div className="about-map">
            <div className="container">
                <h1 className="main_h1">We work worldwide</h1>
                <div className="map-image"></div>
            </div>
        </div>
    );
}

export default AboutMap;