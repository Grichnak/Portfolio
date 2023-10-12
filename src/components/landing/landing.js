import React from 'react';
import './landing.css';
import bg from '../../assets/bg-resize.jpg';

const Landing = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file 
        fetch('/CV-MDAF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file 
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values 
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/CV-MDAF.pdf';
                alink.click();
            })
        })
    }

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

                    <button className='customBtn' onClick={onButtonClick}>
                        Télécharger mon CV
                    </button>


                </div>

            </div>

        </section>
    )
}

export default Landing;
