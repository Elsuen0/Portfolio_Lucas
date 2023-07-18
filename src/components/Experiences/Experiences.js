import React from 'react';
import './Experiences.scss'

const Experiences = ({ title, year, cpt1, cpt2 }) => {
    return (
        <div className='cardExp'>
            <h1 className='expH1'>{title}</h1>
            <p className='expYear'>{year}</p>
            <span>
                <ul>
                    <li>{cpt1}</li>
                    <li>{cpt2}</li>
                </ul>
            </span>
        </div>
    );
};

export default Experiences;