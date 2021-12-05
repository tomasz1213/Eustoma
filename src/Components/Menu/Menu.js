import classes from "./Menu.module.css";
import React from "react";
import LinkItems from "./LinkItems/LinkItems";
import logo from "../../img/logo.webp";

const menu = () => (
	<header className={classes.Menu}>
		<div className={classes.Logo}>
			<a href="/">
				<img src={logo} alt="logo"></img>
				<p>PRACOWNIA EUSTOMA</p>
				<p>DEKORACJE I FLORYSTYKA ŚLUBNA</p>
			</a>
		</div>
		<LinkItems />
	</header>
);
export default menu;
