import React from 'react';
import classes from './Banner.module.css';
import imgBanner from '../../../../img/firstBackground.webp';
import imgMobileBanner from '../../../../img/FirstBackgroundMobile.webp'

const banner = () => (
    <div className={classes.Banner}>
        <img className={classes.Image} src={window.innerWidth > 1200 ? imgBanner : imgMobileBanner}/>
        <p>Pozwól nam ...</p>
        <p>SPRAWIĆ BY, TWÓJ DZIEŃ BYŁ JESZCZE PIĘKNIEJSZY</p>
    </div>
);

export default banner;