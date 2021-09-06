import React from 'react';
import classes from './Tile.module.css';

const tile = (props) => {
    const divHover= (e, val) => {
        const bottomArrow = e.target.getElementsByTagName('span')[0];

        if(e.target.tagName === 'DIV'){
            const pElement = e.target.getElementsByTagName('p')[0];
            pElement.style.top = val;
            if(val === '-30px'){
                bottomArrow.style.visibility = 'hidden';
            }else if(val === 0){
                bottomArrow.style.visibility = 'inherit';
            }        
        }else if(e.target.tagName === 'H1'){
            e.target.nextSibling.style.top = val;
            if(val === '-30px'){
                e.target.nextSibling.nextSibling.style.visibility = 'hidden';
            }else if(val === 0){
                e.target.nextSibling.nextSibling.style.visibility = 'inherit';
            } 
        }else if(e.target.tagName === 'P'){
            e.target.style.top = val;
            if(val === '-30px'){
                e.target.nextSibling.style.visibility = 'hidden';
            }else if(val === 0){
                e.target.nextSibling.style.visibility = 'inherit';
            } 
        }
    };
    return (
        <div onMouseOver={e=> divHover(e, 0)} onMouseOut={e=>divHover(e, '-30px')} className={classes.Tile} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.327),rgba(0, 0, 0, 0.3)) ,url(${props.background})`}}>
            <h1>{props.title}</h1>
            <p className={classes.Desc}>{props.desc}</p>
            <span className={classes.Desc1}></span>
        </div>
    );
};

export default tile;