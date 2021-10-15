import React,{useState,useEffect} from 'react';
import classes from './Rental.module.css';
import Categories from './Categories/Categories';
import Products from './Product/Product';
import Element from '../UI/Element/Element';
import axios from 'axios';

let ELEMENT_DATA = null;
let EDIT_MODE = false;
const Rental = () => {
    const [displayMode,setDisplayMode] = useState(0);
    const [showLoading,setLoading] = useState(false);
    const [showCategories,setCategories] = useState([]);
    const [showProducts,setProducts] = useState([]);
    const [showSortedProducts,setSortedProducts] = useState([]);
    let displayCategories = [];
    let displayProducts = [];
    useEffect(() =>{
        const arrCategories = [];
        const arrProducts = [];
        axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/categories.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                arrCategories.push({...value,key});
            }
            setCategories(arrCategories);
            setLoading(true);
        }); 
        axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/products.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                arrProducts.push({...value,key});
            }
            setProducts(arrProducts);
            setSortedProducts(arrProducts);
            setLoading(true);
        }); 
    },[]);   
    const handleCategories = (target) => {
        if(target.value === 'all'){
            setSortedProducts(showProducts);
        }else{
            const filtredArray = showProducts.filter(el => el.itemCategory === target.value);
            setSortedProducts(filtredArray);
        };
    };
    const updateData = (element,conf) => {
        ELEMENT_DATA = element;
        EDIT_MODE = true;
        setDisplayMode(conf);
    };
    const showDataMode = (conf) => {
        EDIT_MODE = false;
        setDisplayMode(conf);
    };
    switch(displayMode) {
        case 1:
            displayCategories = <div className={classes.Modal}><Categories elLeft={showCategories.length} editMode={EDIT_MODE} data={ELEMENT_DATA} clicked={()=> setTimeout(()=>setDisplayMode(0),0)}/></div>;
            break;
        case 2:
            displayCategories = <div className={classes.Modal}><Products elLeft={showProducts.length} editMode={EDIT_MODE} data={ELEMENT_DATA} clicked={()=> setDisplayMode(0)}/></div>;
            break;
        default:
            displayCategories = showCategories.map(el => <Element clicked={() => updateData(el,1)} name={el.name} key={el.key} background={el.url}/>)
            displayProducts = showSortedProducts.map(el => <Element clicked={() => updateData(el,2)} name={el.name} key={el.key} background={el.url}/>)      
    };
    return (
        <div className={classes.Rental}>
                <label className={classes.Button} >
                <input onClick={() => showDataMode(1)} type="checkbox"></input>
                <p>DODAJ KATEGORIĘ</p>
                </label>
                <label className={classes.Button} style={{marginTop:'29px',zIndex:'1'}}>
                <input onClick={() => showDataMode(2)} type="checkbox"></input>
                <p>DODAJ PRODUKT</p>
                </label>
                {!displayMode && <h2>Kategorie:</h2>}
                <div className={classes.Result}>
                    {showLoading ? displayCategories : <div className={classes.ldsdualring}></div>}
                </div>
                {!displayMode && <h2>Produkty:  <select className={classes.Input} onChange={event => handleCategories(event.target)} name="input_products--category" id="input_products--category">
                                                <option value="all">--Wszystkie Produkty--</option>
                    {showCategories.map(el => <option value={el.name} key={el.key}>{el.name}</option>)}
                </select></h2>}
                <div className={classes.Result}>
                    {showLoading ? displayProducts : <div className={classes.ldsdualring}></div>}
                </div>
        </div>
    );
};

export default Rental;