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
                    <div className="landing-links">
                        <a href={cv} download="CV Marek-Dimitri ABOU FADEL">
                            <button className='customBtn' >
                                Télécharger mon CV
                            </button>
                        </a>
                        <a href="https://github.com/Grichnak" target="blank"><i class="fa-brands fa-github" ></i></a>
                        <a href="https://www.linkedin.com/in/marek-dimitri-abou-fadel-14646217b" target="blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Landing;
