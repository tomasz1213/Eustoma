import React from 'react';
import classes from './AdminLogin.module.css';
import {loginToDataBase} from '../../../store/actions';
import { useSelector,useDispatch } from 'react-redux';

const AdminLogin = () => {
    let log = null;
    let pass = null;
    const dispatch = useDispatch();
    const onClickLogin = (login, password) => dispatch(loginToDataBase({login:login, password:password}));
    let checkState = useSelector(state => state.auth.status.error);
    return (
        <div className={classes.InputWrapper}>
            <div className={classes.Text}>
                <h3>Admin Panel</h3>
                <p>Proszę podać dane logowania</p>
            </div>
            <div className={classes.AdminLogin}>
                <input className={classes.Input} placeholder="E-MAIL" onChange={e=> log = e.target.value} type="text"/>
                <input className={classes.Input} placeholder="HASŁO" onChange={e=> pass = e.target.value} type="password"/>
                <button onClick={()=>onClickLogin(log, pass)}>LOGIN</button>
            </div>
            <div className={classes.ErrorDisplay}>
                {checkState ? checkState.message : null}
            </div>
        </div>
    );
};

export default AdminLogin;