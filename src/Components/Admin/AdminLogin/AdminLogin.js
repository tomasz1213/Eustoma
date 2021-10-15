import React,{useState} from 'react';
import classes from './AdminLogin.module.css';
import {loginToDataBase} from '../../../store/actions';
import { useSelector,useDispatch } from 'react-redux';

const AdminLogin = () => {
    const [login,setLogin] = useState();
    const [password,setPassword] = useState();
    const dispatch = useDispatch();
    const onClickLogin = (login, password) => dispatch(loginToDataBase({login:login, password:password}));
    const catchAuthError = useSelector(state => state.auth.status.error);
    return (
        <div className={classes.InputWrapper}>
            <div className={classes.Text}>
                <h3>Admin Panel</h3>
                <p>Proszę podać dane logowania</p>
            </div>
            <div className={classes.AdminLogin}>
                <input className={classes.Input} placeholder="E-MAIL" onChange={e=> setLogin(e.target.value)} type="text"/>
                <input className={classes.Input} placeholder="HASŁO" onChange={e=> setPassword(e.target.value)} type="password"/>
                <button onClick={()=>onClickLogin(login, password)}>LOGIN</button>
            </div>
            <div className={classes.ErrorDisplay}>
                {catchAuthError && catchAuthError.message}
            </div>
        </div>
    );
};

export default AdminLogin;