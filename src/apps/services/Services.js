import React from 'react';
import ServicesHome from "./servicesHome/ServicesHome";
import ServicesDesc from "./servicesDesc/ServicesDesc";
import Footer from "../../components/footer/footer";

function Services (props) {
    return (
        <div>
            <ServicesHome/>
            <ServicesDesc/>
            <Footer/>
        </div>
    );
}

export default Services;