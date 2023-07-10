import React from 'react';
import Header from '../../components/Header/Header';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Me from '../../components/About/Me';
import './Home.scss'
import Background from '../../components/Background/Background';

const Home = () => {
    return (
        <div className='homeStyle'>
            <Header />
            <main>
                <BurgerMenu />
                <Me />
                <Background />
            </main>
        </div>
    );
};

export default Home;