import React, {useState, useRef} from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
    let photoIndex = useRef(props.nextImg.currIndex);
    const [displayImg, setDisplayImg] = useState(props.src);
    let isSingleImage = false;
    if(props.nextImg.arr.length === 1) isSingleImage = true;

    const nextImage = () => {
        if(photoIndex.current === props.nextImg.arr.length-1) photoIndex.current = -1;
        photoIndex.current = photoIndex.current + 1;
        const nextPhoto = props.nextImg.arr[photoIndex.current];
        setDisplayImg(nextPhoto);
    };
    const prevImage = () => {
        if(photoIndex.current === 0) photoIndex.current = props.nextImg.arr.length;
        photoIndex.current = photoIndex.current - 1;
        const nextPhoto = props.nextImg.arr[photoIndex.current];
        setDisplayImg(nextPhoto);
    };
    const closeModal = () => {
        props.clicked();
        photoIndex.current = props.nextImg.currIndex;
        setDisplayImg(props.src);
    };

    return (
        props.show && <div className={classes.Modal}>
        {!isSingleImage && <span onClick={prevImage} className={classes.Left}><i className="icon-left-open-big"></i></span>}
        <img className={classes.Img} src={displayImg} alt={props.alt}></img>
        {!isSingleImage && <span onClick={nextImage} className={classes.Right}><i className="icon-right-open-big"></i></span>}
        <span onClick={closeModal} className={classes.Close}><i className="icon-cancel-1"></i></span>
    </div>
    );
};

export default Modal;