import React,{useEffect,useState} from 'react';
import {useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import axios from '../../../../../AxiosConfig';
import classes from './Product.module.css';
import {uploadImage,removeFromFirebase,updateDataFirebase} from '../../../../../store/actions';

const Products = (props) => {
    const [showCategories,setCategories] = useState([]);
    const auth = useSelector(state => state.auth.auth.idToken);
    useEffect(() =>{
        const arr = [];
        axios.get('/categories.json')
        .then(response => response.json())
        .then(res => {
            for (const [key, value] of Object.entries(res)) {
                arr.push({...value,key});
            } 
            setCategories(arr);
        })
    },[]);  
    let [name,setName] = useState(props.editMode ? props.data.name : '');
    let [desc,setDesc] = useState(props.editMode ? props.data.description : '');
    let [cleanPrize,setCleanPrize] = useState(props.editMode ? props.data.cleanPrize : '');
    let [prize,setPrize] = useState(props.editMode ? props.data.prize : '');
    let [itemsLeft,setItemsLeft] = useState(props.editMode ? props.data.items : '');
    let [fotoArr,setFotoArr] = useState(props.editMode && [...props.data.url]);
    let [itemProduct,setItemProduct] = useState(props.editMode ? props.data.itemCategory : '');
    const dispatch = useDispatch();
    const uploader = () => {
        if(!name || !desc || !prize){
            const err = document.getElementById('PRODUCT_ERROR');
            err.innerText = 'Proszę uzupełnić wszystkie pola!';
            return;
        }
        if(!props.editMode){
            dispatch(uploadImage("input_products--photo",`/products.json?auth=${auth}`,
            {name:name,cleanPrize:cleanPrize,description:desc,prize:prize,items:itemsLeft,itemCategory:itemProduct,date:`${new Date().toISOString().split('T')[0]}`}));
            props.clicked();
        }else if(props.editMode){
            dispatch(updateDataFirebase(`products`,props.data.key,
            {name:name,cleanPrize:cleanPrize,description:desc,prize:prize,items:itemsLeft,itemCategory:itemProduct,url:fotoArr,date:`${new Date().toISOString().split('T')[0]}`},"input_products--photo"));
            props.clicked();
        }
    };
    const deleteProduct = () => {
        if(props.elLeft === 1){
            return alert('Nie można usunąć ostatniego elementu, dodaj kolejny i ponów próbę!');         
        }
        dispatch(removeFromFirebase(`/products/${props.data.key}.json?auth=${auth}`));
        props.clicked();
    };
    const handleInputs = (event) => {
        if(event.value.length === 0){
            event.nextSibling.innerText = 'To pole nie może pozostać pustę';
            event.style.border = '1px solid red';
        }else {
            event.nextSibling.innerText = '';
            event.style.border = 'none';
        }
        switch(event.id){
            case 'input_products--name':
                setName(event.value);
                break;
            case 'input_products--description':
                setDesc(event.value);
                    break;
            case 'input_products--prize':
                setPrize(event.value);
                    break;  
            case 'input_products--cleanPrize':
                setCleanPrize(event.value);
                    break; 
           case 'input_products--items':
                setItemsLeft(event.value);
                    break;
            case 'input_products--category':
                setItemProduct(event.value);
                    break;
            default:
        } 
    };
    const deleteImage = (img) => {
        let answer = window.confirm("Usunąć zdjęcie?");
        if (answer) {
            const filtredArr = fotoArr.filter(e => e !== img);
            setFotoArr(filtredArr);
        }
    };
    const closeModal = () => {
        props.clicked();
    };
    return (
        <div  className={classes.InputLabel}>
            <span onClick={closeModal} className={classes.Close}><i className="icon-cancel-1"></i></span>
            <p>DODAJ ZDJĘCIA PRODUKTU:</p>
            <input className={classes.FotoInput} type="file" id="input_products--photo" multiple></input>
            <button style={{top:'-10px'}} onClick={() => document.getElementById('input_products--photo').click()} className={classes.Button}>Dodaj Zdjęcie</button>
            <div className={classes.Buttons}>
                {props.editMode && fotoArr.map((img,i) => <img className={classes.Image} onClick={() => deleteImage(img)} key={i} alt='foto' src={img}></img>)}
            </div>
            <p>DODAJ NAZWĘ PRODUKTU:</p>
            <input className={classes.Input} value={name} onChange={event => handleInputs(event.target)} type="text" id="input_products--name"></input>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
            <p>DODAJ OPIS PRODUKTU:</p>
            <textarea style={{height:'200px'}} value={desc} className={classes.Input} onChange={event => handleInputs(event.target)} type="text" id="input_products--description"></textarea>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
            <p>WYBIERZ KATEGORIĘ PRODUKTU:</p>
            <select value={itemProduct}  className={classes.Input} onChange={event => handleInputs(event.target)} name="input_products--category" id="input_products--category">
                <option value="">--Proszę wybrać opcję--</option>
                {showCategories.map(el => <option key={el.key}>{el.name}</option>)}
            </select>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
            <p>DODAJ ILOŚĆ SZTUK:</p>
            <input className={classes.Input} value={itemsLeft} onChange={event => handleInputs(event.target)} type="text" id="input_products--items"></input>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} id='PRODUCT_ERROR'></p>
            <p>DODAJ CENĘ CZYSZCZENIA:</p>
            <input className={classes.Input} value={cleanPrize} onChange={event => handleInputs(event.target)} type="text" id="input_products--cleanPrize"></input>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} id='PRODUCT_ERROR'></p>
            <p>DODAJ CENĘ PRODUKTU:</p>
            <input className={classes.Input} value={prize} onChange={event => handleInputs(event.target)} type="text" id="input_products--prize"></input>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} id='PRODUCT_ERROR'></p>
            <div className={classes.Buttons}>
                <button style={{top:'10px'}} className={classes.Button} onClick={()=> uploader()}>Wyślij</button>
                {props.editMode && <button style={{top:'10px',backgroundColor:'#6f1322'}} className={classes.Button} onClick={()=> deleteProduct()}>Usuń</button>}
            </div>
        </div>
    );
};

export default Products;