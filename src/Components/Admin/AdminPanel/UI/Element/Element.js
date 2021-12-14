import React from "react";
import classes from "./Element.module.css";

const Element = (props) => {
	// const [display, setDisplay] = useState(false);
	const openElement = (id) => {
		props.clicked();
	};

	return (
		<div
			data-testid={props.testid}
			onClick={() => openElement(props.name)}
			className={classes.Element}
			style={{ backgroundImage: `url(${props.background})` }}
		>
			<h3>{props.name}</h3>
		</div>
	);
};

export default Element;
