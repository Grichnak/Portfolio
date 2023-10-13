import React from 'react';
import "./about.css";
import pic from "../../assets/aboutPic.jpg"


const About = () => {
    return (
        <section id="about">
            <div className="aboutContainer">
                <img src={pic} alt="selfie" className="aboutPic" />
                <div className="aboutTextContainer">
                    <span className="aboutText">-Après un parcours dans la fonction publique, j'ai décidé de me reconvertir dans le monde du développement web.  </span><br />
                    <span className="aboutText">-J'ai toujours été intéressé par le monde de l'informatique et cela s'est transformé en passion lors de ma formation. Je suis naturellement curieux, j'aime comprendre comment les choses fonctionnent.</span><br />
                    <span className="aboutText">-C'est toujours un plaisir d'apprendre et d'évoluer. Je m'intéresse notamment à three.js et au monde du design web. </span>
                </div>
            </div>
        </section>
    )
}

export default About