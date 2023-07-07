import React from 'react';
import './Me.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Me = () => {
    return (
        <div className='meSection'>
            <h1>Bonjour, je suis Lucas.</h1>
            <h3>Développeur web, prêt à transformer vos idées en sites web remarquables</h3>
            <div className='meGroupButton'>
                <button className='buttonMe'>Me Contacter</button>
                <a className='githubLink' href="https://github.com/Elsuen0?tab=repositories"><button className='buttonMe buttonMe_github'><FontAwesomeIcon className='buttonMe_github_icon' icon={faGithub} />GitHub</button></a>
            </div>
        </div>
    );
};

export default Me;