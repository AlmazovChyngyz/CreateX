import React from 'react';
import "../../components/css/core.css"
import "./AboutUs.css"
import AboutHome from "./aboutHome/aboutHome";
import AboutMap from "./aboutMap/aboutMap";
import AboutTeam from "./aboutTeam/AboutTeam";
import Footer from "../../components/footer/footer";
function AboutUs (props) {
    return (
        <div>
            <AboutHome/>
            <AboutTeam/>
            <AboutMap/>
            <Footer/>
        </div>
    );
}

export default AboutUs;