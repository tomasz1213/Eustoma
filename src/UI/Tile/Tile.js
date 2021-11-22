import React from 'react';
import { useHistory } from "react-router-dom";
import classes from './Tile.module.css';

const Tile = (props) => {
    const history = useHistory();
    const handleElementHover = (event, val) => {
        const bottomArrow = event.target.getElementsByTagName('span')[0];
        if(window.innerWidth < 1200)return;
        if(event.target.tagName === 'DIV'){
            const pElement = event.target.getElementsByTagName('p')[0];
            pElement.style.top = val;
            if(val === '-30px'){
                bottomArrow.style.visibility = 'hidden';
            }else if(val === 0){
                bottomArrow.style.visibility = 'inherit';
            }        
        }else if(event.target.tagName === 'H1'){
            event.target.nextSibling.style.top = val;
            if(val === '-30px'){
                event.target.nextSibling.nextSibling.style.visibility = 'hidden';
            }else if(val === 0){
                event.target.nextSibling.nextSibling.style.visibility = 'inherit';
            } 
        }else if(event.target.tagName === 'P'){
            event.target.style.top = val;
            if(val === '-30px'){
                event.target.nextSibling.style.visibility = 'hidden';
            }else if(val === 0){
                event.target.nextSibling.style.visibility = 'inherit';
            } 
        }
    };
    return (
        <div onClick={() => history.push(props.ahref)} onMouseOver={event=> handleElementHover(event, 0)} onMouseOut={event=>handleElementHover(event, '-30px')} className={classes.Tile}
         style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.327),rgba(0, 0, 0, 0.3)) ,url(${props.background})`,backgroundSize:'cover'}}>
            <h1>{props.title}</h1>
            <p className={classes.Desc}>{props.desc}</p>
            <span className={classes.Desc1}></span>
        </div>
    );
};

export default Tile;