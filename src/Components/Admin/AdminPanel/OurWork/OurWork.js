import React, { useState, useEffect } from "react";
import classes from "./OurWork.module.css";
import Element from "../UI/Element/Element";
import Job from "./Job/Job";
import { fetchData } from "../../../../utils";

let ELEMENT_DATA = null;
let EDIT_DATA_MODE = false;
const OurWork = () => {
	const [showLoadingSpinner, setLoadingSpinner] = useState(false);
	const [displayMode, setDisplayMode] = useState(0);
	const [showData, setData] = useState([]);
	let displayElement = null;
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			fetchData("/ourwork.json").then((res) => {
				setData(res);
				setLoadingSpinner(true);
			});
		}
		return () => {
			mounted = false;
		};
	}, []);
	const updateData = (element, conf) => {
		// Editing existing realisation
		ELEMENT_DATA = element;
		EDIT_DATA_MODE = true;
		setDisplayMode(conf);
	};
	const showDataMode = (conf) => {
		// Add new realization
		EDIT_DATA_MODE = false;
		setDisplayMode(conf);
	};
	switch (displayMode) {
		case 1:
			displayElement = (
				<Job
					elLeft={showData.length}
					editMode={EDIT_DATA_MODE}
					data={ELEMENT_DATA}
					clicked={() => setTimeout(() => setDisplayMode(0), 0)}
				/>
			);
			break;
		default:
			displayElement = showData.map((el) => (
				<Element
					testid="test-OurWork"
					clicked={() => updateData(el, 1)}
					name={el.name}
					key={el.key}
					background={el.url && el.url}
				/>
			));
	}
	return (
		<div className={classes.Rental}>
			<label className={classes.Button}>
				<input onClick={() => showDataMode(1)} type="checkbox"></input>
				<p>DODAJ REALIZACJĘ</p>
			</label>
			{!displayMode && <h2>Realizacje:</h2>}
			<div className={classes.Result}>
				{showLoadingSpinner ? (
					displayElement
				) : (
					<div data-testid="Loading-spinner" className={classes.ldsdualring}></div>
				)}
			</div>
		</div>
	);
};
export default OurWork;
