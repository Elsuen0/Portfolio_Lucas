import React from 'react';
import Header from '../../components/Header/Header';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Me from '../../components/Me/Me';
import './Home.scss'
import About from '../../components/About/About';
import AnimationBar from '../../components/AnimationBar/AnimationBar';
import Counter from '../../components/CompteurPage/Counter';
import Experiences from '../../components/Experiences/Experiences';
import data from '../../Experiences.json'
import Profile from '../../components/ProfileImage/Profile';
import Skills from '../../components/Skills/Skills';


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
                <article className='about_Picture'>
                    <About />
                    <Profile />
                </article>
                {/*<article className='groupExp'>
                    {data.map((item, index) => (<article key={index} className={`cardExp_position-${index + 1}`} ><Experiences key={index} title={item.title} year={item.year} cpt1={item.cpt1} cpt2={item.cpt2} subtitle={item.subtitle} className={`cardExp-${index + 1}`} /></article>))}
    </article>*/}
                <Skills skillImage={'./html_1051277.png'} percentage={90} />
                <Skills skillImage={'./css-3_732190.png'} percentage={90} />
                <Skills skillImage={'./js_5968292.png'} percentage={60} />
                <Counter numPage={'02'} />
            </section>
            <section id='sousSection2'>

            </section>
        </div>
    );
};

export default Home;