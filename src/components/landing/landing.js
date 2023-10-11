import React from 'react';
import './landing.css';
import bg from '../../assets/bg-resize.jpg';

const Landing = () => {
    return (
        <section id="landing">
            <div className="landingContent">

                <img src={bg} alt="background" className="bg" />
                <div className="landing-content-box">
                    <h1 className="landingText">
                        <span className="line">Bonjour !</span>
                        <span className="line">Je suis Marek-Dimitri,</span>
                        <span className="line">développeur web front-end</span>
                    </h1>
                    <div className="socialIcons">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Landing;
