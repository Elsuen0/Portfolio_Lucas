import React from 'react';
import './Experiences.scss'

const Experiences = ({ title, subtitle, year, cpt1, cpt2, className }) => {
    return (
        <div className={className}>
            <div className="titleGroup">
                <h1 className='expH1'>{title}</h1>
                <h2 className='expSubtitle'>{subtitle}</h2>
            </div>
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