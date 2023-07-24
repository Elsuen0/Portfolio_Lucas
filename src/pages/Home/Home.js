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
import Scroll from '../../components/Scroll/Scroll';
import Carrousel from '../../components/Carrousel/Carrousel';
import projectsData from '../../Projets.json';


const Home = () => {
    return (
        <div className='homeStyle'>
            <Header />
            <main id='main'>
                <BurgerMenu />
                <Me />
                {/*<Background />*/}
                <div className='counter-container'>
                    <Counter numPage={'01'} />
                </div>
                <Scroll />
            </main>
            <section id='sousSection1'>
                <AnimationBar />
                <article className='about_Picture'>
                    <About />
                    <Profile />
                </article>

                <h1 className='skillsTitle'>
                    Mes Skills
                </h1>
                <article className='skillsGroup'>
                    <Skills skillImage={'./html_1051277.png'} percentage={90} />
                    <Skills skillImage={'./css-3_732190.png'} percentage={90} />
                    <Skills skillImage={'./js_5968292.png'} percentage={60} />
                    <Skills skillImage={'./photoshop_5968520.png'} percentage={99} />
                    <Skills skillImage={'./physics_1126012.png'} percentage={50} />
                    <Skills skillImage={'./nodejs_919825.png'} percentage={30} />
                </article>
                <h1 className='expTitle'>Mes expériences & formations</h1>
                <article className='groupExp'>

                    {data.map((item, index) => (<article key={index} className={`cardExp_position-${index + 1}`} ><Experiences key={index} title={item.title} year={item.year} cpt1={item.cpt1} cpt2={item.cpt2} subtitle={item.subtitle} className={`cardExp-${index + 1}`} /></article>))}
                </article>
                <div className='counter-container'>
                    <Counter numPage={'02'} />
                </div>
            </section>

            <section id='sousSection2'>
                <h1 className='projectsTitle'>
                    Mes Projets
                </h1>
                <Carrousel projects={projectsData} />
            </section>
        </div>
    );
};

export default Home;