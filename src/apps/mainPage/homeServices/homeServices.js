import React from 'react';
import Construction from "./img/ic-construction.svg";
import Plan from "./img/ic-plan.svg";
import Pantone from "./img/ic-pantone.svg";
import Painting from "./img/ic-painting.svg";
import "./homeServices.css"
import {Link} from "react-router-dom";
function HomeServices (props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);  // Прокрутка на верх страницы
    };
    return (
        <div className="our_services">
            <div className="container">
                <div className="our_services_text">
                    <h1 className="main_h1">
                        Our services
                    </h1>
                    <p className="main_p">
                        Createx Construction Bureau is a construction giant with a full range of construction services.
                    </p>
                </div>
                <div className="our_services_boxes">
                    <div className="our_services_box">
                        <img src={Construction} alt="Consttuction Image"/>
                        <span>Construction</span>
                    </div>
                    <div className="our_services_box">
                        <img src={Plan} alt="Plan Image"/>
                        <span>Project Development</span>
                    </div>
                    <div className="our_services_box">
                        <img src={Pantone} alt="Pantone Image"/>
                        <span>Interior Design</span>
                    </div>
                    <div className="our_services_box">
                        <img src={Painting} alt="Painting Image"/>
                        <span>Repairs</span>
                    </div>
                </div>
                <div className="our_services_more">
                    <h2 className="main_h2">Learn more about our services</h2>
                    <button className="main_btn"><Link to="/services" onClick={scrollToTop}>VIEW SERVICES</Link></button>
                </div>
            </div>
        </div>
    );
}

export default HomeServices;