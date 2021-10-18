import React from 'react';
import classes from './OurWork.module.css';
import ImgSlider from '../../Sliders/ImgSlider/ImgSlider';

const ourWork = () => (
    <div className={classes.OurWork}>
        <p className={classes.Title}>NASZE REALIZACJE</p>
        <ImgSlider/>
    </div>
);

export default ourWork;