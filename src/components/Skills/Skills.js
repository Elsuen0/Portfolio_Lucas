import React from 'react';
import './Skills.scss'

const Skills = ({ skillImage, percentage }) => {
    const radius = 45; // Rayon du cercle (ajustez selon vos besoins)
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percentage / 100);

    const circleStyle = {
        strokeDasharray: `${circumference} ${circumference}`,
        strokeDashoffset: offset,
    };
    return (
        <div className="skill-circle">
            <svg className="circle-background">
                <circle cx="50%" cy="50%" r={radius + '%'} />
            </svg>
            <svg className="circle-fill" style={circleStyle}>
                <circle cx="50%" cy="50%" r={radius + '%'} />
            </svg>
            <img src={skillImage} alt="Skill" className='skill-image' />
        </div>
    );
};

export default Skills;