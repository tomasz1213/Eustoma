import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Element from './Element/Element';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import classes from './Portfolio.module.css';
import img from '../../img/portfoliobg.webp';

const Portfolio = () => {
    const [dataArr, setData] = useState([]);
    useEffect(() => {
        const data = [];
            axios.get('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/ourwork.json')
            .then(response => {
                for(let [key,value] of Object.entries(response.data)){
                    data.push({...value,key});
                }
                setData(data);
            });
    },[]);
    return (
        <>
            <Menu />
                <div className={classes.Top} style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.6)) , url(${img})`}}>
                    <span className={`${classes.TopText} ${classes.TopText1}`}>NASZE</span>
                    <span className={`${classes.TopText} ${classes.TopText2}`}>REALIZACJE</span>
                </div>
                <div className={classes.Results}>
                    {dataArr.map(el => <Element data={el} key={el.key}/>)}
                </div>
            <Footer/>
        </>
    );
};

export default Portfolio;