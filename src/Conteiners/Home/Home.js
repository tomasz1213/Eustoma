import React from 'react';

import Menu from '../../Components/Menu/Menu';
import Banner from '../../Components/Home/Banners/Banner/Banner';
import BannerAbout from '../../Components/Home/Banners/Banner_About/BanerAbout';
import OurWork from '../../Components/Home/OurWork/OurWork';
import Section3 from '../../Components/Home/Section3/Section3';
import Section4 from '../../Components/Home/Section4/Section4';
import ImgSlider2 from './imgSlider2/imgSlider2';
import Rental from '../../Components/Home/Rental/Rental';
import Reviews from '../../Components/Home/Reviews/Reviews';
import Footer from '../../Components/Footer/Footer';

const Home = () => (
    <div>
        <Menu/>
        <Banner />
        <BannerAbout/>
        <OurWork />
        <Section3/>
        <Section4/> 
        <ImgSlider2/>
        <Rental/>
        <Reviews/>
        <Footer/>
    </div>
);

export default Home;