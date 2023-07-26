import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Buttons.scss'

const Buttons = () => {
    return (
        <div className='socialMediaButtons'>
            <a href="https://github.com/Elsuen0?tab=repositories" target='_blank' rel='noopener noreferrer'><button><FontAwesomeIcon icon={faGithub} /></button></a>
            <a href="https://www.linkedin.com/in/lucas-capart/" target='_blank' rel='noopener noreferrer'><button><FontAwesomeIcon icon={faLinkedin} /></button></a>
            <a href="#footer"><button><FontAwesomeIcon icon={faEnvelope} /></button></a>
        </div>
    );
};

export default Buttons;