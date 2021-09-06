import React from 'react';
import classes from './Element.module.css';

const Element = (props) => {
    // const [display, setDisplay] = useState(false);
    const openElement = (id) => {
        props.clicked();
    };

    return (
        <div onClick={() => openElement(props.name)} className={classes.Element} style={{backgroundImage:`url(${props.background})`}}>
            <h3>{props.name}</h3>
        </div>
    );
};

export default Element;