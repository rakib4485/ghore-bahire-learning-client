import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import LearnAbout from '../LearnAbout/LearnAbout';
import HomeCourses from '../HomeCourses/HomeCourses';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeAbout/>
            <LearnAbout/>
            <HomeCourses/>
        </div>
    );
};

export default Home;