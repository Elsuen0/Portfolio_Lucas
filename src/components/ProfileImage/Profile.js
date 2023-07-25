import React from 'react';
import './Profile.scss'

const Profile = () => {
    return (
        <div className="image-container">
            <img src="./Elsueno.png" alt="El Sueno" />
            <div className='overlay-text'>
                <h1>Pas de panique !</h1>
                <p>
                    Ce n'est pas vraiment moi ! Je vous présente : <span className='style_R'>El Sueño</span> ; l'antagoniste de la franchise <span className='style_R'>Ghost Recon</span>. Son pseudo me suit depuis plusieurs années maintenant et son image aussi, me permettant ainsi de garder <span className='style_R'>l'anonymat</span>. (Même si vous pouvez trouver mon CV juste à gauche)
                </p>
            </div>
        </div>
    );
};

export default Profile;