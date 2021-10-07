import React from 'react';
import classes from './GraphElement.module.css';

const graphElement = (props) => (
    <div className={classes.graphElement} style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.6)) , url(${props.img})`}}>
        <span className={classes.Header}>{props.header}</span>
        <p className={classes.Text}>{props.children}</p>
        <div className={classes.BorderTop}></div>
        <div className={classes.BorderLeft}></div>
    </div>
);

export default graphElement;