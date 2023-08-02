import React, { useState } from 'react';
import Modal from 'react-modal';
import './BurgerMenu.scss'; // Importer le fichier de styles CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../SocialMedia_buttons/Buttons';

Modal.setAppElement('#root')

const BurgerMenu = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleClick = (event, target) => {
        event.preventDefault();

        const element = document.querySelector(target);

        if (element) {
            const headerOffset = 100; // Vous pouvez ajuster cette valeur selon vos besoins
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth',
            });

            closeModal(); // Ferme le menu burger après le clic sur le lien
        }
    };

    return (
        <div>
            <button onClick={openModal} className='buttonModal'><FontAwesomeIcon className='menuIcon' icon={faBars} /></button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                autoFocus={false}
                shouldReturnFocusAfterClose={false}
                closeTimeoutMS={0} // Durée de l'animation en millisecondes
            >
                <div className='modalContent'>
                    <button onClick={closeModal} className='closeIcon'><FontAwesomeIcon icon={faXmark} /></button>
                    <ul>
                        <li><a className='modalLink' href="#main" onClick={(event) => handleClick(event, "#main")}>Accueil</a></li>
                        <li><a className='modalLink' href="#sousSection1" onClick={(event) => handleClick(event, "#sousSection1")}>A propos</a></li>
                        <li><a className='modalLink' href="#sousSection2" onClick={(event) => handleClick(event, "#sousSection2")}>Projets</a></li>
                        <li><a className='modalLink' href="#sousSection3" onClick={(event) => handleClick(event, "#sousSection3")}>Services</a></li>
                        <li><a className='modalLink' href="#sousSection4" onClick={(event) => handleClick(event, "#sousSection4")}>Contact</a></li>
                    </ul>
                    <Buttons />
                </div>
            </Modal>
        </div>
    );
};

export default BurgerMenu;
