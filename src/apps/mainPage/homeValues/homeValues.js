import React from 'react';
import Quality from "./img/ic-like.svg";
import Safety from "./img/ic-hand.svg";
import Comfort from "./img/ic-slippers.svg";
import "./homeValues.css"

function HomeValues (props) {
    return (
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
                <div className="question_input">
                    <h1>Want to know more? Ask us a question:</h1>
                    <div className="input_boxes">
                        <div className="input_box">
                            <span>Name</span>
                            <input placeholder="Your name"/>
                        </div>
                        <div className="input_box">
                            <span>Phone</span>
                            <input placeholder="Your phone"/>
                        </div>
                        <div className="input_box_message">
                            <span>Message</span>
                            <input placeholder="Your Message"/>
                        </div>
                        <button className="main_btn">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeValues;