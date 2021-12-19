import React, { useState } from "react";
import classes from "./Calendar.module.scss";
import CalendarJS from "react-calendar";

const Calendar = () => {
	const [value, onChange] = useState(new Date());
	return (
		<div className={classes.Calendar}>
			<CalendarJS
				onChange={(value, event) => {
					onChange(value);
					console.log(value);
				}}
				value={value}
			/>
		</div>
	);
};

export default Calendar;
