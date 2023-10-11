import React, { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tp6hu9o', 'template_xjvtrp5', form.current, 'IGmNqpNcObhBQqieJ')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email envoyé !');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contact-page">
            <div id="contact">
                <h1 className="contact-page-title">Contact</h1>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Votre nom' name="user_name" />
                    <input type="email" className="email" placeholder='Votre mail' name="user_email" />
                    <textarea className='msg' name="message" rows="5" placeholder='Votre message'></textarea>
                    <button type='submit' value='Send' className='submit-button'>Envoyer</button>
                </form>
            </div>
        </section>
    )
}

export default Contact