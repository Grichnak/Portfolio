import React from 'react';
import './landing.css';
import bg from '../../assets/bg-resize.jpg';
import cv from '../../assets/cv.pdf'


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
                    <a href={cv} download="CV Marek-Dimitri ABOU FADEL">
                        <button className='customBtn' >
                            Télécharger mon CV
                        </button>
                    </a>

                </div>

            </div>

        </section>
    )
}

export default Landing;
