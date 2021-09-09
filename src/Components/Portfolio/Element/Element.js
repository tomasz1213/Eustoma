import React from 'react';
import classes from './Element.module.css';

const element = (props) => {
     const {church,flowers,photograph,wedding} = props.data;
    return (
        <div className={classes.Element}>
            <span className={classes.Title}>{props.data.name}</span>
            <span>Miejsce wesela: {wedding}</span>
            <span>Miejsce ślubu: {church}</span>
            <span>Kwiaty i Dekoracje :{flowers}</span>
            <span>Fotograf :{photograph}</span>
        </div>
    );
};
    

export default element;