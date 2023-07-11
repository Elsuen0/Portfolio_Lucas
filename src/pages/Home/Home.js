import React from 'react';
import Header from '../../components/Header/Header';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Me from '../../components/Me/Me';
import './Home.scss'
import Background from '../../components/Background/Background';
import About from '../../components/About/About';
import AnimationBar from '../../components/AnimationBar/AnimationBar';

const Home = () => {
    return (
        <div className='homeStyle'>
            <Header />
            <main>
                <BurgerMenu />
                <Me />
                <Background />
            </main>
            <section className='sousSection1'>
                <AnimationBar />
                <About />
            </section>
        </div>
    );
};

export default Home;