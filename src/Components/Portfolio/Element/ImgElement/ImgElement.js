import React, { useState } from "react";
import classes from "./ImgElement.module.css";
import Modal from "../../../../UI/Modal/Modal";

const ImgElement = (props) => {
	const [useShow, setShow] = useState(false);
	return (
		<>
			<img
				className={classes.ImgElement}
				alt="Portfolio IMG"
				src={props.src}
				onClick={() => setShow(true)}
			></img>
			<Modal
				clicked={() => setShow(false)}
				show={useShow}
				src={props.src}
				alt={props.alt}
				nextImg={props.nextImg}
			/>
		</>
	);
};

export default ImgElement;
