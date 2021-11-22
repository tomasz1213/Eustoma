import React,{useState} from 'react';
import classes from './ImgElement.module.css';
import Modal from '../Modal/Modal';

const ImgElement = (props) => {
    const [useShow, setShow] = useState(false);
    return (
        <div>
            <span id={props.type ? 'SLIDER_IMG' : 'SLIDER_IMG2'} className={props.type ? classes.ImgElement : classes.ImgElement2}>
                <img className={props.type ? classes.ImgE : classes.ImgE2} alt={props.alt} src={props.src} onClick={()=> setShow(true)}></img>
            </span>
            <Modal clicked={()=> setShow(false)} show={useShow} src={props.src} alt={props.alt} nextImg={props.nextImg}/>
        </div>
    );
};

export default ImgElement;