import React,{useState} from 'react';
import classes from './ProductPage.module.css';
import Menu from '../../Menu/Menu';
import Footer from '../../Footer/Footer';
import Modal from '../../../UI/Modal/Modal';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import {useSelector, useDispatch} from 'react-redux';
import {addProduct} from '../../../store/basketSlice';

const ProductPage = (props) => {
    const data = useSelector(state => state.slider.data.dataArr);
    const basket = useSelector(state => state.basket.cart);
    const dispatch = useDispatch();
    const basketProductAmount = basket.find(product => product.key === data.key);
    const [productAmount,setProductAmount] = useState(basketProductAmount?basketProductAmount.productAmount:1);
    const [prize,setPrize] = useState(data.prize);
    const [displayImg,setDisplayImg] = useState(data.url);
    const [showPhoto, setShowPhoto] = useState(false);
    let isMobile = false;
    if(window.innerWidth <= 765) isMobile = true;

    const selectPrize = (type) => {
        switch(type) {
            case 'false':
                return setPrize(Number(data.prize) + Number(data.cleanPrize));
            default:
                setPrize(data.prize);
        }
    };
    const addToShoppingCart = () => {
        dispatch(addProduct({...data,productAmount}));
    };
    return (
        <>
            <Menu/>
            <ShoppingCart/>
            {data.url ? <Modal clicked={()=> setShowPhoto(false)} show={showPhoto} src={displayImg} alt='ProductPhoto' 
                        nextImg={{arr: data.url,currIndex: data.url.findIndex(el => el === showPhoto)}}/>: window.location.assign('/wypozyczalnia')}
            <div className={classes.Conteiner}>
                <section className={classes.LeftSide}>
                    <img onClick={()=> setShowPhoto(true)} src={displayImg} alt='Product Poto'></img>
                    <div>{
                       data.url && data.url.map(el => <img className={classes.MiniImg} onClick={()=> setDisplayImg(el)} src={el} key={el} alt='Product Poto'></img>)
                    }</div>
                    {!isMobile && <div className={classes.Description} >{data.description}</div>}
                </section>
                <section className={classes.RightSide}>
                    <h1 className={classes.Title}>{data.name}</h1>
                    {isMobile &&  <div className={classes.Description} >{data.description}</div>}
                    <div style={{paddingTop:'23px',fontSize:'18px'}}>zł {prize}</div>
                    {data.cleanPrize && <div>
                        <p>Czyszczenie</p>
                        <select className={classes.SelectBox} onChange={(event)=>selectPrize(event.target.value)}>
                            <option value={true}>oddam produkt wyczyszczcony</option>
                            <option value={false}>oddam produkt bez czyszczenia</option>
                        </select>
                    </div>}
                    <ul style={{listStyle:'none',paddingLeft:'0'}}>
                        <li><label>ilość:</label></li>
                        <li><input value={productAmount} onChange={(event)=> {
                            if(event.target.value < 0)event.target.value = 1;
                            setProductAmount(event.target.value)
                            }} className={classes.Input} type="number" ></input></li>
                    </ul>
                    <div onClick={addToShoppingCart} className={classes.ButtonSubmit}>Dodaj do koszyka</div>
                    <p>TRANSPORT</p>
                    <ul style={{borderBottom:'1px solid black',paddingBottom:'20px'}}>
                        <li>Odbiór osobisty w naszej Pracowni</li>
                    </ul>
                    <p>REGULAMIN</p>
                    <ul style={{borderBottom:'1px solid black',paddingBottom:'20px'}}>
                        <li>prócz opłaty za wypożyczenie pobierana jest kaucja zwrotna</li>
                        <li>wypożyczalnia działa na terenie całej Polski – na Państwa życzenie wysyłamy asortyment w dowolne miejsce</li>
                        <li>przy rezerwacji asortymentu podpisujemy umowę, która jest gwarancją terminu (umowę otrzymują Państwo mailem w ciągu 3 dni od rezerwacji)</li>
                        <li>po podpisaniu umowy prosimy o wpłacenie zadatku w kwocie zgodniej z zapisem w umowie</li>
                        <li>pozostałą należność + kaucję zwrotną wpłacają Państwo przed wysyłką</li>
                        <li>kaucja zwracana jest przy zwrocie towaru</li>
                        <li>wysyłkę otrzymują Państwo w czwartek lub piątek do godz. 12:00 poprzedzający uroczystość</li>
                        <li>zwrot asortymentu do wtorku po uroczystości, ewentualnie do środy po wcześniejszym uzgodnieniu</li>
                        <li>koszty wysyłki i zwrotu leżą po stronie klienta</li>
                        <li>możliwy odbiór osobisty w Nowym Sączu</li>
                        <li>asortyment otrzymują Państwo czysty, wyprasowany – przygotowany do użycia</li>
                        <li>zwracany towar musi być w stanie niezmienionym (czyste, wyprane, wyprasowane)</li>
                        <li>ewentualne zniszczenia pokrywane są z kaucji</li>
                        <li>istnieje możliwość zwrotu niewyczyszczonych produktów, doliczana jest wówczas opłata za czyszczenie/pranie: 10 zł/szt</li>
                        <li>pamiętaj, aby oznaczyć opcję czyszczenia</li>
                    </ul>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default ProductPage;