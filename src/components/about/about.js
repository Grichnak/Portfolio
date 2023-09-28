import React from 'react';
import "./about.css";
import pic from "../../assets/aboutPic.jpg"


const About = () => {
    return (
        <section className="about">
            <div className="aboutContainer">
                <img src={pic} alt="selfie" className="aboutPic" />
                <div className="aboutTextContainer">
                    <span className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam phasellus.</span><br />
                    <span className="aboutText">Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Sagittis orci a scelerisque purus semper eget duis at. Arcu dui vivamus arcu felis bibendum.</span><br />
                    <span className="aboutText">Nunc faucibus a pellentesque sit amet porttitor eget dolor. Ultrices eros in cursus turpis. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. </span>
                </div>
            </div>
        </section>
    )
}

export default About