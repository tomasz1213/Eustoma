import React, { useState } from "react";
import CalendarJS from "react-calendar";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import classes from "./Calendar.module.scss";
import "./Calendar.css";

const Calendar = () => {
	const [value, onChange] = useState(new Date());
	return (
		<>
			<Menu/>
			<div className={classes.Calendar}>
				<CalendarJS
					onChange={(value, event) => {
						onChange(value);
						console.log(value);
					}}
					value={value}
					locale="pl-PL"
				/>
			</div>
			<Footer/>
		</>
	);
};

export default Calendar;
