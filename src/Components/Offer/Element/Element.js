import React, { useEffect, useState } from "react";
import classes from "./Element.module.css";
import axios from "axios";

const Element = (props) => {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [images, setImages] = useState([]);
	const [imgSrc, setImgSrc] = useState(images[1]);
	useEffect(() => {
		const arr = [];
		axios
			.get(props.url)
			.then((res) => {
				for (const [key, value] of Object.entries(res.data)) {
					arr.push({ ...value, key });
				}
			})
			.then(() => {
				const elArr = [];
				arr.forEach((el) => {
					if (el.url !== undefined) {
						elArr.push(el.url);
					}
				});
				setImages(elArr);
				setImgSrc(elArr[0]);
			});
	}, [props.url]);
	useEffect(() => {
		const interv = setInterval(() => {
			if (photoIndex <= images.length - 1) {
				setImgSrc(images[photoIndex]);
				setPhotoIndex(photoIndex + 1);
			} else {
				setPhotoIndex(0);
			}
		}, 3000);
		return () => clearInterval(interv);
	}, [images, photoIndex]);
	return (
		<div className={classes.Element}>
			<div style={{ order: props.order }} className={classes.Text}>
				<h1>{props.h1t}</h1>
				<p>{props.prize}</p>
				<p>{props.children}</p>
				<h2>{props.h2t}</h2>
				<ul className={classes.List}>
					{props.dataArr.map((element) => (
						<li key={element}>{element}</li>
					))}
				</ul>
			</div>
			<div className={classes.Slider}>
				<img src={imgSrc} alt="weddingdecoration"></img>
			</div>
		</div>
	);
};

export default Element;
