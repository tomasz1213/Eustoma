import React, {useEffect, useState} from 'react';
import classes from './RentalSlider.module.css';
import Product from './Product/Product';
import {NavLink} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import axios from '../../../../AxiosConfig';
import {updateSuccess} from '../../../../store/actions';

let NEXT_VALUE = 0;
let SLIDER_COUNTER = 6; // from this numer new product are added to slider;
let IS_MOBILE = false;

const RentalSlider = (props) => {
    const dispatch = useDispatch();
    const [productData,setProductData] = useState([]);
    useEffect(() => {
        const productArr = [];
        axios.get('/products.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                productArr.push({key,...value});
            }
            if(props.sorted){
                productArr.sort((a, b) => {
                    if(!a.date && !b.date)return 0;
                    return new Date(b.date) - new Date(a.date);
                }); 
                setProductData(productArr.slice(0, 10));
            }else{
                setProductData(productArr.slice(0, 10));
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
            }else return false;

        }else return false;
    };
    const showUp = productData.map((element, i) => <NavLink key={element.key} to="/rental/product">
        <Product type={false} fresh={computeFresh(element.date)} onClick={() => sendProductData(element)} key={element.key} src={element.url} alt="Slider2" data={element}/></NavLink>);
    const moveSlider = (side) => { // true for left false for right
        const rightIcon = document.getElementsByClassName(`${classes.SliderRight}`);
        const leftIcon = document.getElementsByClassName(`${classes.SliderLeft}`);
        const idSlider = document.getElementById('SLIDER_PRODUCT');
        const sliderClass = [...document.getElementsByClassName(`${idSlider.className}`)];
        if(window.innerWidth < 765 && !IS_MOBILE){
            IS_MOBILE = true;
            SLIDER_COUNTER = 1;
        }
        const countMoves = IS_MOBILE ? productData.length : productData.length;
        if(SLIDER_COUNTER >=  countMoves && side === true) { // left button
            return rightIcon[0].firstChild.style.cursor = 'not-allowed';
        }
        if(SLIDER_COUNTER <= (IS_MOBILE ? 1:6) && side === false) {
            return leftIcon[0].firstChild.style.cursor = 'not-allowed';
        }
        rightIcon[0].firstChild.style.cursor = 'pointer';
        leftIcon[0].firstChild.style.cursor = 'pointer';
        side ? SLIDER_COUNTER++ : SLIDER_COUNTER--; 
        NEXT_VALUE = side ? NEXT_VALUE -192: NEXT_VALUE +192; // width of Product + 20px for moving tiles
        sliderClass.forEach(elm => elm.style.left = `${NEXT_VALUE}px`);
    };
    return (
        <>
            <span onClick={() => moveSlider(false)} className={classes.SliderLeft}><i className="icon-left-open-big"></i> </span>
            <div className={classes.Slider}>   
                <div className={classes.Foto} >
                {showUp}
                </div>
            </div>
            <span onClick={() => moveSlider(true)} className={classes.SliderRight}><i className="icon-right-open-big"></i></span>
        </>
    );
};

export default RentalSlider;