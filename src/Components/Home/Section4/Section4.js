import React from 'react';
import classes from './Section4.module.css';
import Tile from '../../../UI/Tile/Tile';
import img1 from '../../../img/galeriasg.webp';
import img2 from '../../../img/wycenasg.webp';

const section4 = (props) => (
    <div style={{backgroundColor:props.background}} className={classes.Section4}>
        <Tile ahref="/portfolio" title='GALERIA' desc='zobacz nasze realizacje' background={img1}/>
        <Tile ahref="/wycena" title='WYCENA' desc='wypełnij formularz' background={img2}/>
    </div>
);

export default section4;