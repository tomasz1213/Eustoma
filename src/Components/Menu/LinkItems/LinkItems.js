import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './LinkItems.module.css';
import '../../../fontello-61630bda/css/fontello.css';

const LinkItems = () => {
    const [showMenu,setShowMenu] = useState(false);
    const displayMobileMenu = () => {
         showMenu ? setShowMenu(false) : setShowMenu(true);
    };
    return(
        <nav className={classes.Nav}>
            <button onClick={displayMobileMenu} className={classes.BurgerButton}></button>
            <ul className={showMenu ? classes.MobileMenu : classes.List}>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/pracownia">Pracownia Ślubna</NavLink></li>
                <li><NavLink to="/oferta">Oferta</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/wypozyczalnia">Wypożyczalnia</NavLink></li>
                <li><a href="http://kwiaciarniasadecka.pl/">Poczta Kwiatowa</a></li>
                <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pracowniaeustoma/"><i className="icon-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pracowniaeustoma/"><i className="icon-instagram"></i></a>
            </ul>
        </nav>
)};

export default LinkItems;
