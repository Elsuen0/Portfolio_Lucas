import React, { useState } from 'react';
import emailjs from "@emailjs/browser"
import './Form.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        firstName: "",
        email: "",
        message: "",
    });

    const [characterCount, setCharacterCount] = useState(250);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCharacterCount(250 - value.length);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userID = "IM4xa4sOpwAgfKgA5";
        const templateID = "template_0xby2rt";
        const serviceID = "service_ckx38xa";

        const form = e.target;

        emailjs
            .sendForm(serviceID, templateID, form, userID)
            .then((response) => {
                console.log("Email envoyé avec succès !", response);
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi de l'Email :", error);
            });
    }
    return (
        <div className='formGroup'>
            <h2>Formulaire de Contact</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className="names">
                    <label className='sr-only' htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Votre Nom'
                        autoComplete='off'
                        required
                    />

                    <label className='sr-only' htmlFor="firstName">Prénom :</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='Votre Prénom'
                        autoComplete='off'
                        required
                    />
                </div>
                <label className='sr-only' htmlFor="email">E-mail :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Votre Email'
                    autoComplete='off'
                    required
                />
                <div className="textarea_group">
                    <label className='sr-only' htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Votre message'
                        maxLength="250"
                        required
                    ></textarea>
                    <div className='characterCounter'>
                        Caractères restants : {characterCount}
                    </div>
                </div>
                <div className='button_container'>
                    <button className='button_send' type="submit">Envoyer<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>
            </form>
        </div>
    );
};

export default Form;