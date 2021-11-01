import React from 'react';
import classes from './DisplayData.module.css';
import {useDispatch } from 'react-redux';
import {removeFromFirebase} from '../../../../../store/actions';

const DisplayCartData = (props) => {
    const dispatch = useDispatch();
    const deleteForm = () => {
        dispatch(removeFromFirebase(`/shoppingCart/${props.data.key}.json`));
        props.clicked();
      };
    return(
        <div className={classes.DisplayData}>
            <span onClick={()=>props.clicked()} className={classes.Close}><i className="icon-cancel-1"></i></span>
            <div className={classes.Left}>
                <p><strong>Imię i Nazwisko:</strong> {props.data.name}</p>
                <p><strong>Adres e-mail:</strong> {props.data.email}</p>
                <p><strong>Telefon:</strong> {props.data.phone}</p>
                <p><strong>Data ślubu:</strong> {props.data.date}</p>
                <p><strong>Miejsce ślubu:</strong> {props.data.location}</p>
            <button style={{top:'10px',backgroundColor:'#6f1322'}} className={classes.Button} onClick={deleteForm}>Usuń</button>
            </div>
            <div className={classes.Right}>
                <p>Produkty:</p>
                {props.data.cart&&props.data.cart.map(el => {
                     return <div key={el.key} className={classes.Product}>
                         <div className={classes.ProductImage}><img src={el.url} alt={el.name}/></div>
                         <div className={classes.ProductInfo}>
                             <span className={classes.ProductName}>{el.name}</span>
                             <span className={classes.ProductPrize}>zł {el.prize}</span>
                             <span className={classes.ProductPrize}>ilość: {el.productAmount}</span>
                         </div>
                     </div>   
                    })}
            </div>
        </div>
    );
};

export default DisplayCartData;