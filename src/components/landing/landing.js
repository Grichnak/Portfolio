import React from 'react';
import './landing.css';
import bg from '../../assets/bg-resize.jpg';

const Landing = () => {
    return (
        <section id="landing">
            <div className="landingContent">

                <img src={bg} alt="background" className="bg" />
                <h1 className="landingText">
                    <span className="line">Bonjour !</span> <br />
                    <span className="line">Je suis Marek-Dimitri,</span> <br />
                    <span className="line">développeur web fullstack</span>
                </h1>

            </div>

        </section>
    )
}

export default Landing;
