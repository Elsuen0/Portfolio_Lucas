import React from 'react';
import './Counter.scss'

const Counter = ({ numPage }) => {
    return (
        <p className='counterPage'>
            {numPage}
        </p>
    );
};

export default Counter;