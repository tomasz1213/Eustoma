import React, { useState } from "react";
import classes from "./Product.module.css";

const ImgElement = (props) => {
	let [imgSrc, setImgSrc] = useState(props.src);
	const changeBackground = (inout) => {
		if (props.data.url.length > 1) {
			inout ? setImgSrc(props.data.url[1]) : setImgSrc(props.src);
		}
	};
	return (
		<div
			id="SLIDER_PRODUCT"
			onMouseOver={() => changeBackground(true)}
			onMouseOut={() => changeBackground(false)}
			className={props.fat ? classes.ImgElement : classes.ImgElement2}
			onClick={props.onClick}
		>
			<img
				className={props.fat ? classes.ImgE2 : classes.ImgE}
				alt={props.alt}
				src={imgSrc}
			></img>
			{props.fresh && <div className={classes.Fresh}>NOWOŚĆ</div>}
			<div className={classes.HoverEffect}>Podgląd</div>
			<p className={classes.Name}>{props.data.name}</p>
			{!props.fat && <div className={classes.Border}></div>}
			<p className={classes.Prize}>zł {props.data.prize}</p>
		</div>
	);
};

export default ImgElement;
