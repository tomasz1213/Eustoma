import React,{useState,useEffect} from 'react';
import {useDispatch } from 'react-redux';
import classes from './Job.module.css';
import {uploadImage,removeFromFirebase,updateDataFirebase} from '../../../../../store/actions';
import {useSelector} from 'react-redux';

const Products = (props) => { 
    const [showWork,setWork] = useState([]);
    const auth = useSelector(state => state.auth.auth.idToken);

    useEffect(() =>{
        const arr = [];
        fetch('https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/ourwork.json')
        .then(response => response.json())
        .then(res => {
            for (const [key, value] of Object.entries(res)) {
                arr.push({...value,key});
            } 
            setWork(arr);
        })
    },[]);
    let [name,setName] = useState(props.editMode ? props.data.name : '');
    let [wedding,setWedding] = useState(props.editMode ? props.data.wedding : '');
    let [church,setChurch] = useState(props.editMode ? props.data.church : '');
    let [queue,setQueue] = useState(props.editMode ? props.data.queue : '');
    let [fotoArr,setFotoArr] = useState(props.data.url &&(props.editMode && [...props.data.url]));
    let [flowers,setFlowers] = useState(props.editMode ? props.data.flowers : '');
    let [photograph,setPhotogprah] = useState(props.editMode ? props.data.photograph : '');
    const dispatch = useDispatch();
    const uploader = () => {
        if(!props.editMode){
            dispatch(uploadImage("input_ourwork--photo",`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/ourwork.json?auth=${auth}`,
            {name:name,wedding:wedding,church:church,photograph:photograph,flowers:flowers,queue:queue}));
            props.clicked();
        }else if(props.editMode){
            dispatch(updateDataFirebase(`ourwork`,props.data.key,
            {name:name,wedding:wedding,church:church,flowers:flowers,photograph:photograph,queue:queue,url:fotoArr},"input_ourwork--photo"));
            props.clicked();
        }
    };
    const deleteProduct = () => {
        if(props.elLeft === 1){
            return alert('Nie można usunąć ostatniego elementu, dodaj kolejny i ponów próbę!');         
        }
        dispatch(removeFromFirebase(`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/ourwork/${props.data.key}.json?auth=${auth}`));
        props.clicked();
    };
    const handleInputs = (event) => {
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
            case 'input_ourwork--queue':
                setQueue(event.value);
                    break;
            case 'input_ourwork--photograph':
                setPhotogprah(event.value);
                    break;
            default:
        }     

    };
    const removeImage = (img) => {
            const filtredArr = fotoArr.filter(e => e !== img);
            setFotoArr(filtredArr);
    };
    const closeModal = () => {
        props.clicked();
    };
    return (
        <>
        <div  className={classes.InputLabel}>
                {props.editMode && <p style={{fontSize:'12px',color:'grey'}}>Nazwa realizacji:</p>}
                <input className={classes.Input} placeholder="Nazwa realizacji" value={name} onChange={event => handleInputs(event.target)} type="text" id="input_ourwork--name"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
                {props.editMode && <p style={{fontSize:'12px',color:'grey'}}>Miejsce wesela:</p>}
                <input type="text" placeholder="Miejsce wesela" value={wedding} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--wedding"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
                {props.editMode && <p style={{fontSize:'12px',color:'grey'}}>Miejsce ślubu:</p>}
                <input type="text" placeholder="Miejsce ślubu" value={church} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--church"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
                {props.editMode && <p style={{fontSize:'12px',color:'grey'}}>Kwiaty i dekoracje:</p>}
                <input  placeholder="Kwiaty i dekoracje" className={classes.Input} value={flowers} onChange={event => handleInputs(event.target)} type="text" id="input_ourwork--flowers"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} id='PRODUCT_ERROR'></p>
                {props.editMode &&  <p style={{fontSize:'12px',color:'grey'}}>Fotograf:</p>}
                <input type="text" placeholder="Fotograf" value={photograph} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--photograph"></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
                {props.editMode && <p style={{fontSize:'12px',color:'grey'}}>Nr kolejności wyświetlania:</p>}
                <select type="text" placeholder="Numer kolejki" value={queue} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--queue">
                <option value="">--Proszę wybrać nr kolejności wyświetlania--</option>
                    {showWork.map((el,i) => <option key={el.key}>{i}</option>)}
                </select>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} ></p>
                <input className={classes.FotoInput} type="file" id="input_ourwork--photo" multiple></input>
                <div className={classes.Buttons}>
                    {fotoArr && props.editMode && fotoArr.map((img,i) => <img className={classes.Image} onClick={() => removeImage(img)} key={i} alt='foto' src={img}></img>)}
                </div>
                <div className={classes.Buttons}>
                    <button style={{top:'10px'}} onClick={() => document.getElementById('input_ourwork--photo').click()} className={classes.Button}>Dodaj Zdjęcia</button>
                    <button style={{top:'10px'}} className={classes.Button} onClick={()=> uploader()}>Wyślij</button>
                    {props.editMode && <button style={{top:'10px',backgroundColor:'#6f1322'}} className={classes.Button} onClick={()=> deleteProduct()}>Usuń</button>}
                </div>
        </div>
        <span onClick={closeModal} className={classes.Close}><i className="icon-cancel-1"></i></span>
        </>
    );
};

export default Products;