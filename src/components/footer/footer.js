import React from 'react';
import "./footer.css"
import Logo from "./img/logo.svg"
import Facebook from "./img/Facebook (1).svg"
import Messenger from "./img/Messanger.svg"
import Twitter from "./img/Twitter.svg"
import WhatsApp from "./img/Messanger.svg"
import YouTube from "./img/YouTube (1).svg"
import Heart from "./img/Vector (Stroke).svg"
import {Link} from "react-router-dom";
function Footer (props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);  // Прокрутка на верх страницы
    };
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="discuss_input">
                        <h3>A quick way to discuss details</h3>
                        <div className="discuss_input_box">
                            <span>Name</span>
                            <input placeholder="Your name"/>
                        </div>
                        <div className="discuss_input_box">
                            <span>Phone</span>
                            <input placeholder="Your phone number"/>
                        </div>
                        <div className="discuss_input_box">
                            <span>Email</span>
                            <input placeholder="Your working email"/>
                        </div>
                        <div className="discuss_input_box">
                            <span>Message</span>
                            <input placeholder="Your message"/>
                        </div>
                        <div className="checkbox_cont">
                            <input className="checkmark" type="checkbox"/>
                            <span>I agree to receive communications from Createx Construction Bureau.</span>
                        </div>
                        <button className="main_btn">SEND REQUEST</button>
                    </div>
                </div>
            </div>
            <div className="social_media_and_email">
                <div className="container">
                    <div className="company_social_media_text">
                        <div className="company_social_links">
                            <a><Link to="/" onClick={scrollToTop}><img className="footerLogo" src={Logo} alt="Company Logo"></img></Link></a>
                            <div className="company_social_media">
                                <div className="social_links">
                                    <a className="" href="https://www.instagram.com/" target="_blank">
                                        <img src={WhatsApp} alt=""/>
                                    </a>
                                    <a className="" href="https://www.instagram.com/" target="_blank">
                                        <img src={Twitter} alt=""/>
                                    </a>
                                    <a className="" href="https://www.instagram.com/" target="_blank">
                                        <img src={YouTube} alt=""/>
                                    </a>
                                    <a className="" href="https://www.instagram.com/" target="_blank">
                                        <img src={Facebook} alt=""/>
                                    </a>
                                    <a className="" href="https://www.instagram.com/" target="_blank">
                                        <img src={Messenger} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p>Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.</p>
                    </div>
                    <div className="email_input">
                        <h3>Let's stay in touch</h3>
                        <div className="footer_input_email">
                            <input placeholder="Your email address"/>
                            <button className="main_btn">SUBSCRIBE</button>
                        </div>
                        <p>Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.</p>
                    </div>
                </div>
            </div>
            <div className="footer_menu">
                <div className="container">
                    <div className="footer-wrap">
                        <div className="footer-list">
                            <h2>HEAD OFFICE</h2>
                            <ul className="footer-link">
                                <li >Address: 8502 Preston Rd. Inglewood, New York</li>
                                <li>Email: hello@website.com</li>
                                <li>Call: +02 5421234560</li>
                            </ul>
                        </div>
                        <div className="footer-list">
                            <h2>WHO WE ARE</h2>
                            <ul className="footer-link">
                                <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                                <li><a href=""><Link to="/positions" onClick={scrollToTop}>Available positions</Link></a></li>
                                <li><Link to="/contacts" onClick={scrollToTop}>Contacts</Link></li>
                            </ul>
                        </div>
                        <div className="footer-list">
                            <h2>OUR EXPERIENCE</h2>
                            <ul className="footer-link">
                                <li><a href=""><Link to="/services" onClick={scrollToTop}>Services</Link></a></li>
                                <li><a href=""><Link to="/work" onClick={scrollToTop}>Work</Link></a></li>
                                <li><a href=""><Link to="/news" onClick={scrollToTop}>News</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comp-advr">
               <div className="container">
                   <h6>© All rights reserved. Made with  <img src={Heart} alt="Logo"/> by Createx Studio </h6>
               </div>
            </div>
        </div>
    );
}

export default Footer;