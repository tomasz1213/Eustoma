import React, {useEffect, useState} from 'react';
import classes from './RentalSlider.module.css';
import Product from './Product/Product';
import {NavLink} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import axios from 'axios';
import {updateSuccess} from '../../../../store/actions';

let nextValue = 0;
let sliderCounter = 6; // from this numer new product are added to slider;
let isMobile = false;

const RentalSlider = (props) => {
    const dispatch = useDispatch();
    const [productData,setProductData] = useState([]);
    useEffect(() => {
        const productArr = [];
        axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/products.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                productArr.push({key,...value});
            }
            if(props.sorted){
                productArr.sort((a, b) => {
                    if(!a.date && !b.date){
                        return 0;
                    }
                    return new Date(b.date) - new Date(a.date);
                }); 
                setProductData(productArr);
            }else{
                setProductData(productArr);
            }
        });
    },[props.sorted]);
    const sendProductData = (data) => {
        dispatch(updateSuccess(data));
    };
    const computeFresh = (date) => {
        if(date){
            const today = new Date();
            const compareDate = new Date(date);
            const diffTime = Math.abs(today - compareDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            if(diffDays <= 30){
                return true;
            }else{
                return false;
            }

        }else{
            return false;
        }
    };
    const showUp = productData.map((element, i) => <NavLink key={element.key} to="/rental/product">
        <Product type={false} fresh={computeFresh(element.date)} onClick={() => sendProductData(element)} key={element.key} src={element.url} alt="Slider2" data={element}/></NavLink>);
    const moveSlider = (side) => { // true for left false for right
        const rightIcon = document.getElementsByClassName(`${classes.SliderRight}`);
        const leftIcon = document.getElementsByClassName(`${classes.SliderLeft}`);
        const idSlider = document.getElementById('SLIDER_PRODUCT');
        const sliderClass = [...document.getElementsByClassName(`${idSlider.className}`)];
        if(window.innerWidth < 765 && !isMobile){
            isMobile = true;
            sliderCounter = 1;
        }
        const countMoves = isMobile ? productData.length : productData.length;
        if(sliderCounter >=  countMoves && side === true) { // left button
            return leftIcon[0].firstChild.style.cursor = 'not-allowed';
        }
        if(sliderCounter <= (isMobile ? 1:6) && side === false) {
            return rightIcon[0].firstChild.style.cursor = 'not-allowed';
        }
        rightIcon[0].firstChild.style.cursor = 'pointer';
        leftIcon[0].firstChild.style.cursor = 'pointer';
        side ? sliderCounter++ : sliderCounter--; 
        nextValue = side ? nextValue -192: nextValue +192; // width of Product + 20px for moving tiles
        sliderClass.forEach(elm => elm.style.left = `${nextValue}px`);
    };
    return (
        <>
            <span onClick={() => moveSlider(true)} className={classes.SliderLeft}><i className="icon-left-open-big"></i> </span>
            <div className={classes.Slider}>   
                <div className={classes.Foto} >
                {showUp}
                </div>
            </div>
            <span onClick={() => moveSlider(false)} className={classes.SliderRight}><i className="icon-right-open-big"></i></span>
        </>
    );
};

export default RentalSlider;