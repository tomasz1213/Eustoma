import React, { useEffect, useState } from "react";
import DisplayFormData from "./DisplayData/DisplayFormData";
import DisplayCartData from "./DisplayData/DisplayCartData";
import Element from "../UI/Element/Element";
import classes from "./Dashboard.module.css";
import { fetchData } from "../../../../utils";

const Dashboard = () => {
	const [formData, setFormData] = useState([]);
	const [cartData, setCartData] = useState([]);
	const [resultData, setResultData] = useState();
	const [displayMode, setDisplayMode] = useState(0);
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			fetchData("/forms.json").then((res) => setFormData(res));
			fetchData("/shoppingCart.json").then((res) => setCartData(res));
		}
		return () => {
			mounted = false;
		};
	}, []);
	const displayResult = (data, type) => {
		setResultData(data);
		setDisplayMode(type);
	};
	return (
		<div className={classes.Dashboard}>
			{formData &&
				!displayMode &&
				formData.map((element) => (
					<Element
						testid="test-resolved"
						key={element.key}
						clicked={() => displayResult(element, 1)}
						background={element.url}
						name={"Formularz " + element.name}
					/>
				))}
			{cartData &&
				!displayMode &&
				cartData.map((element) => (
					<Element
						key={element.key}
						clicked={() => displayResult(element, 2)}
						background={element.url}
						name={"Koszyk " + element.name}
					/>
				))}
			{displayMode === 1 && (
				<DisplayFormData clicked={() => setDisplayMode(0)} data={resultData} />
			)}
			{displayMode === 2 && (
				<DisplayCartData clicked={() => setDisplayMode(0)} data={resultData} />
			)}
		</div>
	);
};
export default Dashboard;
