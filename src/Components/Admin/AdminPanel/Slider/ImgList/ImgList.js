import classes from './ImgList.module.css';
import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {uploadImage,removeFromFirebase} from '../../../../../store/actions';
import Element from '../../UI/Element/Element';

const ImgList = (props) => {
    const dispatch = useDispatch();
    let dataArray = [];
    const data = useSelector(state => state.slider.data.dataArr);
    const auth = useSelector(state => state.auth.auth.idToken);
    const isDataDownloaded = useSelector(state => state.slider.loading);
    let element = null;
    const uploader = () => {
        dispatch(uploadImage("input_slider",`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/${props.name}.json?auth=${auth}`));
    };
    const deleteElement = (elementId) => {
        let answer = window.confirm("Usunąć element?");
        if (answer) {
            if(dataArray.length === 1){
               return alert('Nie można usunąć ostatniego elementu, dodaj kolejny i ponów próbę!');
            }
            dispatch(removeFromFirebase(`https://study-49f96-default-rtdb.europe-west1.firebasedatabase.app/sliders/${props.name}/${elementId}.json?auth=${auth}`,elementId));
        }
        else {
            
        }    
    };
    const displayImgList = () => {
        if(data.length > 1){
            const filtredData = data.find(el => el.key === props.name);
            console.log(dataArray);
            for (const [key, value] of Object.entries(filtredData)) {
                const obj = {value, key};
                dataArray.push(obj);
            }  
            element = dataArray.map(el => <Element clicked={()=> deleteElement(el.key)} key={el.key} name={el.value.name} background={el.value.url}/>);
        }
    };
    if(!isDataDownloaded){
        displayImgList();
    }
    return(
        <div className={classes.ImgList}>
            <label className={classes.Button} >
                <input onChange={uploader} type="file" id="input_slider" multiple></input>
                <p>DODAJ ZDJĘCIE</p>
            </label>
            {!isDataDownloaded ? element : <div className={classes.ldsdualring}></div>}
        </div>
    );
};

export default ImgList;