import React from 'react';
import classes from './Banner.module.css';
import imgBanner from '../../../../img/firstBackground.webp';

const banner = () => (
    <div style={{backgroundImage:`url(${imgBanner})`}} className={classes.Banner}>
        <p>Pozwól nam ...</p>
        <p>SPRAWIĆ BY, TWÓJ DZIEŃ BYŁ JESZCZE PIĘKNIEJSZY</p>
    </div>
);

export default banner;