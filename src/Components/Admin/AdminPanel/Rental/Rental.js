import React,{useState,useEffect} from 'react';
import classes from './Rental.module.css';
import Categories from './Categories/Categories';
import Products from './Product/Product';
import Element from '../UI/Element/Element';
import {useSelector,useDispatch} from 'react-redux';
import {downloadData} from '../../../../store/actions';

let elementData = null;
let dataMode = false;
const Rental = () => {
    const dispatch = useDispatch();
    const data1 = useSelector(state => state.slider.data.dataArr); // categories
    const data2 = useSelector(state => state.slider.data.secondDataArr); // products
    const [showState,setState] = useState(0);
    const [showLoading,setLoading] = useState(false);
    const [showCategories,setCategories] = useState([]);
    const [showProducts,setProducts] = useState([]);
    const [showSortedProducts,setSortedProducts] = useState([]);
    let displayCategories = [];
    let displayProducts = [];
    useEffect(() =>{
        dispatch(downloadData('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/categories.json','https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/products.json'));
    },[dispatch]); 
    useEffect(()=>{
        setCategories(data1);
        setSortedProducts(data2);
        setProducts(data2);
        setLoading(true);
    },[data1,data2]);  
    const handleCategories = (target) => {
        if(target.value === 'all'){
            setSortedProducts(showProducts);
        }else{
            const filtredArray = showProducts.filter(el => el[1].itemCategory === target.value);
            setSortedProducts(filtredArray);
        };
    };
    const updateData = (element,conf) => {
        elementData = element;
        dataMode = true;
        setState(conf);
    };
    const showDataMode = (conf) => {
        dataMode = false;
        setState(conf);
    };
    switch(showState) {
        case 1:
            displayCategories = <div className={classes.Modal}><Categories elLeft={data1.length} catType={dataMode} data={elementData} clicked={()=> setTimeout(()=>setState(0),0)}/></div>;
            break;
        case 2:
            displayCategories = <div className={classes.Modal}><Products elLeft={data2.length} catType={dataMode} data={elementData} clicked={()=> setState(0)}/></div>;
            break;
        default:
            displayCategories = showCategories.map(el => <Element clicked={() => updateData([el[0],el[1]],1)} name={el[1].name} key={el[0]} background={el[1].url}/>)
            displayProducts = showSortedProducts.map(el => <Element clicked={() => updateData([el[0],el[1]],2)} name={el[1].name} key={el[0]} background={el[1].url}/>)      
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
                {!showState && <h2>Kategorie:</h2>}
                <div className={classes.Result}>
                    {showLoading ? displayCategories : <div className={classes.ldsdualring}></div>}
                </div>
                {!showState && <h2>Produkty:  <select className={classes.Input} onChange={event => handleCategories(event.target)} name="input_products--category" id="input_products--category">
                                                <option value="all">--Wszystkie Produkty--</option>
                    {showCategories.map(el => <option value={el[1].name} key={el[0]}>{el[1].name}</option>)}
                </select></h2>}
                <div className={classes.Result}>
                    {showLoading ? displayProducts : <div className={classes.ldsdualring}></div>}
                </div>
        </div>
    );
};

export default Rental;