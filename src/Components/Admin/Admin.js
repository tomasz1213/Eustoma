import React from "react";
import classes from "./Admin.module.css";
import AdminLogin from "./AdminLogin/AdminLogin";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../../store/actions";
import AdminPanel from "./AdminPanel/AdminPanel";

const Admin = () => {
	const checkLoginStatus = useSelector((state) => state.auth.status.login);
	const dispatch = useDispatch();
	const onClickLog = () => {
		dispatch(authLogout());
	};
	const displayLoginComponent = !checkLoginStatus && <AdminLogin />;
	return (
		<div className={classes.Admin}>
			{displayLoginComponent}
			{checkLoginStatus && <button onClick={onClickLog}>LOGOUT</button>}
			{checkLoginStatus && <AdminPanel />}
		</div>
	);
};

export default Admin;
