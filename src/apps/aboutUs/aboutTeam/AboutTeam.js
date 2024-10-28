import React from 'react';
import "./AboutTeam.css"
import Alex from "./img/image1.jpg"
import Fox from "./img/image2.jpg"
import Lane from "./img/image3.jpg"
import Diane from "./img/image4.jpg"
import Judith from "./img/image5.jpg"
import Floyd from "./img/image6.jpg"
import Serenity from "./img/image7.jpg"
import Shawn from "./img/image8.jpg"
import {Link} from "react-router-dom";
function AboutTeam (props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);  // Прокрутка на верх страницы
    };

    return (
        <div className="about-team">
            <div className="container">
                <div className="about-team-text">
                    <h1 className="main_h1">Our team</h1>
                    <p className="main_p">People are at the heart of Createx Construction Bureau</p>
                </div>
                <div className="team-boxes">
                    <div className="team-box">
                        <img src={Alex} alt=""/>
                        <h4>Courtney Alexander</h4>
                        <p>CEO, Co-Founder</p>
                    </div>
                    <div className="team-box">
                        <img src={Fox} alt=""/>
                        <h4>Calvin Fox</h4>
                        <p>CTO, Co-Founder</p>
                    </div>
                    <div className="team-box">
                        <img src={Lane} alt=""/>
                        <h4>Johnny Lane</h4>
                        <p>Commercial Manager</p>
                    </div>
                    <div className="team-box">
                        <img src={Diane} alt=""/>
                        <h4>Diane Mccoy</h4>
                        <p>Director of Human Resources</p>
                    </div>
                    <div className="team-box">
                        <img src={Judith} alt=""/>
                        <h4>Judith Warren</h4>
                        <p>Lead Accountant</p>
                    </div>
                    <div className="team-box">
                        <img src={Floyd} alt=""/>
                        <h4>Floyd Simmons</h4>
                        <p>Financial Director</p>
                    </div>
                    <div className="team-box">
                        <img src={Serenity} alt=""/>
                        <h4>Serenity Edwards</h4>
                        <p>Director of Marketing</p>
                    </div>
                    <div className="team-box">
                        <img src={Shawn} alt=""/>
                        <h4>Shawn Edwards</h4>
                        <p>Teach Lead</p>
                    </div>
                </div>
                <div className="join-us">
                    <h4>Become a part of the best team in the construction market of the USA.</h4>
                    <a href=""> <Link to="/positions" onClick={scrollToTop}>Available Positions</Link></a>
                </div>
            </div>
        </div>
    );
}

export default AboutTeam;