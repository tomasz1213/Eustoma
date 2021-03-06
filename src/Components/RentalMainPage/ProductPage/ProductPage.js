import React, { useState } from "react";
import classes from "./ProductPage.module.css";
import Menu from "../../Menu/Menu";
import Footer from "../../Footer/Footer";
import Modal from "../../../UI/Modal/Modal";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../store/basketSlice";

const ProductPage = (props) => {
	const data = useSelector((state) => state.slider.data.dataArr);
	const basket = useSelector((state) => state.basket.cart);
	const dispatch = useDispatch();
	const basketProductAmount = basket.find(
		(product) => product.key === data.key
	);
	const [productAmount, setProductAmount] = useState(
		basketProductAmount ? basketProductAmount.productAmount : 1
	);
	const [prize, setPrize] = useState(data.prize);
	const [displayImg, setDisplayImg] = useState(data.url);
	const [showPhoto, setShowPhoto] = useState(false);
	let isMobile = false;
	if (window.innerWidth <= 765) isMobile = true;

	const selectPrize = (type) => {
		switch (type) {
			case "false":
				return setPrize(Number(data.prize) + Number(data.cleanPrize));
			default:
				setPrize(data.prize);
		}
	};
	const addToShoppingCart = () => {
		dispatch(addProduct({ ...data, productAmount }));
	};
	return (
		<>
			<Menu />
			<ShoppingCart />
			{data.url ? (
				<Modal
					clicked={() => setShowPhoto(false)}
					show={showPhoto}
					src={displayImg}
					alt="ProductPhoto"
					nextImg={{
						arr: data.url,
						currIndex: data.url.findIndex((el) => el === showPhoto),
					}}
				/>
			) : (
				window.location.assign("/wypozyczalnia")
			)}
			<div className={classes.Conteiner}>
				<section className={classes.LeftSide}>
					<img
						onClick={() => setShowPhoto(true)}
						src={displayImg}
						alt="Product Poto"
					></img>
					<div>
						{data.url &&
							data.url.map((el) => (
								<img
									className={classes.MiniImg}
									onClick={() => setDisplayImg(el)}
									src={el}
									key={el}
									alt="Product Poto"
								></img>
							))}
					</div>
					{!isMobile && (
						<div className={classes.Description}>{data.description}</div>
					)}
				</section>
				<section className={classes.RightSide}>
					<h1 className={classes.Title}>{data.name}</h1>
					{isMobile && (
						<div className={classes.Description}>{data.description}</div>
					)}
					<div style={{ paddingTop: "23px", fontSize: "18px" }}>z?? {prize}</div>
					{data.cleanPrize && data.cleanPrize != 0 && (
						<div>
							<p>Czyszczenie</p>
							<select
								className={classes.SelectBox}
								onChange={(event) => selectPrize(event.target.value)}
							>
								<option value={true}>oddam produkt wyczyszczcony</option>
								<option value={false}>oddam produkt bez czyszczenia</option>
							</select>
						</div>
					)}
					<ul style={{ listStyle: "none", paddingLeft: "0" }}>
						<li>
							<label>ilo????:</label>
						</li>
						<li>
							<input
								value={productAmount}
								onChange={(event) => {
									if (event.target.value < 0) event.target.value = 1;
									setProductAmount(event.target.value);
								}}
								className={classes.Input}
								type="number"
							></input>
						</li>
					</ul>
					<div onClick={addToShoppingCart} className={classes.ButtonSubmit}>
						Dodaj do koszyka
					</div>
					<p>TRANSPORT</p>
					<ul
						style={{ borderBottom: "1px solid black", paddingBottom: "20px" }}
					>
						<li>Odbi??r osobisty w naszej Pracowni</li>
					</ul>
					<p>REGULAMIN</p>
					<ul
						style={{ borderBottom: "1px solid black", paddingBottom: "20px" }}
					>
						<li>pr??cz op??aty za wypo??yczenie pobierana jest kaucja zwrotna</li>
						<li>
							wypo??yczalnia dzia??a na terenie ca??ej Polski ??? na Pa??stwa ??yczenie
							wysy??amy asortyment w dowolne miejsce
						</li>
						<li>
							przy rezerwacji asortymentu podpisujemy umow??, kt??ra jest
							gwarancj?? terminu (umow?? otrzymuj?? Pa??stwo mailem w ci??gu 3 dni od
							rezerwacji)
						</li>
						<li>
							po podpisaniu umowy prosimy o wp??acenie zadatku w kwocie zgodniej
							z zapisem w umowie
						</li>
						<li>
							pozosta???? nale??no???? + kaucj?? zwrotn?? wp??acaj?? Pa??stwo przed
							wysy??k??
						</li>
						<li>kaucja zwracana jest przy zwrocie towaru</li>
						<li>
							wysy??k?? otrzymuj?? Pa??stwo w czwartek lub pi??tek do godz. 12:00
							poprzedzaj??cy uroczysto????
						</li>
						<li>
							zwrot asortymentu do wtorku po uroczysto??ci, ewentualnie do ??rody
							po wcze??niejszym uzgodnieniu
						</li>
						<li>koszty wysy??ki i zwrotu le???? po stronie klienta</li>
						<li>mo??liwy odbi??r osobisty w Nowym S??czu</li>
						<li>
							asortyment otrzymuj?? Pa??stwo czysty, wyprasowany ??? przygotowany do
							u??ycia
						</li>
						<li>
							zwracany towar musi by?? w stanie niezmienionym (czyste, wyprane,
							wyprasowane)
						</li>
						<li>ewentualne zniszczenia pokrywane s?? z kaucji</li>
						<li>
							istnieje mo??liwo???? zwrotu niewyczyszczonych produkt??w, doliczana
							jest w??wczas op??ata za czyszczenie/pranie: 10 z??/szt
						</li>
						<li>pami??taj, aby oznaczy?? opcj?? czyszczenia</li>
					</ul>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ProductPage;
