import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import anime from 'animejs/lib/anime.es.js';
import classes from './Banner.module.css';
import imgBanner from '../../../../img/firstBackground.webp';
import imgMobileBanner from '../../../../img/FirstBackgroundMobile.webp'

const Banner = (props) => {
    const myRef = useRef();
    const {
      inViewport,
    } = useInViewport(
      myRef,
      {},
      { disconnectOnLeave: false },
      props
    );
    if(inViewport){
        anime({
            targets: [`.${classes.P1}`],
            translateX: [-100,0],
            duration: 1000
          });
        anime({
            targets: [`.${classes.P2}`],
            translateX: [100,0],
            duration: 1000
          });
    }
    return(
        <div ref={myRef} className={classes.Banner}>
            <img className={classes.Image} src={window.innerWidth > 1200 ? imgBanner : imgMobileBanner}/>
            <p className={classes.P1}>Pozwól nam ...</p>
            <p className={classes.P2}>SPRAWIĆ BY, TWÓJ DZIEŃ BYŁ JESZCZE PIĘKNIEJSZY</p>
        </div>
)};

export default Banner;