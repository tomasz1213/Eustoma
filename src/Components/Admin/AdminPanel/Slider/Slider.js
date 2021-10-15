import React, {useState, useEffect, useRef} from 'react';
import Element from "../UI/Element/Element";
import classes from './Slider.module.css';
import ImgList from './ImgList/ImgList';
import { useSelector,useDispatch } from 'react-redux';
import { downloadData } from '../../../../store/actions';

const Slider = () => {
    const [displayMode, setDisplayMode] = useState(true);
    const [showName, setName] = useState('');
    const dispatch = useDispatch();
    const el = useSelector(state => state.slider.data.dataArr);
    let imgList = useRef([]);
    useEffect(() => {    
        dispatch(downloadData('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders.json'));   
    },[dispatch]);

    return (
        <div className={classes.Slider}>
            {displayMode ? el.map(el => <Element clicked={()=> {imgList.current.push(el);setName(el.key); setDisplayMode(false)}}name={el.key} key={el.key}/>) : 
            !displayMode ? <ImgList arr={imgList.current.flat()} name={showName}/> : null}
        </div>
    );
};

export default Slider;