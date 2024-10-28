import React from 'react';
import RedBuilding from "./img/red-building.jpg";
import CubesBuilding from "./img/cubes-building.png";
import PencilBuilding from "./img/pencil-building.jpg";
import "./homeProjects.css"
import {Link} from "react-router-dom";

function HomeProjects (props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);  // Прокрутка на верх страницы
    };
    return (
        <div className="projects">
            <div className="container">
                <h1 className="main_h1">
                    Browse our selected projects
                    and learn more about our work
                </h1>
                <div className="project_boxes">
                    <div className="project_box">
                        <img src={RedBuilding} alt=""/>
                        <h3>Red Finger Building</h3>
                        <span>Business Centers</span>
                        <button>View Project</button>
                    </div>
                    <div className="project_box">
                        <img src={CubesBuilding} alt=""/>
                        <h3>Cubes Building</h3>
                        <span>Business Centers</span>
                        <button>View Project</button>
                    </div>
                    <div className="project_box">
                        <img src={PencilBuilding} alt=""/>
                        <h3>The Pencil Building</h3>
                        <span>Stores & Malls</span>
                        <button>View Project</button>
                    </div>
                </div>
                <div className="all_works">
                    <h2 className="main_h2">Explore all our works</h2>
                    <button className="main_btn"><Link to="/work" onClick={scrollToTop}>VIEW PORTFOLIO</Link></button>
                </div>
            </div>
        </div>
    );
}

export default HomeProjects;