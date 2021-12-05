import React from "react";
import classes from "./DisplayData.module.css";
import { useDispatch } from "react-redux";
import { removeFromFirebase } from "../../../../../store/actions";

const DisplayData = (props) => {
	const dispatch = useDispatch();
	const deleteForm = () => {
		dispatch(
			removeFromFirebase(
				`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/forms/${props.data.key}.json`
			)
		);
		props.clicked();
	};
	return (
		<div className={classes.DisplayData}>
			<span onClick={() => props.clicked()} className={classes.Close}>
				<i className="icon-cancel-1"></i>
			</span>
			<div className={classes.Left}>
				<p>
					<strong>Imię:</strong> {props.data.name}
				</p>
				<p>
					<strong>Nazwisko:</strong> {props.data.surname}
				</p>
				<p>
					<strong>Adres e-mail:</strong> {props.data.email}
				</p>
				<p>
					<strong>Telefon:</strong> {props.data.tel}
				</p>
				<p>
					<strong>Data ślubu:</strong> {props.data.date}
				</p>
				<p>
					<strong>Miejsce ślubu:</strong> {props.data.church}
				</p>
				<p>
					<strong>Miejsce wesela:</strong> {props.data.weddinPlace}
				</p>
				<p>
					<strong>Planowana liczba gości:</strong> {props.data.guests}
				</p>
				<p>
					<strong>Kształt stołów:</strong> {props.data.table}
				</p>
				<p>
					<strong>Budżet:</strong> {props.data.budget}
				</p>
				<p>
					<strong>Opis:</strong> {props.data.desc}
				</p>
				<p>
					<strong>Pintrest:</strong> {props.data.pintrest}
				</p>
				<p>
					<strong>Fotograf:</strong> {props.data.photo}
				</p>
				<p>
					<strong>Komplet ślubny:</strong>{" "}
					{props.data.kompletSlubny &&
						props.data.kompletSlubny.map((el) => <li key={el.key}>{el}</li>)}
				</p>
				<p>
					<strong>Oprawa kwiatowa:</strong>{" "}
					{props.data.oprawaKwiatowa &&
						props.data.oprawaKwiatowa.map((el) => <li key={el.key}>{el}</li>)}
				</p>
				<p>
					<strong>Oprawa pozakiatowa:</strong>{" "}
					{props.data.oprawaPozaKwiatowa &&
						props.data.oprawaPozaKwiatowa.map((el) => (
							<li key={el.key}>{el}</li>
						))}
				</p>
				<p>
					<strong>Jak trafiliście:</strong>{" "}
					{props.data.jakTrafiliscie &&
						props.data.jakTrafiliscie.map((el) => <li key={el.key}>{el}</li>)}
				</p>
				<button
					style={{ top: "10px", backgroundColor: "#6f1322" }}
					className={classes.Button}
					onClick={deleteForm}
				>
					Usuń
				</button>
			</div>
			<div className={classes.Right}>
				<p>Fotografie:</p>
				{props.data.url &&
					[props.data.url].map((el) => (
						<img className={classes.Image} key={el.key} src={el} alt={el}></img>
					))}
			</div>
		</div>
	);
};

export default DisplayData;
