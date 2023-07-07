import React from 'react';
import './Me.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Me = () => {
    return (
        <div className='meSection'>
            <h1>Bonjour, je suis Lucas.</h1>
            <h3>Développeur web, prêt à transformer vos idées en sites web remarquables</h3>
            <button className='buttonMe'>Me Contacter</button>
            <a href="https://github.com/Elsuen0?tab=repositories"><button className='buttonMe_github'><FontAwesomeIcon className='buttonMe_github_icon' icon={faGithub} />GitHub</button></a>
        </div>
    );
};

export default Me;