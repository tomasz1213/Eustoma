import React,{useState} from 'react';
import classes from './Admin.module.css';
import AdminLogin from './AdminLogin/AdminLogin';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../store/actions';
import AdminPanel from './AdminPanel/AdminPanel';

const Admin = () => {
    const [showState, setState] = useState(false);
    let checkState = useSelector(state => state.auth.status.login);
    const dispatch = useDispatch();
    const onClickLog = () => {
        dispatch(authLogout());
        setState(true);
    };
    let displayLogin = checkState || localStorage.getItem('login') ? null : <AdminLogin/>;
    return (
        <div className={classes.Admin}>
            {displayLogin}
            {!showState ||checkState || localStorage.getItem('login') ? <button onClick={onClickLog}>LOGOUT</button>: null}
            {checkState || localStorage.getItem('login') ? <AdminPanel/> : null}
        </div>
    );
};

export default Admin;