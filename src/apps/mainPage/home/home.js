import React from 'react';
import "./home.css"
import {Link} from "react-router-dom";

function Home (props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);  // Прокрутка на верх страницы
    };
    return (
        <div className="main">
            <div className="container">
                <div className="home_text">
                    <h1 >CREATE<span>X</span> CONSTRUCTION</h1>
                    <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
                </div>
                <div className="home_buttons">
                    <button><Link to="/about" onClick={scrollToTop}>LEARN MORE ABOUT US</Link></button>
                    <button><Link to="/footer" onClick={scrollToTop}>SUBMIT REQUEST</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Home;