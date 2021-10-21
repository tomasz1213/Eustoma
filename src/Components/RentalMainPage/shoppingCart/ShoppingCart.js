import React,{useState} from 'react';
import classes from './ShoppingCart.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {addProduct, removeProduct} from '../../../store/basketSlice';

const ShoppingCart = (props) => {
    const dispatch = useDispatch();
    const [displayShoppingCart,setDisplayShoppingCart] = useState(false);
    const shoppingCar = useSelector(state => state.basket);
    const addToShoppingCart = (event,data) => {
        dispatch(addProduct({...data,productAmount:event}));
    };
    const removeFromShopppingCart = (key) => {
        dispatch(removeProduct(key));
    };
    return(
        <>
            {!displayShoppingCart && <div onClick={()=> setDisplayShoppingCart(true)} className={classes.ShoppingCart}>
                <svg className={classes.Image} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
                <div className={classes.CartNumberConteiner}><div className={classes.CartNumber}>{shoppingCar.value}</div></div>
            </div>}
            {displayShoppingCart && <div className={classes.ShoppingCartResult}></div>}
            {displayShoppingCart && <aside className={classes.SideBar}>
                <div className={classes.Top}><span onClick={()=> setDisplayShoppingCart(false)} className={classes.ButtonBack}>></span>Koszyk</div>
                <div className={classes.Products}>
                    {shoppingCar.cart&&shoppingCar.cart.map(el => {
                     return <div key={el.key} className={classes.Product}>
                         <div className={classes.ProductImage}><img src={el.url} alt={el.name}/></div>
                         <div className={classes.ProductInfo}>
                             <span className={classes.ProductName}>{el.name}</span>
                             <span className={classes.ProductPrize}>zł {el.prize}</span>
                             <input className={classes.ProductInput} onChange={(event)=> addToShoppingCart(event.target.value,el)} type="number" value={el.productAmount}></input>
                             <div className={classes.ProductDelete} onClick={()=>removeFromShopppingCart(el.key)}>X</div>
                         </div>
                     </div>   
                    })

                    }
                </div>
                <div className={classes.Bottom}>
                    <div className={classes.Prize}>Kwota Częściowa: <p style={{margin:'5px',fontSize:'23px'}}>{shoppingCar.totalPrize} zł</p>
                        <div className={classes.ButtonSubmit}>Wyślij zapytanie</div>
                    </div>
                </div>
            </aside>}
        </>
    )
};

export default ShoppingCart;