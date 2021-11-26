import React,{useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from '../../../../../AxiosConfig';
import classes from './Product.module.css';
import {uploadImage,removeFromFirebase,updateDataFirebase} from '../../../../../store/actions';

const Products = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.auth.idToken);
    const [showCategories,setCategories] = useState([]);
    const [fotoArr,setFotoArr] = useState(props.editMode && [...props.data.url]);
    const [inputData,setInputData] = useState({name:props.editMode ? props.data.name : '',
        description:props.editMode ? props.data.description : '',
        cleanPrize:props.editMode ? props.data.cleanPrize : 0,
        prize:props.editMode ? props.data.prize : '',
        items:props.editMode ? props.data.items : '',
        itemCategory:props.editMode ? props.data.itemCategory : ''
    });
    useEffect(() =>{
        const arr = [];
        axios.get('/categories.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                arr.push({...value,key});
            } 
            setCategories(arr);
        })
    },[]);  
    const uploader = () => {
        if(!inputData.name || !inputData.description || !inputData.prize){
            const err = document.getElementById('PRODUCT_ERROR');
            err.innerText = 'Proszę uzupełnić wszystkie pola!';
            return;
        }
        if(!props.editMode){
            dispatch(uploadImage("input_products--photo",`/products.json?auth=${auth}`,
            {...inputData,date:`${new Date().toISOString().split('T')[0]}`}));
            props.clicked();
        }else if(props.editMode){
            dispatch(updateDataFirebase(`products`,props.data.key,
            {...inputData,url:fotoArr,date:`${new Date().toISOString().split('T')[0]}`},"input_products--photo"));
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
        const header = event.id.split('--');
        setInputData({...inputData,[header[1]]:event.value});
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
            <input className={classes.Input} value={inputData.name} onChange={event => handleInputs(event.target)} type="text" id="input_products--name"></input>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
            <p>DODAJ OPIS PRODUKTU:</p>
            <textarea style={{height:'200px'}} value={inputData.description} className={classes.Input} onChange={event => handleInputs(event.target)} type="text" id="input_products--description"></textarea>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
            <p>WYBIERZ KATEGORIĘ PRODUKTU:</p>
            <select value={inputData.itemCategory}  className={classes.Input} onChange={event => handleInputs(event.target)} name="input_products--itemCategory" id="input_products--itemCategory">
                <option value="">--Proszę wybrać opcję--</option>
                {showCategories.map(el => <option key={el.key}>{el.name}</option>)}
            </select>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
            <p>DODAJ ILOŚĆ SZTUK:</p>
            <input className={classes.Input} value={inputData.items} onChange={event => handleInputs(event.target)} type="text" id="input_products--items"></input>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} id='PRODUCT_ERROR'></p>
            <p>DODAJ CENĘ CZYSZCZENIA:</p>
            <input className={classes.Input} value={inputData.cleanPrize} onChange={event => handleInputs(event.target)} type="text" id="input_products--cleanPrize"></input>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} id='PRODUCT_ERROR'></p>
            <p>DODAJ CENĘ PRODUKTU:</p>
            <input className={classes.Input} value={inputData.prize} onChange={event => handleInputs(event.target)} type="text" id="input_products--prize"></input>
            <p style={{color:'red',fontSize:'14px',padding:'2px'}} id='PRODUCT_ERROR'></p>
            <div className={classes.Buttons}>
                <button style={{top:'10px'}} className={classes.Button} onClick={()=> uploader()}>Wyślij</button>
                {props.editMode && <button style={{top:'10px',backgroundColor:'#6f1322'}} className={classes.Button} onClick={()=> deleteProduct()}>Usuń</button>}
            </div>
        </div>
    );
};

export default Products;