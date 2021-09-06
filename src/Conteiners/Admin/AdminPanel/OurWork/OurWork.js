import React,{useState,useEffect} from 'react';
import classes from './OurWork.module.css';
import Element from '../UI/Element/Element';
import {useSelector} from 'react-redux';
import {downloadData} from '../../../../store/actions';
import {useDispatch } from 'react-redux';
import Job from './Job/Job';

let elementData = null;
let dataMode = false;
const OurWork = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.slider.data.dataArr);
    const [showState,setState] = useState(0);
    const [showLoading,setLoading] = useState(false);
    const [showCategories,setCategories] = useState([]);
    let displayWork = null;
    useEffect(() =>{
        dispatch(downloadData('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/ourwork.json'));
    },[dispatch]); 
    useEffect(()=>{
        setCategories(data);
        setLoading(true);
    },[data]);  
    const updateData = (element,conf) => { // Editing existing realisation
        elementData = element;
        dataMode = true;
        setState(conf);
    };
    const showDataMode = (conf) => { // Add new realization
        dataMode = false;
        setState(conf);
    };
    switch(showState) {
        case 1:
            displayWork = <Job elLeft={data.length} catType={dataMode} data={elementData} clicked={()=> setTimeout(()=>setState(0),0)}/>;
            break;
        default:
            displayWork = showCategories.map(el => <Element clicked={() => updateData([el[0],el[1]],1)} name={el[1].name} key={el[0]} background={el[1].url}/>)
    };
    return (
        <div className={classes.Rental}>
                <label className={classes.Button} >
                <input onClick={() => showDataMode(1)} type="checkbox"></input>
                <p>DODAJ REALIZACJĘ</p>
                </label>
                {!showState && <h2>Realizacje:</h2>}
                <div className={classes.Result}>
                    {showLoading ? displayWork : <div className={classes.ldsdualring}></div>}
                </div>
        </div>
    );
};
export default OurWork;