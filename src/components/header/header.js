import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./header.module.css";
import logo from "./img/logo.svg"
import chat from "./img/Chat.svg"
import phone from "./img/iPhone.svg"
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo_list">
                    <div className="list-links">
                        <div className="logo">
                            <a><Link to="/"><img src={logo} alt={"CreateX Logo"}></img></Link></a>
                        </div>
                        <nav>
                            <ul className="list">
                                {/*<li className="link"><Link to="/">Home</Link></li>*/}
                                <li className="link"><Link to="/about">About Us</Link></li>
                                <li className="link"><Link to="/services">Services</Link></li>
                                <li className="link"><Link to="/work">Work</Link></li>
                                <li className="link"><Link to="/news">News</Link></li>
                                <li className="link"><Link to="/contacts">Contacts</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="contacts">
                        <div className="call">
                            <div>
                                <img src={phone} alt={"Phone Logo"}/>
                            </div>
                            <div className="phone_text">
                                <span className="callUs">Call us</span>
                                <span >(405) 555-0128</span>
                            </div>
                        </div>
                        <div className="email">
                            <div>
                                <img src={chat} alt={"Chat Logo"}/>
                            </div>
                            <div className="email_text">
                                <span className="talkUs">Talk to us</span>
                                <p>hello@createx.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
