import React from 'react';
import './portfolio.css';
import booki from '../../assets/portfolio-booki2.png';
import kasa from '../../assets/portfolio-kasa2.png';
import nina from '../../assets/portfolio-nina2.png';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className='portfolio-intro-text'>
                <h1>Portfolio</h1>
            </div>
            <div className='portfolio-container'>
                <div className='portfolio-card'>
                    <img src={booki} alt='' className='portfolio-card-img' />
                    <div className='portfolio-card-text'>
                        <h2>Booki</h2>
                        <p>Site de réservation de logements en ligne. Le site est dévelppé en HTML5 et CSS et est responsive</p>
                    </div>
                </div>
                <div className='portfolio-card'>
                    <img src={kasa} alt='' className='portfolio-card-img' />
                    <div className='portfolio-card-text'>
                        <h2>Kasa</h2>
                        <p>Kasa est un site de location d'appartements. Il a été réalisé avec React</p>
                    </div>
                </div>
                <div className='portfolio-card'>
                    <img src={nina} alt='' className='portfolio-card-img' />
                    <div className='portfolio-card-text'>
                        <h2>Site de photographe</h2>
                        <p>Optimisation du site, tant sur les performances que sur le SEO.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
