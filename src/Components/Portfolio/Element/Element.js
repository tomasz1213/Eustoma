import React from 'react';
import ImgElement from './ImgElement/ImgElement';
import classes from './Element.module.css';

const element = (props) => {
    const {church,flowers,photograph,wedding,url} = props.data;
    return (
        <>
            <div className={classes.Element}>
                <span style={{marginBottom:'30px'}} className={classes.Title}>{props.data.name}</span>
                {wedding&& <span className={classes.Text}>Miejsce wesela : {wedding}</span>}
                {church && <span className={classes.Text}>Miejsce ślubu : {church}</span>}
                {flowers && <span className={classes.Text}>Kwiaty i Dekoracje : {flowers}</span>}
                {photograph && <span className={classes.Text}>Fotograf : {photograph}</span>}
            </div>
            <div  style={{marginTop:'30px'}}>{url && url.map((el,i) => <ImgElement src={el} key={i} nextImg={{arr: url,currIndex: i}}/>)}</div>
        </>
    );
};
    

export default element;