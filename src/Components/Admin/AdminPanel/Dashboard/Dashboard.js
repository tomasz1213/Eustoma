import React,{useEffect,useState} from 'react';
import axios from 'axios';
import DispalyData from './DisplayData/DispalyData';
import Element from '../UI/Element/Element';
import classes from './Dashboard.module.css';

const Dashboard = () => {
  const [data,setData] = useState([]);
  const [displayMode,setDisplayMode] = useState(0);

  useEffect(() =>{
    const arr = [];
    axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/forms.json')
    .then(res => {
        for (const [key, value] of Object.entries(res.data)) {
            arr.push({...value,key});
        }
        setData(arr);
    }); 
  },[]); 
    return (
      <div className={classes.Dashboard}>
        {data && !displayMode && data.map(element => <Element clicked={()=>setDisplayMode(1)} background={element.url} name={"Formularz "+element.name}/>)}
        {displayMode === 1 && data.map(element => <DispalyData clicked={()=> setDisplayMode(0)} data={element}/>)}
      </div>
    )
}
export default Dashboard;