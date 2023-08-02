import React, { useEffect, useState } from 'react';
import './Skills.scss';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = ({ skillImage, percentage, title }) => {
    const [strokeWidth, setStrokeWidth] = useState(8);

    useEffect(() => {
        const updateStrokeWidth = () => {
            setStrokeWidth(window.innerWidth <= 820 ? 4 : 8);
        };

        updateStrokeWidth();

        // Écoutez les changements de la taille de l'écran et mettez à jour strokeWidth en conséquence
        window.addEventListener('resize', updateStrokeWidth);

        // Nettoyage de l'écouteur d'événement lors de la suppression du composant
        return () => {
            window.removeEventListener('resize', updateStrokeWidth);
        };
    }, []);

    return (
        <div>
            <div className="skill-circle">
                <CircularProgressbarWithChildren
                    value={percentage}
                    strokeWidth={strokeWidth}
                    styles={{
                        path: {
                            stroke: '#ff2a48',
                        },
                        trail: {
                            stroke: '#d6d6d6',
                        },
                    }}
                >
                    <img src={skillImage} alt="Skill" className='skill-image' />
                    <div className="overlay-skills">
                        <p>{percentage}%</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
            <h1 className='titleSkill'>{title}</h1>
        </div>
    );
};

export default Skills;
