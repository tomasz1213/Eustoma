import React, {useEffect, useState} from 'react';
import classes from './imgSlider2.module.css';
import ImgElement from '../../../UI/ImgElement/ImgElement';
import axios from 'axios';
let nextValue = 0;

const ImgSlider2 = () => {
    const [images,setImages] = useState([]);
    useEffect(() => {
        const arr = [];
        axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/slider2.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                arr.push([key, value]);
            } 
        })
        .then(() => {
            const elArr = [];
            arr.flat().forEach(el => {
                if(el.url !== undefined){
                    elArr.push(el.url);
                }
            })
            setImages(elArr);
        })
    },[]);
    const showUp = images.map(e => <ImgElement type={false} key={images.indexOf(e)+Math.random()} src={e} alt="Slider2" nextImg={{
        arr: images,
        currIndex: images.indexOf(e)
    }}/>);
    const moveSlider = (side) => {
        const idSlider = document.getElementById('SLIDER_IMG2');
        const sliderClass = [...document.getElementsByClassName(`${idSlider.className}`)];
        const el = document.getElementsByClassName(`${classes.SliderRight}`);
        const el2 = document.getElementsByClassName(`${classes.SliderLeft}`);
        const elementParent = window.getComputedStyle(sliderClass[0].parentNode.parentNode);
        const elementParentWidth = elementParent.width.slice(1, (elementParent.width.length -2));
        let defaultImgNumber = 3; 
        if(elementParentWidth > 300){
            defaultImgNumber = 4;
        }
        nextValue = side ? nextValue -378: nextValue +378; // width of ProductElement + 20px for moving tiles
        switch(nextValue) {
            case 0:
                el[0].firstChild.style.visibility = 'hidden';
                break;
            case (sliderClass.length * -378) - (defaultImgNumber * -378):
                el2[0].firstChild.style.visibility = 'hidden';
                break;
            default:
                el[0].firstChild.style.visibility = 'visible';
                el2[0].firstChild.style.visibility = 'visible';
                break;
            }
        sliderClass.forEach(elm => elm.style.left = `${nextValue}px`);
    };

    return (
        <div className={classes.Slider}>   
            <span onClick={() => moveSlider(true)} className={classes.SliderLeft}><i className="icon-left-open-big"></i> </span>
                <div className={classes.Foto} >
                   {showUp}
                </div>
            <span onClick={() => moveSlider(false)} className={classes.SliderRight}><i className="icon-right-open-big"></i></span>
    
        </div>
    );
};

export default ImgSlider2;