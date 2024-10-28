import React from 'react';
import "./NewsHome.css"

function NewsHome (props) {
    return (
        <div className="news-home">
            <div className="container">
                <div className="news-text">
                    <h1 className="page_h1">News</h1>
                    <p className="page_p">Stay tuned with our news, expert tips and articles.</p>
                </div>
            </div>
        </div>
    );
}

export default NewsHome;