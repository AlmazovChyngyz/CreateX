import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Home from "../src/apps/mainPage/main"
import About from "./apps/aboutUs/AboutUs"
import Contact from "./apps/contactUs/Contacts"
import Services from "./apps/services/Services";
import Work from "./apps/work/Work"
import News from "./apps/news/News"
import Positions from "./apps/availablePositions/Positions"
import "../src/components/css/core.css"
import Footer from "./components/footer/footer";
import Contacts from "./apps/contactUs/Contacts";
const App = () => {
    return (
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/positions" element={<Positions/>}/>
                    <Route path="/footer" element={<Footer/>}/>
                </Routes>
            </div>
    );
};

export default App;
