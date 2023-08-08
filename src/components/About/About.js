import React from 'react';
import './About.scss'


const About = () => {

    return (
        <div className='aboutDescription' id='About'>

            <h1> Je suis Lucas</h1 >
            <h2>Développeur Web</h2>
            <p>
                Salut ! Je suis Lucas, un développeur web passionné et créatif de 26 ans.

                Je suis constamment à la recherche de nouvelles opportunités pour créer des expériences en ligne <span className='style_R'>captivantes</span> et <span className='style_R'>innovantes</span>. Mon objectif est de transformer des idées en réalité en utilisant les dernières technologies web.<br />

                <br />Je suis <span className='style_R'>motivé</span> par les défis et les solutions innovantes. Je suis constamment à l'affût des dernières tendances du développement web et j'aime <span className='style_R'>collaborer</span> en équipe pour créer des produits de qualité.<br />

                <br />Si vous <span className='style_R'>recherchez</span> un développeur web passionné, polyvalent et désireux d'apprendre, je suis <span className='style_R'>prêt</span> à relever de nouveaux défis. Contactez-moi pour discuter de vos projets et découvrir comment nous pouvons créer quelque chose d'<span className='style_R'>extraordinaire</span> ensemble.
            </p>
            <div className="buttonSection">
                <a href="#footer"><button className='buttonContact'>Me Contacter</button></a>
                <a href="./CvDeveloppeurWeb_Aout2023.pdf" target="_blank" rel="noopener noreferrer"><button className='buttonCv' id='cv-button'>Voir Mon Cv</button></a>
            </div>

        </div >
    );
};



export default About;