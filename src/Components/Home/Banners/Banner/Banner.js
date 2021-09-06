import React from 'react';
import classes from './Banner.module.css';
import imgBanner from '../../../../img/firstBackground.webp';


const banner = () => (
    <div className={classes.Banner}>
        <img src={imgBanner} alt="logo"></img>
        <p>Pozwól nam ...</p>
        <p>SPRAWIĆ BY, TWÓJ DZIEŃ BYŁ JESZCZE PIĘKNIEJSZY</p>
    </div>
);

export default banner;