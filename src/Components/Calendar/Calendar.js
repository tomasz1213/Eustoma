import React, { useState, useEffect } from "react";
import CalendarJS from "react-calendar";
import { fetchData } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import classes from "./Calendar.module.scss";
import "./Calendar.css";

const Calendar = () => {
	const [todayDate, changeTodayDate] = useState(new Date());
	const downloadCalendar = (date) => {
		fetchData(
			`/calendar/${date.getFullYear()}/${date.getMonth()}.json`
		).then((res) => {
			if(!res)return;
			const buttonElements = new Set([...document.querySelectorAll("button")]);
			[...buttonElements].map(el => {
				for(let i =0;i<res.length;i++){
					if(el.classList.value.includes('neighboringMonth'))continue;
					if(el.innerText != res[i].key)continue;
					el.innerText = "Rezerwacja";
					el.style.backgroundColor = "#F0AB8B";
					el.style.color = 'white';
				}
			})
		});
	}
	useEffect(() => {
		downloadCalendar(todayDate);
	}, []);
	return (
		<>
			<Menu />
			<div className={classes.Calendar}>
				<CalendarJS
					onActiveStartDateChange={({
						action,
						activeStartDate,
						value,
						view,
					}) => {
						downloadCalendar(activeStartDate);
					}}
					value={todayDate}
					locale="pl-PL"
				/>
			</div>
			<Footer />
		</>
	);
};

export default Calendar;
