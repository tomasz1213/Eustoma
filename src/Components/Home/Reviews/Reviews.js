import React from 'react';
import classes from './Reviews.module.css';
import image from '../../../img/agaga.webp';

const Reviews = () => {

    return(
        <div className={classes.Reviews}>
            <svg className={classes.Heart} preserveAspectRatio="xMidYMid meet" data-bbox="20 29.647 159.999 144.707" xmlns="http://www.w3.org/2000/svg"  viewBox="20 29.647 159.999 144.707" data-type="color" role="presentation" aria-hidden="true"  filter='drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))'>
                        <g>
                            <path fill="#F9B7AB" d="M138.196 29.647c-17.427 0-32.309 10.857-38.277 26.173-5.969-15.315-20.85-26.173-38.277-26.173-22.687 0-45.544 18.737-41.078 50.951 5.135 37.04 79.355 93.756 79.355 93.756s72.587-54.849 79.355-93.756c5.191-29.84-18.391-50.951-41.078-50.951zm28.008 51.581c-3.034 16.571-23.573 38.628-23.573 38.628-4 4.172-6 1.634-2.732-3.268 3.268-4.901 13.161-20.397 15.087-30.925 2.349-12.837-.452-21.939-2.552-25.44-2.101-3.501-2.801-7.002-.233-8.869 2.567-1.867 6.068-.467 7.469 1.4 1.399 1.866 9.568 11.902 6.534 28.474z" data-color="1"></path>
                        </g>
            </svg>
            <div className={classes.Content}>                
                <div className={classes.Text}>Dziewczyny jeszcze raz dziękuję za przepiękną, wykonaną z sercem dekorację i bukiet, który był spełnieniem moich marzeń. Bardzo żałuję, że nie mogłyście słyszeć wszystkich słów zachwytu nad Waszą pracą. Wiem, że poruszyłyście niebo i ziemię, aby zdobyć kwiaty na mój bukiet i resztę dekoracji. Jesteście kochane! Dziękuję, że sprawiłyście, że miejsce Naszego Ślubu wyglądało niebanalnie i uroczo. Wszystkim, którzy szukają pełnych pasji florystek serdecznie polecam. Profesjonalne podejście do klienta, głowy pełne pomysłów oraz bardzo miły kontakt. Zdecydowanie najlepszy wybór!
                    <p style={{color: '#8a8a8a',fontSize:'13px'}}>— KATARZYNA CIEŚLIK</p>
                </div>
                <div className={classes.Image}><img src={image} alt="bride"></img>
                </div>
                <div className={classes.Text}>Polecamy z pełną odpowiedzialnością. Panie florystki są cudowne i wiedzą, co robią. Dekoracja, którą sobie wymarzyliśmy była wykonana przepięknie. Wszystko dopięte na ostatni guzik, świetny kontakt z Paniami, które sprostają nawet najbardziej wymagającym. Dziękujemy😘😍
                    <p style={{color: '#8a8a8a',fontSize:'13px'}}>— JUSTYNA TROJAN</p>
                </div>
            </div> 
        </div>
    );
};

export default Reviews;