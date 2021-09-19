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

const RentalSlider = () => {
    const dispatch = useDispatch();
    const [productData,setProductData] = useState([]);
    console.log(productData);
    useEffect(() => {
        const productArr = [];
        axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/products.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                productArr.push([key, value]);
            } 
            setProductData(productArr);
        });
    },[]);
    const sendProductData = (data) => {
        dispatch(updateSuccess(data));
    };

    const showUp = productData.map((element, i) => <NavLink key={element[0]} to="/rental/product">
        <Product type={false} onClick={() => sendProductData(element)} key={element[0]} src={element[1].url} alt="Slider2" data={element}/></NavLink>);
    const moveSlider = (side) => { // true for left false for right
        const rightIcon = document.getElementsByClassName(`${classes.SliderRight}`);
        const leftIcon = document.getElementsByClassName(`${classes.SliderLeft}`);
        const idSlider = document.getElementById('SLIDER_PRODUCT');
        const sliderClass = [...document.getElementsByClassName(`${idSlider.className}`)];
        if(window.innerWidth < 765 && !isMobile){
            isMobile = true;
            sliderCounter = 1;
        }
        const countMoves = isMobile ? productData.length : productData.length+1;
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