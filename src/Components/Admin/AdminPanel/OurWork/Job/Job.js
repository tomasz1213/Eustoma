import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {uploadImage,removeFromFirebase,updateDataFirebase} from '../../../../../store/actions';
import axios from '../../../../../AxiosConfig';
import classes from './Job.module.css';

const Products = (props) => { 
    const [fetchedData,setFetchedData] = useState([]);
    const auth = useSelector(state => state.auth.auth.idToken);
    useEffect(() =>{
        const arr = [];
        axios.get('/ourwork.json')
        .then(res => {
            for (const [key, value] of Object.entries(res.data)) {
                arr.push({...value,key});
            } 
            setFetchedData(arr);
        })
    },[]);
    let [inputData,setInputData] = useState({name:props.editMode ? props.data.name : '',
        wedding:props.editMode ? props.data.wedding : '',church:props.editMode ? props.data.church : '',
        photograph:props.editMode ? props.data.photograph : '',flowers:props.editMode ? props.data.flowers : '',queue:props.editMode ? props.data.queue : ''});
    let [fotoArr,setFotoArr] = useState(props.editMode ? props.data.url && [...props.data.url]: []);
    const dispatch = useDispatch();
    const uploader = () => {
        if(!props.editMode){
            dispatch(uploadImage("input_ourwork--photo",`/ourwork.json?auth=${auth}`,
            {...inputData}));
            props.clicked();
        }else if(props.editMode){
            dispatch(updateDataFirebase(`ourwork`,props.data.key,
            {...inputData,url:fotoArr},"input_ourwork--photo"));
            props.clicked();
        }
    };
    const deleteProduct = () => {
        if(props.elLeft === 1){
            return alert('Nie można usunąć ostatniego elementu, dodaj kolejny i ponów próbę!');         
        }
        dispatch(removeFromFirebase(`/ourwork/${props.data.key}.json?auth=${auth}`));
        props.clicked();
    };
    
    const handleInputs = (event) => {
        const header = event.id.split('--');
        setInputData({...inputData,[header[1]]:event.value});
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
                <p style={{fontSize:'12px',color:'grey',margin:'2px'}}>Nazwa realizacji:</p>
                <input className={classes.Input} value={inputData.name} onChange={event => handleInputs(event.target)} type="text" id="input_ourwork--name"></input>
                <p style={{fontSize:'12px',color:'grey',margin:'2px'}}>Miejsce wesela:</p>
                <input type="text" value={inputData.wedding} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--wedding"></input>
                <p style={{fontSize:'12px',color:'grey',margin:'2px'}}>Miejsce ślubu:</p>
                <input type="text" value={inputData.church} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--church"></input>
                <p style={{fontSize:'12px',color:'grey',margin:'2px'}}>Kwiaty i dekoracje:</p>
                <input  className={classes.Input} value={inputData.flowers} onChange={event => handleInputs(event.target)} type="text" id="input_ourwork--flowers"></input>
                <p style={{fontSize:'12px',color:'grey',margin:'2px'}}>Fotograf:</p>
                <input type="text" value={inputData.photograph} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--photograph"></input>
                <p style={{fontSize:'12px',color:'grey',margin:'2px'}}>Nr kolejności wyświetlania:</p>
                <select type="text" value={inputData.queue} className={classes.Input} onChange={event => handleInputs(event.target)}id="input_ourwork--queue">
                <option value="">--Proszę wybrać nr kolejności wyświetlania--</option>
                    {fetchedData.map((el,i) => <option key={el.key}>{i}</option>)}
                </select>
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