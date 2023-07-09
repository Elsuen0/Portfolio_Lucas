import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Buttons.scss'

const Buttons = () => {
    return (
        <div className='socialMediaButtons'>
            <button><FontAwesomeIcon icon={faGithub} /></button>
            <button><FontAwesomeIcon icon={faLinkedin} /></button>
            <button><FontAwesomeIcon icon={faEnvelope} /></button>
        </div>
    );
};

export default Buttons;