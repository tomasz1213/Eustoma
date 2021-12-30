import React, { useState, useEffect } from "react";
import CalendarJS from "react-calendar";
import { fetchData } from "../../../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
	uploadDataFirebase,
	removeFromFirebase,
} from "../../../../store/actions";
import classes from "../../../Calendar/Calendar.module.scss";
import "../../../Calendar/Calendar.css";

const Calendar = () => {
	const [todayDate, changeTodayDate] = useState(new Date());
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth.auth.idToken);
	const isDataLoading = useSelector((state) => state.slider.loading);
	const handleData = (send, date) => {
		send
			? dispatch(
					uploadDataFirebase(
						`/calendar/${date.getFullYear()}/${date.getMonth()}/${
							date.getDate()
						}.json?auth=${auth}`,
						{
							reservation: true,
						}
					)
			  )
			: dispatch(
					removeFromFirebase(
						`/calendar/${date.getFullYear()}/${date.getMonth()}/${
							date.getDate()
						}.json?auth=${auth}`
					)
			  );
	};
	const downloadCalendar = (date) => {
		fetchData(
			`/calendar/${date.getFullYear()}/${date.getMonth()}.json`
		).then((res) => {
			if(!res)return;
			const buttonElements = new Set([...document.querySelectorAll("button")]);
			console.log([...buttonElements]);
			[...buttonElements].map(el => {
				for(let i =0;i<res.length;i++){
					if(el.innerText != res[i].key)continue;
					if(el.classList.value.includes('neighboringMonth'))continue;
					el.innerText = "Rezerwacja";
					el.style.backgroundColor = "#F0AB8B";
					el.style.color = 'white';
				}
			})
		});
	}
	useEffect(() => {
		downloadCalendar(todayDate);
	}, [isDataLoading]);
	return (
		<div className={classes.Calendar}>
			{!isDataLoading && (
				<CalendarJS
					onActiveStartDateChange={({
						action,
						activeStartDate,
						value,
						view,
					}) => {
						downloadCalendar(activeStartDate);
					}}
					onClickDay={(value, event) => {
						if (event.target.innerText === "Rezerwacja") {
							return handleData(false, value);
						}
						// console.log(value.getUTCDate() + 1)
						handleData(true, value);
						// console.log(value.);
					}}
					value={todayDate}
					locale="pl-PL"
				/>
			)}
		</div>
	);
};

export default Calendar;
