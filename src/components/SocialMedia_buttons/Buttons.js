import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Buttons.scss'

const Buttons = () => {
    return (
        <div className='socialMediaButtons'>
            <a href="https://github.com/Elsuen0?tab=repositories" target='_blank' rel='noopener noreferrer' aria-label='Se rendre sur github' ><button title='Github'><FontAwesomeIcon icon={faGithub} /></button></a>
            <a href="https://www.linkedin.com/in/lucas-capart/" target='_blank' rel='noopener noreferrer' aria-label='Se rendre sur linkedin'><button title='Linkedin'><FontAwesomeIcon icon={faLinkedin} /></button></a>
            <a href="#footer" aria-label='Contacter Lucas'><button title='Contact'><FontAwesomeIcon icon={faEnvelope} /></button></a>
        </div>
    );
};

export default Buttons;