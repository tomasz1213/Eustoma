import React,{useState,useEffect} from 'react';
import classes from './Rental.module.css';
import Categories from './Categories/Categories';
import Products from './Product/Product';
import Element from '../UI/Element/Element';
import axios from '../../../../AxiosConfig';

const Rental = () => {
    const [displayMode,setDisplayMode] = useState(0);
    const [showLoading,setLoading] = useState(false);
    const [showCategories,setCategories] = useState([]);
    const [showProducts,setProducts] = useState([]);
    const [showSortedProducts,setSortedProducts] = useState([]);
    const [editMode,setEditMode] = useState(false);
    const [elementData,setELementData] = useState();
    let displayCategories = [];
    let displayProducts = [];
    useEffect(() =>{
        const arrCategories = [];
        const arrProducts = [];
        axios.get('/categories.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                arrCategories.push({...value,key});
            }
            setCategories(arrCategories);
            setLoading(true);
        }); 
        axios.get('/products.json')
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
    const updateData = (element,config) => {
        setELementData(element);
        setEditMode(true);
        setDisplayMode(config);
    };
    const showDataMode = (config) => {
        setEditMode(false);
        setDisplayMode(config);
    };
    switch(displayMode) {
        case 1:
            displayCategories = <div className={classes.Modal}><Categories elLeft={showCategories.length} editMode={editMode} data={elementData} clicked={()=> setTimeout(()=>setDisplayMode(0),0)}/></div>;
            break;
        case 2:
            displayCategories = <div className={classes.Modal}><Products elLeft={showProducts.length} editMode={editMode} data={elementData} clicked={()=> setDisplayMode(0)}/></div>;
            break;
        default:
            displayCategories = showCategories.map(el => <Element clicked={() => updateData(el,1)} name={el.name} key={el.key}/>)
            displayProducts = showSortedProducts.map(el => <Element clicked={() => updateData(el,2)} name={el.name} key={el.key}/>)      
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