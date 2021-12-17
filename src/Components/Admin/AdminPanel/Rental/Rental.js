import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchData } from "../../../../utils";
import classes from "./Rental.module.css";
import Categories from "./Categories/Categories";
import Products from "./Product/Product";
import Element from "../UI/Element/Element";

const Rental = () => {
	const [displayMode, setDisplayMode] = useState(0);
	const [showLoadingSpinner, setLoadingSpinner] = useState(false);
	const [showCategories, setCategories] = useState([]);
	const [showProducts, setProducts] = useState([]);
	const [showSortedProducts, setSortedProducts] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [elementData, setELementData] = useState();
	const isDataLoding = useSelector((state) => state.slider.loading);
	let displayCategories = [];
	let displayProducts = [];
	useEffect(() => {
		fetchData("/categories.json").then((res) => {
			setCategories(res);
			setLoadingSpinner(true);
		});
		fetchData("/products.json").then((res) => {
			setProducts(res);
			setSortedProducts(res);
			setLoadingSpinner(true);
		});
	}, [isDataLoding]);
	const handleCategories = (target) => {
		if (target.value === "all") {
			setSortedProducts(showProducts);
		} else {
			const filtredArray = showProducts.filter(
				(el) => el.itemCategory === target.value
			);
			setSortedProducts(filtredArray);
		}
	};
	const updateData = (element, config) => {
		setELementData(element);
		setEditMode(true);
		setDisplayMode(config);
	};
	const showDataMode = (config) => {
		setEditMode(false);
		setDisplayMode(config);
	};
	switch (displayMode) {
		case 1:
			displayCategories = (
				<div className={classes.Modal}>
					<Categories
						elLeft={showCategories.length}
						editMode={editMode}
						data={elementData}
						clicked={() => setTimeout(() => setDisplayMode(0), 0)}
					/>
				</div>
			);
			break;
		case 2:
			displayCategories = (
				<div className={classes.Modal}>
					<Products
						elLeft={showProducts.length}
						editMode={editMode}
						data={elementData}
						clicked={() => setDisplayMode(0)}
					/>
				</div>
			);
			break;
		default:
			displayCategories = showCategories.map((el) => (
				<Element
					testid="test-Rental"
					clicked={() => updateData(el, 1)}
					name={el.name}
					key={el.key}
				/>
			));
			displayProducts = showSortedProducts.map((el) => (
				<Element
					clicked={() => updateData(el, 2)}
					name={el.name}
					key={el.key}
				/>
			));
	}
	return (
		<div className={classes.Rental}>
			<div className={classes.Buttons}>
				<label className={classes.Button}>
					<input onClick={() => showDataMode(1)} type="checkbox"></input>
					<p>DODAJ KATEGORIĘ</p>
				</label>
				<label className={classes.Button}>
					<input onClick={() => showDataMode(2)} type="checkbox"></input>
					<p>DODAJ PRODUKT</p>
				</label>
			</div>
			{!displayMode && <h2>Kategorie:</h2>}
			<div className={classes.Result}>
				{showLoadingSpinner ? (
					displayCategories
				) : (
					<div className={classes.ldsdualring}></div>
				)}
			</div>
			{!displayMode && (
				<h2>
					Produkty:{" "}
					<select
						className={classes.Input}
						onChange={(event) => handleCategories(event.target)}
						name="input_products--category"
						id="input_products--category"
					>
						<option value="all">--Wszystkie Produkty--</option>
						{showCategories.map((el) => (
							<option value={el.name} key={el.key}>
								{el.name}
							</option>
						))}
					</select>
				</h2>
			)}
			<div className={classes.Result}>
				{showLoadingSpinner ? (
					displayProducts
				) : (
					<div data-testid="Loading-spinner" className={classes.ldsdualring}></div>
				)}
			</div>
		</div>
	);
};

export default Rental;
