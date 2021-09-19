import React from 'react';
import ImgElement from './ImgElement/ImgElement';
import classes from './Element.module.css';

const element = (props) => {
    const {church,flowers,photograph,wedding,url} = props.data;
    return (
        <>
            <div className={classes.Element}>
                <span className={classes.Title}>{props.data.name}</span>
                <span style={{paddingTop:'30px'}} className={classes.Text}>Miejsce wesela : {wedding}</span>
                <span className={classes.Text}>Miejsce ślubu : {church}</span>
                <span className={classes.Text}>Kwiaty i Dekoracje : {flowers}</span>
                <span style={{paddingBottom:'30px'}} className={classes.Text}>Fotograf : {photograph}</span>
            </div>
            {url.map((el,i) => <ImgElement src={el} key={i} nextImg={{arr: url,currIndex: i}}/>)}
        </>
    );
};
    

export default element;