import React from 'react';
import Header from '../../components/Header/Header';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Me from '../../components/Me/Me';
import './Home.scss'
import About from '../../components/About/About';
import AnimationBar from '../../components/AnimationBar/AnimationBar';
import Counter from '../../components/CompteurPage/Counter';
import Experiences from '../../components/Experiences/Experiences';
import data from '../../test.json'


const Home = () => {
    return (
        <div className='homeStyle'>
            <Header />
            <main id='main'>
                <BurgerMenu />
                <Me />
                {/*<Background />*/}
                <Counter numPage={'01'} />
            </main>
            <section id='sousSection1'>
                <AnimationBar />
                <About />
                {data.map((item, index) => (<Experiences key={index} title={item.title} year={item.year} cpt1={item.cpt1} cpt2={item.cpt2} />))}

                <Counter numPage={'02'} />
            </section>
            <section id='sousSection2'>

            </section>
        </div>
    );
};

export default Home;