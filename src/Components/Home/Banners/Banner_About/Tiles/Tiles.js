import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import anime from 'animejs/lib/anime.es.js';
import classes from './Tiles.module.css';

const tiles = (props) => {
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
            targets: [`.${classes.Number}`,`.${classes.Text}`],
            opacity: [0,1],
            duration: 10000
            });
    }
    return (
        <div ref={myRef} className={classes.Tile}>
            <p className={classes.Number}>{props.number}</p>
            <p className={classes.Text}>{props.text}</p>
        </div>
    );
};

export default tiles;