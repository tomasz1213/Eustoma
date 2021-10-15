import React from 'react';
import classes from './Admin.module.css';
import AdminLogin from './AdminLogin/AdminLogin';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../store/actions';
import AdminPanel from './AdminPanel/AdminPanel';

const Admin = () => {
    let checkState = useSelector(state => state.auth.status.login);
    const dispatch = useDispatch();
    const onClickLog = () => {
        dispatch(authLogout());
    };
    let displayLogin = checkState ? null : <AdminLogin/>;
    return (
        <div className={classes.Admin}>
            {displayLogin}
            {checkState ? <button onClick={onClickLog}>LOGOUT</button>: null}
            {checkState ? <AdminPanel/> : null}
        </div>
    );
};

export default Admin;