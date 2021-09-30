import React from 'react';
import classes from './Tiles.module.css';

const tiles = (props) => {
    return (
        <div className={classes.Tile}>
            <p className={classes.Number}>{props.number}</p>
            <p className={classes.Text}>{props.text}</p>
        </div>
    );
};

export default tiles;