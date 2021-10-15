import React from 'react';
import classes from './Section3.module.css';
import img from '../../../img/Section3.webp';

const section3 = () => (
    <div className={classes.Section3}>
        <span className={classes.Photo}>
            <img src={img} alt='Nices'/>
        </span>
        <span className={classes.Text}>
            <h1>Cześć!</h1>
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

export default section3;