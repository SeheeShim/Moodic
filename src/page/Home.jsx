//moodic/src/page/Homejsx

import React from 'react';
import Hero from '../components/Hero';
import Preloader from '../components/Preloader';
import ScrollSection from '../components/ScrollSection';
import Player from '../components/Player';
import Genre from '../page/Genre';
import CountryChart from '../page/CountryChart'


const Home = () => {
    return (
        <div>
            <Hero/>
            <ScrollSection />
            <Preloader/>
            <Player />
            <Genre />
            <CountryChart />
        </div>
    );
};

export default Home;