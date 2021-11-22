import React, {useEffect, useState} from 'react';
import classes from './imgSlider2.module.css';
import ImgElement from '../../../UI/ImgElement/ImgElement';
import axios from '../../../AxiosConfig';
let nextValue = 0;

const ImgSlider2 = () => {
    const [images,setImages] = useState([]);
    useEffect(() => {
        const dataHolder = [];
        axios.get('/sliders/slider2.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                dataHolder.push([key, value]);
            } 
        })
        .then(() => {
            const photoHolder = [];
            dataHolder.flat().forEach(el => {
                if(el.url !== undefined){
                    photoHolder.push(el.url);
                }
            })
            setImages(photoHolder);
        })
    },[]);
    const imageElements = images.map(e => <ImgElement type={false} key={images.indexOf(e)+Math.random()} src={e} alt="Slider2" nextImg={{
        arr: images,
        currIndex: images.indexOf(e)
    }}/>);
    const moveSlider = (side) => {
        const idSlider = document.getElementById('SLIDER_IMG2');
        const sliderNodes = [...document.getElementsByClassName(`${idSlider.className}`)];
        const rightArrow = document.getElementsByClassName(`${classes.SliderRight}`);
        const leftArrow = document.getElementsByClassName(`${classes.SliderLeft}`);
        let defaultImgNumber = 3; 
        if(window.innerWidth <= 768){
            defaultImgNumber = 1;
        }
        nextValue = side ? nextValue -378: nextValue +378; // width of ProductElement + 20px for moving tiles
        switch(nextValue) {
            case 0:
                rightArrow[0].firstChild.style.visibility = 'hidden';
                break;
            case (sliderNodes.length * -378) - (defaultImgNumber * -378):
                leftArrow[0].firstChild.style.visibility = 'hidden';
                break;
            default:
                rightArrow[0].firstChild.style.visibility = 'visible';
                leftArrow[0].firstChild.style.visibility = 'visible';
                break;
            }
        sliderNodes.forEach(elm => elm.style.left = `${nextValue}px`);
    };
    return (
        <div className={classes.Slider}>   
            <div onClick={() => moveSlider(true)} className={classes.SliderLeft}><i className="icon-left-open-big"></i> </div>
                <div className={classes.Foto} >
                   {imageElements}
                </div>
            <div onClick={() => moveSlider(false)} className={classes.SliderRight}><i className="icon-right-open-big"></i></div>
        </div>
    );
};

export default ImgSlider2;