import React from "react";
import Menu from "../Menu/Menu";
import Banner from "../Home/Banners/Banner/Banner";
import BannerAbout from "../Home/Banners/Banner_About/BanerAbout";
import OurWork from "../Home/OurWork/OurWork";
import Section3 from "../Home/Section3/Section3";
import Section4 from "../Home/Section4/Section4";
import ImgSlider2 from "../Sliders/imgSlider2/imgSlider2";
import Rental from "../Home/Rental/Rental";
import Reviews from "../Home/Reviews/Reviews";
import Footer from "../Footer/Footer";

const Home = () => (
	<div>
		<Menu />
		<Banner />
		<BannerAbout />
		<OurWork />
		<Section3 />
		<Section4 />
		<ImgSlider2 />
		<Rental />
		<Reviews />
		<Footer />
	</div>
);

export default Home;
