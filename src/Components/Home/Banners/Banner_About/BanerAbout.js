import React from 'react';
import classes from './BanerAbout.module.css';
import backgroundImg from '../../../../img/onetwothree.webp';
import Tile from './Tiles/Tiles';

const bannerAbout = () => (
    <div className={classes.About}>
        <p>
            Zajmujemy się urzeczywistnianiem Państwa marzeń, odzwierciedlając je w naszych realizacjach. Inspiracją do pracy, jest dla nas stworzenie niezapomnianego efektu. Dekoracje to nasza pasja, dzięki czemu wkładamy w nie całe serce.
            Stworzymy niepowtarzalny klimat i zadbamy o wyjątkową oprawę Twojej imprezy, sprawiając, że pozostaje ona niezapomniana.
        </p>
            <div style={{backgroundImage:`url(${backgroundImg})`}}  className={classes.Tiles} >
                <Tile number='01' text='NAPISZ DO NAS!'/>
                <Tile number='02' text='ZAREZERWUJ TERMIN !'/>
                <Tile number='03' text='DOGRAJ SZCZEGÓŁY!'/>
                <Tile number='04' text='SPEŁNIJ MARZENIA!'/>
            </div>

    </div>
);

export default bannerAbout;