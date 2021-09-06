import React,{useState} from 'react';
import {useDispatch } from 'react-redux';
import classes from './Job.module.css';
import {uploadImage,removeFromFirebase,updateDataFirebase} from '../../../../../store/actions';

const Products = (props) => { 
    let [name,setName] = useState(props.catType ? props.data[1].name : '');
    let [wedding,setWedding] = useState(props.catType ? props.data[1].wedding : '');
    let [church,setChurch] = useState(props.catType ? props.data[1].church : '');
    let [fotoArr,setFotoArr] = useState(props.catType && [...props.data[1].url]);
    let [flowers,setFlowers] = useState(props.catType ? props.data[1].flowers : '');
    let [photograph,setPhotogprah] = useState(props.catType ? props.data[1].photograph : '');
    const dispatch = useDispatch();
    const uploader = () => {
        if(!name || !wedding || !church || !flowers|| !photograph){
            const err = document.getElementById('PRODUCT_ERROR');
            err.innerText = 'Proszę uzupełnić wszystkie pola!';
            return;
        }
        if(!props.catType){
            dispatch(uploadImage("input_ourwork--photo",`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/ourwork.json`,
            {name:name,wedding:wedding,church:church,photograph:photograph,flowers:flowers}));
            props.clicked();
        }else if(props.catType){
            dispatch(updateDataFirebase(`ourwork`,props.data[0],
            {name:name,wedding:wedding,church:church,flowers:flowers,photograph:photograph,url:fotoArr},"input_ourwork--photo"));
            props.clicked();
        }
    };
    const deleteProduct = () => {
        if(props.elLeft === 1){
            return alert('Nie można usunąć ostatniego elementu, dodaj kolejny i ponów próbę!');         
        }
        dispatch(removeFromFirebase(`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/ourwork/${props.data[0]}.json`));
        props.clicked();
    };
    const handleInputs = (event) => {
        if(event.value.length === 0){
            event.nextSibling.innerText = 'To pole nie może pozostać pustę';
            event.style.border = '1px solid red';
        }else {
            event.nextSibling.innerText = '';
            event.style.border = '1px solid #dbdada';
        }
        switch(event.id){
            case 'input_ourwork--name':
                setName(event.value);
                break;
            case 'input_ourwork--wedding':
                setWedding(event.value);
                    break;
            case 'input_ourwork--church':
                setChurch(event.value);
                    break;
            case 'input_ourwork--flowers':
                setFlowers(event.value);
                    break;
            case 'input_ourwork--photograph':
                setPhotogprah(event.value);
                    break;
            default:
        }     

    };
    const handleImages = (img) => {
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
        <>
        <div  className={classes.InputLabel}>
                {props.catType && <p style={{fontSize:'12px',color:'grey'}}>Nazwa realizacji:</p>}
                <input className={classes.Input} placeholder="Nazwa realizacji" value={name} onChange={event => handleInputs(event.target)} type="text" id="input_ourwork--name"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
                {props.catType && <p style={{fontSize:'12px',color:'grey'}}>Miejsce wesela::</p>}
                <input type="text" placeholder="Miejsce wesela" value={wedding} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--wedding"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
                {props.catType && <p style={{fontSize:'12px',color:'grey'}}>Miejsce ślubu:</p>}
                <input type="text" placeholder="Miejsce ślubu" value={church} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--church"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
                {props.catType && <p style={{fontSize:'12px',color:'grey'}}>Kwiaty i dekoracje:</p>}
                <input  placeholder="Kwiaty i dekoracje" className={classes.Input} value={flowers} onChange={event => handleInputs(event.target)} type="text" id="input_ourwork--flowers"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} id='PRODUCT_ERROR'></p>
                {props.catType &&  <p style={{fontSize:'12px',color:'grey'}}>Fotograf:</p>}
                <input type="text" placeholder="Fotograf" value={photograph} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--photograph"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
                <input className={classes.FotoInput} type="file" id="input_ourwork--photo" multiple></input>
                <div className={classes.Buttons}>
                    {props.catType && fotoArr.map((img,i) => <img className={classes.Image} onClick={() => handleImages(img)} key={i} alt='foto' src={img}></img>)}
                </div>
                <div className={classes.Buttons}>
                    <button style={{top:'10px'}} onClick={() => document.getElementById('input_ourwork--photo').click()} className={classes.Button}>Dodaj Zdjęcia</button>
                    <button style={{top:'10px'}} className={classes.Button} onClick={()=> uploader()}>Wyślij</button>
                    {props.catType && <button style={{top:'10px',backgroundColor:'#6f1322'}} className={classes.Button} onClick={()=> deleteProduct()}>Usuń</button>}
                </div>
        </div>
        <span onClick={closeModal} className={classes.Close}><i className="icon-cancel-1"></i></span>
        </>
    );
};

export default Products;