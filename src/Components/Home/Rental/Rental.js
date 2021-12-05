import React from "react";
import classes from "./Rental.module.css";
import RentalSlider from "../../RentalMainPage/Slider/RenstalSlider/RentalSlider";

const rental = () => (
	<div className={classes.Rental}>
		<p className={classes.Name}>WYPOŻYCZALNIA</p>
		<div className={classes.Wrapper}>
			<RentalSlider />
		</div>
	</div>
);

export default rental;
