import React from 'react';
import classes from './Tiles.module.css';

const tiles = (props) => {
    return (
        <span className={classes.Tile}>
            <p className={classes.Number}>{props.number}</p>
            <p className={classes.Text}>{props.text}</p>
        </span>
    );
};

export default tiles;