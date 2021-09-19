import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import classes from './RentalMain.module.css';
import img from '../../img/RENTAL.webp';
import RentalSlider from './Slider/RenstalSlider/RentalSlider';

const RentalMain = (props) => {

    return(
        <>
            <Menu/>
            <div className={classes.Top} style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.6)) , url(${img})`,backgroundSize:'cover'}}>
                <span className={`${classes.TopText} ${classes.TopText1}`}>WYPOŻYCZALNIA</span>
                <span className={`${classes.TopText} ${classes.TopText2}`}>DEKORACJI</span>
            </div>
            <a className={classes.Button} href="/">WSZYSTKIE PRODUKTY</a>
            <div>
                <div className={classes.Header}>Nowości</div>
                <RentalSlider/>
            </div>
            <Footer/>
        </>
    );
};

export default RentalMain;