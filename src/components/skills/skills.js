import React from 'react';
import './skills.css';
import html from '../../assets/html-icon.png'
import css from '../../assets/css-icon.png'
import js from '../../assets/js.png'
import react from '../../assets/react-icon.png'
import sass from '../../assets/sass.png'

const Skills = () => {
    return (
        <section className="skills">
            <h2 className="skill-text"> Mes compétences</h2>
            <div className="skill-container">

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="skill-img">
                            <img src={html} alt="html icon" className='skill-icon' />
                        </div>
                        <h3>HTML5</h3>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="skill-img">
                            <img src={css} alt="css icon" className='skill-icon' />
                        </div>
                        <h3>CSS3</h3>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="skill-img">
                            <img src={js} alt="js icon" className='skill-icon' />
                        </div>
                        <h3>JavaScript</h3>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="skill-img">
                            <img src={react} alt="react icon" className='skill-icon' />
                        </div>
                        <h3>React</h3>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="skill-img">

                        </div>
                        <h3>NodeJS</h3>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="skill-img">
                            <img src={sass} alt="sass icon" className='skill-icon' />
                        </div>
                        <h3>Sass</h3>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills