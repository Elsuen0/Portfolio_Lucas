import React from 'react';
import Header from '../../components/Header/Header';
import Me from '../../components/About/Me';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <main>
                <Me />
            </main>

        </div>
    );
};

export default Home;