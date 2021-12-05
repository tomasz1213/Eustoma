import React from "react";
import classes from "./Element.module.css";

const element = (props) => (
	<div
		className={classes.Element}
		style={{
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.6)) , url(${props.img})`,
		}}
	>
		<h2>{props.title}</h2>
		<div className={classes.Text}>
			<p>{props.children}</p>
		</div>
		<a href={props.ahref}>{props.atext}</a>
	</div>
);

export default element;
