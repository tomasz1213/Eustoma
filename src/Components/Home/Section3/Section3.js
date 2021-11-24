import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import anime from 'animejs/lib/anime.es.js';
import classes from './Section3.module.css';
import img from '../../../img/Section3.webp';

const section3 = (props) => {
    const myRef = useRef();
    const {
      inViewport,
    } = useInViewport(
      myRef,
      {},
      { disconnectOnLeave: false },
      props
    );
    if(inViewport){
        anime({
            targets: [`.${classes.Text}`],
            opacity: [0,1],
            duration: 20000});
        anime({
            targets: [`.${classes.Header}`],
            translateX: [100,0],
            duration: 4000});
    };
    return(
        <div ref={myRef} className={classes.Section3}>
            <span className={classes.Photo}>
                <img src={img} alt='Nices'/>
            </span>
            <span className={classes.Text}>
                <h1 className={classes.Header}>Cześć!</h1>
                    <p> Super, że do nas trafiliście!</p>
                    <p>  Jak już pewnie zauważyliście, dekoracje ślubne to nasza pasja i to, czym zajmujemy się na co dzień. Staramy się by każda dekoracja była wyjątkowa
                    i w pełni odzwierciedlała wasze pomysły.  </p>
                    <p>  nasza pracownia to miejsce gdzie tworzymy wyjątkowe dekoracje sal, kościołów, samochodów i wszystkiego o czym zamarzycie! </p>
                    <p> Nietypowy bukiet ślubny? aranżacja ścianki za młodą parą? stylizacja pleneru?  dla nas nie ma rzeczy niemożliwych ! </p>
                    <p> a dla tych, którzy kochają tworzyć tak jak my, ale brakuje im jakiś elementów dekoracyjnych, udostępniamy wypożyczalnie! </p>
                    <p> W naszym asortymencie znajdziecie mnóstwo produktów, doskonałych do aranżacji w różnych konfiguracjach i stylach. Cały czas poszerzamy naszą ofertę, więc jeśli nie możesz się czegoś doszukać - napisz do nas!</p>
            </span>
        </div>
    );
};

export default section3;