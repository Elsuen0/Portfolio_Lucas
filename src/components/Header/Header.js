import React from 'react';
import './Header.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
    return (
        <header>
            <div className="headerIn">
                <a href="/home">LUCAS</a>
                <BurgerMenu />
            </div>
        </header>
    );
};

export default Header;