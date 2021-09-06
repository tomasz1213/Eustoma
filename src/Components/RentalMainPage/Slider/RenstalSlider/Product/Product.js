import React,{useState} from 'react';
import classes from './Product.module.css';

const ImgElement = (props) => {
    let [imgSrc,setImgSrc] = useState(props.src);
    const changeBackground = (inout) => {
        if(props.data[1].url.length > 1){
            inout ? setImgSrc(props.data[1].url[1]) : setImgSrc(props.src);
        };
    };
    return(
        <div>
            <span id='SLIDER_PRODUCT' onMouseOver={()=> changeBackground(true)} onMouseOut={() => changeBackground(false)} className={classes.ImgElement2} onClick={props.onClick}>
                <img className={classes.ImgE2} alt={props.alt} src={imgSrc}></img>
                <div className={classes.HoverEffect}>Podgląd</div>
                <p className={classes.Name}>{props.data[1].name}</p>
                <div className={classes.Border}></div>
                <p className={classes.Prize}>zł {props.data[1].prize}</p>
            </span>
        </div>
    );
};

export default ImgElement;