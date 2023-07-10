import React from 'react';
import './Me.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Me = () => {
    return (
        <section className='mainSection_home'>
            <div className='description_home'>
                <p className='paragraphe_haut'>Développeur web</p>
                <p className='paragraphe_bas'>Prêt à transformer vos idées en sites web remarquables ?</p>
            </div>

            <div className='meSection'>
                <h1>Bonjour,</h1>
                <h2>Je suis Lucas</h2>
                <div className='meGroupButton'>
                    <button className='buttonMe'>Me Contacter</button>
                </div>
            </div>

        </section>
    );
};

export default Me;