import React, {useState, useEffect, useRef} from 'react';
import Element from "../UI/Element/Element";
import classes from './Slider.module.css';
import ImgList from './ImgList/ImgList';
import { useSelector,useDispatch } from 'react-redux';
import { downloadData } from '../../../../store/actions';


const Slider = () => {
    const [useShow, setShow] = useState(true);
    const [showImg, setImg] = useState(false);
    const [showName, setName] = useState('');

    const dispatch = useDispatch();
    const el = useSelector(state => state.slider.data.dataArr);
    let imgList = useRef([]);
    useEffect(() => {    
        dispatch(downloadData('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders.json'));   
    },[dispatch]);

    return (
        <div className={classes.Slider}>
            {useShow ? el.map(el => <Element clicked={()=> {imgList.current.push(el);setName(el[0]); setShow(false); setImg(true);}}name={el[0]} key={el[0]}/>) : 
            showImg ? <ImgList arr={imgList.current.flat()} name={showName}/> : null}
        </div>
    );
};

export default Slider;