import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from './Categories.module.css';
import {uploadImage, removeFromFirebase} from '../../../../../store/actions';

const Categories = (props) => {
    const [categoryName,setCategoryName] = useState(props.editMode ? props.data.name : '');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.auth.idToken);
    const uploader = () => {
        if(!categoryName){
            const input = document.getElementById('input_categories--text');
            const err = document.getElementById('CATEGORIES_ERRORP');
            err.innerText = 'To pole nie może pozostać pustę';
            input.style.border = '1px solid red';
            return;
        }
        if(!props.editMode){
            dispatch(uploadImage("input_categories",`/categories.json?auth=${auth}`,{name:categoryName}));
            props.clicked();
        }
        else if(props.editMode){
            dispatch(uploadImage("input_categories",`/categories.json?auth=${auth}`,{name:categoryName}));
            dispatch(removeFromFirebase(`/categories/${props.data.key}.json?auth=${auth}`));
            props.clicked();
        }
    };
    const deleteCategory = () => {
        if(props.elLeft === 1){
            return alert('Nie można usunąć ostatniego elementu, dodaj kolejny i ponów próbę!');         
        }
        dispatch(removeFromFirebase(`/categories/${props.data.key}.json?auth=${auth}`));
        props.clicked();
    };
    const closeModal = () => {
        props.clicked();
    };

    return (
        <div  className={classes.InputLabel}>
                <span onClick={closeModal} className={classes.Close}><i className="icon-cancel-1"></i></span>
                <label >
                <p>DODAJ ZDJĘCIE KATEGORII:</p>
                <input className={classes.FotoInput} type="file" id="input_categories"></input>
                <button style={{top:'-10px'}} onClick={() => document.getElementById('input_categories').click()} className={classes.Button}>Dodaj Zdjęcie</button>
                {props.editMode && <img className={classes.Image} alt='foto' src={props.data.url}></img>}
                <p>DODAJ NAZWĘ KATEGORII:</p>
                <input className={classes.Input} value={categoryName} onChange={e => {
                    const input = document.getElementById('input_categories--text');
                    const err = document.getElementById('CATEGORIES_ERRORP');
                    input.style.border = '1px solid black';
                    err.innerText = '';
                    setCategoryName(e.target.value);
                }} type="text" id="input_categories--text" ></input>
                <p style={{color:'red',fontSize:'14px',padding:'2px'}} id='CATEGORIES_ERRORP'></p>
                <button style={{top:'10px'}} className={classes.Button} onClick={()=> uploader()}>Wyślij</button>
                {props.editMode && <button style={{top:'10px',backgroundColor:'#6f1322'}} className={classes.Button} onClick={()=> deleteCategory()}>Usuń</button>}
                </label>
        </div>
    );
};

export default Categories;