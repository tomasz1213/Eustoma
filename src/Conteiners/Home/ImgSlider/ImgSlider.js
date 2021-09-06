import React,{useEffect,useState} from 'react';
import classes from './ImgSlider.module.css';
import ImgElement from '../../../UI/ImgElement/ImgElement';
import axios from 'axios';

let intervalSlider = '';
const ImgSlider = () => {

    const [images,setImages] = useState([]);
    useEffect(() => {
        const arr = [];
        axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/slider1.json')
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

    let nextValue = 0;

    const moveSlider = (side) => { // Ture for left False for right
        const idSlider = document.getElementById('SLIDER_IMG');
        const sliderClass = [...document.getElementsByClassName(`${idSlider.className}`)];
        const imgStyle = window.getComputedStyle(sliderClass[0]);
        const elementParent = window.getComputedStyle(sliderClass[0].parentNode);
        const elementParentWidth = elementParent.width.slice(1, (elementParent.width.length -2));
        const elementCountedAmount = (260 * (sliderClass.length -3)) - Number(elementParentWidth);

        intervalSlider =  setInterval(()=> {
            nextValue = side ? nextValue -10: nextValue +10;
            for(let i =0; i < sliderClass.length; i++){
                if(side){
                    sliderClass[i].style.left = `${nextValue}px`;
                    document.getElementsByTagName('I')[2].style.cursor = 'pointer';

                }else{
                    sliderClass[i].style.left = `${nextValue}px`;
                    document.getElementsByTagName('I')[3].style.cursor = 'pointer';
                }
            }  
            if(imgStyle.left > '0px'){
                clearInterval(intervalSlider);
                sliderClass.forEach(elm => elm.style.left = `${nextValue -200}px`);                
                document.getElementsByTagName('I')[3].style.cursor = 'not-allowed';
            };
            if(+Number(imgStyle.left.slice(1, (imgStyle.left.length -2))).toFixed(0) > Number(Math.ceil(elementCountedAmount / 10) * 10)){
                clearInterval(intervalSlider);
                sliderClass.forEach(elm => elm.style.left = `${nextValue +200}px`);                
                document.getElementsByTagName('I')[2].style.cursor = 'not-allowed';
            };
            
      }, 50);
    };
    const showUp = images.map(e => <ImgElement type={true} key={images.indexOf(e)} src={e} alt="Slider" nextImg={{
        arr: images,
        currIndex: images.indexOf(e)
    }}/>);
    return (
        <div className={classes.Slider}>   
            <span onMouseOver={event => moveSlider(true)} onMouseOut={e => clearInterval(intervalSlider)} className={classes.SliderLeft}><i className="icon-left-open-big"></i> </span>
                <div className={classes.Foto} >
                   {showUp}
                </div>
            <span onMouseOver={event => moveSlider(false)} onMouseOut={e => clearInterval(intervalSlider)} className={classes.SliderRight}><i className="icon-right-open-big"></i></span>
    
        </div>
    );
    
};


export default ImgSlider;
