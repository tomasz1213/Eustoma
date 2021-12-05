import React, { useState } from "react";
import classes from "./AdminPanel.module.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Slider from "./Slider/Slider";
import OurWork from "./OurWork/OurWork";
import Rental from "./Rental/Rental";
import Dashboard from "./Dashboard/Dashboard";

const AdminPanel = () => {
	const [showMenu, setShowMenu] = useState(false);
	const displayMobileMenu = () => {
		showMenu ? setShowMenu(false) : setShowMenu(true);
	};
	return (
		<div className={classes.AdminPanel}>
			<div className={classes.Menu}>
				<div
					onClick={displayMobileMenu}
					className={showMenu ? classes.BurgerButtonX : classes.BurgerButton}
				></div>
				<div className={showMenu ? classes.MobileMenu : classes.ButtonSquare}>
					<NavLink activeClassName={classes.Active} to="/admin/dashboard">
						<button className={classes.Button}>Dashboard</button>
					</NavLink>
					<NavLink activeClassName={classes.Active} to="/admin/slider">
						<button className={classes.Button}>SLIDER</button>
					</NavLink>
					<NavLink activeClassName={classes.Active} to="/admin/ourwork">
						<button className={classes.Button}>NASZE REALIZACJE</button>
					</NavLink>
					<NavLink activeClassName={classes.Active} to="/admin/rental">
						<button className={classes.Button}>WYPOŻYCZALNIA</button>
					</NavLink>
				</div>
			</div>
			<div className={classes.Context}>
				<Switch>
					<Route exact path="/admin/slider" component={Slider} />
					<Route exact path="/admin/ourwork" component={OurWork} />
					<Route exact path="/admin/rental" component={Rental} />
					<Route path="/admin" component={Dashboard} />
				</Switch>
			</div>
		</div>
	);
};

export default AdminPanel;
