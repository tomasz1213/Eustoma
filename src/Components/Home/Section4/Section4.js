import React from 'react';
import classes from './Section4.module.css';
import Tile from '../../../UI/Tile/Tile';
import img1 from '../../../img/galeriasg.webp';
import img2 from '../../../img/wycenasg.webp';

const section4 = () => (
    <div className={classes.Section4}>
        <Tile title='GALERIA' desc='zobacz nasze realizacje' background={img1}/>
        <Tile title='WYCENA' desc='wypełnij formularz' background={img2}/>
        <Tile title='KALENDARZ' desc='sprawdź termin'/>
    </div>
);

export default section4;