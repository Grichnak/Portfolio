import React from 'react';
import './portfolio.css';
import booki from '../../assets/portfolio-booki2.png';
import kasa from '../../assets/portfolio-kasa2.png';
import nina from '../../assets/portfolio-nina2.png';
import livre from '../../assets/portfolio-grimoire3.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className='portfolio-intro-text'>
                <h1>Portfolio</h1>
            </div>
            <div className='portfolio-container'>

                <a href="https://github.com/Grichnak/Projet-2---BOOKI" target='blank'>
                    <div className='portfolio-card'>
                        <img src={booki} alt='' className='portfolio-card-img' />
                        <div className='portfolio-card-text'>
                            <h2>Booki</h2>
                            <p>Site de réservation de logements en ligne. Le site est dévelppé en HTML5 et CSS et est responsive</p>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/Grichnak/OC-Projet-Kasa" target='blank'>
                    <div className='portfolio-card'>
                        <img src={kasa} alt='' className='portfolio-card-img' />
                        <div className='portfolio-card-text'>
                            <h2>Kasa</h2>
                            <p>Kasa est un site de location d'appartements. Il a été réalisé avec React</p>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/Grichnak/projet5-nina-carducci.github.io" target='blank'>
                    <div className='portfolio-card'>
                        <img src={nina} alt='' className='portfolio-card-img' />
                        <div className='portfolio-card-text'>
                            <h2>Site de photographe</h2>
                            <p>Optimisation du site, tant sur les performances que sur le SEO.</p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/Grichnak/Projet-OC-7-Mon-vieux-grimoire" target='blank'>
                    <div className='portfolio-card'>
                        <img src={livre} alt='' className='portfolio-card-img livre' />
                        <div className='portfolio-card-text'>
                            <h2>Mon vieux grimmoire</h2>
                            <p>Création du back-end d'un site de notation de livres.</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Portfolio;
