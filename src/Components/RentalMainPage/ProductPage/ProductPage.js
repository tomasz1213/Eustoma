import React from 'react';
import classes from './ProductPage.module.css';
import Menu from '../../Menu/Menu';
import Footer from '../../Footer/Footer';

const ProductPage = (props) => {

    console.log(props.data)
    return (
        <>
            <Menu/>
            <div>hey</div>
            <Footer/>
        </>
    );
};

export default ProductPage;