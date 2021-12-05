import React from "react";
import ImgElement from "./ImgElement/ImgElement";
import classes from "./Element.module.css";

const element = (props) => {
	const { church, flowers, photograph, wedding, url } = props.data;
	return (
		<>
			<div className={classes.Element}>
				<div style={{ marginBottom: "30px" }} className={classes.Title}>
					{props.data.name}
				</div>
				{wedding && (
					<div className={classes.Text}>Miejsce wesela : {wedding}</div>
				)}
				{church && <div className={classes.Text}>Miejsce ślubu : {church}</div>}
				{flowers && (
					<div className={classes.Text}>Kwiaty i Dekoracje : {flowers}</div>
				)}
				{photograph && (
					<div className={classes.Text}>Fotograf : {photograph}</div>
				)}
			</div>
			<div className={classes.Images}>
				{url &&
					url.map((el, i) => (
						<ImgElement src={el} key={i} nextImg={{ arr: url, currIndex: i }} />
					))}
			</div>
		</>
	);
};

export default element;
