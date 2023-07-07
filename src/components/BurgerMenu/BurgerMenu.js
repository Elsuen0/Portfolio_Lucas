import React, { useState } from 'react';
import Modal from 'react-modal';
import './BurgerMenu.scss'; // Importer le fichier de styles CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal} className='buttonModal'><FontAwesomeIcon className='menuIcon' icon={faBars} /></button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                closeTimeoutMS={0} // Durée de l'animation en millisecondes
            >
                <div className='modalContent'>
                    <button onClick={closeModal} className='closeIcon'><FontAwesomeIcon icon={faXmark} /></button>
                    <ul>
                        <li>A propos</li>
                        <li>Services</li>
                        <li>Projets</li>
                    </ul>
                </div>
            </Modal>
        </div>
    );
};

export default BurgerMenu;