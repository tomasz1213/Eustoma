import React, { useEffect, useState } from "react";
import axios from "../../AxiosConfig";
import { NavLink } from "react-router-dom";
import { updateSuccess } from "../../store/actions";
import { useDispatch } from "react-redux";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import classes from "./RentalMain.module.css";
import img from "../../img/RENTAL.webp";
import RentalSlider from "./Slider/RenstalSlider/RentalSlider";
import Product from "./Slider/RenstalSlider/Product/Product";
import ShoppingCart from "./shoppingCart/ShoppingCart";

export const computeFreshDate = (date) => {
	if (date) {
		const today = new Date();
		const compareDate = new Date(date);
		const diffTime = Math.abs(today - compareDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		if (diffDays <= 30) {
			return true;
		} else return false;
	} else return false;
};
const RentalMain = (props) => {
	const [categories, setCategories] = useState();
	const [products, setProducts] = useState();
	const [elementsToDisplay, setElementsToDisplay] = useState(12);
	const [sortedProducts, setSortedProducts] = useState();
	const [displayProducts, setDisplayProducts] = useState(0);
	const dispatch = useDispatch();
	const fetchData = async (url) => {
		return await axios
			.get(url)
			.then((res) => {
				let data = [];
				for (const [key, value] of Object.entries(res.data)) {
					data.push({ ...value, key });
				}
				return Promise.resolve(data);
			})
			.catch((err) => Promise.reject(err));
	};
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			fetchData("/categories.json")
				.then((res) => setCategories(res))
				.catch((err) => console.error(err));
			fetchData("/products.json")
				.then((res) => {
					setProducts(res);
					setSortedProducts(res);
				})
				.catch((err) => console.error(err));
		}
		return () => {
			mounted = false;
		};
	}, []);
	const sendProductData = (data) => {
		dispatch(updateSuccess(data));
		window.scrollTo(0, 0);
	};

	const sortByCategory = (category) => {
		setTimeout(() => {
			const categoriesList = [
				...document.getElementsByClassName(`${classes.CategoriesLI}`),
			];
			const newCategory = products.filter((el) => el.itemCategory === category);
			const activeButton = categoriesList.find(
				(el) => el.outerText === category
			);

			categoriesList.forEach(
				(category) => (category.className = classes.CategoriesLI)
			);
			activeButton.className = `${classes.Active} ${classes.CategoriesLI}`;
			if (category === "Wszystkie") return setSortedProducts(products);
			setSortedProducts(newCategory);
		}, 0);
	};
	const sortProductsBy = (type) => {
		switch (type) {
			case "fresh": {
				const sortedArr = [...sortedProducts].sort(
					(a, b) => new Date(b.date) - new Date(a.date)
				);
				setSortedProducts(sortedArr);
				break;
			}
			case "nameA": {
				const sortedArr = [...sortedProducts].sort((a, b) =>
					a.name.localeCompare(b.name)
				);
				setSortedProducts(sortedArr);
				break;
			}
			case "nameZ": {
				const sortedArr = [...sortedProducts]
					.sort((a, b) => a.name.localeCompare(b.name))
					.reverse();
				setSortedProducts(sortedArr);
				break;
			}
			case "prize-": {
				const sortedArr = [...sortedProducts].sort(
					(a, b) => Number(a.prize) - Number(b.prize)
				);
				setSortedProducts(sortedArr);
				break;
			}
			case "prize+": {
				const sortedArr = [...sortedProducts]
					.sort((a, b) => Number(a.prize) - Number(b.prize))
					.reverse();
				setSortedProducts(sortedArr);
				break;
			}
			default:
		}
	};
	return (
		<>
			<Menu />
			<div
				className={classes.Top}
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.6)) , url(${img})`,
					backgroundSize: "cover",
				}}
			>
				<span className={`${classes.TopText} ${classes.TopText1}`}>
					WYPOŻYCZALNIA
				</span>
				<span className={`${classes.TopText} ${classes.TopText2}`}>
					DEKORACJI
				</span>
			</div>
			<span className={classes.Button} onClick={() => setDisplayProducts(1)}>
				WSZYSTKIE PRODUKTY
			</span>
			<ShoppingCart />
			{!displayProducts ? (
				<div>
					<div className={classes.Header}>Nowości</div>
					<RentalSlider sorted={true} />
					<div className={classes.Conteiner}>
						{categories &&
							categories.map((el, i) => (
								<div
									key={el.name + i}
									onClick={() => {
										setDisplayProducts(1);
										sortByCategory(el.name);
										window.scrollTo(0, 0);
									}}
									className={classes.Categories}
									style={{
										backgroundImage: `url(${el.url})`,
										backgroundSize: "cover",
									}}
								>
									<p key={el.name} className={classes.CatName}>
										{el.name}
									</p>
									<span key={el.name + el.name} className={classes.CatLink}>
										Zobacz pordukty &gt;
									</span>
								</div>
							))}
					</div>
				</div>
			) : (
				<div className={classes.Conteiner}>
					<div className={classes.CatMobile}>
						<span
							style={{
								fontSize: "24px",
								borderBottom: "1px solid #dee0e6",
								paddingBottom: "10px",
							}}
						>
							WYPOŻYCZALNIA
						</span>
						<p style={{ fontSize: "16px", paddingTop: "10px" }}>KATEGORIE</p>
						<ul className={classes.CategoriesList}>
							<li
								className={`${classes.Active} ${classes.CategoriesLI}`}
								onClick={() => sortByCategory("Wszystkie")}
							>
								Wszystkie
							</li>
							{categories.map((el) => (
								<li
									className={classes.CategoriesLI}
									onClick={() => sortByCategory(el.name)}
									key={el.name + el.name}
								>
									{el.name}
								</li>
							))}
						</ul>
						<div
							style={{
								width: "213.39px",
								height: "1px",
								borderBottom: "1px solid #dee0e6",
								marginLeft: "auto",
								marginRight: "auto",
							}}
						></div>
					</div>
					<div className={classes.Products}>
						<select
							onChange={(event) => sortProductsBy(event.target.value)}
							className={classes.Sorting}
						>
							<option>Sortuj według</option>
							<option value="fresh">Najnowsze</option>
							<option value="prize-">Cena (od najniższej)</option>
							<option value="prize+">Cena (od najwyższej)</option>
							<option value="nameA">Nazwa A-Z</option>
							<option value="nameZ">Nazwa Z-A</option>
						</select>
						<div className={classes.Results}>
							{[...sortedProducts]
								.slice(0, elementsToDisplay)
								.map((element, i) => (
									<NavLink key={element.key + i} to="/rental/product">
										<Product
											fat={true}
											type={false}
											fresh={computeFreshDate(element.date)}
											onClick={() => sendProductData(element)}
											key={element.key}
											src={element.url}
											alt="Slider2"
											data={element}
										/>
									</NavLink>
								))}
						</div>
						{sortedProducts.length > 12 && (
							<span
								className={classes.ButtonMore}
								onClick={() => setElementsToDisplay(elementsToDisplay + 12)}
							>
								Wyświetl więcej
							</span>
						)}
					</div>
				</div>
			)}
			<Footer />
		</>
	);
};

export default RentalMain;
