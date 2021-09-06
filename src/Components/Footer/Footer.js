import React from 'react';
import classes from './Footer.module.css';

const footer = () => (

    <footer className={classes.Footer}>
        <div className={classes.LeftColumn}>KONSULTACJE ŚLUBNE odbywają się
             PO WCZEŚNIEJSZYM UMÓWIENIU.
             W celu ustalenia terminu i miejsca spotkania, zachęcamy do kontaktu telefonicznego, mailowego czy poprzez facebooka.</div>
        <div className={classes.CenterColumn}>
        <p style={{fontSize:'10px',fontWeight:'bold',lineHeight:'20px'}}>Pracownia Eustoma{'\n'}
        dekoracje i florystyka</p>
        <p className={classes.GreyP}>PTASZKOWA 20 {'\n'}
        <a className={classes.GreyP} href="mailto:pracowniaeustoma@gmail.com">PRACOWNIAEUSTOMA@GMAIL.COM</a>{'\n'}
        <a className={classes.GreyP} href="tel:570927031">TEL.570 927 031</a>
        </p>
        <p className={classes.GreyP}>
​        DEKORACJE ŚLUBNE WYKONUJEMY NA TERENIE {'\n'}NOWEGO Sącza, OKOLIC ORAZ CAŁEJ MAŁOPOLSKI {'\n'}
        </p>
        <p style={{fontSize:'14px',color:'#191B16'}}>COPYRIGHT &copy; PRACOWNIA EUSTOMA</p> 
        </div>
        <div className={classes.RightColumn}>
        <div className="fb-page" data-href="http://www.facebook.com/1123264691068340" data-tabs="" data-width="450" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="http://www.facebook.com/1123264691068340" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/1123264691068340">Pracownia Eustoma - dekoracje i florystyka</a></blockquote></div>
        </div>
    </footer>
);

export default footer;