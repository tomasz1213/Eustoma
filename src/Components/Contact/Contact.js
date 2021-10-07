import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Contact.module.css';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import img from '../../img/contact.webp';

const contact = () => (
    <>
    <Menu/>    
    <div className={classes.Conteiner}>
        <div className={classes.Contact}>
            <span style={{fontSize:'40px',paddingBottom:'20px'}}>Kontakt</span>
            <p>Ze względu, że pracujemy w różne dni, o różnych porach, spotkania w sprawie dekoracji ślubnych, odbywają się tylko po wcześniejszym umówieniu. </p>
            <p>Nasza pracownia mieści się w Ptaszkowej, koło Nowego Sącza, ale realizujemy zlecenia na terenie całej małopolski.</p>
            <p>Jeśli chcesz nawiązać z nami współpracę lub interesuje Cię indywidualna wycena zachęcamy do wypełnienia formularza.</p>
            <NavLink exact to="/wycena"><button className={classes.Button}>WYCENA</button></NavLink>
            <p>Adres Pracowni Ślubnej: {'\n'}Ptaszkowa 20 {'\n'}33-333 Ptaszkowa</p>
            <a className={classes.GreyP} href="mailto:pracowniaeustoma@gmail.com">PRACOWNIAEUSTOMA@GMAIL.COM</a>{'\n'}
            <a className={classes.GreyP} href="tel:570927031">TEL.570 927 031</a>
        </div>
        <div className={classes.Image}>
            <img src={img} alt='decoration_photo'></img>
        </div>
    </div>
    <Footer/>
    </>
);

export default contact;