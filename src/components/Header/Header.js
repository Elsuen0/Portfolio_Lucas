import React from 'react';
import './Header.scss';
import Buttons from '../SocialMedia_buttons/Buttons.js';


const Header = () => {
    return (
        <div className="headerIn">
            <section className="links">
                <a className='headerLink headerLink_about' href="/home">A Propos</a>
                <a className='headerLink headerLink_works' href="#">Mes Projets</a>
            </section>

            <section className='sectionSocialMediaButtons'>
                <Buttons />
            </section>
        </div>
    );
};

export default Header;