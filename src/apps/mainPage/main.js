import React from 'react';
import "../../components/css/core.css"
import "./main.css"
import Home from "./home/home";
import HomeBureau from "./homeBureau/homeBureau";
import HomeValues from "./homeValues/homeValues";
import HomeServices from "./homeServices/homeServices";
import HomeProjects from "./homeProjects/homeProjects";
import Footer from "../../components/footer/footer";

function Main (props) {
    return (
        <div>
            {/*<div className="main">*/}
            {/*    <div className="container">*/}
            {/*        <div className="home_text">*/}
            {/*            <h1>CREATEX CONSTRUCTION</h1>*/}
            {/*            <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>*/}
            {/*        </div>*/}
            {/*        <div className="home_buttons">*/}
            {/*            <button>LEARN MORE ABOUT US</button>*/}
            {/*            <button>SUBMIT REQUEST</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Home/>
            {/*<div className="bureau">*/}
            {/*    <div className="container">*/}
            {/*        <div>*/}
            {/*            <h1 className="main_h1">*/}
            {/*                We are Createx Construction Bureau*/}
            {/*            </h1>*/}
            {/*            <p className="main_p">*/}
            {/*                We are rightfully considered to be the best construction company in the USA.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <img src={Video} alt="Video Img"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <HomeBureau/>
            {/*<div className="values">*/}
            {/*    <div className="container">*/}
            {/*        <div>*/}
            {/*            <h1 className="main_h1">*/}
            {/*                Our core values*/}
            {/*            </h1>*/}
            {/*            <p className="main_p">*/}
            {/*                Our mission is to set the highest standards for construction sphere.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="value_boxes">*/}
            {/*            <div className="value_box">*/}
            {/*                <img src={Quality} alt="Quality Icon" />*/}
            {/*                <span>Quality</span>*/}
            {/*                <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>*/}
            {/*            </div>*/}
            {/*            <div className="value_box">*/}
            {/*                <img src={Safety} alt="Safery Icon" />*/}
            {/*                <span>Safety</span>*/}
            {/*                <p>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</p>*/}
            {/*            </div>*/}
            {/*            <div className="value_box">*/}
            {/*                <img src={Comfort} alt="Comfort Icon" />*/}
            {/*                <span>Comfort</span>*/}
            {/*                <p>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="question_input">*/}
            {/*            <h1>Want to know more? Ask us a question:</h1>*/}
            {/*            <div className="input_boxes">*/}
            {/*                <div className="input_box">*/}
            {/*                    <span>Name</span>*/}
            {/*                    <input placeholder="Your name"/>*/}
            {/*                </div>*/}
            {/*                <div className="input_box">*/}
            {/*                    <span>Phone</span>*/}
            {/*                    <input placeholder="Your phone"/>*/}
            {/*                </div>*/}
            {/*                <div className="input_box_message">*/}
            {/*                    <span>Message</span>*/}
            {/*                    <input placeholder="Your Message"/>*/}
            {/*                </div>*/}
            {/*                <button></button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <HomeValues/>
            {/*<div className="our_services">*/}
            {/*    <div className="container">*/}
            {/*        <div className="our_services_text">*/}
            {/*            <h1 className="main_h1">*/}
            {/*                Our services*/}
            {/*            </h1>*/}
            {/*            <p className="main_p">*/}
            {/*                Createx Construction Bureau is a construction giant with a full range of construction services.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="our_services_boxes">*/}
            {/*            <div className="our_services_box">*/}
            {/*                <img src={Construction} alt="Consttuction Image"/>*/}
            {/*                <span>Construction</span>*/}
            {/*            </div>*/}
            {/*            <div className="our_services_box">*/}
            {/*                <img src={Plan} alt="Plan Image"/>*/}
            {/*                <span>Project Development</span>*/}
            {/*            </div>*/}
            {/*            <div className="our_services_box">*/}
            {/*                <img src={Pantone} alt="Pantone Image"/>*/}
            {/*                <span>Interior Design</span>*/}
            {/*            </div>*/}
            {/*            <div className="our_services_box">*/}
            {/*                <img src={Painting} alt="Painting Image"/>*/}
            {/*                <span>Repairs</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="our_services_more">*/}
            {/*            <h2 className="main_h2">Learn more about our services</h2>*/}
            {/*            <button className="main_btn">VIEW SERVICES</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <HomeServices/>
            {/*<div className="projects">*/}
            {/*    <div className="container">*/}
            {/*        <h1 className="main_h1">*/}
            {/*            Browse our selected projects*/}
            {/*            and learn more about our work*/}
            {/*        </h1>*/}
            {/*        <div className="project_boxes">*/}
            {/*            <div className="project_box">*/}
            {/*                <img src={RedBuilding} alt=""/>*/}
            {/*                <h3>Red Finger Building</h3>*/}
            {/*                <span>Business Centers</span>*/}
            {/*                <button>View Project</button>*/}
            {/*            </div>*/}
            {/*            <div className="project_box">*/}
            {/*                <img src={CubesBuilding} alt=""/>*/}
            {/*                <h3>Cubes Building</h3>*/}
            {/*                <span>Business Centers</span>*/}
            {/*                <button>View Project</button>*/}
            {/*            </div>*/}
            {/*            <div className="project_box">*/}
            {/*                <img src={PencilBuilding} alt=""/>*/}
            {/*                <h3>The Pencil Building</h3>*/}
            {/*                <span>Stores & Malls</span>*/}
            {/*                <button>View Project</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="all_works">*/}
            {/*            <h2 className="main_h2">Explore all our works</h2>*/}
            {/*            <button className="main_btn">VIEW PORTFOLIO</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <HomeProjects/>
            <Footer/>
        </div>
    );
}

export default Main;