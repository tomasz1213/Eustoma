import React,{useEffect} from 'react';
import classes from './AdminPanel.module.css';
import {Switch, Route,NavLink} from 'react-router-dom';
import Slider from './Slider/Slider';
import OurWork from './OurWork/OurWork';
import Rental from './Rental/Rental';
import {downloadData} from '../../../store/actions';
import {useDispatch } from 'react-redux';

const AdminPanel = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(downloadData('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/categories.json','https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/products.json'));
    },[dispatch]); 
    return (
        <div className={classes.AdminPanel}>
            <div className={classes.Menu}>
                <div className={classes.ButtonSquare}>
                    <NavLink activeClassName={classes.Active} to="/admin/slider"><button className={classes.Button}>SLIDER</button></NavLink>
                    <NavLink activeClassName={classes.Active} to="/admin/ourwork"><button className={classes.Button}>NASZE REALIZACJE</button></NavLink>
                    <NavLink activeClassName={classes.Active} to="/admin/rental"><button className={classes.Button}>WYPOŻYCZALNIA</button></NavLink>
                </div>
            </div>
            <div className={classes.Context}>
                <Switch>
                    <Route path="/admin/slider" component={Slider}/>
                    <Route path="/admin/ourwork" component={OurWork}/>
                    <Route path="/admin/rental" component={Rental}/>
                </Switch>
            </div>
        </div>
    );
};

export default AdminPanel;