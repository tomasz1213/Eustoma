import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import classes from "./Offer.module.css";
import img1 from "../../img/offer1.webp";
import img2 from "../../img/offer2.webp";
import Element from "./Element/Element";
import Section4 from "../Home/Section4/Section4";

const offer = () => (
	<>
		<Menu />
		<div className={classes.Offer}>
			<div className={classes.Top}>
				<h2>Oferta</h2>
				<img alt="love" src={img1} />
				<img alt="table" src={img2} />
				<p>
					Poszukujesz odpowiedniej firmy, która zajmie się aranżacją Twojego
					przyjęcia? Doceniasz wyczucie stylu, profesjonalne podejście,
					doradztwo specjalistów, a to wszystko w przyjaznych warunkach i miłej
					atmosferze? Dobrze, że jesteś! Zadbamy o Twoją wizję, tak by
					wprowadzić ją w życie w każdym szczególe! Dostosujemy nasze usługi do
					Twoich potrzeb i stworzymy dla Ciebie indywidualną ofertę. Sprawdź na
					początek szczegóły poszczególnych usług, a następnie skontaktuj się z
					nami!
				</p>
			</div>
			<Element
				h1t="Dekoracja sali"
				prize="od 4000zł"
				h2t="Zadbamy dla Was o:"
				dataArr={[
					"kompozycje na stoły Gości",
					"kompozycje na stół Pary Młodej",
					"dekor za stołem Pary Młodej",
					"aranżacje przestrzenne",
					"świeczki i świeczniki, latarenki",
					"elementy ozdobne jak plastry drewna, kryształy",
					"kompozycje na bufety",
					"dekorację candy baru",
					"dekorację barku",
					"dekory na krzesła Gości",
					"dekory na krzesła Pary Młodej",
					"aranżacje florystyczne sali",
				]}
				url="https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/ofertaSala.json"
			>
				Czy pałac, czy stodoła, dla każdej lokalizacji mamy pomysł na aranżacje
				dekoratorsko-florystyczne.Wspólnie znajdziemy Wasz temat przewodni,
				zaproponujemy elementy dekoracji szyte na miarę Waszych oczekiwań,
				potrzeb i marzeń.{" "}
			</Element>
			<Element
				order="2"
				h1t="Dekoracja Kościoła"
				prize="od 1000zł"
				h2t="W skład elementów dekoracji kościoła wchodzą:"
				dataArr={[
					"kompozycja na ołtarz główny  kompozycje na ołtarz boczny  dekoracja klęcznika",
					"krzesła dla Pary Młodej i Świadków  dekoracja krzeseł Pary Młodej i Świadków",
					"dekoracja ławek",
					"dywan",
					"dekoracja przed wejściem do kościoła",
					"kompozycja przy parze młodej",
					"dekoracja na postumentach przy ławkach lub wejściu",
					"aleja z płatków róż",
					"świece i latarenki",
					"tabliczki z hymnem miłości",
					"tablica powitalna",
				]}
				url="https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/ofertaKosciol.json"
			>
				By ceremonia była nie tylko wyjątkowa, ale i piękna, zadbamy o dekoracje
				i kwiaty.
			</Element>
			<Element
				h1t="Dekoracja samochodu"
				h2t="Zadbamy o:"
				dataArr={[
					"dekoracje maski",
					"dekoracje klamek",
					"Tablice rejestracyjne",
				]}
				url="https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/ofertaSamochod.json"
			>
				Niezależnie od tego, czy zdecydujecie się pojechać do ślubu nowoczesnym,
				sportowym samochodem, amerykańskim klasykiem czy po prostu bryczką,
				przygotujemy odpowiednie dekoracje kwiatowe pasujące do pozostałych
				elementów Waszego przyjęcia.
			</Element>
			<Element
				order="2"
				h1t="bukiety ślubne i dodatki"
				h2t="OFERUJEMY: "
				dataArr={[
					"Bukiety ślubne",
					"butonierki",
					"korsarze",
					"wianki",
					"kwiaty do włosów",
				]}
				url="https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/ofertaSala.json"
			>
				Na Państwa życzenie przygotujemy bukiet Panny Młodej, bukiet Druhny oraz
				ozdobę do butonierki dla Pana Młodego.Tworzymy biżuterię z kwiatów
				(wianki, korsarze – ozdoby na rękę i inne).Zadbamy o to, aby nasze
				kompozycje doskonale dopełniały ślubne kreacje i w pełni z nimi
				współgrały.
			</Element>
			<h1>OFERUJEMY TAKŻE...</h1>
			<div className={classes.ElseOffer}>
				<div className={classes.Column}>
					<h2>PREZENTY DLA RODZICÓW</h2>
					<ul>
						<li>kosze kwiatowe i prezentowe</li>
						<li>flowerboxy</li>
						<li>skrzynki z kwiatami</li>
						<li>bukiety i kompozycje kwiatowe</li>
						<li>lasy w szkle</li>
						<li>ręcznie malowane filiżanki, kubki</li>
					</ul>
				</div>
				<div className={classes.Column}>
					<h2>AKCESORIA ŚLUBNE</h2>
					<ul>
						<li>Pudełeczka na obrączki</li>
						<li>kufry na pieniądze</li>
						<li>numerki stołów</li>
						<li>plan stołów</li>
						<li>menu weselne</li>
						<li>winietki i zawieszki na alkohol</li>
						<li>kubki i filiżanki w podziękowaniu</li>
					</ul>
					<h2>WYPOŻYCZALNIA</h2>
					<p>
						Chcesz sam wykonać dekorację ale brakuje Ci potrzebnych elementów
						dekoracyjnych ? Nie ma problemu ! Zajrzyj do naszej wypożyczalni.
					</p>
				</div>
			</div>
			<h1>CENNIK</h1>
			<p className={classes.Prizing}>
				Podane ceny są orientacyjne, gdyż całkowity koszt dekoracji zależny jest
				od ich wielkości, rodzaju kwiatów oraz ich dostępności, a także innych
				materiałów użytych do ich wykonania. To Wy ustalacie maksymalny budżet -
				podczas sporządzania kosztorysu i ogólnego zarysu dekoracji. Sami
				decydujecie, ile maksymalnie chcecie przeznaczyć na oprawę florystyczną.
				Kierujemy się wyłącznie zasadą{" "}
				<strong>minimalnego budżetu w wysokości 4000 zł</strong> brutto przy
				DEKORACJI SALI I FLORYSTYCE INDYWIDUALNEJ. Jeśli interesuje was również
				dekoracja kościoła, <strong>minimalny budżet wynosi 5000zł.</strong>
				Pamiętajcie jednak, że decydując się na budżet minimalny, nie jesteśmy w
				stanie zrealizować wszystkich Waszych pomysłów. Jeśli nie jesteście
				pewni czy dana dekoracja zmieści się w określonym budżecie - napiszcie
				do nas. chętnie przygotujemy indywidualną ofertę i wycenę ;)
			</p>
			<p className={classes.Prizing}>
				<strong>Zapisy na sezon 2022</strong> już ruszyły, dlatego jeśli
				jesteście zainteresowani współpracą z nami, nie czekajcie do ostatniej
				chwili.
			</p>
			<p className={classes.BorderedP}>
				Dojazd w obrębie 20km Pracowni jest w cenie, pozostałe 10ZŁ plus 1,50zl
				/km
			</p>
		</div>
		<Section4 style={{ padding: "0" }} background="rgb(243, 243, 243)" />
		<Footer />
	</>
);

export default offer;
