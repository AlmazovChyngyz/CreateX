import React from 'react';
import "../../components/css/core.css"
import NewsHome from "./newsHome/NewsHome";
import Footer from "../../components/footer/footer";
function News (props) {
    return (
        <div>
            <NewsHome/>
            <Footer/>
        </div>
    );
}

export default News;