import React from 'react'
import AboutUs from './AboutUs'
import Banner from './Banner'
import WhyUs from './WhyUs';
import ShowCase from './ShowCase';
import Production from './Production';
import SocialMedia from './SocialMedia';
import Footer from '../components/singleComponents/Footer';

const Home = () => {
    return (
        <>
            <Banner />
            <AboutUs />
            <WhyUs />
            <ShowCase />
            <Production />
            <SocialMedia />
            <Footer />
        </>
    )
}

export default Home
