import React,{useState,useEffect} from 'react';
import classes from './OurWork.module.css';
import Element from '../UI/Element/Element';
import Job from './Job/Job';
import axios from '../../../../AxiosConfig';

let ELEMENT_DATA = null;
let EDIT_DATA_MODE = false;
const OurWork = () => {
    const [displayMode,setDisplayMode] = useState(0);
    const [showLoadingSpinner,setLoadingSpinner] = useState(false);
    const [showData,setData] = useState([]);
    let displayElement = null;
    useEffect(() =>{
        const arr = [];
        axios.get('/ourwork.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                arr.push({...value,key});
            }
            setData(arr);
            setLoadingSpinner(true);
        }); 
    },[]); 
    const updateData = (element,conf) => { // Editing existing realisation
        ELEMENT_DATA = element;
        EDIT_DATA_MODE = true;
        setDisplayMode(conf);
    };
    const showDataMode = (conf) => { // Add new realization
        EDIT_DATA_MODE = false;
        setDisplayMode(conf);
    };
    switch(displayMode) {
        case 1:
            displayElement = <Job elLeft={showData.length} editMode={EDIT_DATA_MODE} data={ELEMENT_DATA} clicked={()=> setTimeout(()=>setDisplayMode(0),0)}/>;
            break;
        default:
            displayElement = showData.map(el => <Element clicked={() => updateData(el,1)} name={el.name} key={el.key} background={el.url && el.url}/>)
    };
    return (
        <div className={classes.Rental}>
                <label className={classes.Button} >
                <input onClick={() => showDataMode(1)} type="checkbox"></input>
                <p>DODAJ REALIZACJĘ</p>
                </label>
                {!displayMode && <h2>Realizacje:</h2>}
                <div className={classes.Result}>
                    {showLoadingSpinner ? displayElement : <div className={classes.ldsdualring}></div>}
                </div>
        </div>
    );
};
export default OurWork;