import React from 'react';
import './portfolio.css';
import booki from '../../assets/portfolio-booki2.png';
import kasa from '../../assets/portfolio-kasa3.png';
import nina from '../../assets/portfolio-nina2.png';
import livre from '../../assets/portfolio-grimoire3.png';
import ghlogo from '../../assets/github-logo.png';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className='portfolio-intro-text'>
                <h1>Portfolio</h1>
            </div>
            <div className='portfolio-container'>


                <div className='portfolio-card'>
                    <img src={booki} alt='' className='portfolio-card-img' />
                    <a href="https://github.com/Grichnak/Projet-2---BOOKI" target='blank'><img src={ghlogo} alt="Logo Github" className='logo-portfolio-mobile' /></a>
                    <div className='portfolio-card-text'>
                        <h2>Booki</h2>
                        <p>Site de réservation de logements en ligne.<br />Réalisé à partir d'une maquette Figma, il est aussi responsive.</p>
                        <h2>Technologies utilisées:</h2>
                        <p>- HTML5, <br />- CSS3</p>
                        <a href="https://github.com/Grichnak/Projet-2---BOOKI" target='blank'><img src={ghlogo} alt="Logo Github" className='logo-portfolio' /></a>

                    </div>
                </div>



                <div className='portfolio-card'>
                    <img src={kasa} alt='' className='portfolio-card-img kasa' />
                    <a href="https://github.com/Grichnak/OC-Projet-Kasa" target='blank'><img src={ghlogo} alt="Logo Github" className='logo-portfolio-mobile' /></a>
                    <div className='portfolio-card-text'>
                        <h2>Kasa</h2>
                        <p>Kasa est une application web de location immobilière.</p>
                        <h2>Technologies utilisées:</h2>
                        <p>- Javascript, <br />- React, <br />- Sass</p>
                        <a href="https://github.com/Grichnak/OC-Projet-Kasa" target='blank'><img src={ghlogo} alt="Logo Github" className='logo-portfolio' /></a>
                    </div>
                </div>



                <div className='portfolio-card'>
                    <img src={nina} alt='' className='portfolio-card-img' />
                    <a href="https://github.com/Grichnak/projet5-nina-carducci.github.io" target='blank'><img src={ghlogo} alt="Logo Github" className='logo-portfolio-mobile' /></a>
                    <div className='portfolio-card-text'>
                        <h2>Site de photographe</h2>
                        <p>Optimisation du site afin d'améliorer certains points, <br />notamment les performances et la SEO.</p>
                        <h2>Technologies utilisées:</h2>
                        <p>- Wave, <br />- Lighthouse, <br />- Google Rich Snippet</p>
                        <a href="https://github.com/Grichnak/projet5-nina-carducci.github.io" target='blank'><img src={ghlogo} alt="Logo Github" className='logo-portfolio' /></a>
                    </div>
                </div>


                <div className='portfolio-card'>
                    <img src={livre} alt='' className='portfolio-card-img livre' />
                    <a href="https://github.com/Grichnak/Projet-OC-7-Mon-vieux-grimoire" target='blank'><img src={ghlogo} alt="Logo Github" className='logo-portfolio-mobile' /></a>
                    <div className='portfolio-card-text'>
                        <h2>Mon vieux grimmoire</h2>
                        <p>Création du back-end pour un site de notation de livres.</p>
                        <h2>Technologies utilisées:</h2>
                        <p>- React,<br /> - Node.js, <br /> - Express.js</p>
                        <a href="https://github.com/Grichnak/Projet-OC-7-Mon-vieux-grimoire" target='blank'><img src={ghlogo} alt="Logo Github" className='logo-portfolio' /></a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
