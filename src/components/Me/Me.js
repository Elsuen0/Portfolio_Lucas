import React from 'react';
import './Me.scss'
import Background from '../Background/Background';
import Scroll from '../Scroll/Scroll';

const Me = () => {
    return (
        <section className='mainSection_home'>
            {/*<div className='description_home'>
                <p className='paragraphe_haut'>Développeur web</p>
                <p className='paragraphe_bas'>Prêt à transformer vos idées en sites web remarquables ?</p>
    </div>*/}

            <div className='meSection'>
                <h1>Bonjou<span className='style_R'>r</span>, je suis</h1>
                <h2>Lucas Capart</h2>
                <h3>Développeur<br /> FrontEnd</h3>
                {/*<div className='meGroupButton'>
                    <button className='buttonMe'>Me Contacter</button>
</div>*/}
            </div>
            <Scroll />
        </section>
    );
};

export default Me;