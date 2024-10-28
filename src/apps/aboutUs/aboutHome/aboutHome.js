import React from 'react';
import "./aboutHome.css"
import Quality from "../../mainPage/homeValues/img/ic-like.svg";
import Safety from "../../mainPage/homeValues/img/ic-hand.svg";
import Comfort from "../../mainPage/homeValues/img/ic-slippers.svg";
function AboutHome (props) {
    return (
        <div>
            <div className="about_home">
                <div className="container">
                    <div className="aboutPage_text">
                        <h1 className="page_h1">about us</h1>
                        <p className="page_p">Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.</p>
                    </div>
                </div>
            </div>
            <div className="values">
                <div className="container">
                    <div>
                        <h1 className="main_h1">
                            Our core values
                        </h1>
                        <p className="main_p">
                            Our mission is to set the highest standards for construction sphere.
                        </p>
                    </div>
                    <div className="value_boxes">
                        <div className="value_box">
                            <img src={Quality} alt="Quality Icon" />
                            <span>Quality</span>
                            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                        </div>
                        <div className="value_box">
                            <img src={Safety} alt="Safery Icon" />
                            <span>Safety</span>
                            <p>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</p>
                        </div>
                        <div className="value_box">
                            <img src={Comfort} alt="Comfort Icon" />
                            <span>Comfort</span>
                            <p>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutHome;