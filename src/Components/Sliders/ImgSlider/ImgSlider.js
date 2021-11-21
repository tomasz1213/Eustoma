import React,{useEffect,useState} from 'react';
import classes from './ImgSlider.module.css';
import ImgElement from '../../../UI/ImgElement/ImgElement';
import axios from '../../../AxiosConfig';

let intervalSlider = '';
const ImgSlider = () => {
    const [images,setImages] = useState([]);
    useEffect(() => {
        const dataHolder = [];
        axios.get('/sliders/slider1.json')
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
            if(Number(imgStyle.left.slice(1, (imgStyle.left.length -2))).toFixed(0) > Number(Math.ceil(elementCountedAmount / 10) * 10)){
                clearInterval(intervalSlider);
                sliderClass.forEach(elm => elm.style.left = `${nextValue +200}px`);                
                document.getElementsByTagName('I')[2].style.cursor = 'not-allowed';
            };
            
      }, 50);
    };
    const showImageElements = images.map(e => <ImgElement type={true} key={images.indexOf(e)} src={e} alt="Slider" nextImg={{
        arr: images,
        currIndex: images.indexOf(e)
    }}/>);
    return (
        <div className={classes.Slider}>   
            <span onMouseOver={() => moveSlider(true)} onMouseOut={() => clearInterval(intervalSlider)} className={classes.SliderLeft}><i className="icon-left-open-big"></i> </span>
                <div className={classes.Foto} >
                   {showImageElements}
                </div>
            <span onMouseOver={() => moveSlider(false)} onMouseOut={() => clearInterval(intervalSlider)} className={classes.SliderRight}><i className="icon-right-open-big"></i></span>
        </div>
    );
    
};


export default ImgSlider;
