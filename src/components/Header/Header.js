import React from 'react';
import './Header.scss';
import Buttons from '../SocialMedia_buttons/Buttons.js';

const Header = () => {
    const handleClick = (event, target) => {
        event.preventDefault();

        const element = document.querySelector(target);

        if (element) {
            const headerOffset = 0; // Vous pouvez ajuster cette valeur selon vos besoins
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="headerIn">
            <section className="links">
                <a
                    className='headerLink headerLink_about smooth-scroll'
                    href="#sousSection1"
                    onClick={(event) => handleClick(event, "#sousSection1")}
                >
                    A Propos
                </a>
                <a
                    className='headerLink headerLink_works'
                    href="#sousSection2"
                    onClick={(event) => handleClick(event, "#sousSection2")}
                >
                    Mes Projets
                </a>
            </section>

            <section className='sectionSocialMediaButtons'>
                <Buttons />
            </section>
        </div>
    );
};

export default Header;
