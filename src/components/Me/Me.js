import React from 'react';
import './Me.scss'

const Me = () => {
    return (
        <section className='mainSection_home'>
            <div className='description_home'>
                <p className='paragraphe_haut'>Développeur web</p>
                <p className='paragraphe_bas'>Prêt à transformer vos idées en sites web remarquables ?</p>
            </div>

            <div className='meSection'>
                <h1>Bonjou<span className='style_R'>r</span>,</h1>
                <h2>Je suis Lucas</h2>
                <div className='meGroupButton'>
                    <button className='buttonMe'>Me Contacter</button>
                </div>
            </div>

        </section>
    );
};

export default Me;