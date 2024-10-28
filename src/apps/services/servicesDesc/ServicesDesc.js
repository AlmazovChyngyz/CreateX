import React from 'react';
import "./ServicesDesc.css"
import Construction from "./img/construction.jpg"
import Development from "./img/Development.jpg"
import Design from  "./img/design.jpg"
import Repairs from "./img/repairs.jpg"
function ServicesDesc (props) {
    return (
        <div className="services-desc">
            <div className="container">
                <div className="services-boxes">
                    <div className="services-box">
                        <img src={Construction} alt="Construction Image"/>
                        <div className="box-text-btn">
                            <h3>Construction</h3>
                            <p>Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum.</p>
                            <button>learn more</button>
                        </div>
                    </div>
                    <div className="services-box">
                        <div className="box-text-btn">
                            <h3>Project Development</h3>
                            <p>Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget.</p>
                            <button>learn more</button>
                        </div>
                        <img src={Development} alt="Development Image"/>
                    </div>
                    <div className="services-box">
                        <img src={Design} alt="Design Image"/>
                        <div className="box-text-btn">
                            <h3>Interior Design</h3>
                             <p>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.</p>
                            <button>learn more</button>
                        </div>
                    </div>
                    <div className="services-box">
                        <div className="box-text-btn">
                            <h3>Reapirs</h3>
                            <p>Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec urna ultrices urna.</p>
                            <button>learn more</button>
                        </div>
                        <img src={Repairs} alt="Repairs Image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesDesc;