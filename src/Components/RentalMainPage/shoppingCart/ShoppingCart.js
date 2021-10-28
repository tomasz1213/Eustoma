import React,{useState} from 'react';
import classes from './ShoppingCart.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {addProduct, removeProduct} from '../../../store/basketSlice';
import { uploadDataFirebase } from '../../../store/actions';

const ShoppingCart = (props) => {
    const dispatch = useDispatch();
    const [displayShoppingCart,setDisplayShoppingCart] = useState(false);
    const [displayModal,setDisplayModal] = useState(false);
    const [displayError,setDisplayError] = useState(false);
    const [modalDataHandler,setModalDataHandler] = useState({date:null,location:null,name:null,email:null,phone:null});
    const shoppingCar = useSelector(state => state.basket);
    const addToShoppingCart = (event,data) => {
        dispatch(addProduct({...data,productAmount:event}));
    };
    const removeFromShopppingCart = (key) => {
        dispatch(removeProduct(key));
    };
    const submitShoppingCart = () => {
        if(modalDataHandler.date && modalDataHandler.location && modalDataHandler.phone){
            dispatch(uploadDataFirebase('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/shoppingCart.json',{...modalDataHandler,cart:[...shoppingCar.cart]}));
            setDisplayModal(false);
            setDisplayError(false);
        }else return setDisplayError(true);
    };
    const handleInputs = (event,type) => {
        if(event.target.value.length < 1)event.target.style.backgroundColor = '#f08b8b';
        else{
            event.target.style.backgroundColor = 'white';
            setModalDataHandler({...modalDataHandler,[type]:event.target.value});
        };
    };
    return(
        <>
            {!displayShoppingCart && <div onClick={()=> setDisplayShoppingCart(true)} className={classes.ShoppingCart}>
                <svg className={classes.Image} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
                <div className={classes.CartNumberConteiner}><div className={classes.CartNumber}>{shoppingCar.value}</div></div>
            </div>}
            {displayShoppingCart && <div className={classes.ShoppingCartResult}></div>}
            {displayModal && <div className={classes.Modal}>
                <span onClick={() => setDisplayModal(false)} style={{position: 'absolute',right: '10px',cursor: 'pointer'}}>x</span>
                <label style={{margin:'5px'}}>Data ślubu:</label>
                <input onChange={(event)=> setModalDataHandler({...modalDataHandler,date:event.target.value})} type="date" className={classes.ModalInput}></input>
                <label style={{margin:'5px'}}>Miejsce ślubu:</label>    
                <input onChange={(event)=> handleInputs(event,'location')} type="text" className={classes.ModalInput}></input>
                <label style={{margin:'5px'}}>Imię i Nazwisko:</label>    
                <input onChange={(event)=> handleInputs(event,'name')} type="text" className={classes.ModalInput}></input>
                <label style={{margin:'5px'}}>E-mail:</label>    
                <input onChange={(event)=> handleInputs(event,'email')} type="email" className={classes.ModalInput}></input>
                <label style={{margin:'5px'}}>Telefon:</label>    
                <input onChange={(event)=> handleInputs(event,'phone')} type="tel" className={classes.ModalInput}></input>
                {displayError && <div style={{color:'red'}}>Proszę uzupełnić wszystkie pola.</div>}
                <div onClick={submitShoppingCart} className={classes.ModalSubmit}>Wyślij</div>
            </div>}
            {displayShoppingCart && <aside className={classes.SideBar}>
                <div className={classes.Top}><span onClick={()=> {setDisplayShoppingCart(false);setDisplayModal(false)}} className={classes.ButtonBack}>></span>Koszyk</div>
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
                    })}
                </div>
                <div className={classes.Bottom}>
                    <div className={classes.Prize}>Kwota Częściowa: <p style={{margin:'5px',fontSize:'23px'}}>{shoppingCar.totalPrize} zł</p>
                        <div onClick={()=> setDisplayModal(true)} className={classes.ButtonSubmit}>Wyślij zapytanie</div>
                    </div>
                </div>
            </aside>}
        </>
    )
};

export default ShoppingCart;