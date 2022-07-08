import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import News from '../News/News';
import Reviews from '../Reviwes/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <News></News>
            <Reviews></Reviews>
            <Events></Events>
        </div>
    );
};

export default Home;