import React,{useEffect,useState} from 'react';
import axios from 'axios';
import DisplayFormData from './DisplayData/DisplayFormData';
import DisplayCartData from './DisplayData/DisplayCartData';
import Element from '../UI/Element/Element';
import classes from './Dashboard.module.css';

const Dashboard = () => {
  const [formData,setFormData] = useState([]);
  const [cartData,setCartData] = useState([]);
  const [resultData,setResultData] = useState();
  const [displayMode,setDisplayMode] = useState(0);
  useEffect(() =>{
    const formData = [];
    const cartData = [];
    axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/forms.json')
    .then(res => {
        for (const [key, value] of Object.entries(res.data)) {
            formData.push({...value,key});
        }
        setFormData(formData);
    }); 
    axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/shoppingCart.json')
    .then(res => {
        for (const [key, value] of Object.entries(res.data)) {
            cartData.push({...value,key});
        }
        setCartData(cartData);
    }); 
  },[]);
  const displayResult = (data,type) => {
    setResultData(data);
    setDisplayMode(type);
  };
    return (
      <div className={classes.Dashboard}>
        {formData && !displayMode && formData.map(element => <Element clicked={()=>displayResult(element,1)} background={element.url} name={"Formularz "+element.name}/>)}
        {cartData && !displayMode && cartData.map(element => <Element clicked={()=>displayResult(element,2)} background={element.url} name={"Koszyk "+element.name}/>)}
        {displayMode === 1 && <DisplayFormData clicked={()=> setDisplayMode(0)} data={resultData}/>}
        {displayMode === 2 && <DisplayCartData clicked={()=> setDisplayMode(0)} data={resultData}/>}
      </div>
    )
}
export default Dashboard;